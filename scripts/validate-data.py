#!/usr/bin/env python3
"""Validează contractele: data/alimente-ro.json, data/translations/*.json, config/locales.json
și packages/calorii/test/vectors.json (recalculează vectorii din constante). Fără dependențe."""
import json, pathlib, re, sys
ROOT = pathlib.Path(__file__).resolve().parents[1]
errors, warnings = [], []
def err(m): errors.append(m)
def warn(m): warnings.append(m)
def load(rel):
    return json.loads((ROOT / rel).read_text(encoding="utf-8"))

# ---- alimente-ro ----
schema = load("data/schema/aliment.schema.json")
col = load("data/alimente-ro.json")
items = col.get("alimente")
if not isinstance(items, list):
    err("alimente-ro.json: `alimente` trebuie să fie listă")
    items = []
ids = set()
req = schema["required"]
allowed = set(schema["properties"].keys())
cat_enum = set(schema["properties"]["categorie"]["enum"])
prep_enum = set(schema["properties"]["stare_preparare"]["enum"])
src_tip = set(schema["properties"]["sursa"]["properties"]["tip"]["enum"])
src_lic = set(schema["properties"]["sursa"]["properties"]["licenta"]["enum"])
nutr_keys = set(schema["properties"]["la_100g"]["properties"].keys())
for i, a in enumerate(items):
    tag = f"alimente[{i}] ({a.get('id', '?')})"
    if not isinstance(a, dict):
        err(f"{tag}: nu e obiect"); continue
    for k in req:
        if k not in a: err(f"{tag}: lipsește `{k}`")
    for k in a:
        if k not in allowed: err(f"{tag}: câmp necunoscut `{k}`")
    _id = a.get("id", "")
    if not re.fullmatch(r"[a-z0-9]+(-[a-z0-9]+)*", _id or ""): err(f"{tag}: id invalid")
    if _id in ids: err(f"{tag}: id duplicat")
    ids.add(_id)
    nume = a.get("nume") or {}
    for k in ("ro", "en"):
        if not isinstance(nume.get(k), str) or len(nume.get(k, "")) < 2: err(f"{tag}: nume.{k} lipsă")
    if a.get("categorie") not in cat_enum: err(f"{tag}: categorie invalidă")
    if a.get("stare_preparare") not in prep_enum: err(f"{tag}: stare_preparare invalidă")
    if a.get("stare") not in ("verificat", "estimare"): err(f"{tag}: stare invalidă")
    n = a.get("la_100g") or {}
    for k in n:
        if k not in nutr_keys: err(f"{tag}: la_100g.{k} necunoscut")
    for k in ("kcal", "proteine_g", "carbohidrati_g", "grasimi_g", "fibre_g"):
        if k not in n: err(f"{tag}: la_100g.{k} lipsește (folosește null pentru lipsă)")
        elif n[k] is not None and (not isinstance(n[k], (int, float)) or isinstance(n[k], bool) or n[k] < 0):
            err(f"{tag}: la_100g.{k} trebuie număr ≥ 0 sau null")
    if all(isinstance(n.get(k), (int, float)) for k in ("kcal", "proteine_g", "carbohidrati_g", "grasimi_g")):
        calc = 4 * n["proteine_g"] + 4 * n["carbohidrati_g"] + 9 * n["grasimi_g"]
        if n["kcal"] > 0 and abs(calc - n["kcal"]) / n["kcal"] > 0.08:
            if not (a.get("note") or "").strip():
                err(f"{tag}: kcal={n['kcal']} vs 4/4/9={calc:.1f} (>8%) fără explicație în `note`")
            else:
                warn(f"{tag}: abatere 4/4/9 explicată în note")
    s = a.get("sursa") or {}
    for k in ("tip", "referinta", "licenta", "preluat_la"):
        if not s.get(k): err(f"{tag}: sursa.{k} lipsă")
    if s.get("tip") not in src_tip: err(f"{tag}: sursa.tip invalid")
    if s.get("licenta") not in src_lic: err(f"{tag}: sursa.licenta invalidă")
    if not re.fullmatch(r"\d{4}-\d{2}-\d{2}", str(s.get("preluat_la", ""))): err(f"{tag}: sursa.preluat_la nu e AAAA-LL-ZZ")
    if a.get("stare") == "estimare" and s.get("tip") not in ("reteta",) and s.get("licenta") != "calcul-propriu":
        warn(f"{tag}: estimare fără sursă de tip rețetă/calcul propriu; verifică")
    if s.get("tip") == "reteta" and a.get("stare") != "estimare": err(f"{tag}: rețetă → stare trebuie `estimare`")
    portii = a.get("portii")
    if not isinstance(portii, list): err(f"{tag}: portii trebuie listă (poate fi goală)")
    else:
        for p in portii:
            if not isinstance(p, dict) or not p.get("nume") or not isinstance(p.get("grame"), (int, float)) or p["grame"] <= 0:
                err(f"{tag}: porție invalidă {p}")
for tp in (ROOT / "data" / "translations").glob("*.json"):
    tr = json.loads(tp.read_text(encoding="utf-8"))
    if not isinstance(tr, dict): err(f"{tp.name}: trebuie obiect id → nume"); continue
    for k, v in tr.items():
        if k not in ids: err(f"{tp.name}: id necunoscut `{k}`")
        if not isinstance(v, str) or len(v) < 2: err(f"{tp.name}: nume invalid pentru `{k}`")

# ---- locales ----
loc = load("config/locales.json")
known = set(loc.get("locales", {}).keys())
for l in loc.get("activeLocales", []):
    if l not in known: err(f"locales: activ `{l}` fără definiție")
    elif loc["locales"][l].get("status") != "published": err(f"locales: activ `{l}` trebuie status published")
for l, d in loc.get("locales", {}).items():
    if d.get("status") not in ("planned", "in_review", "published"): err(f"locales: status invalid pentru `{l}`")
    if d.get("status") == "published" and l not in loc.get("activeLocales", []): err(f"locales: `{l}` published dar nu e activ")
if loc.get("defaultLocale") not in loc.get("activeLocales", []): err("locales: defaultLocale trebuie să fie activ")

# ---- vectors: recalcul din constante ----
vec = load("packages/calorii/test/vectors.json")
C = vec["constants"]; tol = vec["tolerance"]
def mifflin(sex, kg, cm, age):
    m = C["mifflinStJeor"]; return m["weight"]*kg + m["height"]*cm + m["age"]*age + m[sex]
def hb(sex, kg, cm, age):
    h = C["harrisBenedictRevised1984"][sex]; return h["base"] + h["weight"]*kg + h["height"]*cm + h["age"]*age
def katch(kg, fat):
    k = C["katchMcArdle"]; return k["base"] + k["leanMass"]*kg*(1 - fat/100)
def bmi_cat(v):
    for c in C["bmiCategories"]:
        if c["max"] is None or v < c["max"]: return c["category"]
def target(tdee, sex, kg, goal, rate):
    req = rate*C["kcalPerKgBodyFat"]/7; adj, wr = [], []
    if goal == "maintain": return dict(requestedDailyDelta=0, appliedDailyDelta=0, targetKcal=tdee, appliedRateKgPerWeek=0, adjustments=[], warnings=[], feasible=True)
    cap = C["capShareOfTdee"][goal]*tdee; delta = req
    if delta > cap: delta = cap; adj.append("capped_25pct" if goal == "lose" else "capped_15pct")
    floor = C["safeFloorKcal"][sex]
    if goal == "lose":
        t = tdee - delta
        if t < floor:
            if floor >= tdee:
                return dict(requestedDailyDelta=req, appliedDailyDelta=None, targetKcal=None, appliedRateKgPerWeek=None, adjustments=adj, warnings=wr + ["below_safe_floor"], feasible=False, reason="floor_above_tdee")
            t = floor; delta = tdee - t; adj.append("raised_to_floor"); wr.append("below_safe_floor")
    else:
        t = tdee + delta
    if rate > C["rateTooFastShareOfWeight"]*kg: wr.append("rate_too_fast")
    return dict(requestedDailyDelta=req, appliedDailyDelta=delta if goal == "lose" else -delta, targetKcal=t, appliedRateKgPerWeek=delta*7/C["kcalPerKgBodyFat"], adjustments=adj, warnings=wr, feasible=True)
def macros(kcal, kg, profile):
    P = C["macroProfiles"][profile]; M = C["macroMinimums"]; G = C["kcalPerGram"]; adj = []
    fat_kcal = P["fatShare"]*kcal; carb_min = M["carbsShare"]*kcal; fat_min = M["fatShare"]*kcal
    prot_kcal = P["proteinGPerKg"]*kg*G["protein"]
    if kcal - prot_kcal - fat_kcal < carb_min:
        prot_kcal = kcal - fat_kcal - carb_min; adj.append("protein_reduced_to_fit")
        if prot_kcal < M["proteinGPerKg"]*kg*G["protein"]:
            prot_kcal = M["proteinGPerKg"]*kg*G["protein"]; fat_kcal = kcal - prot_kcal - carb_min; adj.append("fat_reduced_to_fit")
            if fat_kcal < fat_min: return dict(feasible=False, reason="kcal_too_low_for_weight", adjustments=adj)
    carb_kcal = kcal - prot_kcal - fat_kcal
    return dict(proteinG=prot_kcal/G["protein"], carbsG=carb_kcal/G["carbs"], fatG=fat_kcal/G["fat"], proteinGPerKg=prot_kcal/G["protein"]/kg, feasible=True, adjustments=adj)
def check(cid, key, got, exp):
    if isinstance(exp, (int, float)) and not isinstance(exp, bool):
        if got is None or abs(got - exp) > tol: err(f"vectors {cid}.{key}: așteptat {exp}, recalculat {got}")
    elif got != exp: err(f"vectors {cid}.{key}: așteptat {exp!r}, recalculat {got!r}")
for c in vec["cases"]:
    cid, fn, inp, exp = c["id"], c["fn"], c["input"], c["expected"]
    got = {}
    if fn == "bmr+tdee":
        got = {"bmrMifflinStJeor": mifflin(inp["sex"], inp["weightKg"], inp["heightCm"], inp["ageYears"]), "bmrHarrisBenedict": hb(inp["sex"], inp["weightKg"], inp["heightCm"], inp["ageYears"])}
        got["tdeeMifflin"] = got["bmrMifflinStJeor"]*C["activity"][inp["activity"]]
    elif fn == "bmrKatchMcArdle": got = {"bmr": katch(inp["weightKg"], inp["bodyFatPct"])}
    elif fn == "calorieTarget": got = target(inp["tdee"], inp["sex"], inp["weightKg"], inp["goal"], inp["rateKgPerWeek"])
    elif fn in ("bmi", "bmi+healthyWeightRange"):
        h2 = (inp["heightCm"]/100)**2; got = {"bmi": inp["weightKg"]/h2, "category": bmi_cat(inp["weightKg"]/h2)}
        if fn == "bmi+healthyWeightRange": lo, hi = C["healthyBmiRange"]; got.update(minKg=lo*h2, maxKg=hi*h2)
    elif fn == "portion":
        f = inp["grams"]/100; got = {k: v*f for k, v in inp["per100g"].items()}
    elif fn == "macros": got = macros(inp["kcal"], inp["weightKg"], inp["profile"])
    else: err(f"vectors {cid}: fn necunoscut {fn}"); continue
    for k, e in exp.items(): check(cid, k, got.get(k), e)

for w in warnings: print("AVERTISMENT:", w)
for e in errors: print("EROARE:", e)
print(f"validate-data: {len(items)} alimente, {len(vec['cases'])} vectori, {len(errors)} erori, {len(warnings)} avertismente")
sys.exit(1 if errors else 0)
