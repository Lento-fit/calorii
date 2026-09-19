# Măsurare

Ce măsurăm, cu ce, și ce nu putem ști. Fiecare indicator are sursa, definiția și limita scrise aici înainte să fie raportat.

| Indicator | Sursa | Definiție | Limită |
|---|---|---|---|
| Calculator folosit | eveniment anonim pe site (fără cookie, fără valorile introduse) | un calcul finalizat pe o pagină | numără sesiuni de calcul, nu persoane |
| Click către aplicație | eveniment anonim pe site + parametrul `src` din link | un click pe linkul către aplicație | un click nu e o instalare |
| Pagini indexate, afișări, poziții | Google Search Console, Bing Webmaster | conform definițiilor lor | date agregate, cu întârziere |
| Instalări, activări | doar dacă atribuirea din magazinele de aplicații este implementată de echipa aplicației | conform definițiilor magazinelor | dacă nu e implementată, indicatorul nu se raportează |
| Utilizare pachete | descărcări npm/PyPI, GitHub Insights | conform platformelor | includ CI-uri și roboți; semnal de vizibilitate, nu de utilizare umană |

Reguli: nu numim click-urile „instalări”; nu folosim fingerprinting sau urmărire ascunsă; nu stocăm valorile introduse de utilizatori; datele se raportează separat pe limbă. Țintele numerice sunt ipoteze de proiect până există un istoric.
