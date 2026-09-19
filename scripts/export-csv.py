#!/usr/bin/env python3
"""Generează data/alimente-ro.csv din data/alimente-ro.json. CSV-ul nu se editează manual."""
import csv, json, pathlib
ROOT = pathlib.Path(__file__).resolve().parents[1]
col = json.loads((ROOT / "data/alimente-ro.json").read_text(encoding="utf-8"))
translations = {}
for tp in sorted((ROOT / "data/translations").glob("*.json")):
    translations[tp.stem] = json.loads(tp.read_text(encoding="utf-8"))
extra_langs = sorted(translations)
nutr = ["kcal", "proteine_g", "carbohidrati_g", "grasimi_g", "fibre_g", "zaharuri_g", "grasimi_saturate_g", "sodiu_mg"]
cols = ["id", "nume_ro", "nume_en", *[f"nume_{l}" for l in extra_langs], "categorie", "stare_preparare", *nutr, "portii", "stare", "sursa_tip", "sursa_referinta", "sursa_url", "sursa_licenta", "sursa_versiune", "preluat_la", "tara", "note"]
out = ROOT / "data/alimente-ro.csv"
with out.open("w", encoding="utf-8", newline="") as fh:
    w = csv.DictWriter(fh, fieldnames=cols)
    w.writeheader()
    for a in col["alimente"]:
        row = {"id": a["id"], "nume_ro": a["nume"]["ro"], "nume_en": a["nume"]["en"], "categorie": a["categorie"], "stare_preparare": a["stare_preparare"],
               "portii": "; ".join(f"{p['nume']} = {p['grame']} g" for p in a["portii"]), "stare": a["stare"],
               "sursa_tip": a["sursa"]["tip"], "sursa_referinta": a["sursa"]["referinta"], "sursa_url": a["sursa"].get("url") or "",
               "sursa_licenta": a["sursa"]["licenta"], "sursa_versiune": a["sursa"].get("versiune_sursa") or "", "preluat_la": a["sursa"]["preluat_la"],
               "tara": a.get("tara") or "", "note": a.get("note") or ""}
        for l in extra_langs: row[f"nume_{l}"] = translations[l].get(a["id"], "")
        for k in nutr:
            v = a["la_100g"].get(k)
            row[k] = "" if v is None else v
        w.writerow(row)
print(f"export-csv: {len(col['alimente'])} rânduri → {out.relative_to(ROOT)}")
