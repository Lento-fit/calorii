# Traduceri ale numelor de alimente

Un fișier per limbă, `<locale>.json`, cu cheia = `id`-ul înregistrării din `alimente-ro.json` și valoarea = numele în limba respectivă. `ro` și `en` stau direct în `alimente-ro.json` (`nume.ro`, `nume.en`); aici vin celelalte limbi.

```json
{ "orez-alb-fiert": "Gekochter weißer Reis", "mamaliga": "Polenta" }
```

Reguli: o limbă = un fișier = un PR; numele sunt revizuite de un vorbitor nativ; nu se traduc automat fără revizie; nu se duplică valori nutriționale aici. Validatorul semnalează cheile care nu există în colecție.
