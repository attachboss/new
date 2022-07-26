import Polygon from "@arcgis/core/geometry/Polygon";
import Point from "@arcgis/core/geometry/Point";


export let isContain = () => {
var rings = [
  [
    [104.0813368, 30.6701333 ],
    [104.0828859, 30.6694499 ],
    [104.0810407, 30.6666479 ],
    [104.0792866, 30.6674680 ]
  ]
];
var polygon = new Polygon({
  rings: rings,
  spatialReference: {wkid: 4326}
});
var point = new Point({
  latitude: 30.6685387,
  longitude: 30.6685387
})
console.log(polygon.contains(point));
}