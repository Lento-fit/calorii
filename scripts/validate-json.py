#!/usr/bin/env python3
"""Verifică că toate fișierele .json din repo se parsează. Fără dependențe."""
import json, pathlib, sys
ROOT = pathlib.Path(__file__).resolve().parents[1]
SKIP = {"node_modules", "dist", ".astro", ".vercel", ".git"}
bad = 0
for p in ROOT.rglob("*.json"):
    if any(part in SKIP for part in p.parts):
        continue
    try:
        json.loads(p.read_text(encoding="utf-8"))
    except Exception as e:  # noqa: BLE001
        bad += 1
        print(f"JSON invalid: {p.relative_to(ROOT)}: {e}")
print("validate-json:", "OK" if not bad else f"{bad} fișier(e) invalid(e)")
sys.exit(1 if bad else 0)
