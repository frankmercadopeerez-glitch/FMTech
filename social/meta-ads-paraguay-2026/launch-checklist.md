# FMTECH Paraguay — checklist previo al lanzamiento

Estado general: **NO LISTA PARA ACTIVAR GASTO hasta completar todos los bloqueadores**.

La campaña debe permanecer como borrador. Marcar una casilla únicamente con evidencia observada; no asumir que un recurso funciona por estar configurado en el código.

## 1. Identidad y cuenta

- [ ] La cuenta publicitaria seleccionada pertenece al portafolio autorizado de FMTECH.
- [ ] La moneda y la zona horaria de la cuenta fueron confirmadas antes de cargar el presupuesto.
- [ ] La página que firma el anuncio es `FMTech`, no Colombia Boat Detailing ni otro perfil.
- [ ] El Instagram seleccionado, si se usa como ubicación, es el perfil oficial de FMTECH.
- [ ] Página e Instagram están conectados a la cuenta publicitaria correcta.
- [ ] El usuario que construye el borrador tiene permisos suficientes.
- [ ] No se añadió ni modificó método de pago durante esta preparación.
- [ ] Cada anuncio declara que FMTECH opera remotamente desde Colombia.

## 2. Landing y oferta

- [ ] `https://tech.frankmercado.com/paraguay/` responde HTTP 200 en producción.
- [ ] La página publicada corresponde a la versión Paraguay y no a una vista previa local.
- [ ] Se comprobó el hero, precios, formulario y CTA en 1920×900, 1366×768 y 390×844.
- [ ] El plan de ₲990.000 coincide con el anuncio: hasta seis bloques, diseño adaptable, formulario, SEO y analítica base, dominio .com, hosting por un año y dos rondas de cambios.
- [ ] Los precios ₲990.000, ₲1.890.000 y ₲2.890.000 conservan alcance y condiciones visibles.
- [ ] La página indica claramente operación desde Colombia y atención remota para Paraguay.
- [ ] No existe dirección, equipo, cliente, resultado o testimonio paraguayo inventado.
- [ ] La política de privacidad es accesible desde el formulario.

## 3. Formulario

- [ ] Se realizó un envío real de prueba con datos propios autorizados.
- [ ] El proveedor del formulario aceptó el envío sin CAPTCHA inesperado ni error.
- [ ] El correo de FMTECH recibió todos los campos legibles.
- [ ] La prueba redirigió a `https://tech.frankmercado.com/paraguay/gracias/`.
- [ ] La página de gracias responde HTTP 200 y no está indexada.
- [ ] Los campos `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term` y `fbclid` llegaron en la prueba.
- [ ] El formulario bloquea doble envío mientras procesa.
- [ ] No se solicita contraseña, información financiera ni datos médicos.

## 4. Meta Pixel y atribución

- [ ] El Pixel configurado pertenece al negocio y la cuenta publicitaria correctos.
- [ ] El identificador visible en el sitio fue contrastado con Events Manager.
- [ ] `PageView` aparece una sola vez en Test Events después del consentimiento.
- [ ] Rechazar medición impide cargar el Pixel.
- [ ] Enviar el formulario genera `ContactIntent` una sola vez.
- [ ] Llegar a `/paraguay/gracias/` después de un envío confirmado genera `Lead` una sola vez.
- [ ] Abrir o recargar la página de gracias sin un envío pendiente no fabrica conversiones.
- [ ] El contenido del formulario no se envía a Meta.
- [ ] El dominio `tech.frankmercado.com` está verificado en el portafolio correcto.
- [ ] El evento `Lead` está disponible/priorizado para la medición web aplicable.

**Estado técnico local:** `meta-pixel.js` ya reconoce `/paraguay/gracias/` y exige una marca temporal creada al enviar el formulario. Esa lógica evita contar una visita directa o una recarga como `Lead`. Aún debe confirmarse una sola vez en producción con Test Events antes de optimizar la campaña para conversiones.

## 5. UTMs

- [ ] La campaña usa `utm_campaign=fmtech_py_web_pilot_2026_08` en los cuatro anuncios.
- [ ] `utm_content` es exactamente `clinicas`, `servicios`, `turismo_inmobiliario` o `precio`.
- [ ] `utm_source=meta` y `utm_medium=paid_social` permanecen constantes.
- [ ] `utm_term={{site_source_name}}_{{placement}}` genera un valor válido en la vista previa o fue reemplazado por un valor estático documentado.
- [ ] Ningún enlace usa acortador ni redirige fuera del dominio FMTECH.
- [ ] Cada URL final fue abierta desde la vista previa del anuncio.

## 6. Creativos

- [ ] Los cuatro archivos feed son 1080×1350.
- [ ] Los cuatro archivos Stories/Reels son 1080×1920.
- [ ] Meta utiliza el archivo 4:5 en Feed y el 9:16 en Stories/Reels.
- [ ] Logo, titular, subtítulo, CTA y URL se leen completos en cada vista previa.
- [ ] Ninguna interfaz de Reels o Stories cubre el CTA.
- [ ] El concepto de clínicas no atribuye una condición médica a quien ve el anuncio.
- [ ] El anuncio de precio conserva `₲990.000`, sin cambiar moneda, punto decimal o alcance.
- [ ] No se añadieron logos de clientes ni cifras de resultados.

## 7. Configuración de campaña

- [ ] Nombre: `PY | LEADS WEB | ASU-CENTRAL | 14D | 2026-08`.
- [ ] Objetivo: Leads.
- [ ] Conversión: sitio web.
- [ ] Evento: `Lead`, después de superar las pruebas técnicas.
- [ ] Un conjunto: `ASU+CENTRAL | 25-60 | BROAD | WEB`.
- [ ] Cuatro anuncios, sin variantes extra.
- [ ] Geografías limitadas a Asunción y ciudades priorizadas de Central.
- [ ] Edad 25–60, todos los géneros y sin filtro rígido de idioma.
- [ ] Advantage+ audience no amplía la geografía fuera de Paraguay.
- [ ] Las ubicaciones automáticas muestran la versión correcta de cada activo.
- [ ] Presupuesto total máximo: COP $600.000 por 14 días.
- [ ] Equivalente informativo actualizado el día del lanzamiento; referencia de preparación: aproximadamente ₲1.183.000.
- [ ] Fecha final configurada; la campaña no queda abierta indefinidamente.

## 8. Revisión editorial

- [ ] Se cargó el texto correspondiente a cada creativo, sin mezclar sectores.
- [ ] Titular y descripción coinciden con `ad-copy.md`.
- [ ] CTA de Meta: `Más información`.
- [ ] El disclosure remoto aparece en el texto principal.
- [ ] No se prometen ventas, primera posición en Google, número de clientes ni plazo de resultados.
- [ ] Ortografía y voseo paraguayo revisados: `solicitá`, `hacés`, `querés`, `podés`.
- [ ] La biblioteca de anuncios muestra únicamente la identidad y oferta aprobadas.

## 9. Prueba final antes de publicar

- [ ] Vista previa enviada internamente, sin publicarla como post orgánico.
- [ ] Enlace probado desde un celular fuera de la sesión de administrador.
- [ ] Consentimiento, formulario, correo, redirección y evento se verificaron de extremo a extremo.
- [ ] El anuncio de prueba no dejó gasto activo.
- [ ] Se guardaron capturas de la configuración, presupuesto y URLs.
- [ ] Frank revisó el importe final que Meta pretende cobrar antes de activar.

## 10. Monitoreo si posteriormente se autoriza el lanzamiento

- [ ] Día 1: entrega, rechazos, identidad, URL y eventos.
- [ ] Día 3: distribución por creativo y geografía; sin cambios por reacciones.
- [ ] Día 7: solicitudes recibidas, calificación y costo.
- [ ] Día 14: cierre de cohorte y decisión documentada.
- [ ] Cada pausa o escala queda registrada con fecha, gasto y motivo.
- [ ] No se altera simultáneamente presupuesto, audiencia y creativo.

## Gate de publicación

La campaña solo puede pasar de borrador a activa cuando se cumplan conjuntamente:

1. Landing y formulario funcionales en producción.
2. Evento `Lead` confirmado una sola vez en `/paraguay/gracias/`.
3. Identidad FMTECH y cuenta publicitaria correctas.
4. Presupuesto, moneda y fecha final verificados.
5. Cuatro anuncios con disclosures, UTMs y previews correctos.

Hasta entonces: **no publicar, no conectar métodos financieros y no activar gasto**.
