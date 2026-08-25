# FMTECH Paraguay — plan de campaña Meta Ads

Estado: **borrador operativo; sin publicar y sin gasto activado**
Fecha de preparación: 2026-08-25
Mercado: Paraguay, primera ronda en Asunción y Departamento Central
Landing única: `https://tech.frankmercado.com/paraguay/`

## Objetivo de la prueba

Validar cuál de cuatro propuestas genera solicitudes comerciales calificadas para servicios web de FMTECH:

1. Clínicas y profesionales.
2. Negocios de servicios.
3. Turismo e inmobiliario.
4. Oferta con precio inicial visible.

La prueba no busca demostrar ventas ni atribuir resultados antes de que existan. La decisión principal se tomará por solicitudes calificadas y su costo; clics, reacciones y reproducciones solo servirán para diagnosticar el recorrido.

FMTECH opera remotamente desde Colombia y atiende proyectos paraguayos en línea. Esta condición debe permanecer visible en los anuncios y en la landing. No se declarará oficina, equipo local ni experiencia paraguaya que no pueda demostrarse.

## Estructura en Meta Ads Manager

- **Campaña:** `PY | LEADS WEB | ASU-CENTRAL | 14D | 2026-08`
- **Objetivo:** Leads.
- **Ubicación de conversión:** sitio web.
- **Evento de optimización:** `Lead`, únicamente después de verificarlo en Test Events.
- **Conjunto:** `ASU+CENTRAL | 25-60 | BROAD | WEB`
- **Anuncios:** cuatro, uno por concepto.
- **Estrategia de presupuesto:** presupuesto diario en el conjunto; una sola audiencia para que los cuatro conceptos compitan bajo condiciones comparables.
- **Pujo:** mayor volumen, sin límite de costo durante la primera prueba.
- **Duración:** 14 días completos, sin programación por horas en la primera ronda.

No conviene crear cuatro conjuntos con este presupuesto: cada uno recibiría una entrega diaria demasiado pequeña. Tampoco se deben crear variantes adicionales antes de obtener una primera señal.

## Presupuesto piloto

| Concepto | COP | PYG estimado |
|---|---:|---:|
| Total, 14 días | $600.000 | ₲1.183.000 |
| Promedio diario | $42.857 | ₲84.500 |

La equivalencia es una estimación de planeación, no una tasa garantizada. Se calculó con referencias oficiales disponibles al preparar el borrador:

- TRM Colombia: COP 3.048,12 por USD, vigente el 2026-08-24, Banco de la República: <https://www.banrep.gov.co/es/glosario/tasa-cambio-trm>
- Referencia Paraguay: ₲6.009,15 por USD, publicada por el Banco Central del Paraguay para el 2026-08-21: <https://www.bcp.gov.py/webapps/web/cotizacion/monedas>
- Relación utilizada: aproximadamente ₲1,97 por COP.

Antes de crear el borrador en Meta se debe confirmar la moneda real de la cuenta publicitaria. Si Meta factura en una moneda distinta, se conserva el techo económico equivalente y se vuelve a calcular el presupuesto ese día.

## Audiencia inicial

### Geografía

Primera ronda:

- Asunción.
- San Lorenzo.
- Fernando de la Mora.
- Luque.
- Lambaré.
- Capiatá.
- Mariano Roque Alonso.
- Limpio.
- Ñemby.
- Villa Elisa.

Usar la opción más cercana a **personas que viven en estas ubicaciones**, si continúa disponible en la interfaz. No incluir todo Paraguay en la primera ronda.

Ciudad del Este queda para una segunda prueba separada. No debe añadirse al conjunto ganador porque su mezcla comercial y fronteriza requiere mensajes propios sobre catálogo, stock, retiro, reservas y atención en más de un idioma.

### Demografía y expansión

- Edad inicial: 25–60.
- Todos los géneros.
- Sin restricción de idioma: el anuncio en español realiza la autoselección y evita excluir dispositivos configurados en guaraní o portugués.
- Audiencia amplia con expansión de Meta activa.
- Si la interfaz aún permite sugerencias, se pueden añadir como señales blandas: pequeña empresa, emprendimiento, administración de páginas comerciales, comercio electrónico y publicidad digital. No convertirlas en restricciones estrechas.
- No utilizar atributos sensibles ni inferir condiciones médicas en el concepto de clínicas.

## Ubicaciones y activos

Usar Advantage+ placements y personalización por ubicación, después de revisar cada vista previa:

- Feed 4:5, 1080 × 1350: archivos `*-feed.webp`.
- Stories/Reels 9:16, 1080 × 1920: archivos `*-story.webp`.

Activos disponibles:

- `01-clinicas-feed.webp` / `01-clinicas-story.webp`
- `02-servicios-feed.webp` / `02-servicios-story.webp`
- `03-turismo-feed.webp` / `03-turismo-story.webp`
- `04-precio-feed.webp` / `04-precio-story.webp`

No añadir Audience Network si la vista previa recorta el texto o si no permite usar correctamente la versión vertical. La prioridad es calidad de lectura, no inventario máximo.

## Destinos y UTMs

Todos los anuncios llevan a la misma landing y cambian únicamente `utm_content`:

| Anuncio | URL |
|---|---|
| Clínicas | `https://tech.frankmercado.com/paraguay/?utm_source=meta&utm_medium=paid_social&utm_campaign=fmtech_py_web_pilot_2026_08&utm_content=clinicas&utm_term={{site_source_name}}_{{placement}}` |
| Servicios | `https://tech.frankmercado.com/paraguay/?utm_source=meta&utm_medium=paid_social&utm_campaign=fmtech_py_web_pilot_2026_08&utm_content=servicios&utm_term={{site_source_name}}_{{placement}}` |
| Turismo/inmobiliario | `https://tech.frankmercado.com/paraguay/?utm_source=meta&utm_medium=paid_social&utm_campaign=fmtech_py_web_pilot_2026_08&utm_content=turismo_inmobiliario&utm_term={{site_source_name}}_{{placement}}` |
| Precio | `https://tech.frankmercado.com/paraguay/?utm_source=meta&utm_medium=paid_social&utm_campaign=fmtech_py_web_pilot_2026_08&utm_content=precio&utm_term={{site_source_name}}_{{placement}}` |

Si Meta no acepta parámetros dinámicos en `utm_term`, reemplazarlo por `meta_placement` y conservar los otros cuatro parámetros sin cambios. No usar acortadores.

## Qué cuenta como resultado

### Solicitud recibida

Formulario completado y recibido, con redirección válida a `/paraguay/gracias/`.

### Solicitud calificada

Debe cumplir, como mínimo, tres de estos criterios:

- Negocio identificable en Paraguay.
- Necesidad concreta de landing, web, catálogo, reservas o sistema.
- Intención de comenzar dentro de 60 días.
- Presupuesto desde ₲1.000.000 o disposición a revisar el alcance.
- Correo o teléfono válidos y respuesta posterior.

### Métricas

- Principal: costo por solicitud calificada.
- Comercial: solicitudes que aceptan reunión y propuestas enviadas.
- De embudo: formularios completados, inicios de formulario y visitas a la landing.
- Diagnóstico creativo: CTR saliente, CPC, frecuencia y distribución por ubicación.
- No declarar ventas hasta confirmar una contratación y pago reales.

## Criterios de pausa

Pausar de inmediato, sin esperar datos, si ocurre cualquiera de estos casos:

- Identidad distinta de FMTECH en el anuncio.
- URL incorrecta, error HTTP, formulario roto o redirección fallida.
- Pixel incorrecto, evento `Lead` duplicado o disparado sin envío confirmado.
- Anuncio rechazado, texto cortado de forma material o perfil/cuenta equivocados.
- Mensajes de spam o leads provenientes de geografías fuera de alcance por un error de configuración.

Umbrales operativos provisionales, no pronósticos:

- Revisar un anuncio cuando consuma COP $75.000 (aprox. ₲148.000) sin inicio de formulario.
- Pausarlo cuando consuma COP $100.000 (aprox. ₲197.000) sin una solicitud completada, después de comprobar que el embudo funciona.
- Pausar toda la campaña y auditar mensaje, segmentación y landing si consume COP $180.000 (aprox. ₲355.000) sin ninguna solicitud válida.
- Después de al menos 1.000 impresiones por pieza, pausar la que tenga menos de la mitad del CTR saliente mediano de la campaña y cero inicios de formulario. No tomar esta decisión antes de alcanzar la muestra.
- No pausar una pieza solo porque tiene menos reacciones.

## Criterios de escala

Escalar únicamente si se cumplen todos:

- Al menos tres solicitudes calificadas en una ventana de siete días.
- Costo por solicitud calificada igual o inferior a COP $45.000, aproximadamente ₲89.000.
- Formulario, correo de recepción y evento `Lead` sin fallos ni duplicados.
- Calidad consistente: no concentrada en spam, proveedores o personas fuera de Paraguay.

Método:

- Aumentar el presupuesto diario entre 15% y 20%.
- Esperar 48 horas antes del siguiente ajuste.
- Conservar al menos un anuncio de control sin modificaciones.
- Probar un nuevo ángulo dentro del conjunto ganador antes de ampliar geografía.
- Abrir Ciudad del Este como conjunto independiente y con presupuesto adicional; no extraerlo del presupuesto que ya sostiene Asunción/Central.

## Calendario de lectura

- **Día 0:** verificación técnica y publicación, solo cuando el checklist esté completo.
- **Día 1:** entrega, rechazos, URL, identidad y eventos. No optimizar por rendimiento.
- **Día 3:** primera revisión de distribución y calidad del tráfico.
- **Día 7:** revisión intermedia de formularios y calidad comercial; aplicar pausas justificadas.
- **Día 14:** cerrar cohorte y decidir: detener, iterar mensaje, escalar o preparar CDE.

## Estado de autorización

Este documento autoriza únicamente la preparación del borrador. No autoriza publicar anuncios, añadir un método de pago, cargar saldo ni activar presupuesto. Esas acciones quedan fuera de esta entrega.
