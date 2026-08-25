const { chromium } = require("playwright");
const fs = require("node:fs");

const base = process.env.FMTECH_QA_BASE || "http://127.0.0.1:4173";
const viewports = [
  { name: "1920", width: 1920, height: 900 },
  { name: "1366", width: 1366, height: 768 },
  { name: "390", width: 390, height: 844 },
];
const routes = [
  "/",
  "/paraguay/",
  "/blog/cuanto-cuesta-pagina-web-paraguay-2026.html",
  "/blog/pagina-web-o-instagram-paraguay.html",
  "/blog/landing-meta-ads-paraguay.html",
  "/servicios/sitios-web/",
  "/servicios/aplicaciones-web/",
  "/servicios/automatizacion-integraciones/",
  "/servicios/desarrollo-white-label/",
  "/sectores/marino-nautico/",
  "/sectores/negocios-de-servicios/",
];

(async () => {
  const browser = await chromium.launch({
    headless: true,
    executablePath: process.env.FMTECH_CHROME_PATH || "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  });
  const failures = [];
  fs.mkdirSync("qa-release", { recursive: true });

  for (const viewport of viewports) {
    const context = await browser.newContext({ viewport });
    await context.addInitScript(() => localStorage.setItem("fmtech_analytics_consent", "denied"));
    await context.route("**/*", (route) => {
      const url = route.request().url();
      if (url.startsWith(base)) route.continue();
      else route.fulfill({ status: 204, body: "" });
    });
    const page = await context.newPage();
    page.on("console", (message) => {
      if (message.type() === "error") failures.push(`${viewport.name}: console error: ${message.text()}`);
    });
    page.on("pageerror", (error) => failures.push(`${viewport.name}: page error: ${error.message}`));

    for (const route of routes) {
      const response = await page.goto(`${base}${route}`, { waitUntil: "domcontentloaded" });
      if (!response || response.status() !== 200) failures.push(`${viewport.name} ${route}: HTTP ${response && response.status()}`);
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
      if (overflow > 1) failures.push(`${viewport.name} ${route}: horizontal overflow ${overflow}px`);
      if (!(await page.locator("h1").first().isVisible())) failures.push(`${viewport.name} ${route}: h1 not visible`);
    }

    await page.goto(`${base}/paraguay/?utm_source=qa&utm_medium=local&utm_campaign=release&utm_content=landing`, { waitUntil: "load" });
    for (const selector of [".py-hero h1", ".py-hero-media img", ".py-price-stamp", "#diagnostico form", ".py-actions .py-button"]) {
      if (!(await page.locator(selector).first().isVisible())) failures.push(`${viewport.name}: Paraguay missing visible ${selector}`);
    }
    const utmSource = await page.locator('input[name="utm_source"]').inputValue();
    if (utmSource !== "qa") failures.push(`${viewport.name}: UTM source was not captured`);

    await page.screenshot({ path: `qa-release/paraguay-top-${viewport.name}.png` });

    if (viewport.width <= 980) {
      const menu = page.locator(".py-menu");
      if (!(await menu.isVisible())) failures.push(`${viewport.name}: Paraguay menu button hidden`);
      else {
        await menu.click();
        if (!(await page.locator("#py-navigation a").first().isVisible())) failures.push(`${viewport.name}: Paraguay menu did not open`);
        await page.screenshot({ path: `qa-release/paraguay-menu-${viewport.name}.png` });
        await menu.click();
      }
    }

    await page.locator("img").evaluateAll((images) => images.forEach((image) => { image.loading = "eager"; }));
    await page.evaluate(async () => {
      const step = Math.max(window.innerHeight, 700);
      for (let y = 0; y < document.documentElement.scrollHeight; y += step) {
        window.scrollTo(0, y);
        await new Promise((resolve) => setTimeout(resolve, 60));
      }
      window.scrollTo(0, 0);
      await Promise.all(Array.from(document.images).map((image) => image.complete
        ? Promise.resolve()
        : new Promise((resolve) => {
            image.addEventListener("load", resolve, { once: true });
            image.addEventListener("error", resolve, { once: true });
          })));
    });
    const brokenImages = await page.locator("img").evaluateAll((images) =>
      images.filter((image) => !image.complete || image.naturalWidth === 0).map((image) => image.getAttribute("src"))
    );
    if (brokenImages.length) failures.push(`${viewport.name}: broken Paraguay images: ${brokenImages.join(", ")}`);

    await page.screenshot({ path: `qa-release/paraguay-${viewport.name}.png`, fullPage: true });
    await context.close();
  }

  await browser.close();
  if (failures.length) {
    console.error(failures.join("\n"));
    process.exitCode = 1;
  } else {
    console.log(`QA passed: ${routes.length} routes across ${viewports.length} viewports.`);
  }
})();
