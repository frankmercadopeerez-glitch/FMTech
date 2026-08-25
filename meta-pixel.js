(function () {
  "use strict";

  var PIXEL_ID = "4016938425269098";
  var CONSENT_KEY = "fmtech_analytics_consent";
  var ATTRIBUTION_KEY = "fmtech_attribution";
  var LEAD_PENDING_KEY = "fmtech_lead_pending";
  var ATTRIBUTION_FIELDS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "fbclid"];

  function isEnglish() {
    return window.location.pathname === "/en/" || window.location.pathname.indexOf("/en/") === 0;
  }

  function privacyUrl() {
    return isEnglish() ? "/en/privacy.html" : "/privacy.html";
  }

  function hasGlobalOptOut() {
    return navigator.globalPrivacyControl === true || navigator.doNotTrack === "1";
  }

  function currentMarket() {
    var declared = document.body && document.body.getAttribute("data-market");
    if (declared) return declared;
    return window.location.pathname.indexOf("/paraguay/") === 0 ? "PY" : "CO";
  }

  function normalizedPath() {
    return window.location.pathname.replace(/\/+$/, "") || "/";
  }

  function readSessionJson(key) {
    try {
      return JSON.parse(window.sessionStorage.getItem(key) || "null");
    } catch (error) {
      return null;
    }
  }

  function writeSessionJson(key, value) {
    try {
      window.sessionStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      // The form must remain usable when storage is unavailable.
    }
  }

  function prepareLeadAttribution() {
    var params = new URLSearchParams(window.location.search);
    var saved = readSessionJson(ATTRIBUTION_KEY) || {};
    var hasCampaignData = false;

    ATTRIBUTION_FIELDS.forEach(function (name) {
      var value = params.get(name);
      if (!value) return;
      saved[name] = value.slice(0, 180);
      hasCampaignData = true;
    });
    if (hasCampaignData) {
      saved.captured_at = Date.now();
      writeSessionJson(ATTRIBUTION_KEY, saved);
    }

    document.querySelectorAll("form").forEach(function (form) {
      if (!/^https:\/\//i.test(form.getAttribute("action") || "")) return;
      ATTRIBUTION_FIELDS.forEach(function (name) {
        var field = form.querySelector('input[name="' + name + '"]');
        if (!field) {
          field = document.createElement("input");
          field.type = "hidden";
          field.name = name;
          form.appendChild(field);
        }
        field.value = params.get(name) || saved[name] || "";
      });

      var marketField = form.querySelector('input[name="mercado"]');
      if (!marketField) {
        marketField = document.createElement("input");
        marketField.type = "hidden";
        marketField.name = "mercado";
        form.appendChild(marketField);
      }
      marketField.value = marketField.value || currentMarket();

      var originField = form.querySelector('input[name="pagina_origen"]');
      if (!originField) {
        originField = document.createElement("input");
        originField.type = "hidden";
        originField.name = "pagina_origen";
        form.appendChild(originField);
      }
      originField.value = originField.value || normalizedPath();
    });

    document.addEventListener("submit", function (event) {
      var form = event.target;
      if (!(form instanceof HTMLFormElement)) return;
      writeSessionJson(LEAD_PENDING_KEY, {
        created_at: Date.now(),
        market: currentMarket(),
        page_path: normalizedPath(),
      });
    });
  }

  function trackPageEvents() {
    window.fbq("init", PIXEL_ID);
    window.fbq("track", "PageView");

    var path = normalizedPath();
    var market = currentMarket();
    var pageType = document.body.getAttribute("data-page-type") || "";

    if (pageType === "market-landing" || path === "/paraguay") {
      window.fbq("track", "ViewContent", {
        content_name: "FMTECH Paraguay",
        content_category: "Web development services",
        market: market,
      });
    }

    if (path === "/gracias.html" || path === "/en/thank-you.html" || path === "/paraguay/gracias") {
      var pending = readSessionJson(LEAD_PENDING_KEY);
      var isRecent = pending && Number.isFinite(pending.created_at) && Date.now() - pending.created_at < 30 * 60 * 1000;
      if (isRecent) {
        window.fbq("track", "Lead", {
          market: pending.market || market,
          source_page: pending.page_path || "unknown",
        });
        try {
          window.sessionStorage.removeItem(LEAD_PENDING_KEY);
        } catch (error) {
          // A duplicate event is still unlikely because the marker expires quickly.
        }
      }
    }

    document.addEventListener("submit", function (event) {
      var form = event.target;
      if (!(form instanceof HTMLFormElement)) return;
      window.fbq("trackCustom", "ContactIntent", {
        channel: "form",
        page_path: path,
        market: market,
      });
    });

    document.addEventListener("click", function (event) {
      var link = event.target.closest("a");
      if (!link) return;
      var href = link.getAttribute("href") || "";
      var channel = "";
      if (href.indexOf("mailto:") === 0) channel = "email";
      if (/^(?:https?:\/\/)?(?:wa\.me|api\.whatsapp\.com|(?:www\.)?whatsapp\.com)/i.test(href)) channel = "whatsapp";
      if (channel) {
        window.fbq("trackCustom", "ContactIntent", {
          channel: channel,
          page_path: path,
          market: market,
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
    prepareLeadAttribution();
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
