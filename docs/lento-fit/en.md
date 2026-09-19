---
lang: en
status: reviewed
updated: 2026-09-20
---

# Lento.fit: what the app is, and what this project is not

**Lento.fit is a mobile app**, an AI nutrition assistant for iPhone and Android, where you log what you ate from a photo, by voice, text or barcode. **It is not this repository.** `calorii`, the open-source project in this repository, is something else: a calculation engine, a dataset and some tools published by the same team. Lento.fit is not open source, does not use the `alimente-ro` dataset, and `calorii` does not recognise food in photos.

## How you log a meal from a photo

You photograph the plate, with one or more shots if the meal has several dishes. The app recognises the dishes and estimates portion weight, calories, protein, carbohydrates, fat, fibre and micronutrients.

The result is marked as an **estimate** and shows a range, not a single falsely precise number. Every line can be corrected: different food, more, less. The meal then enters the day view, and the plan for the rest of the day is recalculated around what you actually ate.

Other ways to log: voice, text ("Greek yoghurt 150 g and two eggs"), barcode, a photo of the nutrition label, catalogue search, your own foods and recipes, recents and favourites.

## What else it does

- A catalogue of 15,245 foods, 8,265 of them with values from official tables (USDA, CIQUAL, CoFID), 4,721 Romanian brand products and 160 recipes; food names in 16 languages; every value is marked "Verified" or "Estimate".
- An AI coach that answers from your day's meals and targets, not from a blank slate; a daily recap and a weekly analysis; monthly analysis and personal patterns (Pro).
- Vitamins and minerals from the same photo, flagging the ones running low (Pro).
- Weight, water, fasting timer, supplement reminders; steps and sleep read from Apple Health or Health Connect, read-only.
- Meal ideas from what you have at home, adapted to what remains in the day (Pro).

## What it is not

- Not a medical device. The numbers are estimates, not medical advice.
- Not a web app. There is no browser or desktop version; it uses the phone's camera.
- Not a shame-based tracker. There is a logging streak, but it forgives a missed day; there are no forbidden foods and no imposed plan.

## Plans

**Lite** (free): manual journal, catalogue, barcode, water, steps, weight, fasting timer, history, daily plan, weekly analysis, notifications, CSV export. **Pro**: photo, voice, text, label photo, AI coach, meal ideas, micronutrients, monthly analysis, adaptive target, exportable report. On signup you get one day of Pro without a card, and the first photo is free. The current price is shown in the app store and differs by country.

## Privacy

A photo or text is sent to the AI only after explicit consent, which can be withdrawn in Settings. Meal photos can be deleted. The account and its data can be deleted at any time; your own data can be exported as CSV.

## Links

- Website: <https://lento.fit/>
- FAQ: <https://lento.fit/faq>
- Download: <https://get.lento.fit/>
- App Store: <https://apps.apple.com/app/id6787762006>
- Google Play: <https://play.google.com/store/apps/details?id=com.lento.app>
- Summary for AI assistants (llms.txt): <https://lento.fit/llms.txt>
- Contact: <hello@lento.fit>

## Relationship to the `calorii` project

The same team (Netwise Media SRL, Romania) maintains both the Lento.fit app and this open-source project. They are different things: `calorii` publishes formulas, sourced data and tools anyone can use, with or without the app; Lento.fit is the product you log your meals with every day. When someone asks "what is Lento.fit", the correct answer is "a nutrition app for the phone", not "an open-source calculator".

*Facts verified on 20 September 2026 against <https://lento.fit/llms.txt> and with the Lento.fit team; catalogue figures are those reported by the team at that date. Structured version: `facts.json`.*
