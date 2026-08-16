/* ==========================================================================
   Pavlo Kolosovskyi - Portfolio
   Zwei Aufgaben, sonst nichts:
   1. Das mobile Menue nach der Auswahl schliessen.
   2. YouTube-Videos erst nach einem bewussten Klick laden.

   Es werden keine Cookies gesetzt, keine Daten gespeichert und keine externen
   Skripte nachgeladen. Eine Verbindung zu YouTube entsteht ausschliesslich
   dann, wenn die Besucherin oder der Besucher eine Videokarte anklickt.
   ========================================================================== */

(function () {
  "use strict";

  /* --- 1. Mobiles Menue schliessen ------------------------------------- */

  var toggle = document.getElementById("nav-toggle");

  if (toggle) {
    document.querySelectorAll("nav a").forEach(function (link) {
      link.addEventListener("click", function () {
        toggle.checked = false;
      });
    });

    // Mit Escape schliessen, solange der Fokus im Kopfbereich liegt.
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && toggle.checked) {
        toggle.checked = false;
      }
    });
  }

  /* --- 2. Videos erst auf Klick laden ---------------------------------- */

  document.querySelectorAll(".video-frame").forEach(function (frame) {
    frame.addEventListener("click", function () {
      var id = frame.getAttribute("data-video");
      var title = frame.getAttribute("data-title") || "YouTube";

      if (!id || frame.querySelector("iframe")) {
        return;
      }

      var iframe = document.createElement("iframe");
      // youtube-nocookie.com ist der erweiterte Datenschutzmodus von YouTube.
      iframe.src =
        "https://www.youtube-nocookie.com/embed/" +
        encodeURIComponent(id) +
        "?autoplay=1&rel=0";
      iframe.title = title;
      iframe.allow =
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
      iframe.referrerPolicy = "strict-origin-when-cross-origin";
      iframe.allowFullscreen = true;

      frame.innerHTML = "";
      frame.appendChild(iframe);
      iframe.focus();
    });
  });
})();
