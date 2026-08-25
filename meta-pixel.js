(function () {
  "use strict";

  var PIXEL_ID = "4016938425269098";
  var CONSENT_KEY = "fmtech_analytics_consent";

  function isEnglish() {
    return window.location.pathname === "/en/" || window.location.pathname.indexOf("/en/") === 0;
  }

  function privacyUrl() {
    return isEnglish() ? "/en/privacy.html" : "/privacy.html";
  }

  function hasGlobalOptOut() {
    return navigator.globalPrivacyControl === true || navigator.doNotTrack === "1";
  }

  function trackPageEvents() {
    window.fbq("init", PIXEL_ID);
    window.fbq("track", "PageView");

    var path = window.location.pathname;
    if (path === "/gracias.html" || path === "/en/thank-you.html") {
      window.fbq("track", "Lead");
    }

    document.addEventListener("submit", function (event) {
      var form = event.target;
      if (!(form instanceof HTMLFormElement)) return;
      window.fbq("trackCustom", "ContactIntent", {
        channel: "form",
        page_path: path,
      });
    });

    document.addEventListener("click", function (event) {
      var link = event.target.closest("a");
      if (!link) return;
      var href = link.getAttribute("href") || "";
      if (href.indexOf("mailto:") === 0) {
        window.fbq("trackCustom", "ContactIntent", {
          channel: "email",
          page_path: path,
        });
      }
    });
  }

  function loadPixel() {
    if (window.__fmtechPixelLoaded) return;
    window.__fmtechPixelLoaded = true;

    !(function (f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = true;
      n.version = "2.0";
      n.queue = [];
      t = b.createElement(e);
      t.async = true;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");

    trackPageEvents();
  }

  function saveConsent(value) {
    try {
      window.localStorage.setItem(CONSENT_KEY, value);
    } catch (error) {
      // If storage is unavailable, honor the choice for this page only.
    }
  }

  function showConsentBanner() {
    var english = isEnglish();
    var banner = document.createElement("aside");
    banner.setAttribute("role", "dialog");
    banner.setAttribute("aria-label", english ? "Analytics preferences" : "Preferencias de medición");
    banner.style.cssText =
      "position:fixed;z-index:9999;left:16px;right:16px;bottom:16px;max-width:760px;margin:auto;padding:16px 18px;background:#0b1830;color:#fff;border:1px solid rgba(255,255,255,.2);border-radius:14px;box-shadow:0 18px 50px rgba(0,0,0,.28);font:14px/1.5 system-ui,sans-serif;display:flex;gap:14px;align-items:center;flex-wrap:wrap";

    var copy = document.createElement("p");
    copy.style.cssText = "margin:0;flex:1 1 390px";
    copy.innerHTML = english
      ? 'We use Meta Pixel to measure visits and contact conversions. We never send form contents. <a href="' + privacyUrl() + '" style="color:#7ce7ff">Privacy</a>.'
      : 'Usamos Meta Pixel para medir visitas y conversiones de contacto. Nunca enviamos el contenido del formulario. <a href="' + privacyUrl() + '" style="color:#7ce7ff">Privacidad</a>.';

    var accept = document.createElement("button");
    accept.type = "button";
    accept.textContent = english ? "Allow measurement" : "Aceptar medición";
    accept.style.cssText = "border:0;border-radius:999px;padding:10px 15px;background:#64e6ff;color:#062139;font-weight:800;cursor:pointer";

    var reject = document.createElement("button");
    reject.type = "button";
    reject.textContent = english ? "No thanks" : "No, gracias";
    reject.style.cssText = "border:1px solid rgba(255,255,255,.35);border-radius:999px;padding:9px 14px;background:transparent;color:#fff;font-weight:700;cursor:pointer";

    accept.addEventListener("click", function () {
      saveConsent("granted");
      banner.remove();
      loadPixel();
    });
    reject.addEventListener("click", function () {
      saveConsent("denied");
      banner.remove();
    });

    banner.appendChild(copy);
    banner.appendChild(accept);
    banner.appendChild(reject);
    document.body.appendChild(banner);
  }

  function start() {
    if (hasGlobalOptOut()) return;

    var consent = null;
    try {
      consent = window.localStorage.getItem(CONSENT_KEY);
    } catch (error) {
      consent = null;
    }

    if (consent === "granted") {
      loadPixel();
    } else if (consent !== "denied") {
      showConsentBanner();
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start, { once: true });
  } else {
    start();
  }
})();
