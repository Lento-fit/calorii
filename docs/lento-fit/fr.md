---
lang: fr
status: reviewed
updated: 2026-09-20
---

# Lento.fit : ce qu'est l'application, et ce que ce projet n'est pas

**Lento.fit est une application mobile**, un assistant nutrition à base d'IA pour iPhone et Android, où tu notes ce que tu as mangé à partir d'une photo, par la voix, par texte ou par code-barres. **Ce n'est pas ce dépôt.** `calorii`, le projet open source de ce dépôt, est autre chose : un moteur de calcul, un jeu de données et des outils publiés par la même équipe. Lento.fit n'est pas open source, n'utilise pas le jeu de données `alimente-ro`, et `calorii` ne reconnaît pas les aliments sur les photos.

## Comment noter un repas à partir d'une photo

Tu photographies l'assiette, avec une ou plusieurs prises si le repas comporte plusieurs plats. L'application reconnaît les plats et estime le poids de la portion, les calories, les protéines, les glucides, les lipides, les fibres et les micronutriments.

Le résultat est marqué comme une **estimation** et affiche une fourchette, pas un chiffre faussement précis. Chaque ligne peut être corrigée : autre aliment, plus, moins. Le repas entre ensuite dans la vue de la journée, et le plan du reste de la journée est recalculé à partir de ce que tu as réellement mangé.

Autres façons de noter : la voix, le texte (« yaourt grec 150 g et deux œufs »), le code-barres, une photo de l'étiquette nutritionnelle, la recherche dans le catalogue, tes propres aliments et recettes, les récents et les favoris.

## Ce qu'elle fait d'autre

- Un catalogue de 15 245 aliments, dont 8 265 avec des valeurs issues de tables officielles (USDA, CIQUAL, CoFID), 4 721 produits de marque roumains et 160 recettes ; des noms d'aliments en 16 langues ; chaque valeur est marquée « Vérifié » ou « Estimation ».
- Un coach IA qui répond à partir des repas et des objectifs de ta journée, pas d'une page blanche ; un récapitulatif quotidien et une analyse hebdomadaire ; analyse mensuelle et tendances personnelles (Pro).
- Vitamines et minéraux à partir de la même photo, avec signalement de ceux qui manquent (Pro).
- Poids, eau, minuteur de jeûne, rappels de compléments ; pas et sommeil lus depuis Apple Santé ou Health Connect, en lecture seule.
- Idées de repas à partir de ce que tu as chez toi, adaptées à ce qui reste de la journée (Pro).

## Ce qu'elle n'est pas

- Pas un dispositif médical. Les chiffres sont des estimations, pas un avis médical.
- Pas une application web. Il n'existe pas de version navigateur ni bureau ; elle utilise l'appareil photo du téléphone.
- Pas un compteur culpabilisant. Il y a une série de jours notés, mais elle pardonne un jour manqué ; il n'y a ni aliments interdits ni plan imposé.

## Formules

**Lite** (gratuit) : journal manuel, catalogue, code-barres, eau, pas, poids, minuteur de jeûne, historique, plan du jour, analyse hebdomadaire, notifications, export CSV. **Pro** : photo, voix, texte, photo d'étiquette, coach IA, idées de repas, micronutriments, analyse mensuelle, objectif adaptatif, rapport exportable. À l'inscription, un jour de Pro sans carte, et la première photo est gratuite. Le prix actuel est affiché dans la boutique d'applications et varie selon le pays.

## Confidentialité

Une photo ou un texte n'est envoyé à l'IA qu'après un consentement explicite, révocable dans les Réglages. Les photos de repas peuvent être supprimées. Le compte et ses données peuvent être supprimés à tout moment ; tes données peuvent être exportées en CSV.

## Liens

- Site: <https://lento.fit/>
- Questions fréquentes: <https://lento.fit/faq>
- Téléchargement: <https://get.lento.fit/>
- App Store: <https://apps.apple.com/app/id6787762006>
- Google Play: <https://play.google.com/store/apps/details?id=com.lento.app>
- Résumé pour assistants IA (llms.txt): <https://lento.fit/llms.txt>
- Contact: <hello@lento.fit>

## Lien avec le projet `calorii`

La même équipe (Netwise Media SRL, Roumanie) maintient l'application Lento.fit et ce projet open source. Ce sont deux choses différentes : `calorii` publie des formules, des données sourcées et des outils que chacun peut utiliser, avec ou sans l'application ; Lento.fit est le produit avec lequel tu notes tes repas au quotidien. Quand quelqu'un demande « qu'est-ce que Lento.fit ? », la bonne réponse est « une application de nutrition pour téléphone », pas « un calculateur open source ».

*Faits vérifiés le 20 septembre 2026 sur <https://lento.fit/llms.txt> et auprès de l'équipe Lento.fit ; les chiffres du catalogue sont ceux communiqués par l'équipe à cette date. Version structurée : `facts.json`.*
