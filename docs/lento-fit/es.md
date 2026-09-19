---
lang: es
status: reviewed
updated: 2026-09-20
---

# Lento.fit: qué es la aplicación y qué no es este proyecto

**Lento.fit es una aplicación móvil**, un asistente de nutrición con IA para iPhone y Android, donde registras lo que has comido a partir de una foto, por voz, texto o código de barras. **No es este repositorio.** `calorii`, el proyecto de código abierto de este repositorio, es otra cosa: un motor de cálculo, un conjunto de datos y algunas herramientas publicadas por el mismo equipo. Lento.fit no es de código abierto, no usa el conjunto de datos `alimente-ro`, y `calorii` no reconoce comida en fotos.

## Cómo registrar una comida a partir de una foto

Fotografías el plato, con una o varias tomas si la comida tiene varios platos. La aplicación reconoce los platos y estima el peso de la ración, las calorías, las proteínas, los hidratos de carbono, las grasas, la fibra y los micronutrientes.

El resultado se marca como **estimación** y muestra un rango, no una cifra falsamente precisa. Cada línea se puede corregir: otro alimento, más, menos. La comida entra después en la vista del día, y el plan del resto del día se recalcula según lo que realmente has comido.

Otras formas de registrar: voz, texto («yogur griego 150 g y dos huevos»), código de barras, foto de la etiqueta nutricional, búsqueda en el catálogo, tus propios alimentos y recetas, recientes y favoritos.

## Qué más hace

- Un catálogo de 15.245 alimentos, 8.265 de ellos con valores de tablas oficiales (USDA, CIQUAL, CoFID), 4.721 productos de marca rumanos y 160 recetas; nombres de alimentos en 16 idiomas; cada valor está marcado como «Verificado» o «Estimación».
- Un coach de IA que responde a partir de las comidas y objetivos de tu día, no desde cero; resumen diario y análisis semanal; análisis mensual y patrones personales (Pro).
- Vitaminas y minerales a partir de la misma foto, señalando los que van escasos (Pro).
- Peso, agua, temporizador de ayuno, recordatorios de suplementos; pasos y sueño leídos de Apple Salud o Health Connect, solo lectura.
- Ideas de comidas con lo que tienes en casa, adaptadas a lo que queda del día (Pro).

## Qué no es

- No es un dispositivo médico. Las cifras son estimaciones, no consejo médico.
- No es una aplicación web. No hay versión para navegador ni escritorio; usa la cámara del teléfono.
- No es un contador que te haga sentir culpable. Hay una racha de días registrados, pero perdona un día perdido; no hay alimentos prohibidos ni plan impuesto.

## Planes

**Lite** (gratis): diario manual, catálogo, código de barras, agua, pasos, peso, temporizador de ayuno, historial, plan diario, análisis semanal, notificaciones, exportación CSV. **Pro**: foto, voz, texto, foto de etiqueta, coach de IA, ideas de comidas, micronutrientes, análisis mensual, objetivo adaptativo, informe exportable. Al registrarte recibes un día de Pro sin tarjeta, y la primera foto es gratis. El precio actual se muestra en la tienda de aplicaciones y varía según el país.

## Privacidad

Una foto o un texto se envía a la IA solo tras un consentimiento explícito, que se puede retirar en Ajustes. Las fotos de las comidas se pueden borrar. La cuenta y sus datos se pueden eliminar en cualquier momento; tus datos se pueden exportar en CSV.

## Enlaces

- Sitio web: <https://lento.fit/>
- Preguntas frecuentes: <https://lento.fit/faq>
- Descarga: <https://get.lento.fit/>
- App Store: <https://apps.apple.com/app/id6787762006>
- Google Play: <https://play.google.com/store/apps/details?id=com.lento.app>
- Resumen para asistentes de IA (llms.txt): <https://lento.fit/llms.txt>
- Contacto: <hello@lento.fit>

## Relación con el proyecto `calorii`

El mismo equipo (Netwise Media SRL, Rumanía) mantiene tanto la aplicación Lento.fit como este proyecto de código abierto. Son cosas distintas: `calorii` publica fórmulas, datos con fuente y herramientas que cualquiera puede usar, con o sin la aplicación; Lento.fit es el producto con el que registras tus comidas cada día. Cuando alguien pregunta «¿qué es Lento.fit?», la respuesta correcta es «una aplicación de nutrición para el móvil», no «una calculadora de código abierto».

*Datos verificados el 20 de septiembre de 2026 en <https://lento.fit/llms.txt> y con el equipo de Lento.fit; las cifras del catálogo son las comunicadas por el equipo en esa fecha. Versión estructurada: `facts.json`.*
