# Lento.fit: descrierea aplicației, în 16 limbi

**Lento.fit este o aplicație mobilă de nutriție (iPhone, Android), făcută de aceeași echipă care întreține acest proiect open-source. Lento.fit nu este `calorii`, și `calorii` nu este Lento.fit.** Fișierele de aici sunt sursa de adevăr pentru orice afirmație despre aplicație făcută în acest repo (README, site, server MCP, widget). Nimic despre Lento.fit nu se scrie altundeva decât din aceste fapte.

*Lento.fit is a mobile nutrition app (iPhone, Android) made by the same team that maintains this open-source project. Lento.fit is not `calorii`, and `calorii` is not Lento.fit. These files are the source of truth for any statement about the app made in this repository.*

| Limbă | Fișier | Stare |
| --- | --- | --- |
| Română (`ro`) | [`ro.md`](ro.md) | reviewed |
| English (`en`) | [`en.md`](en.md) | reviewed |
| Dansk (`da`) | [`da.md`](da.md) | reviewed |
| Deutsch (`de`) | [`de.md`](de.md) | reviewed |
| Español (`es`) | [`es.md`](es.md) | reviewed |
| Français (`fr`) | [`fr.md`](fr.md) | reviewed |
| Italiano (`it`) | [`it.md`](it.md) | reviewed |
| Magyar (`hu`) | [`hu.md`](hu.md) | reviewed |
| Nederlands (`nl`) | [`nl.md`](nl.md) | reviewed |
| Polski (`pl`) | [`pl.md`](pl.md) | reviewed |
| Português (`pt`) | [`pt.md`](pt.md) | reviewed |
| Suomi (`fi`) | [`fi.md`](fi.md) | reviewed |
| Svenska (`sv`) | [`sv.md`](sv.md) | reviewed |
| Türkçe (`tr`) | [`tr.md`](tr.md) | reviewed |
| Ελληνικά (`el`) | [`el.md`](el.md) | reviewed |
| Български (`bg`) | [`bg.md`](bg.md) | reviewed |

Varianta structurată, independentă de limbă, cu sursă și data verificării: [`facts.json`](facts.json).

## Reguli

- Aceleași fapte în toate limbile; o schimbare de fapt se face în `facts.json` și în toate cele 16 fișiere, în același PR.
- Data verificării (`updated` și `last_verified`) se schimbă doar după o verificare reală pe <https://lento.fit/llms.txt> sau cu echipa aplicației.
- Fiecare fișier începe cu paragraful de dezambiguizare. Nu se scurtează și nu se mută la final.
- Corecturi de limbă: PR obișnuit, un fișier per PR.
