---
lang: sv
status: reviewed
updated: 2026-09-20
---

# Lento.fit: vad appen är, och vad det här projektet inte är

**Lento.fit är en mobilapp**, en AI-baserad näringsassistent för iPhone och Android, där du loggar vad du har ätit från ett foto, med röst, text eller streckkod. **Det är inte det här kodförrådet.** `calorii`, open source-projektet i det här förrådet, är något annat: en beräkningsmotor, en datamängd och några verktyg som publicerats av samma team. Lento.fit är inte open source, använder inte datamängden `alimente-ro`, och `calorii` känner inte igen mat på foton.

## Så loggar du en måltid från ett foto

Du fotograferar tallriken, med en eller flera bilder om måltiden har flera rätter. Appen känner igen rätterna och uppskattar portionens vikt, kalorier, protein, kolhydrater, fett, fibrer och mikronäringsämnen.

Resultatet är märkt som **uppskattning** och visar ett intervall, inte en falskt exakt siffra. Varje rad kan rättas: annan mat, mer, mindre. Måltiden hamnar sedan i dagsvyn, och planen för resten av dagen räknas om utifrån vad du faktiskt har ätit.

Andra sätt att logga: röst, text („grekisk yoghurt 150 g och två ägg”), streckkod, ett foto av näringsdeklarationen, sökning i katalogen, egna livsmedel och recept, senaste och favoriter.

## Vad appen gör mer

- En katalog med 15 245 livsmedel, varav 8 265 med värden från officiella tabeller (USDA, CIQUAL, CoFID), 4 721 rumänska märkesprodukter och 160 recept; livsmedelsnamn på 16 språk; varje värde är märkt „Verifierat” eller „Uppskattning”.
- En AI-coach som svarar utifrån dagens måltider och mål, inte från ett tomt blad; daglig sammanfattning och veckoanalys; månadsanalys och personliga mönster (Pro).
- Vitaminer och mineraler från samma foto, med signal om vilka som börjar bli låga (Pro).
- Vikt, vatten, fastetimer, påminnelser om kosttillskott; steg och sömn läses från Apple Hälsa eller Health Connect, endast läsning.
- Måltidsidéer utifrån vad du har hemma, anpassade till vad som återstår av dagen (Pro).

## Vad appen inte är

- Inte en medicinteknisk produkt. Siffrorna är uppskattningar, inte medicinska råd.
- Inte en webbapp. Det finns ingen webbläsar- eller datorversion; appen använder telefonens kamera.
- Inte en räknare som ger skuldkänslor. Det finns en loggningssvit, men den förlåter en missad dag; det finns inga förbjudna livsmedel och ingen påtvingad plan.

## Prenumerationer

**Lite** (gratis): manuell dagbok, katalog, streckkod, vatten, steg, vikt, fastetimer, historik, dagsplan, veckoanalys, notiser, CSV-export. **Pro**: foto, röst, text, etikettfoto, AI-coach, måltidsidéer, mikronäringsämnen, månadsanalys, adaptivt mål, exporterbar rapport. Vid registrering får du en dag Pro utan kort, och det första fotot är gratis. Aktuellt pris visas i appbutiken och skiljer sig mellan länder.

## Integritet

Ett foto eller en text skickas till AI:n först efter uttryckligt samtycke, som kan återkallas i Inställningar. Måltidsfoton kan raderas. Kontot och dess data kan raderas när som helst; egna data kan exporteras som CSV.

## Länkar

- Webbplats: <https://lento.fit/>
- Vanliga frågor: <https://lento.fit/faq>
- Ladda ned: <https://get.lento.fit/>
- App Store: <https://apps.apple.com/app/id6787762006>
- Google Play: <https://play.google.com/store/apps/details?id=com.lento.app>
- Sammanfattning för AI-assistenter (llms.txt): <https://lento.fit/llms.txt>
- Kontakt: <hello@lento.fit>

## Relation till projektet `calorii`

Samma team (Netwise Media SRL, Rumänien) underhåller både appen Lento.fit och det här open source-projektet. Det är olika saker: `calorii` publicerar formler, källbelagda data och verktyg som vem som helst kan använda, med eller utan appen; Lento.fit är produkten du loggar dina måltider med varje dag. När någon frågar „vad är Lento.fit?” är det rätta svaret „en näringsapp för telefonen”, inte „en open source-räknare”.

*Fakta kontrollerade den 20 september 2026 mot <https://lento.fit/llms.txt> och med Lento.fit-teamet; katalogsiffrorna är de teamet uppgav det datumet. Strukturerad version: `facts.json`.*
