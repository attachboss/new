<template>
  <div id="MapRoute"></div>
</template>

<script>
import { loadModules } from "esri-loader";
import("../../../public/4.16/esri/themes/light/main.css");
export default {
  name: "MapRoute",
  methods: {
    createView() {
      var options = {
        url: "https://js.arcgis.com/4.16/init.js",
        css: "https://js.arcgis.com/4.16/esri/themes/light/main.css",
      };

      loadModules(
        [
          "esri/config",
          "esri/Map",
          "esri/views/MapView",
          "esri/widgets/Home",
          "esri/layers/FeatureLayer",
          "esri/widgets/LayerList",
          // "esri/Basemap",
          // "esri/layers/TileLayer",
        ],
        options
      )
        .then(
          ([
            esriConfig,
            Map,
            MapView,
            Home,
            FeatureLayer,
            LayerList,
            // Basemap,
            // TileLayer,
          ]) => {
            esriConfig.apiKey =
              "AAPK37853f2d8fd242f6ad9df392845bb0855YYrv-aaUh64MrNqmp51tQ6FZBa-YBx9mlRhkoWfEq0QOAMSzDrRbVxMEBBRfVXV";

            // var layer = new TileLayer({
            //   url: "https://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetGray/MapServer",
            // });
            // var customBasemap = new Basemap({
            //   baselayers: [layer],
            // });

            var map = new Map({
              basemap: "osm",
            });
            var view = new MapView({
              container: "MapRoute",
              map: map,
              center: [104.08, 30.68],
              zoom: 13,
            });

            //全图按钮
            var homeBtn = new Home({
              view: view,
            });
            view.ui.add(homeBtn, "top-left");
            //弹出窗口
            var popup = view.popup;
            popup.actions = [];
            popup.dockEnable = true;
            popup.dockOptions = {
              breakpoints: false,
              buttonEnabled: false,
            };
            popup.defaultPopupTemplateEnabled = true;

            

            //分别添加三个图层
            var supermarketLayer = new FeatureLayer({
              url: "https://edutrial.geoscene.cn/geoscene/rest/services/Hosted/%E6%88%90%E9%83%BD%E5%B8%82%E8%B6%85%E5%B8%82%E5%92%8C%E5%8C%BB%E7%96%97%E6%9C%BA%E6%9E%84%E6%95%B0%E6%8D%AE/FeatureServer/0",
            });
            map.add(supermarketLayer);
            var hospitalLayer = new FeatureLayer({
              url: "https://edutrial.geoscene.cn/geoscene/rest/services/Hosted/%E6%88%90%E9%83%BD%E5%B8%82%E8%B6%85%E5%B8%82%E5%92%8C%E5%8C%BB%E7%96%97%E6%9C%BA%E6%9E%84%E6%95%B0%E6%8D%AE/FeatureServer/1",
            });
            map.add(hospitalLayer);
            var roadsLayer = new FeatureLayer({
              url: "https://edutrial.geoscene.cn/geoscene/rest/services/Hosted/%E6%88%90%E9%83%BD%E5%B8%82%E8%B6%85%E5%B8%82%E5%92%8C%E5%8C%BB%E7%96%97%E6%9C%BA%E6%9E%84%E6%95%B0%E6%8D%AE/FeatureServer/2",
            });

            view.ui.remove("attribution");
          }
        )
        .catch((e) => {
          console.log("出现错误" + e.message);
        });
    },
  },
  mounted: function () {
    this.createView();
  },
  beforeDestory() {
    if (this.view) {
      this.view.container = null;
    }
  },
};
</script>

<style scoped>
#MapRoute {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}
</style>