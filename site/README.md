# Site

Site static (Astro, `output: 'static'`), găzduit pe Vercel. Site-ul va trăi sub domeniul existent `lento.fit`, fără subdomeniu nou; calea exactă se stabilește la lansare. Toate adresele absolute vin dintr-o singură variabilă de mediu (`SITE_URL`), iar până atunci site-ul rulează pe adresa de producție Vercel cu `noindex`. Română la rădăcină (`/calculator-deficit-caloric/`), celelalte limbi sub prefix (`/en/...`, `/de/...`); URL-urile în română nu se schimbă niciodată.

**Stare:** contract definit, implementare în lucru (WP4 shell + WP5 conținut; vezi `docs/TASKS.md`). Contractul complet e în `CONTRACT.md` din acest director.

Principii: fiecare pagină răspunde unei întrebări concrete și are o unealtă funcțională; textul e specific (exemplu calculat, metodă, limite, surse), nu umplutură; fără cookies și fără date personale; performanță și accesibilitate ca cerințe (Lighthouse mobil ≥ 95); un singur link către aplicația Lento.fit pe pagină, în același loc, formulat calm.
