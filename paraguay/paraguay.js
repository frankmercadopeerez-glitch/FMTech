(function () {
  "use strict";

  var menu = document.querySelector(".py-menu");
  var navigation = document.getElementById("py-navigation");

  if (menu && navigation) {
    menu.addEventListener("click", function () {
      var open = navigation.classList.toggle("open");
      menu.setAttribute("aria-expanded", String(open));
    });
    navigation.addEventListener("click", function (event) {
      if (!event.target.closest("a")) return;
      navigation.classList.remove("open");
      menu.setAttribute("aria-expanded", "false");
    });
  }

  var year = document.getElementById("py-year");
  if (year) year.textContent = new Date().getFullYear();

  var params = new URLSearchParams(window.location.search);

  var form = document.querySelector('[data-lead-form="paraguay"]');
  var requestedPlan = "";
  document.querySelectorAll("[data-plan]").forEach(function (link) {
    link.addEventListener("click", function () {
      requestedPlan = link.getAttribute("data-plan") || "";
    });
  });

  if (form) {
    var planField = document.createElement("input");
    planField.type = "hidden";
    planField.name = "plan_consultado";
    form.appendChild(planField);

    form.addEventListener("submit", function () {
      planField.value = requestedPlan || params.get("plan") || "No indicado";
      var button = form.querySelector('button[type="submit"]');
      if (button) {
        button.disabled = true;
        button.textContent = "Enviando…";
      }
    });
  }
})();
