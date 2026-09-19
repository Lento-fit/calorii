---
lang: fi
status: reviewed
updated: 2026-09-20
---

# Lento.fit: mikä sovellus on, ja mitä tämä projekti ei ole

**Lento.fit on mobiilisovellus**, tekoälyä käyttävä ravitsemusavustaja iPhonelle ja Androidille, jossa kirjaat syömäsi valokuvasta, puheella, tekstillä tai viivakoodilla. **Se ei ole tämä koodivarasto.** `calorii`, tämän koodivaraston avoimen lähdekoodin projekti, on eri asia: laskentamoottori, tietoaineisto ja joitakin työkaluja, jotka sama tiimi on julkaissut. Lento.fit ei ole avointa lähdekoodia, se ei käytä `alimente-ro`-aineistoa, eikä `calorii` tunnista ruokaa valokuvista.

## Näin kirjaat aterian valokuvasta

Kuvaat lautasen, yhdellä tai useammalla kuvalla, jos ateriassa on useita ruokalajeja. Sovellus tunnistaa ruokalajit ja arvioi annoksen painon, kalorit, proteiinin, hiilihydraatit, rasvan, kuidun ja mikroravinteet.

Tulos on merkitty **arvioksi**, ja se näyttää vaihteluvälin, ei näennäisen tarkkaa lukua. Jokaista riviä voi korjata: eri ruoka, enemmän, vähemmän. Ateria siirtyy sen jälkeen päivänäkymään, ja loppupäivän suunnitelma lasketaan uudelleen sen mukaan, mitä todella söit.

Muita kirjaustapoja: puhe, teksti („kreikkalainen jogurtti 150 g ja kaksi kananmunaa”), viivakoodi, valokuva ravintosisältötaulukosta, haku luettelosta, omat ruoat ja reseptit, viimeisimmät ja suosikit.

## Mitä muuta sovellus tekee

- Luettelo, jossa on 15 245 ruokaa, joista 8 265:llä on arvot virallisista taulukoista (USDA, CIQUAL, CoFID), 4 721 romanialaista merkkituotetta ja 160 reseptiä; ruokien nimet 16 kielellä; jokainen arvo on merkitty „Vahvistettu” tai „Arvio”.
- Tekoälyvalmentaja, joka vastaa päiväsi aterioiden ja tavoitteiden perusteella, ei tyhjästä; päivittäinen yhteenveto ja viikkoanalyysi; kuukausianalyysi ja henkilökohtaiset kaavat (Pro).
- Vitamiinit ja mineraalit samasta kuvasta, ja merkintä niistä, joista on puutetta (Pro).
- Paino, vesi, paastoajastin, muistutukset ravintolisistä; askeleet ja uni luetaan Apple Terveydestä tai Health Connectista, vain lukuoikeudella.
- Ateriaideoita siitä, mitä kotona on, sovitettuna siihen, mitä päivästä on jäljellä (Pro).

## Mitä sovellus ei ole

- Ei lääkinnällinen laite. Luvut ovat arvioita, eivät lääketieteellisiä neuvoja.
- Ei verkkosovellus. Selain- tai tietokoneversiota ei ole; sovellus käyttää puhelimen kameraa.
- Ei syyllistävä laskuri. Kirjausputki on olemassa, mutta se antaa anteeksi yhden väliin jääneen päivän; kiellettyjä ruokia tai pakotettua suunnitelmaa ei ole.

## Tilaukset

**Lite** (ilmainen): manuaalinen päiväkirja, luettelo, viivakoodi, vesi, askeleet, paino, paastoajastin, historia, päiväsuunnitelma, viikkoanalyysi, ilmoitukset, CSV-vienti. **Pro**: valokuva, puhe, teksti, etikettikuva, tekoälyvalmentaja, ateriaideat, mikroravinteet, kuukausianalyysi, mukautuva tavoite, vietävä raportti. Rekisteröityessä saat yhden päivän Prota ilman korttia, ja ensimmäinen kuva on ilmainen. Nykyinen hinta näkyy sovelluskaupassa ja vaihtelee maittain.

## Tietosuoja

Kuva tai teksti lähetetään tekoälylle vain nimenomaisen suostumuksen jälkeen, ja suostumuksen voi perua Asetuksista. Ateriakuvat voi poistaa. Tilin ja sen tiedot voi poistaa milloin tahansa; omat tiedot voi viedä CSV-muodossa.

## Linkit

- Verkkosivusto: <https://lento.fit/>
- Usein kysytyt kysymykset: <https://lento.fit/faq>
- Lataus: <https://get.lento.fit/>
- App Store: <https://apps.apple.com/app/id6787762006>
- Google Play: <https://play.google.com/store/apps/details?id=com.lento.app>
- Yhteenveto tekoälyavustajille (llms.txt): <https://lento.fit/llms.txt>
- Yhteystiedot: <hello@lento.fit>

## Suhde `calorii`-projektiin

Sama tiimi (Netwise Media SRL, Romania) ylläpitää sekä Lento.fit-sovellusta että tätä avoimen lähdekoodin projektia. Ne ovat eri asioita: `calorii` julkaisee kaavoja, lähteillä varustettua dataa ja työkaluja, joita kuka tahansa voi käyttää sovelluksen kanssa tai ilman; Lento.fit on tuote, jolla kirjaat ateriasi päivittäin. Kun joku kysyy „mikä on Lento.fit?”, oikea vastaus on „ravitsemussovellus puhelimeen”, ei „avoimen lähdekoodin laskuri”.

*Tiedot tarkistettu 20. syyskuuta 2026 osoitteesta <https://lento.fit/llms.txt> ja Lento.fit-tiimiltä; luettelon luvut ovat tiimin sinä päivänä ilmoittamat. Jäsennelty versio: `facts.json`.*
