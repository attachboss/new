import { loadModules } from "esri-loader";
export let createView = function(containerDiv){
    var options = {
      url: "https://js.arcgis.com/4.16/init.js",
      css: "https://js.arcgis.com/4.16/esri/themes/light/main.css",
    };

    loadModules(
      [
        "esri/config",
        "esri/Map",
        "esri/views/MapView",
        "esri/Basemap",
        "esri/layers/TileLayer"
      ],
      options
    )
      .then(
        ([
          esriConfig,
          Map,
          MapView,
          Basemap,
          TileLayer
        ]) => {
          esriConfig.apiKey =
            "AAPK37853f2d8fd242f6ad9df392845bb0855YYrv-aaUh64MrNqmp51tQ6FZBa-YBx9mlRhkoWfEq0QOAMSzDrRbVxMEBBRfVXV";

          var layer = new TileLayer({
            url: "https://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetGray/MapServer",
            
          });
          var customBasemap = new Basemap({
            baseLayers: [layer],
          });
          var myMap = new Map({
            basemap: customBasemap,
          });
          var view = new MapView({
            container: containerDiv,
            map: myMap,
            center: [104.1, 31], // long, lat
            zoom: 3,
          });
          view.ui.remove("attribution");


          console.log(view);
        }
      )
      .catch((e) => {
        this.$message("出现错误" + e.message);
      });
  }