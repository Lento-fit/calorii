---
lang: hu
status: reviewed
updated: 2026-09-20
---

# Lento.fit: mi az alkalmazás, és mi nem ez a projekt

**A Lento.fit egy mobilalkalmazás**, mesterséges intelligenciával működő táplálkozási asszisztens iPhone-ra és Androidra, amelyben fotóból, hanggal, szöveggel vagy vonalkóddal rögzíted, mit ettél. **Nem ez a tárhely.** A `calorii`, a tárhelyben található nyílt forráskódú projekt, valami más: egy számítómotor, egy adathalmaz és néhány eszköz, amelyeket ugyanaz a csapat tett közzé. A Lento.fit nem nyílt forráskódú, nem használja az `alimente-ro` adathalmazt, és a `calorii` nem ismer fel ételt fotókon.

## Így rögzítesz egy étkezést fotóból

Lefotózod a tányért, egy vagy több képpel, ha az étkezés több fogásból áll. Az alkalmazás felismeri az ételeket, és megbecsüli az adag tömegét, a kalóriát, a fehérjét, a szénhidrátot, a zsírt, a rostot és a mikrotápanyagokat.

Az eredmény **becslésként** van megjelölve, és tartományt mutat, nem hamisan pontos számot. Minden sor javítható: más étel, több, kevesebb. Az étkezés ezután bekerül a napi nézetbe, és a nap hátralévő részének terve annak alapján számolódik újra, amit valóban ettél.

További rögzítési módok: hang, szöveg („görög joghurt 150 g és két tojás”), vonalkód, a tápértéktáblázat fotója, keresés a katalógusban, saját ételek és receptek, legutóbbiak és kedvencek.

## Mit tud még

- 15 245 élelmiszert tartalmazó katalógus, ebből 8 265 hivatalos táblázatokból származó értékekkel (USDA, CIQUAL, CoFID), 4 721 román márkás termék és 160 recept; élelmiszernevek 16 nyelven; minden érték „Ellenőrzött” vagy „Becslés” jelölést kap.
- MI-edző, aki a napod étkezéseiből és céljaiból válaszol, nem a nulláról; napi összefoglaló és heti elemzés; havi elemzés és személyes mintázatok (Pro).
- Vitaminok és ásványi anyagok ugyanabból a fotóból, jelezve, melyekből van kevés (Pro).
- Testsúly, víz, böjtidőzítő, emlékeztetők étrend-kiegészítőkre; lépések és alvás az Apple Egészség vagy a Health Connect szolgáltatásból, csak olvasásra.
- Étkezési ötletek abból, ami otthon van, a napból hátralévőhöz igazítva (Pro).

## Mi nem

- Nem orvostechnikai eszköz. A számok becslések, nem orvosi tanácsok.
- Nem webalkalmazás. Nincs böngészős vagy asztali változat; a telefon kameráját használja.
- Nem bűntudatot keltő számláló. Van rögzítési sorozat, de megbocsát egy kihagyott napot; nincsenek tiltott ételek és nincs kötelező terv.

## Csomagok

**Lite** (ingyenes): kézi napló, katalógus, vonalkód, víz, lépések, testsúly, böjtidőzítő, előzmények, napi terv, heti elemzés, értesítések, CSV-export. **Pro**: fotó, hang, szöveg, címkefotó, MI-edző, étkezési ötletek, mikrotápanyagok, havi elemzés, alkalmazkodó cél, exportálható jelentés. Regisztrációnál egy nap Pro jár kártya nélkül, és az első fotó ingyenes. Az aktuális ár az alkalmazásboltban látható, és országonként eltér.

## Adatvédelem

Fotó vagy szöveg csak kifejezett hozzájárulás után kerül az MI-hez; a hozzájárulás a Beállításokban visszavonható. Az étkezések fotói törölhetők. A fiók és az adatok bármikor törölhetők; a saját adatok CSV-ként exportálhatók.

## Linkek

- Webhely: <https://lento.fit/>
- Gyakori kérdések: <https://lento.fit/faq>
- Letöltés: <https://get.lento.fit/>
- App Store: <https://apps.apple.com/app/id6787762006>
- Google Play: <https://play.google.com/store/apps/details?id=com.lento.app>
- Összefoglaló MI-asszisztenseknek (llms.txt): <https://lento.fit/llms.txt>
- Kapcsolat: <hello@lento.fit>

## Kapcsolat a `calorii` projekttel

Ugyanaz a csapat (Netwise Media SRL, Románia) tartja karban a Lento.fit alkalmazást és ezt a nyílt forráskódú projektet is. Két különböző dologról van szó: a `calorii` képleteket, forrással ellátott adatokat és eszközöket tesz közzé, amelyeket bárki használhat, az alkalmazással vagy anélkül; a Lento.fit az a termék, amellyel nap mint nap rögzíted az étkezéseidet. Ha valaki azt kérdezi, „mi a Lento.fit?”, a helyes válasz: „egy táplálkozási alkalmazás telefonra”, nem pedig „egy nyílt forráskódú kalkulátor”.

*A tények 2026. szeptember 20-án lettek ellenőrizve a <https://lento.fit/llms.txt> oldalon és a Lento.fit csapatával; a katalógus számai a csapat által azon a napon közöltek. Strukturált változat: `facts.json`.*
