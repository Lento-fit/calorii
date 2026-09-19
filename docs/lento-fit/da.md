---
lang: da
status: reviewed
updated: 2026-09-20
---

# Lento.fit: hvad appen er, og hvad dette projekt ikke er

**Lento.fit er en mobilapp**, en AI-baseret ernæringsassistent til iPhone og Android, hvor du registrerer, hvad du har spist, ud fra et foto, med stemme, tekst eller stregkode. **Den er ikke dette repository.** `calorii`, open source-projektet i dette repository, er noget andet: en beregningsmotor, et datasæt og nogle værktøjer, udgivet af samme team. Lento.fit er ikke open source, bruger ikke datasættet `alimente-ro`, og `calorii` genkender ikke mad på fotos.

## Sådan registrerer du et måltid ud fra et foto

Du fotograferer tallerkenen, med et eller flere billeder, hvis måltidet består af flere retter. Appen genkender retterne og anslår portionens vægt, kalorier, protein, kulhydrater, fedt, fibre og mikronæringsstoffer.

Resultatet er markeret som et **skøn** og viser et interval, ikke et falsk præcist tal. Hver linje kan rettes: anden mad, mere, mindre. Måltidet kommer derefter ind i dagsvisningen, og planen for resten af dagen genberegnes ud fra, hvad du faktisk har spist.

Andre måder at registrere: stemme, tekst („græsk yoghurt 150 g og to æg”), stregkode, et foto af næringsdeklarationen, søgning i kataloget, egne fødevarer og opskrifter, seneste og favoritter.

## Hvad appen ellers kan

- Et katalog med 15.245 fødevarer, hvoraf 8.265 har værdier fra officielle tabeller (USDA, CIQUAL, CoFID), 4.721 rumænske mærkevarer og 160 opskrifter; fødevarenavne på 16 sprog; hver værdi er markeret „Verificeret” eller „Skøn”.
- En AI-coach, der svarer ud fra dagens måltider og mål, ikke fra bunden; dagligt resumé og ugentlig analyse; månedlig analyse og personlige mønstre (Pro).
- Vitaminer og mineraler fra samme foto, med markering af dem, der er ved at mangle (Pro).
- Vægt, vand, fastetimer, påmindelser om kosttilskud; skridt og søvn læses fra Apple Sundhed eller Health Connect, kun læsning.
- Måltidsidéer ud fra det, du har hjemme, tilpasset det, der er tilbage af dagen (Pro).

## Hvad appen ikke er

- Ikke medicinsk udstyr. Tallene er skøn, ikke lægelig rådgivning.
- Ikke en webapp. Der findes ingen browser- eller computerversion; appen bruger telefonens kamera.
- Ikke en tæller, der giver skyldfølelse. Der er en registreringsstime, men den tilgiver en glemt dag; der er ingen forbudte fødevarer og ingen påtvunget plan.

## Abonnementer

**Lite** (gratis): manuel dagbog, katalog, stregkode, vand, skridt, vægt, fastetimer, historik, dagsplan, ugeanalyse, notifikationer, CSV-eksport. **Pro**: foto, stemme, tekst, etiketfoto, AI-coach, måltidsidéer, mikronæringsstoffer, månedsanalyse, adaptivt mål, rapport til eksport. Ved tilmelding får du én dag med Pro uden kort, og det første foto er gratis. Den aktuelle pris vises i appbutikken og varierer fra land til land.

## Privatliv

Et foto eller en tekst sendes først til AI'en efter udtrykkeligt samtykke, som kan trækkes tilbage i Indstillinger. Måltidsfotos kan slettes. Kontoen og dens data kan slettes til enhver tid; egne data kan eksporteres som CSV.

## Links

- Websted: <https://lento.fit/>
- Ofte stillede spørgsmål: <https://lento.fit/faq>
- Download: <https://get.lento.fit/>
- App Store: <https://apps.apple.com/app/id6787762006>
- Google Play: <https://play.google.com/store/apps/details?id=com.lento.app>
- Resumé til AI-assistenter (llms.txt): <https://lento.fit/llms.txt>
- Kontakt: <hello@lento.fit>

## Forholdet til projektet `calorii`

Samme team (Netwise Media SRL, Rumænien) vedligeholder både appen Lento.fit og dette open source-projekt. Det er forskellige ting: `calorii` udgiver formler, kildebelagte data og værktøjer, som alle kan bruge, med eller uden appen; Lento.fit er det produkt, du registrerer dine måltider med hver dag. Når nogen spørger „hvad er Lento.fit?”, er det rigtige svar „en ernæringsapp til telefonen”, ikke „en open source-beregner”.

*Fakta kontrolleret den 20. september 2026 mod <https://lento.fit/llms.txt> og med Lento.fit-teamet; katalogtallene er dem, teamet oplyste på den dato. Struktureret version: `facts.json`.*
