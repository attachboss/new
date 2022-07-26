import Basemap from "esri/Basemap";
import TileLayer from "esri/layers/TileLayer";
import Map from "esri/Map";
import MapView from "esri/views/MapView";
import BasemapToggle from "esri/widgets/BasemapToggle";



// --------------------------------------------------------------------
// If you do not have public internet access then use the Basemap class
// and point this URL to your own locally accessible cached service.
//
// Otherwise you can just use one of the named hosted ArcGIS services.
// https://services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer
// --------------------------------------------------------------------

var layer = new TileLayer({
  url: "https://services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer"
});
var customBasemap = new Basemap({
  baseLayers: [layer],
});

var myMap = new Map({
  basemap: customBasemap
});
var view = new MapView({
  center: [104, 30], // long, lat
  container: "viewDiv",
  map: myMap,
  zoom: 3
});
//去水印
view.ui.remove("attribution")

var basemapToggle = new BasemapToggle({
  view: view,
  nextBasemap:"hybird"
})

view.ui.add(basemapToggle, "bottom-left");