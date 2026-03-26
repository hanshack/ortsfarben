<script>
  import { lang, printBackUI } from "$lib/stores.js";
  import { browser } from "$app/environment";

  let printOverride =
    browser && new URLSearchParams(window.location.search).has("kiosk");
  $printBackUI = !printOverride;
</script>

<div class=" text-sm text-gray-400 mt-10">
  <p>
    {$lang === "en"
      ? "Kiezcolors was developed by ODIS and CityLAB Berlin. ODIS and CityLAB are projects of the Technology Foundation Berlin and are funded by the Berlin Senate Chancellery. You can find the code to this project on "
      : "Kiezcolors wurde von ODIS und CityLAB Berlin - Projekte der Technologiestiftung Berlin. Den Code zum Projekt findest auf "}
    <a
      class="font-bold"
      href="https://github.com/technologiestiftung/kiezcolors/"
    >
      GitHub
    </a>
    .
    <br /><br />

    <span class="text-sm font-thin text-gray-400">
      {$lang === "en" ? "Data source:" : "Datenquelle:"}
      <br />
      <a
        class="underline"
        target="_blank"
        rel="noreferrer"
        href="https://daten.berlin.de/datensaetze/alkis-berlin-tatsächliche-nutzung-wfs"
      >
        ALKIS Berlin Tatsächliche Nutzung
      </a>
      |
      <a
        class="underline"
        target="_blank"
        rel="noreferrer"
        href="https://www.berlin.de/sen/sbw/">SenSBW</a
      >
      <a
        class="underline"
        target="_blank"
        rel="noreferrer"
        href="https://www.govdata.de/dl-de/by-2-0"
      >
        DL-DE->BY-2.0
      </a>
    </span>
  </p>
</div>
