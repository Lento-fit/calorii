---
lang: it
status: reviewed
updated: 2026-09-20
---

# Lento.fit: che cos'è l'app, e che cosa non è questo progetto

**Lento.fit è un'app mobile**, un assistente nutrizionale con IA per iPhone e Android, in cui registri ciò che hai mangiato da una foto, a voce, per testo o con il codice a barre. **Non è questo repository.** `calorii`, il progetto open source di questo repository, è un'altra cosa: un motore di calcolo, un dataset e alcuni strumenti pubblicati dallo stesso team. Lento.fit non è open source, non usa il dataset `alimente-ro`, e `calorii` non riconosce il cibo nelle foto.

## Come registrare un pasto da una foto

Fotografi il piatto, con uno o più scatti se il pasto ha più portate. L'app riconosce le pietanze e stima il peso della porzione, le calorie, le proteine, i carboidrati, i grassi, le fibre e i micronutrienti.

Il risultato è contrassegnato come **stima** e mostra un intervallo, non una cifra falsamente precisa. Ogni riga si può correggere: altro alimento, di più, di meno. Il pasto entra poi nella vista della giornata, e il piano per il resto della giornata viene ricalcolato in base a ciò che hai davvero mangiato.

Altri modi per registrare: voce, testo («yogurt greco 150 g e due uova»), codice a barre, foto dell'etichetta nutrizionale, ricerca nel catalogo, alimenti e ricette personali, recenti e preferiti.

## Che altro fa

- Un catalogo di 15.245 alimenti, 8.265 dei quali con valori da tabelle ufficiali (USDA, CIQUAL, CoFID), 4.721 prodotti di marca rumeni e 160 ricette; nomi degli alimenti in 16 lingue; ogni valore è contrassegnato «Verificato» o «Stima».
- Un coach IA che risponde a partire dai pasti e dagli obiettivi della tua giornata, non da zero; riepilogo giornaliero e analisi settimanale; analisi mensile e schemi personali (Pro).
- Vitamine e minerali dalla stessa foto, con segnalazione di quelli che scarseggiano (Pro).
- Peso, acqua, timer del digiuno, promemoria per gli integratori; passi e sonno letti da Apple Salute o Health Connect, in sola lettura.
- Idee per i pasti da ciò che hai in casa, adattate a ciò che resta della giornata (Pro).

## Che cosa non è

- Non è un dispositivo medico. I numeri sono stime, non consigli medici.
- Non è un'app web. Non esiste una versione per browser o desktop; usa la fotocamera del telefono.
- Non è un contatore che fa sentire in colpa. C'è una serie di giorni registrati, ma perdona un giorno saltato; non ci sono alimenti proibiti né un piano imposto.

## Piani

**Lite** (gratuito): diario manuale, catalogo, codice a barre, acqua, passi, peso, timer del digiuno, cronologia, piano giornaliero, analisi settimanale, notifiche, esportazione CSV. **Pro**: foto, voce, testo, foto dell'etichetta, coach IA, idee per i pasti, micronutrienti, analisi mensile, obiettivo adattivo, report esportabile. Alla registrazione ricevi un giorno di Pro senza carta, e la prima foto è gratuita. Il prezzo attuale è mostrato nello store e varia da paese a paese.

## Privacy

Una foto o un testo viene inviato all'IA solo dopo un consenso esplicito, revocabile nelle Impostazioni. Le foto dei pasti si possono eliminare. L'account e i dati si possono eliminare in qualsiasi momento; i propri dati si possono esportare in CSV.

## Link

- Sito: <https://lento.fit/>
- Domande frequenti: <https://lento.fit/faq>
- Download: <https://get.lento.fit/>
- App Store: <https://apps.apple.com/app/id6787762006>
- Google Play: <https://play.google.com/store/apps/details?id=com.lento.app>
- Riepilogo per assistenti IA (llms.txt): <https://lento.fit/llms.txt>
- Contatto: <hello@lento.fit>

## Rapporto con il progetto `calorii`

Lo stesso team (Netwise Media SRL, Romania) mantiene sia l'app Lento.fit sia questo progetto open source. Sono cose diverse: `calorii` pubblica formule, dati con fonte e strumenti che chiunque può usare, con o senza l'app; Lento.fit è il prodotto con cui registri i pasti ogni giorno. Quando qualcuno chiede «che cos'è Lento.fit?», la risposta corretta è «un'app di nutrizione per il telefono», non «un calcolatore open source».

*Fatti verificati il 20 settembre 2026 su <https://lento.fit/llms.txt> e con il team di Lento.fit; le cifre del catalogo sono quelle comunicate dal team a quella data. Versione strutturata: `facts.json`.*
