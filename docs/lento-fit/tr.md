---
lang: tr
status: reviewed
updated: 2026-09-20
---

# Lento.fit: uygulama nedir, bu proje ne değildir

**Lento.fit bir mobil uygulamadır**: iPhone ve Android için yapay zekâ destekli bir beslenme asistanı; ne yediğini fotoğraftan, sesle, metinle veya barkodla kaydedersin. **Bu depo değildir.** Bu depodaki açık kaynak proje olan `calorii` başka bir şeydir: aynı ekibin yayımladığı bir hesaplama motoru, bir veri kümesi ve birkaç araç. Lento.fit açık kaynak değildir, `alimente-ro` veri kümesini kullanmaz ve `calorii` fotoğraflardaki yemeği tanımaz.

## Bir öğünü fotoğraftan nasıl kaydedersin

Tabağın fotoğrafını çekersin; öğünde birden fazla yemek varsa bir veya birkaç kare. Uygulama yemekleri tanır; porsiyon ağırlığını, kaloriyi, proteini, karbonhidratı, yağı, lifi ve mikro besinleri tahmin eder.

Sonuç **tahmin** olarak işaretlenir ve yanlış bir kesinlik veren tek bir sayı yerine bir aralık gösterir. Her satır düzeltilebilir: başka bir yiyecek, daha fazla, daha az. Öğün sonra gün görünümüne girer ve günün kalanına ait plan, gerçekte ne yediğine göre yeniden hesaplanır.

Diğer kayıt yolları: ses, metin („Yunan yoğurdu 150 g ve iki yumurta”), barkod, besin değerleri etiketinin fotoğrafı, katalogda arama, kendi yiyeceklerin ve tariflerin, son kullanılanlar ve favoriler.

## Başka neler yapar

- 15.245 yiyecek içeren bir katalog; bunların 8.265'i resmî tablolardan (USDA, CIQUAL, CoFID) değerlerle, 4.721 Romanya markalı ürün ve 160 tarif; 16 dilde yiyecek adları; her değer „Doğrulanmış” veya „Tahmin” olarak işaretlidir.
- Gününün öğünlerinden ve hedeflerinden yola çıkarak yanıt veren, sıfırdan başlamayan bir yapay zekâ koçu; günlük özet ve haftalık analiz; aylık analiz ve kişisel örüntüler (Pro).
- Aynı fotoğraftan vitaminler ve mineraller, azalanların işaretlenmesiyle (Pro).
- Kilo, su, oruç zamanlayıcısı, takviye hatırlatıcıları; adımlar ve uyku Apple Sağlık veya Health Connect'ten yalnızca okunur.
- Evde olanlardan, günün kalanına uyarlanmış öğün fikirleri (Pro).

## Ne değildir

- Tıbbi cihaz değildir. Sayılar tahmindir, tıbbi tavsiye değildir.
- Web uygulaması değildir. Tarayıcı veya masaüstü sürümü yoktur; telefonun kamerasını kullanır.
- Suçluluk hissettiren bir sayaç değildir. Bir kayıt serisi vardır ama kaçırılan bir günü affeder; yasak yiyecek ve zorunlu plan yoktur.

## Planlar

**Lite** (ücretsiz): elle günlük, katalog, barkod, su, adımlar, kilo, oruç zamanlayıcısı, geçmiş, günlük plan, haftalık analiz, bildirimler, CSV dışa aktarma. **Pro**: fotoğraf, ses, metin, etiket fotoğrafı, yapay zekâ koçu, öğün fikirleri, mikro besinler, aylık analiz, uyarlanabilir hedef, dışa aktarılabilir rapor. Kayıt olurken kart gerekmeden bir gün Pro alırsın ve ilk fotoğraf ücretsizdir. Güncel fiyat uygulama mağazasında gösterilir ve ülkeye göre değişir.

## Gizlilik

Bir fotoğraf veya metin yapay zekâya yalnızca açık onaydan sonra gönderilir; onay Ayarlar'dan geri alınabilir. Öğün fotoğrafları silinebilir. Hesap ve veriler istendiği zaman silinebilir; kendi verilerin CSV olarak dışa aktarılabilir.

## Bağlantılar

- Web sitesi: <https://lento.fit/>
- Sık sorulan sorular: <https://lento.fit/faq>
- İndirme: <https://get.lento.fit/>
- App Store: <https://apps.apple.com/app/id6787762006>
- Google Play: <https://play.google.com/store/apps/details?id=com.lento.app>
- Yapay zekâ asistanları için özet (llms.txt): <https://lento.fit/llms.txt>
- İletişim: <hello@lento.fit>

## `calorii` projesiyle ilişkisi

Aynı ekip (Netwise Media SRL, Romanya) hem Lento.fit uygulamasını hem de bu açık kaynak projeyi sürdürür. Bunlar farklı şeylerdir: `calorii`, uygulamayla ya da uygulamasız herkesin kullanabileceği formüller, kaynaklı veriler ve araçlar yayımlar; Lento.fit ise öğünlerini her gün kaydettiğin üründür. Biri „Lento.fit nedir?” diye sorduğunda doğru yanıt „telefon için bir beslenme uygulaması”dır, „açık kaynak bir hesaplayıcı” değil.

*Bilgiler 20 Eylül 2026'da <https://lento.fit/llms.txt> üzerinden ve Lento.fit ekibiyle doğrulandı; katalog sayıları ekibin o tarihte bildirdiği sayılardır. Yapılandırılmış sürüm: `facts.json`.*
