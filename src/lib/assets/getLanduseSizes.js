import intersect from "@turf/intersect";
import area from "@turf/area";
import { bbox } from "@turf/bbox";

export default function (map, circleGeom, landuses) {
  let sizes = {};
  let sumSizes = 0;
  const bboxC = bbox(circleGeom);
  const sw = map.project([bboxC[0], bboxC[1]]); // southwest corner
  const ne = map.project([bboxC[2], bboxC[3]]); // northeast corner
  const landuse = map.queryRenderedFeatures(
    [
      [sw.x, sw.y], // southwest corner in pixel coordinates
      [ne.x, ne.y], // northeast corner in pixel coordinates
    ],
    { layers: ["landuse"] },
  );

  landuse.forEach(function (feature) {
    const intersection = intersect(circleGeom, feature.geometry);
    if (intersection) {
      const size = area(intersection);
      const category = landuses[feature.properties.nutzart].category;
      if (!sizes[category]) {
        sizes[category] = {};
        sizes[category].m = size;
      } else {
        sizes[category].m += size;
      }
      sumSizes += size;
    }
  });
  Object.keys(sizes).forEach(function (key) {
    sizes[key].p = (sizes[key].m / sumSizes) * 100;
  });

  return { sizes, sumSizes };
}
