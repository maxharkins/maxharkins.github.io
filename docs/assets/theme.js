// Theme toggle: starts on the OS preference, then remembers the user's choice.
(function () {
  var root = document.documentElement;

  // Restore a saved choice (if any) before paint.
  try {
    var saved = localStorage.getItem("theme");
    if (saved === "dark" || saved === "light") root.setAttribute("data-theme", saved);
  } catch (e) {}

  var mq = window.matchMedia("(prefers-color-scheme: dark)");
  function isDark() {
    var t = root.getAttribute("data-theme");
    if (t === "dark") return true;
    if (t === "light") return false;
    return mq.matches;
  }

  document.addEventListener("click", function (ev) {
    var btn = ev.target.closest(".toggle");
    if (!btn) return;
    var next = isDark() ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
  });

  var yr = document.getElementById("yr");
  if (yr) yr.textContent = new Date().getFullYear();
})();
