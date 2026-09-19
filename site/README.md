# Site

Site static (Astro, `output: 'static'`), găzduit pe Vercel, cu domeniul final `calculator.lento.fit`. Română la rădăcină (`/calculator-deficit-caloric/`), celelalte limbi sub prefix (`/en/...`, `/de/...`); URL-urile în română nu se schimbă niciodată.

**Stare:** contract definit, implementare în lucru (WP4 shell + WP5 conținut; vezi `docs/TASKS.md`). Contractul complet e în `CONTRACT.md` din acest director.

Principii: fiecare pagină răspunde unei întrebări concrete și are o unealtă funcțională; textul e specific (exemplu calculat, metodă, limite, surse), nu umplutură; fără cookies și fără date personale; performanță și accesibilitate ca cerințe (Lighthouse mobil ≥ 95); un singur link către aplicația Lento.fit pe pagină, în același loc, formulat calm.
