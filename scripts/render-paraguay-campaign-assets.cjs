const path = require("path");
const sharp = require("sharp");

const root = path.resolve(__dirname, "..");
const imageDir = path.join(root, "images", "paraguay");
const outputDir = path.join(root, "social", "meta-ads-paraguay-2026");

function esc(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&apos;",
  })[character]);
}

function lines(text, x, y, size, lineHeight, color = "#ffffff", weight = 800) {
  return text.map((line, index) => `<text x="${x}" y="${y + index * lineHeight}" fill="${color}" font-family="Arial, Helvetica, sans-serif" font-size="${size}" font-weight="${weight}" letter-spacing="-1.5">${esc(line)}</text>`).join("");
}

function logo(x, y, width = 250) {
  const height = Math.round(width * 150 / 620);
  return `<g transform="translate(${x} ${y}) scale(${width / 620})"><rect x="8" y="18" width="112" height="112" fill="#c7f92a"/><path fill="#10150f" d="M29 43h70v18H74v48H54V61H29z"/><rect x="29" y="82" width="14" height="27" fill="#10150f"/><rect x="86" y="82" width="13" height="27" fill="#10150f"/><rect x="134" y="37" width="4" height="76" fill="#c7f92a"/><text x="158" y="91" fill="#ffffff" font-family="Arial, Helvetica, sans-serif" font-size="74" font-weight="800">FMTECH</text><text x="162" y="126" fill="#d7dfd3" font-family="Arial, Helvetica, sans-serif" font-size="18" font-weight="700" letter-spacing="11">WEB DESIGN</text></g>`;
}

async function ad({ source, file, headline, supporting, eyebrow, story = false, focal = "centre" }) {
  const width = 1080;
  const height = story ? 1920 : 1350;
  const top = story ? 160 : 72;
  const headY = story ? 1050 : 760;
  const headSize = story ? 79 : 66;
  const headLine = story ? 88 : 74;
  const supportY = headY + headline.length * headLine + 30;
  const supportSize = story ? 34 : 29;
  const svg = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="shade" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#10150f" stop-opacity=".35"/><stop offset=".38" stop-color="#10150f" stop-opacity=".04"/><stop offset=".68" stop-color="#10150f" stop-opacity=".65"/><stop offset="1" stop-color="#10150f" stop-opacity=".96"/></linearGradient></defs>
    <rect width="100%" height="100%" fill="url(#shade)"/>
    ${logo(66, top, 270)}
    <rect x="66" y="${headY - 145}" width="120" height="9" fill="#c7f92a"/>
    <text x="66" y="${headY - 96}" fill="#c7f92a" font-family="Arial, Helvetica, sans-serif" font-size="24" font-weight="800" letter-spacing="4">${esc(eyebrow.toUpperCase())}</text>
    ${lines(headline, 66, headY, headSize, headLine)}
    ${lines(supporting, 66, supportY, supportSize, supportSize + 12, "#e7ece4", 500)}
    <rect x="66" y="${height - (story ? 240 : 180)}" rx="34" width="450" height="72" fill="#c7f92a"/>
    <text x="291" y="${height - (story ? 193 : 133)}" text-anchor="middle" fill="#10150f" font-family="Arial, Helvetica, sans-serif" font-size="26" font-weight="800">Solicitá un diagnóstico</text>
    <text x="66" y="${height - (story ? 120 : 66)}" fill="#ffffff" font-family="Arial, Helvetica, sans-serif" font-size="22" font-weight="700">tech.frankmercado.com/paraguay</text>
  </svg>`;
  await sharp(path.join(imageDir, source))
    .resize(width, height, { fit: "cover", position: focal })
    .composite([{ input: Buffer.from(svg), top: 0, left: 0 }])
    .webp({ quality: 88 })
    .toFile(path.join(outputDir, file));
}

async function ogImage() {
  const svg = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="ogshade" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#10150f" stop-opacity=".98"/><stop offset=".62" stop-color="#10150f" stop-opacity=".72"/><stop offset="1" stop-color="#10150f" stop-opacity=".08"/></linearGradient></defs>
    <rect width="100%" height="100%" fill="url(#ogshade)"/>
    ${logo(62, 45, 260)}
    <rect x="70" y="238" width="120" height="9" fill="#c7f92a"/>
    ${lines(["Páginas web para", "negocios de Paraguay."], 70, 320, 66, 72)}
    <text x="70" y="500" fill="#c7f92a" font-family="Arial, Helvetica, sans-serif" font-size="31" font-weight="800">Desde ₲990.000 · Alcance claro · Medición</text>
  </svg>`;
  await sharp(path.join(imageDir, "hero-negocio-asuncion.webp"))
    .resize(1200, 630, { fit: "cover", position: "centre" })
    .composite([{ input: Buffer.from(svg), top: 0, left: 0 }])
    .webp({ quality: 88 })
    .toFile(path.join(imageDir, "fmtech-paraguay-og.webp"));
}

async function run() {
  await ogImage();
  const concepts = [
    { source: "clinica-paraguay.webp", slug: "01-clinicas", eyebrow: "Clínicas y profesionales", headline: ["Tu clínica no debería", "depender solo", "de Instagram."], supporting: ["Servicios claros, confianza verificable", "y solicitudes mejor preparadas."], focal: "centre" },
    { source: "taller-negocio-paraguay.webp", slug: "02-servicios", eyebrow: "Negocios de servicios", headline: ["Cuando te buscan,", "¿encuentran todo", "lo necesario?"], supporting: ["Web + Google + WhatsApp para convertir", "búsquedas en cotizaciones con contexto."], focal: "centre" },
    { source: "hospitalidad-paraguay.webp", slug: "03-turismo", eyebrow: "Turismo e inmobiliario", headline: ["Más consultas directas.", "Menos información", "dispersa."], supporting: ["Fichas claras, reservas y contacto", "para cada experiencia o propiedad."], focal: "centre" },
    { source: "hero-negocio-asuncion.webp", slug: "04-precio", eyebrow: "Diseño web para Paraguay", headline: ["Web profesional", "desde ₲990.000."], supporting: ["Diseño móvil, formulario, SEO técnico,", "dominio .com y hosting por un año."], focal: "centre" },
  ];
  for (const concept of concepts) {
    await ad({ ...concept, file: `${concept.slug}-feed.webp` });
    await ad({ ...concept, file: `${concept.slug}-story.webp`, story: true });
  }
}

run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
