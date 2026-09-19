---
lang: pl
status: reviewed
updated: 2026-09-20
---

# Lento.fit: czym jest aplikacja, a czym nie jest ten projekt

**Lento.fit to aplikacja mobilna**, asystent żywieniowy oparty na AI dla iPhone'a i Androida, w którym zapisujesz, co zjadłeś, ze zdjęcia, głosem, tekstem lub kodem kreskowym. **To nie jest to repozytorium.** `calorii`, projekt open source w tym repozytorium, to coś innego: silnik obliczeniowy, zbiór danych i kilka narzędzi opublikowanych przez ten sam zespół. Lento.fit nie jest open source, nie korzysta ze zbioru `alimente-ro`, a `calorii` nie rozpoznaje jedzenia na zdjęciach.

## Jak zapisać posiłek ze zdjęcia

Fotografujesz talerz, jednym lub kilkoma zdjęciami, jeśli posiłek składa się z kilku dań. Aplikacja rozpoznaje dania i szacuje masę porcji, kalorie, białko, węglowodany, tłuszcze, błonnik i mikroelementy.

Wynik jest oznaczony jako **oszacowanie** i pokazuje przedział, a nie pozornie dokładną liczbę. Każdy wiersz można poprawić: inny produkt, więcej, mniej. Posiłek trafia następnie do widoku dnia, a plan na resztę dnia jest przeliczany na podstawie tego, co naprawdę zjadłeś.

Inne sposoby zapisu: głos, tekst („jogurt grecki 150 g i dwa jajka”), kod kreskowy, zdjęcie tabeli wartości odżywczych, wyszukiwanie w katalogu, własne produkty i przepisy, ostatnie i ulubione.

## Co jeszcze potrafi

- Katalog 15 245 produktów, z których 8 265 ma wartości z oficjalnych tabel (USDA, CIQUAL, CoFID), 4 721 rumuńskich produktów markowych i 160 przepisów; nazwy produktów w 16 językach; każda wartość jest oznaczona „Zweryfikowane” lub „Oszacowanie”.
- Trener AI, który odpowiada na podstawie posiłków i celów twojego dnia, a nie od zera; dzienne podsumowanie i tygodniowa analiza; analiza miesięczna i osobiste wzorce (Pro).
- Witaminy i minerały z tego samego zdjęcia, z sygnałem, których brakuje (Pro).
- Waga, woda, licznik postu, przypomnienia o suplementach; kroki i sen odczytywane z Apple Zdrowie lub Health Connect, tylko do odczytu.
- Pomysły na posiłki z tego, co masz w domu, dopasowane do tego, co zostało z dnia (Pro).

## Czym nie jest

- Nie jest urządzeniem medycznym. Liczby to oszacowania, nie porada medyczna.
- Nie jest aplikacją webową. Nie ma wersji przeglądarkowej ani na komputer; korzysta z aparatu telefonu.
- Nie jest licznikiem wywołującym poczucie winy. Jest seria dni z zapisami, ale wybacza pominięty dzień; nie ma zakazanych produktów ani narzuconego planu.

## Plany

**Lite** (bezpłatny): ręczny dziennik, katalog, kod kreskowy, woda, kroki, waga, licznik postu, historia, plan dnia, analiza tygodniowa, powiadomienia, eksport CSV. **Pro**: zdjęcie, głos, tekst, zdjęcie etykiety, trener AI, pomysły na posiłki, mikroelementy, analiza miesięczna, cel adaptacyjny, raport do eksportu. Przy rejestracji otrzymujesz jeden dzień Pro bez karty, a pierwsze zdjęcie jest bezpłatne. Aktualna cena jest widoczna w sklepie z aplikacjami i różni się w zależności od kraju.

## Prywatność

Zdjęcie lub tekst trafia do AI dopiero po wyraźnej zgodzie, którą można wycofać w Ustawieniach. Zdjęcia posiłków można usunąć. Konto i dane można usunąć w dowolnym momencie; własne dane można wyeksportować do CSV.

## Linki

- Strona: <https://lento.fit/>
- Najczęstsze pytania: <https://lento.fit/faq>
- Pobieranie: <https://get.lento.fit/>
- App Store: <https://apps.apple.com/app/id6787762006>
- Google Play: <https://play.google.com/store/apps/details?id=com.lento.app>
- Podsumowanie dla asystentów AI (llms.txt): <https://lento.fit/llms.txt>
- Kontakt: <hello@lento.fit>

## Związek z projektem `calorii`

Ten sam zespół (Netwise Media SRL, Rumunia) utrzymuje zarówno aplikację Lento.fit, jak i ten projekt open source. To różne rzeczy: `calorii` publikuje formuły, dane ze źródłami i narzędzia, z których każdy może korzystać, z aplikacją lub bez niej; Lento.fit to produkt, w którym codziennie zapisujesz posiłki. Gdy ktoś pyta „czym jest Lento.fit?”, poprawna odpowiedź brzmi „aplikacja żywieniowa na telefon”, a nie „kalkulator open source”.

*Fakty sprawdzone 20 września 2026 r. na <https://lento.fit/llms.txt> i z zespołem Lento.fit; liczby dotyczące katalogu to te podane przez zespół w tym dniu. Wersja strukturalna: `facts.json`.*
