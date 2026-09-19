---
lang: de
status: reviewed
updated: 2026-09-20
---

# Lento.fit: Was die App ist, und was dieses Projekt nicht ist

**Lento.fit ist eine mobile App**, ein KI-Ernährungsassistent für iPhone und Android, in dem du protokollierst, was du gegessen hast: per Foto, Sprache, Text oder Barcode. **Sie ist nicht dieses Repository.** `calorii`, das Open-Source-Projekt in diesem Repository, ist etwas anderes: eine Berechnungs-Engine, ein Datensatz und einige Werkzeuge, veröffentlicht vom selben Team. Lento.fit ist nicht Open Source, verwendet den Datensatz `alimente-ro` nicht, und `calorii` erkennt kein Essen auf Fotos.

## So protokollierst du eine Mahlzeit per Foto

Du fotografierst den Teller, mit einem oder mehreren Bildern, wenn die Mahlzeit aus mehreren Gerichten besteht. Die App erkennt die Gerichte und schätzt Portionsgewicht, Kalorien, Eiweiß, Kohlenhydrate, Fett, Ballaststoffe und Mikronährstoffe.

Das Ergebnis ist als **Schätzung** markiert und zeigt einen Bereich, keine scheingenaue Einzelzahl. Jede Zeile lässt sich korrigieren: anderes Lebensmittel, mehr, weniger. Die Mahlzeit erscheint dann in der Tagesansicht, und der Plan für den Rest des Tages wird anhand dessen neu berechnet, was du tatsächlich gegessen hast.

Weitere Wege: Sprache, Text („griechischer Joghurt 150 g und zwei Eier“), Barcode, Foto der Nährwerttabelle, Katalogsuche, eigene Lebensmittel und Rezepte, zuletzt verwendet und Favoriten.

## Was die App sonst kann

- Katalog mit 15.245 Lebensmitteln, davon 8.265 mit Werten aus amtlichen Tabellen (USDA, CIQUAL, CoFID), 4.721 rumänischen Markenprodukten und 160 Rezepten; Lebensmittelnamen in 16 Sprachen; jeder Wert ist als „Verifiziert“ oder „Schätzung“ markiert.
- Ein KI-Coach, der aus den Mahlzeiten und Zielen deines Tages antwortet, nicht aus dem Nichts; tägliche Zusammenfassung und wöchentliche Analyse; monatliche Analyse und persönliche Muster (Pro).
- Vitamine und Mineralstoffe aus demselben Foto, mit Hinweis auf die, die knapp werden (Pro).
- Gewicht, Wasser, Fasten-Timer, Erinnerungen für Nahrungsergänzungen; Schritte und Schlaf aus Apple Health oder Health Connect, nur lesend.
- Essensideen aus dem, was du zu Hause hast, angepasst an den Rest des Tages (Pro).

## Was die App nicht ist

- Kein Medizinprodukt. Die Zahlen sind Schätzungen, kein medizinischer Rat.
- Keine Web-App. Es gibt keine Browser- oder Desktop-Version; sie nutzt die Kamera des Telefons.
- Kein Tracker, der Schuldgefühle erzeugt. Es gibt eine Protokollier-Serie, aber sie verzeiht einen verpassten Tag; es gibt keine verbotenen Lebensmittel und keinen vorgeschriebenen Plan.

## Tarife

**Lite** (kostenlos): manuelles Tagebuch, Katalog, Barcode, Wasser, Schritte, Gewicht, Fasten-Timer, Verlauf, Tagesplan, Wochenanalyse, Benachrichtigungen, CSV-Export. **Pro**: Foto, Sprache, Text, Etikettenfoto, KI-Coach, Essensideen, Mikronährstoffe, Monatsanalyse, adaptives Ziel, exportierbarer Bericht. Bei der Registrierung gibt es einen Tag Pro ohne Karte, und das erste Foto ist kostenlos. Der aktuelle Preis wird im App-Store angezeigt und unterscheidet sich je nach Land.

## Datenschutz

Ein Foto oder Text wird nur nach ausdrücklicher Zustimmung an die KI gesendet; die Zustimmung lässt sich in den Einstellungen widerrufen. Mahlzeitenfotos können gelöscht werden. Konto und Daten können jederzeit gelöscht werden; eigene Daten lassen sich als CSV exportieren.

## Links

- Website: <https://lento.fit/>
- Häufige Fragen: <https://lento.fit/faq>
- Download: <https://get.lento.fit/>
- App Store: <https://apps.apple.com/app/id6787762006>
- Google Play: <https://play.google.com/store/apps/details?id=com.lento.app>
- Zusammenfassung für KI-Assistenten (llms.txt): <https://lento.fit/llms.txt>
- Kontakt: <hello@lento.fit>

## Verhältnis zum Projekt `calorii`

Dasselbe Team (Netwise Media SRL, Rumänien) pflegt sowohl die App Lento.fit als auch dieses Open-Source-Projekt. Es sind verschiedene Dinge: `calorii` veröffentlicht Formeln, belegte Daten und Werkzeuge, die jeder nutzen kann, mit oder ohne App; Lento.fit ist das Produkt, mit dem du täglich deine Mahlzeiten protokollierst. Wer fragt „Was ist Lento.fit?“, bekommt als richtige Antwort „eine Ernährungs-App fürs Telefon“, nicht „ein Open-Source-Rechner“.

*Fakten am 20. September 2026 gegen <https://lento.fit/llms.txt> und mit dem Lento.fit-Team geprüft; die Katalogzahlen sind die vom Team zu diesem Datum gemeldeten. Strukturierte Fassung: `facts.json`.*
