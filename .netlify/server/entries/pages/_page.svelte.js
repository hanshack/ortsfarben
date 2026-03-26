import { c as create_ssr_component, a as subscribe, b as add_attribute, d as each, e as escape, v as validate_component, f as set_store_value, o as onDestroy, h as createEventDispatcher, i as spread, j as escape_object, k as escape_attribute_value, l as compute_slots } from "../../chunks/index2.js";
import "maplibre-gl";
import { B as BROWSER, w as writable } from "../../chunks/index.js";
import "pmtiles";
import destination from "@turf/destination";
import midpoint from "@turf/midpoint";
import distance from "@turf/distance";
import bboxPolygon from "@turf/bbox-polygon";
import intersect from "@turf/intersect";
import area from "@turf/area";
import { bbox } from "@turf/bbox";
import within from "@turf/boolean-within";
import * as d3 from "d3";
import "textures";
import chroma from "chroma-js";
import { computePosition, autoUpdate, offset, flip, shift } from "@floating-ui/dom";
const browser = BROWSER;
const maplibreGl = "";
let areaSizes = writable();
let circleRadius = writable();
let dimensions = writable([210 * 3, 148 * 3]);
let svg = writable();
let totalSize = writable(0);
let mapCenter = writable();
let showBasemap = writable(false);
let locationText = writable();
let useLocationAsText = writable(true);
let lang = writable("de");
let newBounds = writable();
let printBackUI = writable(true);
let isMobile = writable(true);
let screenWidth = writable(0);
let textVis = writable("");
let landuses = {
  Bahnverkehr: {
    category: "transport",
    info: "",
    name: "Bahnverkehr",
    name_en: "Rail transport"
  },
  Bergbaubetrieb: {
    category: "industry",
    info: "",
    name: "Bergbaubetrieb",
    name_en: "Mining operation"
  },
  Fließgewässer: {
    category: "water",
    info: "",
    name: "Fließgewässer",
    name_en: "Watercourse"
  },
  Flugverkehr: {
    category: "transport",
    info: "",
    name: "Flugverkehr",
    name_en: "Air traffic"
  },
  "Fläche besonderer funktionaler Prägung": {
    category: "other",
    info: "Schulen, Museum",
    name: "Fläche besonderer funktionaler Prägung",
    name_en: "Special functional characterization"
  },
  "Fläche gemischter Nutzung": {
    category: "other",
    info: "",
    name: "Fläche gemischter Nutzung",
    name_en: "Mixed use area"
  },
  Friedhof: {
    category: "nature",
    info: "",
    name: "Friedhof",
    name_en: "Cemetery"
  },
  Gehölz: {
    category: "nature",
    info: "",
    name: "Gehölz",
    name_en: "Grove"
  },
  Hafenbecken: {
    category: "water",
    info: "",
    name: "Hafenbecken",
    name_en: "Port basin"
  },
  Halde: {
    category: "trash",
    info: "",
    name: "Halde",
    name_en: "Dump"
  },
  Heide: {
    category: "nature",
    info: "",
    name: "Heide",
    name_en: "Heath"
  },
  "Industrie- und Gewerbefläche": {
    category: "industry",
    info: "",
    name: "Industrie- und Gewerbefläche",
    name_en: "Industrial and commercial area"
  },
  Landwirtschaft: {
    category: "agriculture",
    info: "",
    name: "Landwirtschaft",
    name_en: "Agriculture"
  },
  Moor: {
    category: "nature",
    info: "",
    name: "Moor",
    name_en: "Moor"
  },
  Platz: {
    category: "street",
    info: "",
    name: "Platz",
    name_en: "Square"
  },
  Schiffsverkehr: {
    category: "transport",
    info: "",
    name: "Schiffsverkehr",
    name_en: "Shipping traffic"
  },
  "Sport-, Freizeit- und Erholungsfläche": {
    category: "leisure",
    info: "",
    name: "Sport-, Freizeit- und Erholungsfläche",
    name_en: "Sports, leisure and recreation area"
  },
  "Stehendes Gewässer": {
    category: "water",
    info: "",
    name: "Stehendes Gewässer",
    name_en: "Standing water"
  },
  Straßenverkehr: {
    category: "street",
    info: "",
    name: "Straßenverkehr",
    name_en: "Road traffic"
  },
  Sumpf: {
    category: "nature",
    info: "",
    name: "Sumpf",
    name_en: "Swamp"
  },
  "Tagebau, Grube, Steinbruch": {
    category: "trash",
    info: "",
    name: "Tagebau, Grube, Steinbruch",
    name_en: "Open pit, mine, quarry"
  },
  "Unland/Vegetationslose Fläche": {
    category: "nature",
    info: "",
    name: "Unland/Vegetationslose Fläche",
    name_en: "Wasteland / vegetationless area"
  },
  Wald: {
    category: "nature",
    info: "",
    name: "Wald",
    name_en: "Forest"
  },
  Weg: {
    category: "street",
    info: "",
    name: "Weg",
    name_en: "Path"
  },
  Wohnbaufläche: {
    category: "living",
    info: "",
    name: "Wohnbaufläche",
    name_en: "Residential area"
  },
  AX_FlaecheBesondererFunktionalerPraegung: {
    category: "other",
    info: "Schulen, Museum",
    name: "Besondere funktionale Prägung",
    name_en: "Special functional characterization"
  },
  AX_IndustrieUndGewerbeflaeche: {
    category: "industry",
    info: "",
    name: "Industrie, Gewerbe",
    name_en: "Industry, commerce"
  },
  AX_FlaecheGemischterNutzung: {
    category: "other",
    info: "",
    name: "Gemischte Nutzung",
    name_en: "Mixed use"
  },
  AX_Heide: {
    category: "nature",
    info: "",
    name: "Heide",
    name_en: "Heath"
  },
  AX_Gehoelz: {
    category: "nature",
    info: "",
    name: "Gehölz",
    name_en: "Grove"
  },
  AX_Moor: {
    category: "nature",
    info: "",
    name: "Moor",
    name_en: "Moor"
  },
  AX_Sumpf: {
    category: "nature",
    info: "",
    name: "Sumpf",
    name_en: "Swamp"
  },
  AX_Wald: {
    category: "nature",
    info: "",
    name: "Wald",
    name_en: "Forest"
  },
  AX_Friedhof: {
    category: "nature",
    info: "",
    name: "Friedhof",
    name_en: "Cemetery"
  },
  AX_UnlandVegetationsloseFlaeche: {
    category: "nature",
    info: "",
    name: "Unland, Vegetationslose Fläche",
    name_en: "Wasteland, area without vegetation"
  },
  AX_Landwirtschaft: {
    category: "agriculture",
    info: "",
    name: "Landwirtschaft",
    name_en: "Farming"
  },
  AX_Fliessgewaesser: {
    category: "water",
    info: "",
    name: "Fliessgewässer",
    name_en: "Watercourse"
  },
  AX_Hafenbecken: {
    category: "water",
    info: "",
    name: "Hafenbecken",
    name_en: "Port basin"
  },
  AX_StehendesGewaesser: {
    category: "water",
    info: "",
    name: "Stehendes Gewässer",
    name_en: "Stagnant water"
  },
  AX_SportFreizeitUndErholungsflaeche: {
    category: "leisure",
    info: "",
    name: "Sport, Freizeit, Erholungsfläche",
    name_en: "Sports, leisure, recreational area"
  },
  AX_Platz: {
    category: "street",
    info: "",
    name: "Platz",
    name_en: "Square"
  },
  AX_Strassenverkehr: {
    category: "street",
    info: "",
    name: "Straßenverkehr",
    name_en: "Street traffic"
  },
  AX_Weg: {
    category: "street",
    info: "",
    name: "Weg",
    name_en: "Path"
  },
  AX_Wohnbauflaeche: {
    category: "living",
    info: "",
    name: "Wohnbau",
    name_en: "Residential"
  },
  AX_Halde: {
    category: "trash",
    info: "",
    name: "Halde",
    name_en: "Dump"
  },
  AX_Flugverkehr: {
    category: "transport",
    info: "",
    name: "Flugverkehr",
    name_en: "Air traffic"
  },
  AX_TagebauGrubeSteinbruch: {
    category: "trash",
    info: "",
    name: "Tagebau, Grube, Steinbruch",
    name_en: "Open pit, mine, quarry"
  },
  AX_Schiffsverkehr: {
    category: "transport",
    info: "",
    name: "Schiffsverkehr",
    name_en: "Shipping traffic"
  },
  AX_Bahnverkehr: {
    category: "transport",
    info: "",
    name: "Bahnverkehr",
    name_en: "Rail transport"
  }
};
let categories = {
  street: { color: "#292929", name_en: "Street", name: "Straßenverkehr" },
  living: { color: "#cf4b56", name_en: "Living", name: "Wohnen" },
  transport: { color: "#4d5759", name_en: "Transport", name: "Verkehr" },
  water: { color: "#277da1", name_en: "Water", name: "Wasser" },
  nature: { color: "#114217", name_en: "Nature", name: "Natur" },
  agriculture: {
    color: "#53935c",
    name_en: "Agriculture",
    name: "Landwirtschaft"
  },
  industry: { color: "#f9c74f", name_en: "Economy", name: "Wirtschaft" },
  leisure: { color: "#a4ba72", name_en: "Leisure", name: "Freizeit" },
  trash: {
    color: "#89775c",
    name_en: "Trash, Open pit",
    name: "Halde, Tagebau"
  },
  other: { color: "#9c6a74", name_en: "Other", name: "Andere" }
};
const landuseColors = [];
Object.keys(landuses).forEach((key) => {
  landuseColors.push(key);
  landuseColors.push(categories[landuses[key].category].color);
});
const MapKey = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isMobile, $$unsubscribe_isMobile;
  let $lang, $$unsubscribe_lang;
  $$unsubscribe_isMobile = subscribe(isMobile, (value) => $isMobile = value);
  $$unsubscribe_lang = subscribe(lang, (value) => $lang = value);
  $$unsubscribe_isMobile();
  $$unsubscribe_lang();
  return `<div class="${[
    "z-50 absolute pointer-events-auto inline-block mx-2",
    ($isMobile ? "relative" : "") + " " + (!$isMobile ? "bottom-4" : "") + " " + ($isMobile ? "my-8" : "")
  ].join(" ").trim()}"${add_attribute("style", $isMobile ? "" : "max-width:calc(100% - 250px)", 0)}>${each(Object.values(categories), ({ color, name, name_en }, i) => {
    return `<div class="inline-block align-middle"><div class="w-4 h-4 rounded-full ml-2 inline-block"${add_attribute("style", `background-color:${color}`, 0)}></div>
      <p class="align-middle leading-4 ml-1 inline-block mb-2">${escape($lang === "de" ? name : name_en)}</p>
    </div>`;
  })}</div>`;
});
function drawCanvasCirlce(map, canvas, circleRadius2) {
  const cooUp = destination(map.getCenter().toArray(), circleRadius2, 90, {
    units: "meters"
  }).geometry.coordinates;
  const rightPoints = map.project(cooUp);
  const centerPoints = map.project(map.getCenter().toArray());
  const radius = rightPoints.x - centerPoints.x;
  const { width, height } = map.getContainer().getBoundingClientRect();
  const ctx = canvas.getContext("2d");
  canvas.width = width;
  canvas.height = height;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.moveTo(0, 0);
  ctx.lineTo(width, 0);
  ctx.lineTo(width, height);
  ctx.lineTo(0, height);
  ctx.lineTo(0, 0);
  ctx.closePath();
  ctx.moveTo(width / 4, height / 4);
  ctx.arc(width / 2, height / 2, radius, 0, 2 * Math.PI, true);
  ctx.fillStyle = "rgba(255,255,255,0.4)";
  ctx.strokeStyle = "rgba(255,255,255,0)";
  ctx.lineWidth = 0.1;
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
  ctx.beginPath();
  ctx.arc(width / 2, height / 2, radius, 0, 2 * Math.PI, true);
  ctx.strokeStyle = "rgba(255,255,255,1)";
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(width / 2, height / 2, 4, 0, 2 * Math.PI, true);
  ctx.fillStyle = "rgba(255,255,255,0.8)";
  ctx.fill();
  ctx.beginPath();
  ctx.arc(width / 2, height / 2, 2, 0, 2 * Math.PI, true);
  ctx.fillStyle = "rgba(0,0,0,0.8)";
  ctx.fill();
}
function getMaxCircleRadius(map) {
  const center = map.getCenter().toArray();
  const bbox2 = map.getBounds().toArray().flat();
  const bboxPoly = bboxPolygon(bbox2);
  const bboxPolyCoordinates = bboxPoly.geometry.coordinates[0];
  const midPointHeight = midpoint(bboxPolyCoordinates[1], bboxPolyCoordinates[2]);
  const maxWidth = distance(midPointHeight, center) * 1e3;
  const midPointWidtht = midpoint(bboxPolyCoordinates[2], bboxPolyCoordinates[3]);
  const maxHeight = distance(midPointWidtht, center) * 1e3;
  const maxDistance = Math.min(maxHeight, maxWidth);
  let radius;
  if (maxDistance >= 1e3) {
    radius = 1e3;
  } else if (maxDistance >= 900) {
    radius = 900;
  } else if (maxDistance >= 800) {
    radius = 800;
  } else if (maxDistance >= 700) {
    radius = 700;
  } else if (maxDistance >= 600) {
    radius = 600;
  } else if (maxDistance >= 500) {
    radius = 500;
  } else if (maxDistance >= 400) {
    radius = 400;
  } else if (maxDistance >= 300) {
    radius = 300;
  } else if (maxDistance >= 200) {
    radius = 200;
  } else if (maxDistance >= 100) {
    radius = 100;
  } else if (maxDistance >= 50) {
    radius = 50;
  } else {
    radius = 10;
  }
  return radius;
}
function getLanduseSizes(map, circleGeom, landuses2) {
  let sizes = {};
  let sumSizes = 0;
  const bboxC = bbox(circleGeom);
  const sw = map.project([bboxC[0], bboxC[1]]);
  const ne = map.project([bboxC[2], bboxC[3]]);
  const landuse = map.queryRenderedFeatures(
    [
      [sw.x, sw.y],
      // southwest corner in pixel coordinates
      [ne.x, ne.y]
      // northeast corner in pixel coordinates
    ],
    { layers: ["landuse"] }
  );
  landuse.forEach(function(feature) {
    const intersection = intersect(circleGeom, feature.geometry);
    if (intersection) {
      const size = area(intersection);
      const category = landuses2[feature.properties.nutzart].category;
      if (!sizes[category]) {
        sizes[category] = {};
        sizes[category].m = size;
      } else {
        sizes[category].m += size;
      }
      sumSizes += size;
    }
  });
  Object.keys(sizes).forEach(function(key) {
    sizes[key].p = sizes[key].m / sumSizes * 100;
  });
  return { sizes, sumSizes };
}
function getCircleGeom(map, opt) {
  let points = [];
  for (let i = 0; i < opt.steps; i++) {
    const angle = 360 / opt.steps * i;
    const options = { units: "meters" };
    const cooUp = destination(map.getCenter().toArray(), opt.radius, angle, options).geometry.coordinates;
    points.push(cooUp);
  }
  points.push(points[0]);
  return {
    type: "Polygon",
    coordinates: [points]
  };
}
function checkCirleFits(map, cirlceGeom) {
  const bbox2 = map.getBounds().toArray();
  const bBoxGeoJSON = {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          bbox2[0],
          [
            bbox2[1][0],
            bbox2[0][1]
          ],
          bbox2[1],
          [
            bbox2[0][0],
            bbox2[1][1]
          ],
          bbox2[0]
        ]
      ]
    }
  };
  return within(cirlceGeom, bBoxGeoJSON);
}
const Map_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: "#myCanvas.svelte-1dfwv1l{z-index:10;pointer-events:none}",
  map: null
};
const Map = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $showBasemap, $$unsubscribe_showBasemap;
  let $circleRadius, $$unsubscribe_circleRadius;
  let $locationText, $$unsubscribe_locationText;
  let $textVis, $$unsubscribe_textVis;
  let $useLocationAsText, $$unsubscribe_useLocationAsText;
  let $mapCenter, $$unsubscribe_mapCenter;
  let $totalSize, $$unsubscribe_totalSize;
  let $areaSizes, $$unsubscribe_areaSizes;
  let $isMobile, $$unsubscribe_isMobile;
  let $newBounds, $$unsubscribe_newBounds;
  $$unsubscribe_showBasemap = subscribe(showBasemap, (value) => $showBasemap = value);
  $$unsubscribe_circleRadius = subscribe(circleRadius, (value) => $circleRadius = value);
  $$unsubscribe_locationText = subscribe(locationText, (value) => $locationText = value);
  $$unsubscribe_textVis = subscribe(textVis, (value) => $textVis = value);
  $$unsubscribe_useLocationAsText = subscribe(useLocationAsText, (value) => $useLocationAsText = value);
  $$unsubscribe_mapCenter = subscribe(mapCenter, (value) => $mapCenter = value);
  $$unsubscribe_totalSize = subscribe(totalSize, (value) => $totalSize = value);
  $$unsubscribe_areaSizes = subscribe(areaSizes, (value) => $areaSizes = value);
  $$unsubscribe_isMobile = subscribe(isMobile, (value) => $isMobile = value);
  $$unsubscribe_newBounds = subscribe(newBounds, (value) => $newBounds = value);
  let map;
  function setBounds(b) {
    if (!b || !map)
      return;
    console.log(b);
    map.setCenter(b);
  }
  const drawAndCount = function(map2) {
    if (!map2 || !map2.getLayer("landuse"))
      return;
    const mC = map2.getCenter().toArray();
    set_store_value(mapCenter, $mapCenter = [mC[0].toFixed(3), mC[1].toFixed(3)], $mapCenter);
    const canvas = document.getElementById("myCanvas");
    let carCountingEnabled = map2.getZoom() >= 10;
    set_store_value(circleRadius, $circleRadius = getMaxCircleRadius(map2), $circleRadius);
    let circleGeom = getCircleGeom(map2, { radius: $circleRadius, steps: 30 });
    let circleFits = checkCirleFits(map2, circleGeom);
    if (!circleFits || !carCountingEnabled) {
      const { width, height } = map2.getContainer().getBoundingClientRect();
      const ctx = canvas.getContext("2d");
      canvas.width = width;
      canvas.height = height;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      return;
    }
    const { sizes, sumSizes } = getLanduseSizes(map2, circleGeom, landuses);
    set_store_value(areaSizes, $areaSizes = sizes, $areaSizes);
    set_store_value(totalSize, $totalSize = sumSizes, $totalSize);
    set_store_value(locationText, $locationText = "Lat " + $mapCenter[1] + " N, Lng " + $mapCenter[0] + " E", $locationText);
    if ($useLocationAsText) {
      set_store_value(textVis, $textVis = $locationText, $textVis);
    }
    drawCanvasCirlce(map2, canvas, $circleRadius);
  };
  $$result.css.add(css$6);
  {
    drawAndCount(map);
  }
  {
    setBounds($newBounds);
  }
  $$unsubscribe_showBasemap();
  $$unsubscribe_circleRadius();
  $$unsubscribe_locationText();
  $$unsubscribe_textVis();
  $$unsubscribe_useLocationAsText();
  $$unsubscribe_mapCenter();
  $$unsubscribe_totalSize();
  $$unsubscribe_areaSizes();
  $$unsubscribe_isMobile();
  $$unsubscribe_newBounds();
  return `<div id="map" class="w-full h-1/2 lg:h-screen !absolute left-0 z-0"><canvas id="myCanvas" class="absolute svelte-1dfwv1l"></canvas></div>

<div class="relative w-full h-full pointer-events-none">${!$isMobile ? `${validate_component(MapKey, "MapKey").$$render($$result, {}, {}, {})}` : ``}
  <button class="btn btn-primary drop-shadow-xl text-2xl btn-circle absolute left-4 top-4 leading-7 z-40 pointer-events-auto"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16"><path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path></svg></button>
  <button class="btn btn-primary drop-shadow-xl text-2xl btn-circle absolute left-4 top-10 mt-8 leading-7 z-40 pointer-events-auto"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16"><path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"></path></svg></button>

  <div class="absolute right-2 bottom-8 z-50 text-md">Radius: ${escape($circleRadius)}m
  </div>

  <div class="absolute right-2 bottom-2 z-50 text-md">${$showBasemap ? `©
      <a target="_blank" rel="noreferrer" href="https://www.openstreetmap.org/copyright">OpenStreetMap
      </a>
      contributors © |` : ``}

    Geoportal Berlin / ALKIS Berlin 2026
  </div>

  <div class="absolute right-0 bottom-12 z-50 form-control w-fit pointer-events-auto"><label class="cursor-pointer label"><span class="mx-2 text-md">Basemap</span>
      <input type="checkbox" class="toggle toggle-primary"${add_attribute("checked", $showBasemap, 1)}></label></div>
</div>`;
});
function geojson() {
  const berlin = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: {
          type: "Polygon",
          coordinates: [
            [
              [13.154903, 51.6002788],
              [13.1616498, 51.59211],
              [13.1410885, 51.5712328],
              [13.1608913, 51.5589369],
              [13.1856316, 51.5580964],
              [13.1907373, 51.5388127],
              [13.2080416, 51.5242717],
              [13.2039897, 51.4986924],
              [13.1850528, 51.4899953],
              [13.1827361, 51.4715216],
              [13.2041383, 51.4563748],
              [13.1921746, 51.4407301],
              [13.175051, 51.4327334],
              [13.1752251, 51.4268171],
              [13.2034503, 51.429609],
              [13.2014204, 51.4182753],
              [13.2195712, 51.3948611],
              [13.2478718, 51.3942563],
              [13.2615856, 51.4007736],
              [13.2864859, 51.3992535],
              [13.2856229, 51.4107778],
              [13.3092358, 51.4175278],
              [13.3113595, 51.4223401],
              [13.3494316, 51.4325246],
              [13.3827193, 51.4272585],
              [13.3802854, 51.4361181],
              [13.3880863, 51.447832],
              [13.4025987, 51.4538805],
              [13.4120812, 51.4394373],
              [13.4324658, 51.4270383],
              [13.4656975, 51.4216655],
              [13.4632816, 51.4120605],
              [13.501097, 51.4041457],
              [13.5207259, 51.4036678],
              [13.5265371, 51.3811729],
              [13.5507855, 51.379267],
              [13.5702232, 51.3857433],
              [13.5880819, 51.3817698],
              [13.5991486, 51.3686734],
              [13.6171584, 51.3709105],
              [13.6618098, 51.3690012],
              [13.6699186, 51.3754653],
              [13.682879, 51.367729],
              [13.6911721, 51.3741773],
              [13.7078456, 51.3649998],
              [13.7389873, 51.3612031],
              [13.7510553, 51.3653695],
              [13.7764595, 51.3609629],
              [13.7802898, 51.368974],
              [13.8087363, 51.3728186],
              [13.8197505, 51.3694717],
              [13.8394745, 51.3824124],
              [13.8629324, 51.3803743],
              [13.8838734, 51.3745985],
              [13.9003632, 51.3764875],
              [13.9083385, 51.3830703],
              [13.9393323, 51.3890872],
              [13.9568533, 51.3972208],
              [13.9719468, 51.3939301],
              [13.9704635, 51.3756991],
              [13.9997738, 51.3726353],
              [13.9977935, 51.3856308],
              [14.0159418, 51.4053246],
              [14.0447614, 51.4187466],
              [14.0449619, 51.4395064],
              [14.0627166, 51.4453405],
              [14.0523975, 51.4518043],
              [14.0554968, 51.4604924],
              [14.0334058, 51.4742178],
              [14.0387819, 51.4802971],
              [14.0746914, 51.4724523],
              [14.0891221, 51.4793432],
              [14.0737291, 51.4922804],
              [14.0962799, 51.498],
              [14.1009591, 51.5143522],
              [14.1178973, 51.523126],
              [14.135057, 51.5207011],
              [14.1311209, 51.537856],
              [14.1397573, 51.5437061],
              [14.1580449, 51.5403281],
              [14.2209782, 51.5381028],
              [14.2286423, 51.532838],
              [14.2735365, 51.5322886],
              [14.3232965, 51.5191261],
              [14.327192, 51.507366],
              [14.3421297, 51.5106214],
              [14.3403898, 51.5209839],
              [14.3572064, 51.521965],
              [14.3865671, 51.5417396],
              [14.4136677, 51.5392541],
              [14.4413482, 51.5446656],
              [14.4506947, 51.5558756],
              [14.4921085, 51.5587057],
              [14.5251987, 51.5585615],
              [14.5476931, 51.5636842],
              [14.5697257, 51.5812163],
              [14.5990144, 51.5713762],
              [14.6095835, 51.5501429],
              [14.6383634, 51.5543328],
              [14.6735314, 51.5508851],
              [14.6885087, 51.5592015],
              [14.6964637, 51.5751853],
              [14.7057006, 51.5770308],
              [14.6971119, 51.5967369],
              [14.7077946, 51.5972226],
              [14.7205212, 51.5861607],
              [14.7307217, 51.5845027],
              [14.7619069, 51.6031838],
              [14.7658159, 51.6106808],
              [14.7538129, 51.6270438],
              [14.7577473, 51.6613459],
              [14.7394708, 51.6837844],
              [14.701237, 51.7048481],
              [14.691552, 51.7080099],
              [14.6681692, 51.725857],
              [14.6562055, 51.7419313],
              [14.6600674, 51.7484361],
              [14.6518985, 51.7604976],
              [14.6538602, 51.78369],
              [14.6438267, 51.796477],
              [14.6057187, 51.8045045],
              [14.5908864, 51.8199274],
              [14.5902897, 51.8378435],
              [14.6126397, 51.8463378],
              [14.6225731, 51.8576472],
              [14.6521474, 51.8737906],
              [14.6558273, 51.8848004],
              [14.6928968, 51.9010037],
              [14.691181, 51.9069652],
              [14.7055167, 51.9236617],
              [14.7066454, 51.9354945],
              [14.7193663, 51.9419306],
              [14.7210327, 51.952638],
              [14.7072324, 51.9657165],
              [14.7070754, 51.9796121],
              [14.7162525, 51.9825599],
              [14.7214636, 51.9959074],
              [14.7139723, 52.0030435],
              [14.740712, 52.0225675],
              [14.7498432, 52.0412276],
              [14.745357, 52.053594],
              [14.759046, 52.065892],
              [14.7458624, 52.0814918],
              [14.7208928, 52.094625],
              [14.7033383, 52.0969596],
              [14.6831929, 52.1124206],
              [14.6810449, 52.1454816],
              [14.7035524, 52.164793],
              [14.7054009, 52.173197],
              [14.6879381, 52.1892951],
              [14.6865936, 52.1964643],
              [14.708392, 52.2116715],
              [14.7160287, 52.2327561],
              [14.7007689, 52.2506729],
              [14.689475, 52.2567582],
              [14.6407805, 52.2638597],
              [14.6139092, 52.2716503],
              [14.5940608, 52.2738343],
              [14.5752882, 52.2890477],
              [14.5848295, 52.3063473],
              [14.5749323, 52.3226189],
              [14.5606911, 52.3294598],
              [14.5626074, 52.339391],
              [14.5522964, 52.3541465],
              [14.5529658, 52.370923],
              [14.5341205, 52.3961392],
              [14.5459003, 52.4112117],
              [14.544769, 52.4276338],
              [14.5594594, 52.4390887],
              [14.5788254, 52.4415686],
              [14.610479, 52.4661122],
              [14.6120804, 52.4758021],
              [14.632222, 52.4892408],
              [14.6350644, 52.4974119],
              [14.6170548, 52.5073686],
              [14.6042351, 52.529063],
              [14.6153787, 52.5540644],
              [14.6345525, 52.5648143],
              [14.6381867, 52.5743923],
              [14.6167149, 52.5844577],
              [14.609414, 52.5980025],
              [14.5962113, 52.6106429],
              [14.572072, 52.6218273],
              [14.5052839, 52.643358],
              [14.4711458, 52.657818],
              [14.452924, 52.677206],
              [14.431296, 52.6828671],
              [14.4239928, 52.6961761],
              [14.3837231, 52.7256161],
              [14.3734938, 52.7366601],
              [14.3608769, 52.740618],
              [14.352472, 52.7506961],
              [14.3216859, 52.7626351],
              [14.2804369, 52.7737401],
              [14.2300768, 52.8050231],
              [14.2105258, 52.818802],
              [14.1439956, 52.8236925],
              [14.1302857, 52.828132],
              [14.1236789, 52.845356],
              [14.1586937, 52.8762887],
              [14.1615827, 52.8879588],
              [14.1522109, 52.9009045],
              [14.1498907, 52.9170914],
              [14.1388553, 52.9517519],
              [14.1436669, 52.9613565],
              [14.1622201, 52.9652701],
              [14.16788, 52.972747],
              [14.2093859, 52.9881761],
              [14.2355989, 52.9931921],
              [14.2916152, 53.0200081],
              [14.312334, 53.0355191],
              [14.3379831, 53.046577],
              [14.352414, 53.0588761],
              [14.36614, 53.0793711],
              [14.3701679, 53.104599],
              [14.3782621, 53.111625],
              [14.3872751, 53.142392],
              [14.373708, 53.154333],
              [14.3662579, 53.1719881],
              [14.3772679, 53.201752],
              [14.4058561, 53.2107291],
              [14.408503, 53.2232011],
              [14.433742, 53.2421201],
              [14.4495951, 53.2594551],
              [14.4443111, 53.2724281],
              [14.421204, 53.2761361],
              [14.4149147, 53.3019391],
              [14.4068032, 53.3087149],
              [14.415448, 53.324368],
              [14.3994761, 53.3297957],
              [14.348698, 53.309989],
              [14.3163464, 53.3122793],
              [14.3020606, 53.2862077],
              [14.2619808, 53.2765023],
              [14.2659666, 53.2596812],
              [14.2111712, 53.2547064],
              [14.2000509, 53.2617993],
              [14.187071, 53.2604841],
              [14.1618566, 53.2677462],
              [14.1246834, 53.2602919],
              [14.0991049, 53.2615191],
              [14.1119183, 53.2842005],
              [14.1352449, 53.300097],
              [14.169088, 53.3182437],
              [14.206302, 53.3426041],
              [14.2273391, 53.3626727],
              [14.2437564, 53.3946138],
              [14.237369, 53.4144186],
              [14.2408967, 53.4230785],
              [14.2248046, 53.4342877],
              [14.210939, 53.425389],
              [14.1915027, 53.4221112],
              [14.1720642, 53.4242753],
              [14.1365399, 53.4409109],
              [14.1219294, 53.441704],
              [14.1055239, 53.4226764],
              [14.0817661, 53.4149484],
              [14.0509722, 53.4136848],
              [14.0440329, 53.4292816],
              [14.0067483, 53.4305088],
              [14.0012626, 53.4349135],
              [13.9602932, 53.4303338],
              [13.9463155, 53.4308429],
              [13.9181551, 53.4219135],
              [13.9029057, 53.4318102],
              [13.9174507, 53.4467653],
              [13.9177322, 53.4558247],
              [13.8751145, 53.4735911],
              [13.8847668, 53.4853027],
              [13.8733567, 53.4902729],
              [13.8795635, 53.5040362],
              [13.823488, 53.5217006],
              [13.7984233, 53.5461098],
              [13.7842376, 53.5517065],
              [13.7763884, 53.5310172],
              [13.7786076, 53.5137279],
              [13.7928613, 53.5107622],
              [13.8077198, 53.5016616],
              [13.8271893, 53.4982974],
              [13.8114466, 53.4839496],
              [13.782365, 53.4742369],
              [13.7262596, 53.4828822],
              [13.7117843, 53.4813703],
              [13.6918303, 53.4684371],
              [13.66254, 53.4574036],
              [13.6509336, 53.444378],
              [13.6339103, 53.4398062],
              [13.6364827, 53.4240248],
              [13.6274576, 53.4133423],
              [13.5734193, 53.4081221],
              [13.5551543, 53.3925279],
              [13.5554417, 53.3759149],
              [13.5430232, 53.3639084],
              [13.5261371, 53.3672521],
              [13.5163553, 53.3521346],
              [13.523603, 53.3199168],
              [13.5106927, 53.3188936],
              [13.4835895, 53.2912283],
              [13.4608017, 53.2888111],
              [13.4530619, 53.2985948],
              [13.4380037, 53.2975537],
              [13.4269589, 53.2769572],
              [13.4043985, 53.2520438],
              [13.3890626, 53.2427124],
              [13.3704898, 53.261924],
              [13.360916, 53.2777589],
              [13.3378704, 53.2732806],
              [13.2985095, 53.281073],
              [13.2758851, 53.2652058],
              [13.2538099, 53.2609658],
              [13.2439532, 53.2479149],
              [13.2481463, 53.2426615],
              [13.2297912, 53.2166134],
              [13.2057826, 53.2201555],
              [13.1903229, 53.2353543],
              [13.1855609, 53.2484789],
              [13.1521132, 53.2512124],
              [13.131992, 53.2376157],
              [13.117542, 53.2415255],
              [13.1040602, 53.2357403],
              [13.1064782, 53.215104],
              [13.0870386, 53.2152068],
              [13.0799557, 53.2003119],
              [13.0526749, 53.1997792],
              [13.0188398, 53.1854593],
              [13.0200412, 53.1755905],
              [13.0054021, 53.1698216],
              [12.9682398, 53.1664809],
              [12.9643802, 53.1764827],
              [12.9798926, 53.1906976],
              [12.975274, 53.1980164],
              [12.9479612, 53.1991169],
              [12.9330278, 53.1881941],
              [12.9260361, 53.1957281],
              [12.9031596, 53.1936445],
              [12.8790443, 53.1794007],
              [12.8597501, 53.1875416],
              [12.8454566, 53.2010665],
              [12.8377878, 53.1970751],
              [12.8101557, 53.1952431],
              [12.7945033, 53.1896997],
              [12.7687511, 53.1881408],
              [12.7495237, 53.2060546],
              [12.758139, 53.2218969],
              [12.6908961, 53.2262715],
              [12.6649082, 53.232219],
              [12.6704276, 53.2430429],
              [12.6552112, 53.2552413],
              [12.6182139, 53.2517186],
              [12.6058701, 53.2443841],
              [12.5500052, 53.2619382],
              [12.5296734, 53.2647431],
              [12.5010909, 53.2617413],
              [12.4987684, 53.255443],
              [12.4652096, 53.2561837],
              [12.4502107, 53.2506445],
              [12.4317337, 53.2627553],
              [12.4273563, 53.2750955],
              [12.3996192, 53.2792206],
              [12.3919122, 53.2867167],
              [12.398455, 53.2950823],
              [12.3927054, 53.3023035],
              [12.3615102, 53.3071894],
              [12.3523264, 53.3129702],
              [12.310599, 53.323277],
              [12.279356, 53.327427],
              [12.257078, 53.324989],
              [12.236312, 53.341718],
              [12.222506, 53.35764],
              [12.212093, 53.352971],
              [12.190814, 53.35377],
              [12.186751, 53.343462],
              [12.168702, 53.339156],
              [12.141279, 53.359144],
              [12.134724, 53.348606],
              [12.108434, 53.349974],
              [12.106835, 53.34353],
              [12.081924, 53.346194],
              [12.077503, 53.369266],
              [12.0510329, 53.3667077],
              [12.0561608, 53.3492483],
              [12.0401598, 53.3453349],
              [12.016184, 53.332754],
              [12.023709, 53.304355],
              [12.0022256, 53.2994226],
              [11.9973366, 53.2937223],
              [11.9736314, 53.2975211],
              [11.954352, 53.273785],
              [11.906595, 53.275015],
              [11.892509, 53.272786],
              [11.865901, 53.255819],
              [11.846579, 53.251736],
              [11.7959488, 53.2533115],
              [11.8173489, 53.2450298],
              [11.8317811, 53.2339619],
              [11.8286633, 53.2284619],
              [11.7941495, 53.2261334],
              [11.7693936, 53.2276368],
              [11.7284974, 53.2169497],
              [11.7274053, 53.23167],
              [11.7072554, 53.2341508],
              [11.6908857, 53.2415157],
              [11.6615747, 53.2434838],
              [11.6533996, 53.2389907],
              [11.6291082, 53.2420816],
              [11.6165363, 53.2302648],
              [11.6047714, 53.2279396],
              [11.5866894, 53.2146],
              [11.5632371, 53.21294],
              [11.5564636, 53.1851268],
              [11.568598, 53.1703758],
              [11.5525925, 53.149951],
              [11.5558495, 53.1387783],
              [11.5346403, 53.1252177],
              [11.473035, 53.1289139],
              [11.4597806, 53.1402654],
              [11.4377407, 53.1366647],
              [11.3954188, 53.1401778],
              [11.3916525, 53.1298815],
              [11.3998076, 53.1161379],
              [11.3905345, 53.1104632],
              [11.3599512, 53.116302],
              [11.3367928, 53.1136054],
              [11.3245902, 53.119427],
              [11.2904008, 53.1169125],
              [11.2657725, 53.1221736],
              [11.270079, 53.1002964],
              [11.2866303, 53.0873124],
              [11.3118446, 53.0764663],
              [11.3355411, 53.0563376],
              [11.3532861, 53.0548242],
              [11.3963031, 53.0703525],
              [11.4431418, 53.0783823],
              [11.4601199, 53.0762417],
              [11.5010909, 53.0506486],
              [11.5207907, 53.0469583],
              [11.5412197, 53.0524922],
              [11.5561823, 53.0501834],
              [11.5846198, 53.035307],
              [11.6183406, 53.0414009],
              [11.6396011, 53.0386896],
              [11.6406458, 53.0319844],
              [11.6261887, 53.0205218],
              [11.6386358, 53.0061125],
              [11.6770659, 53.0077377],
              [11.6836652, 52.9891297],
              [11.6992557, 52.9774884],
              [11.7341892, 52.9884955],
              [11.7539988, 52.9858045],
              [11.7679779, 52.9779883],
              [11.7895048, 52.9598957],
              [11.8288521, 52.9576585],
              [11.8483001, 52.9492566],
              [11.8467207, 52.9400069],
              [11.8297506, 52.9309025],
              [11.8232469, 52.9174127],
              [11.8446935, 52.9090368],
              [11.8694201, 52.909543],
              [11.9000497, 52.8929528],
              [11.9481414, 52.8874388],
              [11.9595663, 52.8790534],
              [11.9875751, 52.8768465],
              [12.0059488, 52.8871819],
              [12.0558911, 52.889048],
              [12.0771178, 52.8861677],
              [12.0818925, 52.8771965],
              [12.12038, 52.8756566],
              [12.1332833, 52.8657539],
              [12.1239495, 52.8538257],
              [12.1726522, 52.8647239],
              [12.1970541, 52.8778973],
              [12.2026777, 52.8680169],
              [12.2315543, 52.8611791],
              [12.2323852, 52.8495852],
              [12.2441655, 52.8198612],
              [12.25773, 52.8048675],
              [12.2449722, 52.7868546],
              [12.2235137, 52.7869486],
              [12.2126626, 52.7732271],
              [12.2088636, 52.7536042],
              [12.2218519, 52.7404088],
              [12.2043152, 52.7305495],
              [12.2052539, 52.7141716],
              [12.2238243, 52.7022741],
              [12.220948, 52.6899145],
              [12.2323963, 52.6876368],
              [12.2392032, 52.670922],
              [12.2326931, 52.6536549],
              [12.2379379, 52.6460285],
              [12.2310807, 52.6297837],
              [12.1972611, 52.6186531],
              [12.1720182, 52.6256986],
              [12.1687819, 52.6165561],
              [12.1736287, 52.5815685],
              [12.1815198, 52.575218],
              [12.1588506, 52.5603548],
              [12.1518995, 52.544334],
              [12.1434739, 52.5370904],
              [12.1503514, 52.5291286],
              [12.1736576, 52.538741],
              [12.1887401, 52.532226],
              [12.1671225, 52.5146963],
              [12.1812746, 52.4998498],
              [12.2032562, 52.497574],
              [12.2278248, 52.5062537],
              [12.2360702, 52.5238729],
              [12.2579581, 52.5181973],
              [12.2604272, 52.5036358],
              [12.271846, 52.4875012],
              [12.2985559, 52.4960655],
              [12.3110076, 52.4907857],
              [12.3087984, 52.4788751],
              [12.3249849, 52.47199],
              [12.3167689, 52.45272],
              [12.3028717, 52.435042],
              [12.2891822, 52.4306741],
              [12.2925051, 52.4231743],
              [12.2753045, 52.4122522],
              [12.3022689, 52.4053087],
              [12.3021721, 52.3953368],
              [12.2917108, 52.386111],
              [12.3064064, 52.378316],
              [12.2841224, 52.3641988],
              [12.3080899, 52.3446322],
              [12.2892649, 52.322429],
              [12.2811522, 52.3182151],
              [12.2646921, 52.2972774],
              [12.2507003, 52.2722399],
              [12.2545824, 52.2615877],
              [12.245404, 52.2498615],
              [12.2699087, 52.2359247],
              [12.2938076, 52.2274336],
              [12.279667, 52.2170281],
              [12.2610718, 52.2165573],
              [12.2451958, 52.20745],
              [12.2418545, 52.1819554],
              [12.2282561, 52.1862376],
              [12.2160434, 52.1705859],
              [12.2336795, 52.1627983],
              [12.2320431, 52.1548681],
              [12.2474354, 52.1374594],
              [12.2628551, 52.132729],
              [12.2771057, 52.1036968],
              [12.2848331, 52.1037659],
              [12.3148135, 52.0930575],
              [12.331956, 52.0671859],
              [12.3482209, 52.0593063],
              [12.3597523, 52.0465778],
              [12.3895152, 52.0435958],
              [12.3974365, 52.0359523],
              [12.4340793, 52.0170967],
              [12.449586, 52.0166389],
              [12.4608317, 52.0333075],
              [12.4807278, 52.0331749],
              [12.4846889, 52.0175951],
              [12.5054386, 52.0071795],
              [12.5302848, 52.004212],
              [12.539432, 51.9849224],
              [12.6031487, 51.9814408],
              [12.6139735, 51.9917011],
              [12.644636, 51.9943092],
              [12.6486142, 52.0081222],
              [12.6718797, 52.0120532],
              [12.6823189, 52.0034004],
              [12.6959302, 52.0030274],
              [12.7303955, 51.988589],
              [12.7562435, 51.9864987],
              [12.7767377, 51.9758101],
              [12.7761426, 51.9649666],
              [12.8012626, 51.9621351],
              [12.844325, 51.9675816],
              [12.8501915, 51.9591089],
              [12.8525581, 51.9351164],
              [12.8888155, 51.9348281],
              [12.8984909, 51.9276575],
              [12.9149381, 51.9312473],
              [12.9169648, 51.9393281],
              [12.9606384, 51.9349328],
              [12.9562839, 51.9227233],
              [12.9765306, 51.919889],
              [12.9730658, 51.9009989],
              [12.9893944, 51.9041718],
              [13.0455042, 51.9006867],
              [13.0374309, 51.8908342],
              [13.0366104, 51.872315],
              [13.0757315, 51.8689162],
              [13.1188246, 51.8765983],
              [13.1324132, 51.8824829],
              [13.149538, 51.8723723],
              [13.150838, 51.8596911],
              [13.1232708, 51.8579029],
              [13.1400667, 51.8245712],
              [13.1535536, 51.8150037],
              [13.1627776, 51.8023174],
              [13.1586209, 51.7973166],
              [13.1705286, 51.7871108],
              [13.1473163, 51.7665373],
              [13.1608784, 51.7548144],
              [13.1547702, 51.7443907],
              [13.1789518, 51.730883],
              [13.1750906, 51.7181467],
              [13.1541889, 51.7104741],
              [13.1616693, 51.6907673],
              [13.154654, 51.6867328],
              [13.0508856, 51.6475914],
              [13.0943406, 51.6057434],
              [13.1148004, 51.6175618],
              [13.1234255, 51.6162844],
              [13.1438553, 51.6004572],
              [13.154903, 51.6002788]
            ],
            [
              [13.686831, 52.3853033],
              [13.6999584, 52.3755917],
              [13.6930836, 52.3679772],
              [13.6718256, 52.3667857],
              [13.6488471, 52.3383381],
              [13.6377965, 52.3482126],
              [13.6461014, 52.3652758],
              [13.6426777, 52.3775085],
              [13.6285136, 52.381356],
              [13.6073619, 52.3739778],
              [13.5926921, 52.3938149],
              [13.5641574, 52.3881358],
              [13.5354929, 52.3889916],
              [13.5296951, 52.3973033],
              [13.516005, 52.4017887],
              [13.4835752, 52.3969397],
              [13.4680167, 52.4200319],
              [13.4545763, 52.4194294],
              [13.4184228, 52.4070795],
              [13.42746, 52.3857818],
              [13.4208126, 52.3761384],
              [13.3884283, 52.3778616],
              [13.3872981, 52.3885717],
              [13.3430551, 52.407686],
              [13.3120638, 52.3991062],
              [13.2959288, 52.4145035],
              [13.275822, 52.4051964],
              [13.2497798, 52.4049784],
              [13.2459511, 52.4211746],
              [13.2250586, 52.4210782],
              [13.1966703, 52.4153154],
              [13.1593543, 52.4028628],
              [13.1588692, 52.393939],
              [13.1247813, 52.3968694],
              [13.1070818, 52.4098699],
              [13.0907635, 52.4115602],
              [13.088345, 52.4196325],
              [13.1127834, 52.4291958],
              [13.1221421, 52.4378778],
              [13.109295, 52.4506349],
              [13.1105565, 52.4656575],
              [13.1176933, 52.4773203],
              [13.1283335, 52.4798205],
              [13.1688227, 52.5092271],
              [13.1414945, 52.5196148],
              [13.1173799, 52.51706],
              [13.1192457, 52.5293824],
              [13.1305013, 52.5560119],
              [13.1460197, 52.5608647],
              [13.1535443, 52.5732555],
              [13.1496095, 52.5833597],
              [13.129342, 52.5859303],
              [13.1645286, 52.5987969],
              [13.2003478, 52.5887695],
              [13.2181176, 52.5931898],
              [13.2023249, 52.6042456],
              [13.220689, 52.6278066],
              [13.2642342, 52.6268645],
              [13.2695974, 52.6397143],
              [13.2838319, 52.6411189],
              [13.2877261, 52.6598417],
              [13.3094061, 52.6427257],
              [13.3096974, 52.6294729],
              [13.3366807, 52.6226513],
              [13.3571206, 52.6231988],
              [13.3770211, 52.6293358],
              [13.3979077, 52.6481146],
              [13.424374, 52.6355778],
              [13.4342584, 52.6379548],
              [13.4408204, 52.6492654],
              [13.4597316, 52.6480828],
              [13.4740645, 52.6543414],
              [13.450782, 52.6626681],
              [13.4595492, 52.6689779],
              [13.4779722, 52.6676789],
              [13.4907625, 52.6547958],
              [13.512828, 52.6454021],
              [13.523022, 52.6450365],
              [13.5178192, 52.6295666],
              [13.5058558, 52.6257537],
              [13.4985075, 52.6107434],
              [13.5081184, 52.5921389],
              [13.5276937, 52.5922366],
              [13.5469869, 52.5876432],
              [13.5682686, 52.5737892],
              [13.5815424, 52.5711074],
              [13.5874276, 52.5494492],
              [13.6187157, 52.544215],
              [13.6256871, 52.5301844],
              [13.6569123, 52.5298379],
              [13.6585034, 52.5259465],
              [13.6357831, 52.5142171],
              [13.6148914, 52.4807613],
              [13.6171224, 52.4712088],
              [13.6432163, 52.4792245],
              [13.6672387, 52.4742885],
              [13.6827773, 52.4660695],
              [13.7019125, 52.4675365],
              [13.7159638, 52.4629168],
              [13.7290816, 52.4507847],
              [13.7564462, 52.4461766],
              [13.7440755, 52.4380708],
              [13.729807, 52.4163459],
              [13.7342706, 52.4021367],
              [13.715869, 52.3996935],
              [13.686831, 52.3853033]
            ]
          ]
        },
        properties: {
          type: "relation",
          id: 62504,
          tags: {
            "ISO3166-2": "DE-BB",
            "TMC:cid_58:tabcd_1:Class": "Area",
            "TMC:cid_58:tabcd_1:LCLversion": "12.0",
            "TMC:cid_58:tabcd_1:LocationCode": "267",
            admin_level: "4",
            "alt_name:cs": "Země Braniborsko",
            "alt_name:pt": "Brandeburgo",
            border_type: "state",
            boundary: "administrative",
            coat_of_arms: "File:DEU Brandenburg COA.svg",
            "de:amtlicher_gemeindeschluessel": "12",
            "de:regionalschluessel": "12",
            flag: "File:Flag of Brandenburg.svg",
            name: "Brandenburg",
            "name:am": "ብራንደንቡርግ",
            "name:an": "Brandemburgo",
            "name:ar": "براندنبورغ",
            "name:ay": "Brandenburg suyu",
            "name:az": "Brandenburq",
            "name:ba": "Бранденбург",
            "name:be": "Брандэнбург",
            "name:bg": "Бранденбург",
            "name:bn": "ব্রান্ডেনবুর্গ",
            "name:ca": "Brandenburg",
            "name:ce": "Бранденбург",
            "name:cs": "Braniborsko",
            "name:cv": "Бранденбург",
            "name:de": "Brandenburg",
            "name:el": "Βρανδεμβούργο",
            "name:en": "Brandenburg",
            "name:eo": "Brandenburgio",
            "name:es": "Brandemburgo",
            "name:eu": "Brandenburgo",
            "name:fa": "براندنبورگ",
            "name:fr": "Brandebourg",
            "name:fy": "Brandenburch",
            "name:ga": "Brandenburg",
            "name:gl": "Brandeburgo",
            "name:gn": "Brandeburgo",
            "name:he": "ברנדנבורג",
            "name:hi": "ब्रैंडेनबर्ग",
            "name:hsb": "Braniborska",
            "name:hu": "Brandenburg",
            "name:hy": "Բրանդենբուրգ",
            "name:ia": "Brandeburgo",
            "name:ie": "Brandenburgia",
            "name:is": "Brandenborg",
            "name:it": "Brandeburgo",
            "name:ja": "ブランデンブルク州",
            "name:ka": "ბრანდენბურგი",
            "name:kk": "Бранденбург",
            "name:ko": "브란덴부르크",
            "name:la": "Brandenburgum",
            "name:lb": "Brandenburg",
            "name:li": "Brandeburg",
            "name:lt": "Brandenburgas",
            "name:lv": "Brandenburga",
            "name:mk": "Бранденбург",
            "name:mn": "Бранденбург",
            "name:mr": "ब्रांडेनबुर्ग",
            "name:ne": "ब्रान्डेनबर्ग",
            "name:nl": "Brandenburg",
            "name:oc": "Brandeborg",
            "name:os": "Бранденбург",
            "name:pa": "ਬ੍ਰਾਂਡਨਬੁਰਕ",
            "name:pl": "Brandeburgia",
            "name:prefix": "Bundesland",
            "name:ps": "براندنبورگ",
            "name:pt": "Brandemburgo",
            "name:ro": "Brandenburg",
            "name:ru": "Бранденбург",
            "name:sk": "Brandenbursko",
            "name:sq": "Brandenburgu",
            "name:sr": "Бранденбург",
            "name:th": "รัฐบรันเดินบวร์ค",
            "name:tl": "Brandeburgo",
            "name:uk": "Бранденбург",
            "name:ur": "برندنبرگ",
            "name:vo": "Brandänburgän",
            "name:yi": "בראנדנבורג",
            "name:zh": "勃兰登堡州",
            "name:zh-Hans": "勃兰登堡州",
            "name:zh-Hant": "布蘭登堡州",
            population: "2522000",
            ref: "BB",
            "ref:nuts": "DE4;DE40",
            "ref:nuts:1": "DE4",
            "ref:nuts:2": "DE40",
            timezone: "Europe/Berlin",
            type: "boundary",
            wikidata: "Q1208",
            wikipedia: "de:Brandenburg"
          },
          relations: [],
          meta: {},
          name: "Brandenburg"
        },
        id: "relation/62504"
      }
    ]
  };
  berlin.features.forEach((feature) => {
    if (feature.geometry.type === "Polygon") {
      feature.geometry.coordinates = feature.geometry.coordinates.map(
        (ring) => ring.slice().reverse()
      );
    }
  });
  function smoothCoordinates(coords) {
    let windowSize = 2;
    if (windowSize > coords.length) {
      throw new Error(
        "Invalid windowSize: must be between 1 and the number of coordinates."
      );
    }
    const smoothed = [];
    const halfWindow = Math.floor(windowSize / 2);
    for (let i = 0; i < coords.length; i++) {
      let sumX = 0, sumY = 0, count = 0;
      for (let j = -halfWindow; j <= halfWindow; j++) {
        const index = i + j;
        if (index >= 0 && index < coords.length) {
          sumX += coords[index][0];
          sumY += coords[index][1];
          count++;
        }
      }
      smoothed.push([sumX / count, sumY / count]);
    }
    return smoothed;
  }
  berlin.features.forEach((feature) => {
    if (feature.geometry.type === "Polygon") {
      feature.geometry.coordinates = feature.geometry.coordinates.map(smoothCoordinates);
    }
  });
  return berlin;
}
const PostcardFront_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: '.bold.svelte-hlq8ce{font-family:"IBM Plex Sans Bold"}',
  map: null
};
function sumByCount(d) {
  return d.size;
}
const PostcardFront = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $svg, $$unsubscribe_svg;
  let $mapCenter, $$unsubscribe_mapCenter;
  let $circleRadius, $$unsubscribe_circleRadius;
  let $textVis, $$unsubscribe_textVis;
  let $isMobile, $$unsubscribe_isMobile;
  let $areaSizes, $$unsubscribe_areaSizes;
  let $dimensions, $$unsubscribe_dimensions;
  let $screenWidth, $$unsubscribe_screenWidth;
  let $lang, $$unsubscribe_lang;
  $$unsubscribe_svg = subscribe(svg, (value) => $svg = value);
  $$unsubscribe_mapCenter = subscribe(mapCenter, (value) => $mapCenter = value);
  $$unsubscribe_circleRadius = subscribe(circleRadius, (value) => $circleRadius = value);
  $$unsubscribe_textVis = subscribe(textVis, (value) => $textVis = value);
  $$unsubscribe_isMobile = subscribe(isMobile, (value) => $isMobile = value);
  $$unsubscribe_areaSizes = subscribe(areaSizes, (value) => $areaSizes = value);
  $$unsubscribe_dimensions = subscribe(dimensions, (value) => $dimensions = value);
  $$unsubscribe_screenWidth = subscribe(screenWidth, (value) => $screenWidth = value);
  $$unsubscribe_lang = subscribe(lang, (value) => $lang = value);
  let projection;
  let berlin = geojson();
  berlin = berlin;
  let treemap;
  const width = $dimensions[1], height = $dimensions[0];
  let visWrapper;
  function dataUpdated(size) {
    if (!size)
      return;
    const treeChildren = [];
    Object.keys(categories).forEach((keyCategories) => {
      const child = {};
      child.name = categories[keyCategories].name;
      child.children = [];
      if (!size[keyCategories]) {
        return;
      }
      if (Math.round(size[keyCategories].p) < 1) {
        return;
      }
      child.children.push({
        name: keyCategories,
        size: size[keyCategories]?.p || 0,
        color: categories[keyCategories].color
      });
      treeChildren.push(child);
    });
    const data = { children: treeChildren };
    redraw(data);
  }
  function updateText(newText) {
    if (!$svg) {
      return;
    }
    $svg.selectAll(".title-text").data([newText]).text(function(d) {
      return d;
    });
  }
  function redraw(data) {
    if ($svg) {
      $svg.remove();
    }
    const t = d3.transition().duration(1e3);
    set_store_value(svg, $svg = d3.select(visWrapper).append("svg").attr("width", width).attr("height", height).attr("xmlns", "http://www.w3.org/2000/svg").attr("class", "inline " + ($isMobile ? "border" : "")), $svg);
    const rect = $svg.append("rect");
    rect.attr("x", 0).attr("y", 0).attr("width", width).attr("height", height).attr("fill", "#fff");
    treemap = d3.treemap().tile(d3.treemapBinary).size([width, height - 120]).round(true).paddingOuter(4);
    const root = d3.hierarchy(data);
    treemap(root.sum(sumByCount));
    let cell = $svg.selectAll("g").data(root.leaves()).enter().append("g").attr("transform", function(d) {
      return "translate(" + d.x0 + "," + d.y0 + ")";
    });
    $svg.selectAll(".title-text").data([$textVis]).enter().append("text").attr("class", "title-text").attr("transform", "translate(" + width / 2 + "," + height * 0.9 + ")").attr("text-anchor", "middle").attr("font-family", "IBM Plex Sans Bold").attr("font-size", 30).attr("fill", "#292929").text(function(d) {
      return d;
    });
    cell.append("rect").attr("id", function(d) {
    }).attr("width", function(d) {
      return d.x1 - d.x0;
    }).attr("height", function(d) {
      return d.y1 - d.y0;
    }).attr("fill", function(d) {
      return d.data.color;
    }).style("opacity", 0).transition(t).style("opacity", 1);
    cell.append("text").attr("x", function(d) {
      return d.x1 - d.x0 - 5;
    }).attr("y", function(d) {
      return d.y1 - d.y0 - 10;
    }).attr("text-anchor", "end").attr("font-family", "IBM Plex Sans Text").attr("font-size", 12).text(function(d) {
      const w = d.x1 - d.x0;
      const h = d.y1 - d.y0;
      if (w < 30 || h < 30)
        return;
      return Math.round(d.data.size).toString() + "%";
    }).attr("fill", function(d) {
      if (d.data.color) {
        if (d.data.name === "street" || d.data.name === "transport") {
          return chroma(d.data.color).brighten(1).hex();
        } else {
          return chroma(d.data.color).darken(1).hex();
        }
      }
    }).style("opacity", 0).transition(t).style("opacity", 1);
    $svg.append("text").attr("transform", "translate(" + width / 2 + "," + height * 0.95 + ")").attr("text-anchor", "middle").attr("font-family", "IBM Plex Sans Bold").attr("font-size", 10).attr("fill", "#e70000").text("Viele Grüße aus Brandeburg");
    let map = $svg.append("g");
    let mapWidth = 40;
    let mapHeight = 40;
    projection = d3.geoMercator().fitSize([mapWidth, mapHeight], berlin);
    const path = d3.geoPath().projection(projection);
    map.selectAll("path").data(berlin.features).enter().append("path").attr("d", path).attr("stroke", "#e70000").attr("fill", "none").attr("stroke-width", 1);
    const radiusInDegrees = $circleRadius / 111320;
    const circle = d3.geoCircle().center($mapCenter).radius(radiusInDegrees);
    map.append("path").datum(circle()).attr("d", path).attr("fill", "none").attr("stroke", "#e70000").attr("stroke-width", 2);
    map.attr("transform", `translate(${width - mapWidth - 10},${height - mapHeight - 10})`);
  }
  $$result.css.add(css$5);
  {
    dataUpdated($areaSizes);
  }
  {
    updateText($textVis);
  }
  $$unsubscribe_svg();
  $$unsubscribe_mapCenter();
  $$unsubscribe_circleRadius();
  $$unsubscribe_textVis();
  $$unsubscribe_isMobile();
  $$unsubscribe_areaSizes();
  $$unsubscribe_dimensions();
  $$unsubscribe_screenWidth();
  $$unsubscribe_lang();
  return `


<div${add_attribute(
    "class",
    $isMobile ? "mx-4 pt-10 text-center" : "absolute border right-16 z-40 drop-shadow-xl",
    0
  )}${add_attribute(
    "style",
    $screenWidth <= 500 ? `transform-origin: top left; transform:scale(${($screenWidth - 50) / 444}); height: ${630 * ($screenWidth - 0) / 444}px;` : "",
    0
  )}><main class="w-full text-center"${add_attribute("this", visWrapper, 0)}></main>

  <input type="text"${add_attribute("placeholder", $lang === "de" ? "Dein Text hier" : "Your text here", 0)} class="${[
    "input text-center absolute bottom-[50px] text-[30px] bold svelte-hlq8ce",
    ($screenWidth <= 444 ? `` : "w-full") ? "w-full" : ""
  ].join(" ").trim()}"${add_attribute(
    "style",
    $isMobile ? `position: relative; bottom: 97px;  width:440px; left:2px` : "",
    0
  )}${add_attribute("value", $textVis, 0)}>
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#f64c72" class="bi bi-pen-fill text-primary pointer-events-none" viewBox="0 0 16 16"${add_attribute(
    "style",
    $isMobile ? `display:none` : "position: absolute; z-index: 1000; right: 12px; bottom: 65px;",
    0
  )}><path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001"></path></svg>
</div>`;
});
const MulitlineText = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text = "" } = $$props;
  let { x = 0 } = $$props;
  let { y = 0 } = $$props;
  let { width = 0 } = $$props;
  let { lineHeight = 1.2 } = $$props;
  let { fontSize = 16 } = $$props;
  let { fontFamily = "Arial" } = $$props;
  let { fontStyle = "" } = $$props;
  let { fontFill = "#292929" } = $$props;
  let lines = [];
  let canvas;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.x === void 0 && $$bindings.x && x !== void 0)
    $$bindings.x(x);
  if ($$props.y === void 0 && $$bindings.y && y !== void 0)
    $$bindings.y(y);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.lineHeight === void 0 && $$bindings.lineHeight && lineHeight !== void 0)
    $$bindings.lineHeight(lineHeight);
  if ($$props.fontSize === void 0 && $$bindings.fontSize && fontSize !== void 0)
    $$bindings.fontSize(fontSize);
  if ($$props.fontFamily === void 0 && $$bindings.fontFamily && fontFamily !== void 0)
    $$bindings.fontFamily(fontFamily);
  if ($$props.fontStyle === void 0 && $$bindings.fontStyle && fontStyle !== void 0)
    $$bindings.fontStyle(fontStyle);
  if ($$props.fontFill === void 0 && $$bindings.fontFill && fontFill !== void 0)
    $$bindings.fontFill(fontFill);
  return `


<text${add_attribute("x", x, 0)}${add_attribute("y", y, 0)}${add_attribute("font-size", fontSize, 0)}${add_attribute("font-family", fontFamily, 0)}${add_attribute("font-style", fontStyle, 0)}${add_attribute("fill", fontFill, 0)}>${each(lines, (line, i) => {
    return `<tspan${add_attribute("x", x, 0)}${add_attribute(
      "dy",
      i === 0 ? 0 : (line.extraSpace ? 2 : 1) * lineHeight * fontSize,
      0
    )}>${escape(line.text)}</tspan>`;
  })}</text>
<canvas style="display: none;"${add_attribute("this", canvas, 0)}></canvas>`;
});
const PostcardBack = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $dimensions, $$unsubscribe_dimensions;
  $$unsubscribe_dimensions = subscribe(dimensions, (value) => $dimensions = value);
  const width = $dimensions[0], height = $dimensions[1];
  $$unsubscribe_dimensions();
  return `<svg encoding="UTF-8" version="1.0"${add_attribute("width", width, 0)}${add_attribute("height", height, 0)} xmlns="http://www.w3.org/2000/svg" id="postcardBack"><rect x="0" y="0"${add_attribute("width", width, 0)}${add_attribute("height", height, 0)} fill="#fff"></rect><g><g transform="translate(15,5)">${validate_component(MulitlineText, "MulitlineText").$$render(
    $$result,
    {
      text: "Wie viel Platz brauchen wir eigentlich, um zu wohnen, uns fortzubewegen und mal tief durchzuatmen?$Eine gerechte Nutzung der Fläche in Städten kann dazu beitragen, dass wir glücklicher und gesünder leben. Besuche kiezcolors.odis-berlin.de und entdecke die Verteilung in deinem Kiez,",
      x: "10",
      y: "30",
      width: "275",
      lineHeight: "1.4",
      fontSize: "11",
      fontFamily: "IBM Plex Sans Text",
      fill: "#292929"
    },
    {},
    {}
  )}</g><g transform="translate(15,107)">${validate_component(MulitlineText, "MulitlineText").$$render(
    $$result,
    {
      text: "Mit herzlichen Grüßen aus dem CityLab!",
      x: "10",
      y: "30",
      width: "275",
      lineHeight: "1.4",
      fontSize: "11",
      fontFamily: "IBM Plex Sans Text",
      fill: "#292929"
    },
    {},
    {}
  )}</g><g transform="translate(15,160)">${each(Object.values(categories), ({ color, name, name_en }, i) => {
    return `<rect classs="rect-legend" width="10" height="10"${add_attribute("fill", color, 0)}${add_attribute("transform", `translate(10,${10 + i * 16})`, 0)}></rect>
        <text classs="text-legend"${add_attribute("transform", `translate(25,${19 + i * 16})`, 0)} text-anchor="start" font-family="IBM Plex Sans Text" font-size="11" fill="#292929">${escape(name)} (${escape(name_en)})</text>`;
  })}</g><g transform="translate(15,310)">${validate_component(MulitlineText, "MulitlineText").$$render(
    $$result,
    {
      text: "Du siehst die Flächenverteilung in einem 1000 Meter Radius.\n        Möglich gemacht durch offene Verwaltungsdaten des Liegenschaftskatasters (ALKIS) aus dem Geoportal Berlin. <3",
      x: "10",
      y: "30",
      width: "275",
      lineHeight: "1.4",
      fontSize: "9",
      fontFamily: "IBM Plex Sans Text",
      fontStyle: "italic",
      fontFill: "rgb(148, 148, 148)"
    },
    {},
    {}
  )}</g><line y1="30"${add_attribute("x1", width / 2, 0)}${add_attribute("y2", height - 80, 0)}${add_attribute("x2", width / 2, 0)} style="stroke:rgb(200, 200, 200);stroke-width:1"></line><line${add_attribute("y1", 200, 0)}${add_attribute("x1", width - 30, 0)}${add_attribute("y2", 200, 0)}${add_attribute("x2", width / 2 + 30, 0)} style="stroke:rgb(200, 200, 200);stroke-width:1"></line><line${add_attribute("y1", 250, 0)}${add_attribute("x1", width - 30, 0)}${add_attribute("y2", 250, 0)}${add_attribute("x2", width / 2 + 30, 0)} style="stroke:rgb(200, 200, 200);stroke-width:1"></line><line${add_attribute("y1", 300, 0)}${add_attribute("x1", width - 30, 0)}${add_attribute("y2", 300, 0)}${add_attribute("x2", width / 2 + 30, 0)} style="stroke:rgb(200, 200, 200);stroke-width:1"></line><rect width="90" height="120" style="stroke:rgb(200, 200, 200);stroke-width:1"${add_attribute("transform", `translate(${width - 120},${30})`, 0)} fill="transparent"></rect><text transform="translate(424,535.5)" text-anchor="end" font-family="IBM Plex Sans Text" font-size="12" fill="#292929"><tspan x="0" y="0" dy="1.5em">Data: Geoportal Berlin / ALKIS Berlin</tspan><tspan x="0" y="0" dy="3em">CityLab 2024</tspan><tspan x="0" y="0" dy="4.5em">kiezcolors.odis-berlin.de</tspan></text></g><g transform="translate(25,375)"></g><g transform="translate(175,375)"></g><defs><style type="text/css">@font-face {
        font-family: "IBM Plex Sans Text";
        /* Add other properties here, as needed. For example: */
        /*
    font-weight: 100 900;
    font-style: normal italic;
    */
        src: url(data:application/octet-stream;base64,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);
      }

      @font-face {
        font-family: "IBM Plex Sans Bold";
        /* Add other properties here, as needed. For example: */
        /*
    font-weight: 100 900;
    font-style: normal italic;
    */
        src: url(data:application/octet-stream;base64,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);
      }</style></defs></svg>`;
});
function createFloatingActions(initOptions) {
  let referenceElement;
  let floatingElement;
  const defaultOptions = {
    autoUpdate: true
  };
  let options = initOptions;
  const getOptions = (mixin) => {
    return { ...defaultOptions, ...initOptions || {}, ...mixin || {} };
  };
  const updatePosition = (updateOptions) => {
    if (referenceElement && floatingElement) {
      options = getOptions(updateOptions);
      computePosition(referenceElement, floatingElement, options).then((v) => {
        Object.assign(floatingElement.style, {
          position: v.strategy,
          left: `${v.x}px`,
          top: `${v.y}px`
        });
        options?.onComputed && options.onComputed(v);
      });
    }
  };
  const referenceAction = (node) => {
    if ("subscribe" in node) {
      setupVirtualElementObserver(node);
      return {};
    } else {
      referenceElement = node;
      updatePosition();
    }
  };
  const contentAction = (node, contentOptions) => {
    let autoUpdateDestroy;
    floatingElement = node;
    options = getOptions(contentOptions);
    setTimeout(() => updatePosition(contentOptions), 0);
    updatePosition(contentOptions);
    const destroyAutoUpdate = () => {
      if (autoUpdateDestroy) {
        autoUpdateDestroy();
        autoUpdateDestroy = void 0;
      }
    };
    const initAutoUpdate = ({ autoUpdate: autoUpdate$1 } = options || {}) => {
      destroyAutoUpdate();
      if (autoUpdate$1 !== false) {
        return autoUpdate(referenceElement, floatingElement, () => updatePosition(options), autoUpdate$1 === true ? {} : autoUpdate$1);
      }
      return;
    };
    autoUpdateDestroy = initAutoUpdate();
    return {
      update(contentOptions2) {
        updatePosition(contentOptions2);
        autoUpdateDestroy = initAutoUpdate(contentOptions2);
      },
      destroy() {
        destroyAutoUpdate();
      }
    };
  };
  const setupVirtualElementObserver = (node) => {
    const unsubscribe = node.subscribe(($node) => {
      if (referenceElement === void 0) {
        referenceElement = $node;
        updatePosition();
      } else {
        Object.assign(referenceElement, $node);
        updatePosition();
      }
    });
    onDestroy(unsubscribe);
  };
  return [
    referenceAction,
    contentAction,
    updatePosition
  ];
}
function filter({
  loadOptions,
  filterText,
  items,
  multiple,
  value,
  itemId,
  groupBy,
  filterSelectedItems,
  itemFilter,
  convertStringItemsToObjects: convertStringItemsToObjects2,
  filterGroupedItems,
  label
}) {
  if (items && loadOptions)
    return items;
  if (!items)
    return [];
  if (items && items.length > 0 && typeof items[0] !== "object") {
    items = convertStringItemsToObjects2(items);
  }
  let filterResults = items.filter((item) => {
    let matchesFilter = itemFilter(item[label], filterText, item);
    if (matchesFilter && multiple && value?.length) {
      matchesFilter = !value.some((x) => {
        return filterSelectedItems ? x[itemId] === item[itemId] : false;
      });
    }
    return matchesFilter;
  });
  if (groupBy) {
    filterResults = filterGroupedItems(filterResults);
  }
  return filterResults;
}
async function getItems({ dispatch, loadOptions, convertStringItemsToObjects: convertStringItemsToObjects2, filterText }) {
  let res = await loadOptions(filterText).catch((err) => {
    console.warn("svelte-select loadOptions error :>> ", err);
    dispatch("error", { type: "loadOptions", details: err });
  });
  if (res && !res.cancelled) {
    if (res) {
      if (res && res.length > 0 && typeof res[0] !== "object") {
        res = convertStringItemsToObjects2(res);
      }
      dispatch("loaded", { items: res });
    } else {
      res = [];
    }
    return {
      filteredItems: res,
      loading: false,
      focused: true,
      listOpen: true
    };
  }
}
const ChevronIcon_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: "svg.svelte-1ea3f3y{width:var(--chevron-icon-width, 20px);height:var(--chevron-icon-width, 20px);color:var(--chevron-icon-colour, currentColor)}",
  map: null
};
const ChevronIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<svg width="100%" height="100%" viewBox="0 0 20 20" focusable="false" aria-hidden="true" class="svelte-1ea3f3y"><path fill="currentColor" d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747
          3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0
          1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502
          0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0
          0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path></svg>`;
});
const ClearIcon_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "svg.svelte-yszwet{width:var(--clear-icon-width, 20px);height:var(--clear-icon-width, 20px);color:var(--clear-icon-color, currentColor)}",
  map: null
};
const ClearIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<svg width="100%" height="100%" viewBox="-2 -2 50 50" focusable="false" aria-hidden="true" role="presentation" class="svelte-yszwet"><path fill="currentColor" d="M34.923,37.251L24,26.328L13.077,37.251L9.436,33.61l10.923-10.923L9.436,11.765l3.641-3.641L24,19.047L34.923,8.124
    l3.641,3.641L27.641,22.688L38.564,33.61L34.923,37.251z"></path></svg>`;
});
const LoadingIcon_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".loading.svelte-d6026t{width:var(--spinner-width, 20px);height:var(--spinner-height, 20px);color:var(--spinner-color, var(--icons-color));animation:svelte-d6026t-rotate 0.75s linear infinite;transform-origin:center center;transform:none}.circle_path.svelte-d6026t{stroke-dasharray:90;stroke-linecap:round}@keyframes svelte-d6026t-rotate{100%{transform:rotate(360deg)}}",
  map: null
};
const LoadingIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<svg class="loading svelte-d6026t" viewBox="25 25 50 50"><circle class="circle_path svelte-d6026t" cx="50" cy="50" r="20" fill="none" stroke="currentColor" stroke-width="5" stroke-miterlimit="10"></circle></svg>`;
});
const Select_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".svelte-select.svelte-11n9eyg.svelte-11n9eyg.svelte-11n9eyg{--borderRadius:var(--border-radius);--clearSelectColor:var(--clear-select-color);--clearSelectWidth:var(--clear-select-width);--disabledBackground:var(--disabled-background);--disabledBorderColor:var(--disabled-border-color);--disabledColor:var(--disabled-color);--disabledPlaceholderColor:var(--disabled-placeholder-color);--disabledPlaceholderOpacity:var(--disabled-placeholder-opacity);--errorBackground:var(--error-background);--errorBorder:var(--error-border);--groupItemPaddingLeft:var(--group-item-padding-left);--groupTitleColor:var(--group-title-color);--groupTitleFontSize:var(--group-title-font-size);--groupTitleFontWeight:var(--group-title-font-weight);--groupTitlePadding:var(--group-title-padding);--groupTitleTextTransform:var(--group-title-text-transform);--indicatorColor:var(--chevron-color);--indicatorHeight:var(--chevron-height);--indicatorWidth:var(--chevron-width);--inputColor:var(--input-color);--inputLeft:var(--input-left);--inputLetterSpacing:var(--input-letter-spacing);--inputMargin:var(--input-margin);--inputPadding:var(--input-padding);--itemActiveBackground:var(--item-active-background);--itemColor:var(--item-color);--itemFirstBorderRadius:var(--item-first-border-radius);--itemHoverBG:var(--item-hover-bg);--itemHoverColor:var(--item-hover-color);--itemIsActiveBG:var(--item-is-active-bg);--itemIsActiveColor:var(--item-is-active-color);--itemIsNotSelectableColor:var(--item-is-not-selectable-color);--itemPadding:var(--item-padding);--listBackground:var(--list-background);--listBorder:var(--list-border);--listBorderRadius:var(--list-border-radius);--listEmptyColor:var(--list-empty-color);--listEmptyPadding:var(--list-empty-padding);--listEmptyTextAlign:var(--list-empty-text-align);--listMaxHeight:var(--list-max-height);--listPosition:var(--list-position);--listShadow:var(--list-shadow);--listZIndex:var(--list-z-index);--multiItemBG:var(--multi-item-bg);--multiItemBorderRadius:var(--multi-item-border-radius);--multiItemDisabledHoverBg:var(--multi-item-disabled-hover-bg);--multiItemDisabledHoverColor:var(--multi-item-disabled-hover-color);--multiItemHeight:var(--multi-item-height);--multiItemMargin:var(--multi-item-margin);--multiItemPadding:var(--multi-item-padding);--multiSelectInputMargin:var(--multi-select-input-margin);--multiSelectInputPadding:var(--multi-select-input-padding);--multiSelectPadding:var(--multi-select-padding);--placeholderColor:var(--placeholder-color);--placeholderOpacity:var(--placeholder-opacity);--selectedItemPadding:var(--selected-item-padding);--spinnerColor:var(--spinner-color);--spinnerHeight:var(--spinner-height);--spinnerWidth:var(--spinner-width);--internal-padding:0 0 0 16px;border:var(--border, 1px solid #d8dbdf);border-radius:var(--border-radius, 6px);min-height:var(--height, 42px);position:relative;display:flex;align-items:stretch;padding:var(--padding, var(--internal-padding));background:var(--background, #fff);margin:var(--margin, 0);width:var(--width, 100%);font-size:var(--font-size, 16px);max-height:var(--max-height)}.svelte-11n9eyg.svelte-11n9eyg.svelte-11n9eyg{box-sizing:var(--box-sizing, border-box)}.svelte-select.svelte-11n9eyg.svelte-11n9eyg.svelte-11n9eyg:hover{border:var(--border-hover, 1px solid #b2b8bf)}.value-container.svelte-11n9eyg.svelte-11n9eyg.svelte-11n9eyg{display:flex;flex:1 1 0%;flex-wrap:wrap;align-items:center;gap:5px 10px;padding:var(--value-container-padding, 5px 0);position:relative;overflow:var(--value-container-overflow, hidden);align-self:stretch}.prepend.svelte-11n9eyg.svelte-11n9eyg.svelte-11n9eyg,.indicators.svelte-11n9eyg.svelte-11n9eyg.svelte-11n9eyg{display:flex;flex-shrink:0;align-items:center}.indicators.svelte-11n9eyg.svelte-11n9eyg.svelte-11n9eyg{position:var(--indicators-position);top:var(--indicators-top);right:var(--indicators-right);bottom:var(--indicators-bottom)}input.svelte-11n9eyg.svelte-11n9eyg.svelte-11n9eyg{position:absolute;cursor:default;border:none;color:var(--input-color, var(--item-color));padding:var(--input-padding, 0);letter-spacing:var(--input-letter-spacing, inherit);margin:var(--input-margin, 0);min-width:10px;top:0;right:0;bottom:0;left:0;background:transparent;font-size:var(--font-size, 16px)}.svelte-11n9eyg:not(.multi)>.value-container.svelte-11n9eyg>input.svelte-11n9eyg{width:100%;height:100%}input.svelte-11n9eyg.svelte-11n9eyg.svelte-11n9eyg::-moz-placeholder{color:var(--placeholder-color, #78848f);opacity:var(--placeholder-opacity, 1)}input.svelte-11n9eyg.svelte-11n9eyg.svelte-11n9eyg::placeholder{color:var(--placeholder-color, #78848f);opacity:var(--placeholder-opacity, 1)}input.svelte-11n9eyg.svelte-11n9eyg.svelte-11n9eyg:focus{outline:none}.svelte-select.focused.svelte-11n9eyg.svelte-11n9eyg.svelte-11n9eyg{border:var(--border-focused, 1px solid #006fe8);border-radius:var(--border-radius-focused, var(--border-radius, 6px))}.disabled.svelte-11n9eyg.svelte-11n9eyg.svelte-11n9eyg{background:var(--disabled-background, #ebedef);border-color:var(--disabled-border-color, #ebedef);color:var(--disabled-color, #c1c6cc)}.disabled.svelte-11n9eyg input.svelte-11n9eyg.svelte-11n9eyg::-moz-placeholder{color:var(--disabled-placeholder-color, #c1c6cc);opacity:var(--disabled-placeholder-opacity, 1)}.disabled.svelte-11n9eyg input.svelte-11n9eyg.svelte-11n9eyg::placeholder{color:var(--disabled-placeholder-color, #c1c6cc);opacity:var(--disabled-placeholder-opacity, 1)}.selected-item.svelte-11n9eyg.svelte-11n9eyg.svelte-11n9eyg{position:relative;overflow:var(--selected-item-overflow, hidden);padding:var(--selected-item-padding, 0 20px 0 0);text-overflow:ellipsis;white-space:nowrap;color:var(--selected-item-color, inherit);font-size:var(--font-size, 16px)}.multi.svelte-11n9eyg .selected-item.svelte-11n9eyg.svelte-11n9eyg{position:absolute;line-height:var(--height, 42px);height:var(--height, 42px)}.selected-item.svelte-11n9eyg.svelte-11n9eyg.svelte-11n9eyg:focus{outline:none}.hide-selected-item.svelte-11n9eyg.svelte-11n9eyg.svelte-11n9eyg{opacity:0}.icon.svelte-11n9eyg.svelte-11n9eyg.svelte-11n9eyg{display:flex;align-items:center;justify-content:center}.clear-select.svelte-11n9eyg.svelte-11n9eyg.svelte-11n9eyg{all:unset;display:flex;align-items:center;justify-content:center;width:var(--clear-select-width, 40px);height:var(--clear-select-height, 100%);color:var(--clear-select-color, var(--icons-color));margin:var(--clear-select-margin, 0);pointer-events:all;flex-shrink:0}.clear-select.svelte-11n9eyg.svelte-11n9eyg.svelte-11n9eyg:focus{outline:var(--clear-select-focus-outline, 1px solid #006fe8)}.loading.svelte-11n9eyg.svelte-11n9eyg.svelte-11n9eyg{width:var(--loading-width, 40px);height:var(--loading-height);color:var(--loading-color, var(--icons-color));margin:var(--loading--margin, 0);flex-shrink:0}.chevron.svelte-11n9eyg.svelte-11n9eyg.svelte-11n9eyg{width:var(--chevron-width, 40px);height:var(--chevron-height, 40px);background:var(--chevron-background, transparent);pointer-events:var(--chevron-pointer-events, none);color:var(--chevron-color, var(--icons-color));border:var(--chevron-border, 0 0 0 1px solid #d8dbdf);flex-shrink:0}.multi.svelte-11n9eyg.svelte-11n9eyg.svelte-11n9eyg{padding:var(--multi-select-padding, var(--internal-padding))}.multi.svelte-11n9eyg input.svelte-11n9eyg.svelte-11n9eyg{padding:var(--multi-select-input-padding, 0);position:relative;margin:var(--multi-select-input-margin, 5px 0);flex:1 1 40px}.svelte-select.error.svelte-11n9eyg.svelte-11n9eyg.svelte-11n9eyg{border:var(--error-border, 1px solid #ff2d55);background:var(--error-background, #fff)}.a11y-text.svelte-11n9eyg.svelte-11n9eyg.svelte-11n9eyg{z-index:9999;border:0px;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0px;white-space:nowrap}.multi-item.svelte-11n9eyg.svelte-11n9eyg.svelte-11n9eyg{background:var(--multi-item-bg, #ebedef);margin:var(--multi-item-margin, 0);outline:var(--multi-item-outline, 1px solid #ddd);border-radius:var(--multi-item-border-radius, 4px);height:var(--multi-item-height, 25px);line-height:var(--multi-item-height, 25px);display:flex;cursor:default;padding:var(--multi-item-padding, 0 5px);overflow:hidden;gap:var(--multi-item-gap, 4px);outline-offset:-1px;max-width:var(--multi-max-width, none);color:var(--multi-item-color, var(--item-color))}.multi-item.disabled.svelte-11n9eyg.svelte-11n9eyg.svelte-11n9eyg:hover{background:var(--multi-item-disabled-hover-bg, #ebedef);color:var(--multi-item-disabled-hover-color, #c1c6cc)}.multi-item-text.svelte-11n9eyg.svelte-11n9eyg.svelte-11n9eyg{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.multi-item-clear.svelte-11n9eyg.svelte-11n9eyg.svelte-11n9eyg{display:flex;align-items:center;justify-content:center;--clear-icon-color:var(--multi-item-clear-icon-color, #000)}.multi-item.active.svelte-11n9eyg.svelte-11n9eyg.svelte-11n9eyg{outline:var(--multi-item-active-outline, 1px solid #006fe8)}.svelte-select-list.svelte-11n9eyg.svelte-11n9eyg.svelte-11n9eyg{box-shadow:var(--list-shadow, 0 2px 3px 0 rgba(44, 62, 80, 0.24));border-radius:var(--list-border-radius, 4px);max-height:var(--list-max-height, 252px);overflow-y:auto;background:var(--list-background, #fff);position:var(--list-position, absolute);z-index:var(--list-z-index, 2);border:var(--list-border)}.prefloat.svelte-11n9eyg.svelte-11n9eyg.svelte-11n9eyg{opacity:0;pointer-events:none}.list-group-title.svelte-11n9eyg.svelte-11n9eyg.svelte-11n9eyg{color:var(--group-title-color, #8f8f8f);cursor:default;font-size:var(--group-title-font-size, 16px);font-weight:var(--group-title-font-weight, 600);height:var(--height, 42px);line-height:var(--height, 42px);padding:var(--group-title-padding, 0 20px);text-overflow:ellipsis;overflow-x:hidden;white-space:nowrap;text-transform:var(--group-title-text-transform, uppercase)}.empty.svelte-11n9eyg.svelte-11n9eyg.svelte-11n9eyg{text-align:var(--list-empty-text-align, center);padding:var(--list-empty-padding, 20px 0);color:var(--list-empty-color, #78848f)}.item.svelte-11n9eyg.svelte-11n9eyg.svelte-11n9eyg{cursor:default;height:var(--item-height, var(--height, 42px));line-height:var(--item-line-height, var(--height, 42px));padding:var(--item-padding, 0 20px);color:var(--item-color, inherit);text-overflow:ellipsis;overflow:hidden;white-space:nowrap;transition:var(--item-transition, all 0.2s);align-items:center;width:100%}.item.group-item.svelte-11n9eyg.svelte-11n9eyg.svelte-11n9eyg{padding-left:var(--group-item-padding-left, 40px)}.item.svelte-11n9eyg.svelte-11n9eyg.svelte-11n9eyg:active{background:var(--item-active-background, #b9daff)}.item.active.svelte-11n9eyg.svelte-11n9eyg.svelte-11n9eyg{background:var(--item-is-active-bg, #007aff);color:var(--item-is-active-color, #fff)}.item.first.svelte-11n9eyg.svelte-11n9eyg.svelte-11n9eyg{border-radius:var(--item-first-border-radius, 4px 4px 0 0)}.item.hover.svelte-11n9eyg.svelte-11n9eyg.svelte-11n9eyg:not(.active){background:var(--item-hover-bg, #e7f2ff);color:var(--item-hover-color, inherit)}.item.not-selectable.svelte-11n9eyg.svelte-11n9eyg.svelte-11n9eyg,.item.hover.item.not-selectable.svelte-11n9eyg.svelte-11n9eyg.svelte-11n9eyg,.item.active.item.not-selectable.svelte-11n9eyg.svelte-11n9eyg.svelte-11n9eyg,.item.not-selectable.svelte-11n9eyg.svelte-11n9eyg.svelte-11n9eyg:active{color:var(--item-is-not-selectable-color, #999);background:transparent}.required.svelte-11n9eyg.svelte-11n9eyg.svelte-11n9eyg{opacity:0;z-index:-1;position:absolute;top:0;left:0;bottom:0;right:0}",
  map: null
};
function convertStringItemsToObjects(_items) {
  return _items.map((item, index) => {
    return { index, value: item, label: `${item}` };
  });
}
function isItemFirst(itemIndex) {
  return itemIndex === 0;
}
const Select = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let hasValue;
  let hideSelectedItem;
  let showClear;
  let placeholderText;
  let ariaSelection;
  let ariaContext;
  let filteredItems;
  let $$slots = compute_slots(slots);
  const dispatch = createEventDispatcher();
  let { justValue = null } = $$props;
  let { filter: filter$1 = filter } = $$props;
  let { getItems: getItems$1 = getItems } = $$props;
  let { id = null } = $$props;
  let { name = null } = $$props;
  let { container = void 0 } = $$props;
  let { input = void 0 } = $$props;
  let { multiple = false } = $$props;
  let { multiFullItemClearable = false } = $$props;
  let { disabled = false } = $$props;
  let { focused = false } = $$props;
  let { value = null } = $$props;
  let { filterText = "" } = $$props;
  let { placeholder = "Please select" } = $$props;
  let { placeholderAlwaysShow = false } = $$props;
  let { items = null } = $$props;
  let { label = "label" } = $$props;
  let { itemFilter = (label2, filterText2, option) => `${label2}`.toLowerCase().includes(filterText2.toLowerCase()) } = $$props;
  let { groupBy = void 0 } = $$props;
  let { groupFilter = (groups) => groups } = $$props;
  let { groupHeaderSelectable = false } = $$props;
  let { itemId = "value" } = $$props;
  let { loadOptions = void 0 } = $$props;
  let { containerStyles = "" } = $$props;
  let { hasError = false } = $$props;
  let { filterSelectedItems = true } = $$props;
  let { required = false } = $$props;
  let { closeListOnChange = true } = $$props;
  let { createGroupHeaderItem = (groupValue, item) => {
    return { value: groupValue, [label]: groupValue };
  } } = $$props;
  const getFilteredItems = () => {
    return filteredItems;
  };
  let { searchable = true } = $$props;
  let { inputStyles = "" } = $$props;
  let { clearable = true } = $$props;
  let { loading = false } = $$props;
  let { listOpen = false } = $$props;
  let timeout;
  let { debounce = (fn, wait = 1) => {
    clearTimeout(timeout);
    timeout = setTimeout(fn, wait);
  } } = $$props;
  let { debounceWait = 300 } = $$props;
  let { hideEmptyState = false } = $$props;
  let { inputAttributes = {} } = $$props;
  let { listAutoWidth = true } = $$props;
  let { showChevron = false } = $$props;
  let { listOffset = 5 } = $$props;
  let { hoverItemIndex = 0 } = $$props;
  let { floatingConfig = {} } = $$props;
  let { class: containerClasses = "" } = $$props;
  let activeValue;
  let prev_value;
  let prev_filterText;
  function setValue() {
    if (typeof value === "string") {
      let item = (items || []).find((item2) => item2[itemId] === value);
      value = item || { [itemId]: value, label: value };
    } else if (multiple && Array.isArray(value) && value.length > 0) {
      value = value.map((item) => typeof item === "string" ? { value: item, label: item } : item);
    }
  }
  let _inputAttributes;
  function assignInputAttributes() {
    _inputAttributes = Object.assign(
      {
        autocapitalize: "none",
        autocomplete: "off",
        autocorrect: "off",
        spellcheck: false,
        tabindex: 0,
        type: "text",
        "aria-autocomplete": "list"
      },
      inputAttributes
    );
    if (id) {
      _inputAttributes["id"] = id;
    }
    if (!searchable) {
      _inputAttributes["readonly"] = true;
    }
  }
  function filterGroupedItems(_items) {
    const groupValues = [];
    const groups = {};
    _items.forEach((item) => {
      const groupValue = groupBy(item);
      if (!groupValues.includes(groupValue)) {
        groupValues.push(groupValue);
        groups[groupValue] = [];
        if (groupValue) {
          groups[groupValue].push(Object.assign(createGroupHeaderItem(groupValue, item), {
            id: groupValue,
            groupHeader: true,
            selectable: groupHeaderSelectable
          }));
        }
      }
      groups[groupValue].push(Object.assign({ groupItem: !!groupValue }, item));
    });
    const sortedGroupedItems = [];
    groupFilter(groupValues).forEach((groupValue) => {
      if (groups[groupValue])
        sortedGroupedItems.push(...groups[groupValue]);
    });
    return sortedGroupedItems;
  }
  function dispatchSelectedItem() {
    if (multiple) {
      if (JSON.stringify(value) !== JSON.stringify(prev_value)) {
        if (checkValueForDuplicates()) {
          dispatch("input", value);
        }
      }
      return;
    }
    {
      dispatch("input", value);
    }
  }
  function setupMulti() {
    if (value) {
      if (Array.isArray(value)) {
        value = [...value];
      } else {
        value = [value];
      }
    }
  }
  function setValueIndexAsHoverIndex() {
    const valueIndex = filteredItems.findIndex((i) => {
      return i[itemId] === value[itemId];
    });
    checkHoverSelectable(valueIndex, true);
  }
  function dispatchHover(i) {
    dispatch("hoverItem", i);
  }
  function checkHoverSelectable(startingIndex = 0, ignoreGroup) {
    hoverItemIndex = startingIndex < 0 ? 0 : startingIndex;
    if (!ignoreGroup && groupBy && filteredItems[hoverItemIndex] && !filteredItems[hoverItemIndex].selectable) {
      setHoverIndex(1);
    }
  }
  function setupFilterText() {
    if (!loadOptions && filterText.length === 0)
      return;
    if (loadOptions) {
      debounce(
        async function() {
          loading = true;
          let res = await getItems$1({
            dispatch,
            loadOptions,
            convertStringItemsToObjects,
            filterText
          });
          if (res) {
            loading = res.loading;
            listOpen = listOpen ? res.listOpen : filterText.length > 0 ? true : false;
            focused = listOpen && res.focused;
            items = groupBy ? filterGroupedItems(res.filteredItems) : res.filteredItems;
          } else {
            loading = false;
            focused = true;
            listOpen = true;
          }
        },
        debounceWait
      );
    } else {
      listOpen = true;
      if (multiple) {
        activeValue = void 0;
      }
    }
  }
  function handleFilterEvent(items2) {
    if (listOpen)
      dispatch("filter", items2);
  }
  function computeJustValue() {
    if (multiple)
      return value ? value.map((item) => item[itemId]) : null;
    return value ? value[itemId] : value;
  }
  function checkValueForDuplicates() {
    let noDuplicates = true;
    if (value) {
      const ids = [];
      const uniqueValues = [];
      value.forEach((val) => {
        if (!ids.includes(val[itemId])) {
          ids.push(val[itemId]);
          uniqueValues.push(val);
        } else {
          noDuplicates = false;
        }
      });
      if (!noDuplicates)
        value = uniqueValues;
    }
    return noDuplicates;
  }
  function findItem(selection) {
    let matchTo = selection ? selection[itemId] : value[itemId];
    return items.find((item) => item[itemId] === matchTo);
  }
  function updateValueDisplay(items2) {
    if (!items2 || items2.length === 0 || items2.some((item) => typeof item !== "object"))
      return;
    if (!value || (multiple ? value.some((selection) => !selection || !selection[itemId]) : !value[itemId]))
      return;
    if (Array.isArray(value)) {
      value = value.map((selection) => findItem(selection) || selection);
    } else {
      value = findItem() || value;
    }
  }
  function handleFocus(e) {
    if (focused && input === document?.activeElement)
      return;
    if (e)
      dispatch("focus", e);
    input.focus();
    focused = true;
  }
  function handleClear() {
    dispatch("clear", value);
    value = void 0;
    closeList();
    handleFocus();
  }
  function closeList() {
    filterText = "";
    listOpen = false;
  }
  let { ariaValues = (values) => {
    return `Option ${values}, selected.`;
  } } = $$props;
  let { ariaListOpen = (label2, count) => {
    return `You are currently focused on option ${label2}. There are ${count} results available.`;
  } } = $$props;
  let { ariaFocused = () => {
    return `Select is focused, type to refine list, press down to open the menu.`;
  } } = $$props;
  function handleAriaSelection(_multiple) {
    let selected = void 0;
    if (_multiple && value.length > 0) {
      selected = value.map((v) => v[label]).join(", ");
    } else {
      selected = value[label];
    }
    return ariaValues(selected);
  }
  function handleAriaContent() {
    if (!filteredItems || filteredItems.length === 0)
      return "";
    let _item = filteredItems[hoverItemIndex];
    if (listOpen && _item) {
      let count = filteredItems ? filteredItems.length : 0;
      return ariaListOpen(_item[label], count);
    } else {
      return ariaFocused();
    }
  }
  let list = null;
  onDestroy(() => {
  });
  function setHoverIndex(increment) {
    let selectableFilteredItems = filteredItems.filter((item) => !Object.hasOwn(item, "selectable") || item.selectable === true);
    if (selectableFilteredItems.length === 0) {
      return hoverItemIndex = 0;
    }
    if (increment > 0 && hoverItemIndex === filteredItems.length - 1) {
      hoverItemIndex = 0;
    } else if (increment < 0 && hoverItemIndex === 0) {
      hoverItemIndex = filteredItems.length - 1;
    } else {
      hoverItemIndex = hoverItemIndex + increment;
    }
    const hover = filteredItems[hoverItemIndex];
    if (hover && hover.selectable === false) {
      if (increment === 1 || increment === -1)
        setHoverIndex(increment);
      return;
    }
  }
  function isItemActive(item, value2, itemId2) {
    if (multiple)
      return;
    return value2 && value2[itemId2] === item[itemId2];
  }
  function setListWidth() {
    const { width } = container.getBoundingClientRect();
    list.style.width = listAutoWidth ? width + "px" : "auto";
  }
  let _floatingConfig = {
    strategy: "absolute",
    placement: "bottom-start",
    middleware: [offset(listOffset), flip(), shift()],
    autoUpdate: false
  };
  const [floatingRef, floatingContent, floatingUpdate] = createFloatingActions(_floatingConfig);
  let prefloat = true;
  function listMounted(list2, listOpen2) {
    if (!list2 || !listOpen2)
      return prefloat = true;
    setTimeout(
      () => {
        prefloat = false;
      },
      0
    );
  }
  if ($$props.justValue === void 0 && $$bindings.justValue && justValue !== void 0)
    $$bindings.justValue(justValue);
  if ($$props.filter === void 0 && $$bindings.filter && filter$1 !== void 0)
    $$bindings.filter(filter$1);
  if ($$props.getItems === void 0 && $$bindings.getItems && getItems$1 !== void 0)
    $$bindings.getItems(getItems$1);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.container === void 0 && $$bindings.container && container !== void 0)
    $$bindings.container(container);
  if ($$props.input === void 0 && $$bindings.input && input !== void 0)
    $$bindings.input(input);
  if ($$props.multiple === void 0 && $$bindings.multiple && multiple !== void 0)
    $$bindings.multiple(multiple);
  if ($$props.multiFullItemClearable === void 0 && $$bindings.multiFullItemClearable && multiFullItemClearable !== void 0)
    $$bindings.multiFullItemClearable(multiFullItemClearable);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.focused === void 0 && $$bindings.focused && focused !== void 0)
    $$bindings.focused(focused);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.filterText === void 0 && $$bindings.filterText && filterText !== void 0)
    $$bindings.filterText(filterText);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.placeholderAlwaysShow === void 0 && $$bindings.placeholderAlwaysShow && placeholderAlwaysShow !== void 0)
    $$bindings.placeholderAlwaysShow(placeholderAlwaysShow);
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.itemFilter === void 0 && $$bindings.itemFilter && itemFilter !== void 0)
    $$bindings.itemFilter(itemFilter);
  if ($$props.groupBy === void 0 && $$bindings.groupBy && groupBy !== void 0)
    $$bindings.groupBy(groupBy);
  if ($$props.groupFilter === void 0 && $$bindings.groupFilter && groupFilter !== void 0)
    $$bindings.groupFilter(groupFilter);
  if ($$props.groupHeaderSelectable === void 0 && $$bindings.groupHeaderSelectable && groupHeaderSelectable !== void 0)
    $$bindings.groupHeaderSelectable(groupHeaderSelectable);
  if ($$props.itemId === void 0 && $$bindings.itemId && itemId !== void 0)
    $$bindings.itemId(itemId);
  if ($$props.loadOptions === void 0 && $$bindings.loadOptions && loadOptions !== void 0)
    $$bindings.loadOptions(loadOptions);
  if ($$props.containerStyles === void 0 && $$bindings.containerStyles && containerStyles !== void 0)
    $$bindings.containerStyles(containerStyles);
  if ($$props.hasError === void 0 && $$bindings.hasError && hasError !== void 0)
    $$bindings.hasError(hasError);
  if ($$props.filterSelectedItems === void 0 && $$bindings.filterSelectedItems && filterSelectedItems !== void 0)
    $$bindings.filterSelectedItems(filterSelectedItems);
  if ($$props.required === void 0 && $$bindings.required && required !== void 0)
    $$bindings.required(required);
  if ($$props.closeListOnChange === void 0 && $$bindings.closeListOnChange && closeListOnChange !== void 0)
    $$bindings.closeListOnChange(closeListOnChange);
  if ($$props.createGroupHeaderItem === void 0 && $$bindings.createGroupHeaderItem && createGroupHeaderItem !== void 0)
    $$bindings.createGroupHeaderItem(createGroupHeaderItem);
  if ($$props.getFilteredItems === void 0 && $$bindings.getFilteredItems && getFilteredItems !== void 0)
    $$bindings.getFilteredItems(getFilteredItems);
  if ($$props.searchable === void 0 && $$bindings.searchable && searchable !== void 0)
    $$bindings.searchable(searchable);
  if ($$props.inputStyles === void 0 && $$bindings.inputStyles && inputStyles !== void 0)
    $$bindings.inputStyles(inputStyles);
  if ($$props.clearable === void 0 && $$bindings.clearable && clearable !== void 0)
    $$bindings.clearable(clearable);
  if ($$props.loading === void 0 && $$bindings.loading && loading !== void 0)
    $$bindings.loading(loading);
  if ($$props.listOpen === void 0 && $$bindings.listOpen && listOpen !== void 0)
    $$bindings.listOpen(listOpen);
  if ($$props.debounce === void 0 && $$bindings.debounce && debounce !== void 0)
    $$bindings.debounce(debounce);
  if ($$props.debounceWait === void 0 && $$bindings.debounceWait && debounceWait !== void 0)
    $$bindings.debounceWait(debounceWait);
  if ($$props.hideEmptyState === void 0 && $$bindings.hideEmptyState && hideEmptyState !== void 0)
    $$bindings.hideEmptyState(hideEmptyState);
  if ($$props.inputAttributes === void 0 && $$bindings.inputAttributes && inputAttributes !== void 0)
    $$bindings.inputAttributes(inputAttributes);
  if ($$props.listAutoWidth === void 0 && $$bindings.listAutoWidth && listAutoWidth !== void 0)
    $$bindings.listAutoWidth(listAutoWidth);
  if ($$props.showChevron === void 0 && $$bindings.showChevron && showChevron !== void 0)
    $$bindings.showChevron(showChevron);
  if ($$props.listOffset === void 0 && $$bindings.listOffset && listOffset !== void 0)
    $$bindings.listOffset(listOffset);
  if ($$props.hoverItemIndex === void 0 && $$bindings.hoverItemIndex && hoverItemIndex !== void 0)
    $$bindings.hoverItemIndex(hoverItemIndex);
  if ($$props.floatingConfig === void 0 && $$bindings.floatingConfig && floatingConfig !== void 0)
    $$bindings.floatingConfig(floatingConfig);
  if ($$props.class === void 0 && $$bindings.class && containerClasses !== void 0)
    $$bindings.class(containerClasses);
  if ($$props.handleClear === void 0 && $$bindings.handleClear && handleClear !== void 0)
    $$bindings.handleClear(handleClear);
  if ($$props.ariaValues === void 0 && $$bindings.ariaValues && ariaValues !== void 0)
    $$bindings.ariaValues(ariaValues);
  if ($$props.ariaListOpen === void 0 && $$bindings.ariaListOpen && ariaListOpen !== void 0)
    $$bindings.ariaListOpen(ariaListOpen);
  if ($$props.ariaFocused === void 0 && $$bindings.ariaFocused && ariaFocused !== void 0)
    $$bindings.ariaFocused(ariaFocused);
  $$result.css.add(css$1);
  {
    if (value)
      setValue();
  }
  {
    if (inputAttributes || !searchable)
      assignInputAttributes();
  }
  {
    if (multiple)
      setupMulti();
  }
  {
    if (multiple && value && value.length > 1)
      checkValueForDuplicates();
  }
  {
    if (value)
      dispatchSelectedItem();
  }
  {
    if (!value && multiple && prev_value)
      dispatch("input", value);
  }
  {
    if (!focused && input)
      closeList();
  }
  {
    if (filterText !== prev_filterText)
      setupFilterText();
  }
  filteredItems = filter$1({
    loadOptions,
    filterText,
    items,
    multiple,
    value,
    itemId,
    groupBy,
    label,
    filterSelectedItems,
    itemFilter,
    convertStringItemsToObjects,
    filterGroupedItems
  });
  {
    if (!multiple && listOpen && value && filteredItems)
      setValueIndexAsHoverIndex();
  }
  {
    if (listOpen && multiple)
      hoverItemIndex = 0;
  }
  {
    if (filterText)
      hoverItemIndex = 0;
  }
  {
    dispatchHover(hoverItemIndex);
  }
  hasValue = multiple ? value && value.length > 0 : value;
  hideSelectedItem = hasValue && filterText.length > 0;
  showClear = hasValue && clearable && !disabled && !loading;
  placeholderText = placeholderAlwaysShow && multiple ? placeholder : multiple && value?.length === 0 ? placeholder : value ? "" : placeholder;
  ariaSelection = value ? handleAriaSelection(multiple) : "";
  ariaContext = handleAriaContent();
  {
    updateValueDisplay(items);
  }
  justValue = computeJustValue();
  {
    if (!multiple && prev_value && !value)
      dispatch("input", value);
  }
  {
    if (listOpen && filteredItems && !multiple && !value)
      checkHoverSelectable();
  }
  {
    handleFilterEvent(filteredItems);
  }
  {
    if (container && floatingConfig?.autoUpdate === void 0) {
      _floatingConfig.autoUpdate = true;
    }
  }
  {
    if (container && floatingConfig)
      floatingUpdate(Object.assign(_floatingConfig, floatingConfig));
  }
  {
    listMounted(list, listOpen);
  }
  {
    if (listOpen && container && list)
      setListWidth();
  }
  {
    if (input && listOpen && !focused)
      handleFocus();
  }
  return `

<div class="${[
    "svelte-select " + escape(containerClasses, true) + " svelte-11n9eyg",
    (multiple ? "multi" : "") + " " + (disabled ? "disabled" : "") + " " + (focused ? "focused" : "") + " " + (listOpen ? "list-open" : "") + " " + (showChevron ? "show-chevron" : "") + " " + (hasError ? "error" : "")
  ].join(" ").trim()}"${add_attribute("style", containerStyles, 0)}${add_attribute("this", container, 0)}>${listOpen ? `<div class="${["svelte-select-list svelte-11n9eyg", prefloat ? "prefloat" : ""].join(" ").trim()}"${add_attribute("this", list, 0)}>${$$slots["list-prepend"] ? `${slots["list-prepend"] ? slots["list-prepend"]({}) : ``}` : ``}
            ${$$slots.list ? `${slots.list ? slots.list({ filteredItems }) : ``}` : `${filteredItems.length > 0 ? `${each(filteredItems, (item, i) => {
    return `<div class="list-item svelte-11n9eyg" tabindex="-1"><div class="${[
      "item svelte-11n9eyg",
      (item.groupHeader ? "list-group-title" : "") + " " + (isItemActive(item, value, itemId) ? "active" : "") + " " + (isItemFirst(i) ? "first" : "") + " " + (hoverItemIndex === i ? "hover" : "") + " " + (item.groupItem ? "group-item" : "") + " " + (item?.selectable === false ? "not-selectable" : "")
    ].join(" ").trim()}">${slots.item ? slots.item({ item, index: i }) : `
                                ${escape(item?.[label])}
                            `}</div>
                    </div>`;
  })}` : `${!hideEmptyState ? `${slots.empty ? slots.empty({}) : `
                    <div class="empty svelte-11n9eyg">No options</div>
                `}` : ``}`}`}
            ${$$slots["list-append"] ? `${slots["list-append"] ? slots["list-append"]({}) : ``}` : ``}</div>` : ``}

    <span aria-live="polite" aria-atomic="false" aria-relevant="additions text" class="a11y-text svelte-11n9eyg">${focused ? `<span id="aria-selection" class="svelte-11n9eyg">${escape(ariaSelection)}</span>
            <span id="aria-context" class="svelte-11n9eyg">${escape(ariaContext)}</span>` : ``}</span>

    <div class="prepend svelte-11n9eyg">${slots.prepend ? slots.prepend({}) : ``}</div>

    <div class="value-container svelte-11n9eyg">${hasValue ? `${multiple ? `${each(value, (item, i) => {
    return `<div class="${[
      "multi-item svelte-11n9eyg",
      (activeValue === i ? "active" : "") + " " + (disabled ? "disabled" : "")
    ].join(" ").trim()}"><span class="multi-item-text svelte-11n9eyg">${slots.selection ? slots.selection({ selection: item, index: i }) : `
                                ${escape(item[label])}
                            `}</span>

                        ${!disabled && !multiFullItemClearable && ClearIcon ? `<div class="multi-item-clear svelte-11n9eyg">${slots["multi-clear-icon"] ? slots["multi-clear-icon"]({}) : `
                                    ${validate_component(ClearIcon, "ClearIcon").$$render($$result, {}, {}, {})}
                                `}
                            </div>` : ``}
                    </div>`;
  })}` : `<div class="${[
    "selected-item svelte-11n9eyg",
    hideSelectedItem ? "hide-selected-item" : ""
  ].join(" ").trim()}">${slots.selection ? slots.selection({ selection: value }) : `
                        ${escape(value[label])}
                    `}</div>`}` : ``}

        <input${spread(
    [
      { readonly: !searchable || null },
      escape_object(_inputAttributes),
      {
        placeholder: escape_attribute_value(placeholderText)
      },
      {
        style: escape_attribute_value(inputStyles)
      },
      { disabled: disabled || null }
    ],
    { classes: "svelte-11n9eyg" }
  )}${add_attribute("this", input, 0)}${add_attribute("value", filterText, 0)}></div>

    <div class="indicators svelte-11n9eyg">${loading ? `<div class="icon loading svelte-11n9eyg" aria-hidden="true">${slots["loading-icon"] ? slots["loading-icon"]({}) : `
                    ${validate_component(LoadingIcon, "LoadingIcon").$$render($$result, {}, {}, {})}
                `}</div>` : ``}

        ${showClear ? `<button class="icon clear-select svelte-11n9eyg">${slots["clear-icon"] ? slots["clear-icon"]({}) : `
                    ${validate_component(ClearIcon, "ClearIcon").$$render($$result, {}, {}, {})}
                `}</button>` : ``}

        ${showChevron ? `<div class="icon chevron svelte-11n9eyg" aria-hidden="true">${slots["chevron-icon"] ? slots["chevron-icon"]({ listOpen }) : `
                    ${validate_component(ChevronIcon, "ChevronIcon").$$render($$result, {}, {}, {})}
                `}</div>` : ``}</div>

    ${slots["input-hidden"] ? slots["input-hidden"]({ value }) : `
        <input${add_attribute("name", name, 0)} type="hidden"${add_attribute("value", value ? JSON.stringify(value) : null, 0)} class="svelte-11n9eyg">
    `}

    ${required && (!value || value.length === 0) ? `${slots.required ? slots.required({ value }) : `
            <select class="required svelte-11n9eyg" required tabindex="-1" aria-hidden="true"></select>
        `}` : ``}
</div>`;
});
function getAddress(filterText) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(
      "GET",
      `https://nominatim.openstreetmap.org/search?viewbox=13.0648,52.7554,13.7796,52.33449&bounded=1&q=${filterText.toLowerCase()}&countrycodes=de&format=json`
    );
    xhr.send();
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        const response = JSON.parse(xhr.response);
        setTimeout(resolve(response), 5e3);
      } else {
        reject();
      }
    };
  });
}
let noOptionsMessage = "Keine Ergebnisse";
const Search = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_newBounds;
  let $lang, $$unsubscribe_lang;
  $$unsubscribe_newBounds = subscribe(newBounds, (value) => value);
  $$unsubscribe_lang = subscribe(lang, (value) => $lang = value);
  let selectedSearchResult;
  $$unsubscribe_newBounds();
  $$unsubscribe_lang();
  return `<div class="mb-5 pt-5">${validate_component(Select, "Select").$$render(
    $$result,
    {
      noOptionsMessage,
      loadOptions: getAddress,
      loadOptionsInterval: 1500,
      placeholder: $lang === "de" ? "nach einem Ort suchen" : "search for a place",
      label: "display_name",
      value: selectedSearchResult
    },
    {},
    {}
  )}</div>`;
});
const PrintAndDownload = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $printBackUI, $$unsubscribe_printBackUI;
  let $dimensions, $$unsubscribe_dimensions;
  let $$unsubscribe_svg;
  let $isMobile, $$unsubscribe_isMobile;
  let $lang, $$unsubscribe_lang;
  $$unsubscribe_printBackUI = subscribe(printBackUI, (value) => $printBackUI = value);
  $$unsubscribe_dimensions = subscribe(dimensions, (value) => $dimensions = value);
  $$unsubscribe_svg = subscribe(svg, (value) => value);
  $$unsubscribe_isMobile = subscribe(isMobile, (value) => $isMobile = value);
  $$unsubscribe_lang = subscribe(lang, (value) => $lang = value);
  $dimensions[1];
  $dimensions[0];
  $$unsubscribe_printBackUI();
  $$unsubscribe_dimensions();
  $$unsubscribe_svg();
  $$unsubscribe_isMobile();
  $$unsubscribe_lang();
  return `<button class="${["btn btn-secondary mb-8", !$isMobile ? "mt-8" : ""].join(" ").trim()}">${escape(!$printBackUI ? $lang === "en" ? "Print" : "Drucken" : $lang === "en" ? "Download" : "Herunterladen")}</button>

<br>

${$printBackUI ? `<button class="btn btn-primary btn-outline mb-6">${escape($lang === "en" ? "Download backside" : "Rückseite herunterladen")}</button>` : ``}`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $printBackUI, $$unsubscribe_printBackUI;
  let $lang, $$unsubscribe_lang;
  $$unsubscribe_printBackUI = subscribe(printBackUI, (value) => $printBackUI = value);
  $$unsubscribe_lang = subscribe(lang, (value) => $lang = value);
  let printOverride = browser;
  set_store_value(printBackUI, $printBackUI = !printOverride, $printBackUI);
  $$unsubscribe_printBackUI();
  $$unsubscribe_lang();
  return `<div class="text-sm text-gray-400 mt-10"><p>${escape($lang === "en" ? "Kiezcolors was developed by ODIS and CityLAB Berlin. ODIS and CityLAB are projects of the Technology Foundation Berlin and are funded by the Berlin Senate Chancellery. You can find the code to this project on " : "Kiezcolors wurde von ODIS und CityLAB Berlin - Projekte der Technologiestiftung Berlin. Den Code zum Projekt findest auf ")}
    <a class="font-bold" href="https://github.com/technologiestiftung/kiezcolors/">GitHub
    </a>
    .
    <br><br>

    <span class="text-sm font-thin text-gray-400">${escape($lang === "en" ? "Data source:" : "Datenquelle:")}
      <br>
      <a class="underline" target="_blank" rel="noreferrer" href="https://daten.berlin.de/datensaetze/alkis-berlin-tatsächliche-nutzung-wfs">ALKIS Berlin Tatsächliche Nutzung
      </a>
      |
      <a class="underline" target="_blank" rel="noreferrer" href="https://www.berlin.de/sen/sbw/">SenSBW</a>
      <a class="underline" target="_blank" rel="noreferrer" href="https://www.govdata.de/dl-de/by-2-0">DL-DE-&gt;BY-2.0
      </a></span></p></div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '.bold.svelte-hlq8ce{font-family:"IBM Plex Sans Bold"}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $screenWidth, $$unsubscribe_screenWidth;
  let $isMobile, $$unsubscribe_isMobile;
  let $lang, $$unsubscribe_lang;
  let $printBackUI, $$unsubscribe_printBackUI;
  $$unsubscribe_screenWidth = subscribe(screenWidth, (value) => $screenWidth = value);
  $$unsubscribe_isMobile = subscribe(isMobile, (value) => $isMobile = value);
  $$unsubscribe_lang = subscribe(lang, (value) => $lang = value);
  $$unsubscribe_printBackUI = subscribe(printBackUI, (value) => $printBackUI = value);
  let innerWidth = 0;
  $$result.css.add(css);
  set_store_value(isMobile, $isMobile = innerWidth <= 1023, $isMobile);
  set_store_value(screenWidth, $screenWidth = innerWidth, $screenWidth);
  $$unsubscribe_screenWidth();
  $$unsubscribe_isMobile();
  $$unsubscribe_lang();
  $$unsubscribe_printBackUI();
  return `

${$$result.head += `<!-- HEAD_svelte-18fdyli_START -->${$$result.title = `<title>Ortsfarben</title>`, ""}<meta name="description" content="A map based tool to create a postcard showing the landuse distribution in your neighborhood"><meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=0.8, user-scalable=0"><!-- HEAD_svelte-18fdyli_END -->`, ""}

<div class="fixed right-4 top-4 margin-4 z-50"><div class="btn-group"><input type="radio" name="options" data-title="en" class="btn btn-sm btn-outline" ${$lang === "en" ? "checked" : ""}>
    <input type="radio" name="options" data-title="de" class="btn btn-sm btn-outline" ${$lang === "de" ? "checked" : ""}></div></div>

<section class="w-full h-screen block lg:flex"><div class="${[
    "lg:h-full w-full lg:w-1/3 bg-white z-10 relative p-4 lg:p-8 overflow-auto",
    !$isMobile ? "shadow-lg" : ""
  ].join(" ").trim()}"><div class="bold py-4 text-4xl md:text-4xl xl:text-5xl svelte-hlq8ce">Ortsfarben</div>

    <p class="my-4">${$lang === "en" ? `Create a postcard, which shows the distribution of land use in your
        neighborhood. Simply move the map from Berlin or search for a location.
        You can also change the text on the postcard.` : `Hier kannst du dir eine Postkarte erstellen, die die Verteilung der
        Flächennutzung an deinem Ort im Umkreis von 1000 Metern zeigt.
        Verschiebe einfach die Karte oder suche nach einem Ort.`}</p>

    <div class="w-full">${validate_component(Search, "Search").$$render($$result, {}, {}, {})}</div>

    <span class="hidden lg:block">${validate_component(PrintAndDownload, "PrintAndDownload").$$render($$result, {}, {}, {})}
      ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</span></div>
  <div class="h-1/2 lg:h-full w-full bg-white flex items-center">${validate_component(Map, "Map").$$render($$result, {}, {}, {})}
    ${!$isMobile ? `${validate_component(PostcardFront, "PostcardFront").$$render($$result, {}, {}, {})}` : ``}</div>

  ${$isMobile ? `<div class="relative width-full bg-gray-100">${validate_component(MapKey, "MapKey").$$render($$result, {}, {}, {})}</div>` : ``}
  ${$isMobile ? `${validate_component(PostcardFront, "PostcardFront").$$render($$result, {}, {}, {})}` : ``}
  <div class="lg:hidden lg:w-1/3 bg-white z-10 relative m-4 overflow-auto">${validate_component(PrintAndDownload, "PrintAndDownload").$$render($$result, {}, {}, {})}
    ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div></section>

${$printBackUI ? `<span class="p-4 hidden">${validate_component(PostcardBack, "PostcardBack").$$render($$result, {}, {}, {})}</span>` : ``}`;
});
export {
  Page as default
};
