"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const button = document.getElementById("mobileMenuButton");
  const menu = document.getElementById("menu");
  if (!button || !menu) return;

  // Navigation stays available if JavaScript is disabled.
  document.documentElement.classList.add("menu-enhanced");
  button.hidden = false;
  const mobile = window.matchMedia("(max-width: 950px)");

  function setMenu(open, restoreFocus = false) {
    menu.classList.toggle("active", open);
    button.setAttribute("aria-expanded", String(open));
    button.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    if (restoreFocus) button.focus();
  }

  button.addEventListener("click", () => {
    setMenu(button.getAttribute("aria-expanded") !== "true");
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      setMenu(false);
      if (mobile.matches) {
        const target = document.querySelector(link.hash);
        if (target) {
          target.setAttribute("tabindex", "-1");
          target.focus({ preventScroll: true });
        }
      }
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menu.classList.contains("active")) setMenu(false, true);
  });
  document.addEventListener("click", (event) => {
    if (!menu.contains(event.target) && !button.contains(event.target)) setMenu(false);
  });
  document.addEventListener("focusin", (event) => {
    if (!menu.contains(event.target) && !button.contains(event.target)) setMenu(false);
  });
  mobile.addEventListener("change", () => setMenu(false));
});
