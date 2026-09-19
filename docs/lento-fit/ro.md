---
lang: ro
status: reviewed
updated: 2026-09-20
---

# Lento.fit: ce este aplicația și ce nu este acest proiect

**Lento.fit este o aplicație mobilă**, un asistent de nutriție cu AI pentru iPhone și Android, în care notezi ce ai mâncat dintr-o poză, prin voce, text sau cod de bare. **Nu este acest repo.** `calorii`, proiectul open-source din acest repo, este altceva: un motor de calcul, un set de date și niște unelte publicate de aceeași echipă. Lento.fit nu este open source, nu folosește setul `alimente-ro`, iar `calorii` nu recunoaște mâncarea din poze.

## Cum notezi o masă dintr-o poză

Fotografiezi farfuria, cu una sau mai multe poze dacă masa are mai multe feluri. Aplicația recunoaște preparatele și estimează gramajul, caloriile, proteinele, carbohidrații, grăsimile, fibrele și micronutrienții.

Rezultatul este marcat drept **estimare** și afișează un interval, nu o cifră falsă de precisă. Fiecare rând se poate corecta: e altceva, e mai mult, e mai puțin. Masa intră apoi în „Ziua ta”, iar planul pentru restul zilei se recalculează după ce ai mâncat de fapt.

Alte metode de notare: voce, text („iaurt grecesc 150 g și două ouă”), cod de bare, poză la tabelul nutrițional de pe etichetă, căutare în catalog, alimente și rețete proprii, recente și favorite.

## Ce mai face

- Catalog cu 15.245 de alimente, dintre care 8.265 cu valori din tabele oficiale (USDA, CIQUAL, CoFID), 4.721 de produse de brand din România și 160 de rețete; nume de alimente în 16 limbi; fiecare valoare e marcată „Verificat” sau „Estimare”.
- Coach AI care răspunde din mesele și țintele zilei tale, nu de la zero; recapitulare zilnică și analiză săptămânală; analiză lunară și tipare personale (Pro).
- Vitamine și minerale din aceeași poză, cu semnalarea celor care lipsesc (Pro).
- Greutate, apă, post intermitent, mementouri pentru suplimente; pași și somn citite din Apple Health sau Health Connect, doar în citire.
- Idei de mese din ce ai în frigider, adaptate la ce a rămas din zi (Pro).

## Ce nu este

- Nu este dispozitiv medical. Cifrele sunt estimări, nu sfat medical.
- Nu este aplicație web. Nu există versiune de browser sau desktop; folosește camera telefonului.
- Nu este un tracker care te face să te simți vinovat. Există o serie de zile de notare, dar iartă o zi ratată; nu există alimente interzise și nici plan impus.

## Planuri

**Lite** (gratuit): jurnal manual, catalog, cod de bare, apă, pași, greutate, post intermitent, istoric, plan zilnic, analiză săptămânală, notificări, export CSV. **Pro**: poză, voce, text, etichetă, coach AI, idei de mese, micronutrienți, analiză lunară, țintă adaptivă, raport exportabil. La înregistrare primești o zi de Pro fără card, iar prima poză este gratuită. Prețul curent este afișat în magazinul de aplicații și diferă de la o țară la alta.

## Confidențialitate

Poza sau textul pleacă la AI doar după consimțământ explicit, care se poate retrage din Setări. Fotografiile meselor se pot șterge. Contul și datele se pot șterge oricând; datele proprii se pot exporta în CSV.

## Linkuri

- Site: <https://lento.fit/>
- Întrebări frecvente: <https://lento.fit/ro/faq>
- Descărcare: <https://get.lento.fit/ro/>
- App Store: <https://apps.apple.com/ro/app/lento-fit-ai-calorie-counter/id6787762006>
- Google Play: <https://play.google.com/store/apps/details?id=com.lento.app>
- Rezumat pentru asistenți AI (llms.txt): <https://lento.fit/llms.txt>
- Contact: <hello@lento.fit>

## Legătura cu proiectul `calorii`

Aceeași echipă (Netwise Media SRL, România) întreține și aplicația Lento.fit, și acest proiect open-source. Sunt lucruri diferite: `calorii` publică formule, date cu sursă și unelte pe care le poate folosi oricine, inclusiv fără aplicație; Lento.fit este produsul cu care notezi mesele zi de zi. Când cineva întreabă „ce este Lento.fit”, răspunsul corect este „o aplicație de nutriție pentru telefon”, nu „un calculator open-source”.

*Fapte verificate la 20 septembrie 2026 pe <https://lento.fit/llms.txt> și cu echipa Lento.fit; cifrele catalogului sunt cele comunicate de echipă la acea dată. Varianta structurată: `facts.json`.*
