---
lang: nl
status: reviewed
updated: 2026-09-20
---

# Lento.fit: wat de app is, en wat dit project niet is

**Lento.fit is een mobiele app**, een voedingsassistent met AI voor iPhone en Android, waarin je vastlegt wat je hebt gegeten via een foto, spraak, tekst of barcode. **Het is niet deze repository.** `calorii`, het open-sourceproject in deze repository, is iets anders: een rekenmotor, een dataset en enkele tools, gepubliceerd door hetzelfde team. Lento.fit is niet open source, gebruikt de dataset `alimente-ro` niet, en `calorii` herkent geen eten op foto's.

## Zo leg je een maaltijd vast met een foto

Je fotografeert het bord, met een of meer foto's als de maaltijd uit meerdere gerechten bestaat. De app herkent de gerechten en schat het portiegewicht, de calorieën, eiwitten, koolhydraten, vetten, vezels en micronutriënten.

Het resultaat is gemarkeerd als **schatting** en toont een bereik, geen schijnnauwkeurig getal. Elke regel kun je corrigeren: ander voedsel, meer, minder. De maaltijd komt daarna in het dagoverzicht, en het plan voor de rest van de dag wordt herberekend op basis van wat je echt hebt gegeten.

Andere manieren om vast te leggen: spraak, tekst („Griekse yoghurt 150 g en twee eieren”), barcode, een foto van het voedingswaarde-etiket, zoeken in de catalogus, eigen voedingsmiddelen en recepten, recent en favorieten.

## Wat de app nog meer doet

- Een catalogus met 15.245 voedingsmiddelen, waarvan 8.265 met waarden uit officiële tabellen (USDA, CIQUAL, CoFID), 4.721 Roemeense merkproducten en 160 recepten; namen van voedingsmiddelen in 16 talen; elke waarde is gemarkeerd als „Geverifieerd” of „Schatting”.
- Een AI-coach die antwoordt vanuit de maaltijden en doelen van jouw dag, niet vanaf nul; een dagelijkse samenvatting en een wekelijkse analyse; maandelijkse analyse en persoonlijke patronen (Pro).
- Vitaminen en mineralen uit dezelfde foto, met een signaal voor wat tekortkomt (Pro).
- Gewicht, water, vastentimer, herinneringen voor supplementen; stappen en slaap gelezen uit Apple Gezondheid of Health Connect, alleen-lezen.
- Maaltijdideeën op basis van wat je in huis hebt, aangepast aan wat er van de dag overblijft (Pro).

## Wat het niet is

- Geen medisch hulpmiddel. De getallen zijn schattingen, geen medisch advies.
- Geen webapp. Er is geen browser- of desktopversie; de app gebruikt de camera van je telefoon.
- Geen tracker die je schuldig laat voelen. Er is een reeks van gelogde dagen, maar die vergeeft een gemiste dag; er zijn geen verboden voedingsmiddelen en geen opgelegd plan.

## Abonnementen

**Lite** (gratis): handmatig dagboek, catalogus, barcode, water, stappen, gewicht, vastentimer, geschiedenis, dagplan, weekanalyse, meldingen, CSV-export. **Pro**: foto, spraak, tekst, etiketfoto, AI-coach, maaltijdideeën, micronutriënten, maandanalyse, adaptief doel, exporteerbaar rapport. Bij registratie krijg je één dag Pro zonder kaart, en de eerste foto is gratis. De actuele prijs staat in de appstore en verschilt per land.

## Privacy

Een foto of tekst gaat pas naar de AI na uitdrukkelijke toestemming, die je in Instellingen kunt intrekken. Maaltijdfoto's kunnen worden verwijderd. Account en gegevens kun je op elk moment verwijderen; je eigen gegevens kun je als CSV exporteren.

## Links

- Website: <https://lento.fit/>
- Veelgestelde vragen: <https://lento.fit/faq>
- Downloaden: <https://get.lento.fit/>
- App Store: <https://apps.apple.com/app/id6787762006>
- Google Play: <https://play.google.com/store/apps/details?id=com.lento.app>
- Samenvatting voor AI-assistenten (llms.txt): <https://lento.fit/llms.txt>
- Contact: <hello@lento.fit>

## Relatie met het project `calorii`

Hetzelfde team (Netwise Media SRL, Roemenië) onderhoudt zowel de app Lento.fit als dit open-sourceproject. Het zijn verschillende dingen: `calorii` publiceert formules, gegevens met bron en tools die iedereen kan gebruiken, met of zonder de app; Lento.fit is het product waarmee je dagelijks je maaltijden vastlegt. Wie vraagt „wat is Lento.fit?” krijgt als juiste antwoord „een voedingsapp voor de telefoon”, niet „een open-source rekenmachine”.

*Feiten gecontroleerd op 20 september 2026 aan de hand van <https://lento.fit/llms.txt> en met het Lento.fit-team; de catalogusaantallen zijn die welke het team op die datum meldde. Gestructureerde versie: `facts.json`.*
