// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../core/Error ../../../core/maybe ../../../core/promiseUtils ../../../core/watchUtils ../../../core/accessorSupport/decorators ../../../layers/graphics/dehydratedFeatures ../../../layers/graphics/controllers/FeatureTileController3D ../../../renderers/support/renderingInfoUtils ../../../tasks/support/Query ./graphics/Graphics3DFeatureLikeLayerView ./graphics/QueryEngine ./support/projectExtentUtils ../../support/Scheduler".split(" "),function(x,h,d,k,f,l,n,e,p,q,
m,r,t,u,v,w){Object.defineProperty(h,"__esModule",{value:!0});h.FeatureLikeLayerView3D=function(h){return function(g){function c(){var a=null!==g&&g.apply(this,arguments)||this;a.controller=null;a.asyncGraphicsUpdates=!1;a.suspendResumeExtentMode="computed";a.slicePlaneEnabled=!1;a.drapeSourceType=1;a.fullExtentInLocalViewSpatialReference=null;a.suspendResumeExtent=null;a._controllerCreated=!1;a.clippingExtent=null;a.supportsHeightUnitConversion=!0;a.pendingController=null;a.queryEngine=null;return a}
d.__extends(c,g);c.prototype.initialize=function(){var a=this,b=this.layer;"isTable"in b&&b.isTable?this.addResolvingPromise(l.reject(new k("featurelayerview:table-not-supported","table feature layer can't be displayed",{layer:b}))):(this._set("graphics3d",new t.default({owner:this,layer:b,frustumVisibilityEnabled:!0,scaleVisibilityEnabled:!0,filterVisibilityEnabled:!0,timeExtentVisibilityEnabled:!0,elevationAlignmentEnabled:!0,elevationFeatureExpressionEnabled:!0,preferredUpdatePolicy:this.asyncGraphicsUpdates?
1:0,suspendResumeExtentMode:this.suspendResumeExtentMode,updateClippingExtent:function(b){return a.updateClippingExtent(b)}})),this.updatingHandles.add(this,"asyncGraphicsUpdates",function(b){a.graphics3d.graphicsCore.preferredUpdatePolicy=b?1:0}),this.updatingHandles.add(this,"suspendResumeExtentMode",function(b){a.graphics3d.suspendResumeExtentMode=b}),this.addResolvingPromise(this.graphics3d.setup().then(function(){return a.validateGeometryType()}).then(function(){return a.queryEngine=new u.default({layerView:a,
task:w.Task.FEATURE_QUERY_ENGINE})}).then(function(){return v.toViewIfLocal(a)}).then(function(b){return a.fullExtentInLocalViewSpatialReference=b}).then(function(){return a.initializeController()})),this.notifyChange("updating"))};c.prototype.destroy=function(){this.destroyPendingController();this.controller&&(this.controller.destroy(),this.controller=null);this.graphics3d&&(this.graphics3d.destroy(),this._set("graphics3d",null));this.queryEngine&&(this.queryEngine.destroy(),this.queryEngine=null);
this.loadedGraphics=null};c.prototype.destroyPendingController=function(){this.pendingController&&(this.pendingController.destroy(),this.pendingController=null)};c.prototype.notifyGraphicUpdate=function(a,b){this.graphics3d.graphicsCore.notifyGraphicUpdate(a,b)};c.prototype.getRenderingInfo=function(a,b,c){(a=m.getRenderingInfo(a,{renderer:b,arcade:c}))&&a.color&&(b=a.color,b[0]/=255,b[1]/=255,b[2]/=255);return a};c.prototype.getRenderingInfoAsync=function(a,b,c,e){return d.__awaiter(this,void 0,
void 0,function(){return d.__generator(this,function(f){return[2,m.getRenderingInfoAsync(a,d.__assign({renderer:b,arcade:c},e))]})})};c.prototype.getGraphicFromGraphicUid=function(a){var b=this,c=null;this.loadedGraphics&&this.loadedGraphics.forEach(function(d){d.uid===a&&(c=p.hydrateGraphic(d,b.layer))});return c};Object.defineProperty(c.prototype,"graphics3DGraphics",{get:function(){return this.graphics3d?this.graphics3d.graphicsCore.graphics3DGraphics:null},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,
"graphics3DGraphicsByObjectID",{get:function(){return this.graphics3d?this.graphics3d.graphicsCore.graphics3DGraphicsByObjectID:null},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"symbolUpdateType",{get:function(){return this.graphics3d?this.graphics3d.graphicsCore.symbolUpdateType:null},enumerable:!0,configurable:!0});c.prototype.whenGraphicBounds=function(a,b){return this.graphics3d?this.graphics3d.graphicsCore.whenGraphicBounds(a,b):null};c.prototype.computeAttachmentOrigin=
function(a,b){return this.graphics3d?this.graphics3d.graphicsCore.computeAttachmentOrigin(a,b):null};c.prototype.getSymbolLayerSize=function(a,b){return this.graphics3d?this.graphics3d.graphicsCore.getSymbolLayerSize(a,b):null};c.prototype.queryFeatures=function(a,b){return this.queryEngine.executeQuery(this._ensureQuery(a),f.get(b,"signal"))};c.prototype.queryObjectIds=function(a,b){return this.queryEngine.executeQueryForIds(this._ensureQuery(a),f.get(b,"signal"))};c.prototype.queryFeatureCount=
function(a,b){return this.queryEngine.executeQueryForCount(this._ensureQuery(a),f.get(b,"signal"))};c.prototype.queryExtent=function(a,b){return this.queryEngine.executeQueryForExtent(this._ensureQuery(a),f.get(b,"signal"))};c.prototype._ensureQuery=function(a){return f.isNone(a)?this.createQuery():r.from(a)};c.prototype.highlight=function(a){return this.graphics3d.highlight(a,this.layer.objectIdField)};c.prototype.canResume=function(){return!g.prototype.canResume.call(this)||this.graphics3d&&this.graphics3d.suspended?
!1:!0};c.prototype.getSuspendInfo=function(){var a=g.prototype.getSuspendInfo.call(this);return this.graphics3d?d.__assign(d.__assign({},a),this.graphics3d.suspendInfo):a};c.prototype.isUpdating=function(){return!this.graphics3d||this.graphics3d.destroyed?!1:!(!(!this._controllerCreated||this.controller&&this.controller.updating)&&this.view.basemapTerrain&&this.view.basemapTerrain.ready&&!this.graphics3d.updating)};c.prototype.initializeController=function(){return d.__awaiter(this,void 0,void 0,
function(){var a;return d.__generator(this,function(b){switch(b.label){case 0:return[4,this.createController()];case 1:return this.pendingController=a=b.sent(),[4,a.when()];case 2:return b.sent(),this.setControllerWhenInitialized(a),[2]}})})};c.prototype.setControllerWhenInitialized=function(a){return d.__awaiter(this,void 0,void 0,function(){return d.__generator(this,function(b){switch(b.label){case 0:return b.trys.push([0,2,,3]),[4,this.when()];case 1:return b.sent(),[3,3];case 2:return b.sent(),
[3,3];case 3:return this._controllerCreated=!0,this.notifyChange("updating"),this.isResolved()?[4,n.whenTrueOnce(this.view,"basemapTerrain.ready")]:(this.destroyPendingController(),[2]);case 4:return b.sent(),this.pendingController=null,this.controller=a,this.loadedGraphics=a.graphics,this.notifyChange("updating"),[2]}})})};c.prototype.updateClippingExtent=function(a){this.clippingExtent=a;if(!this.controller)return!1;switch(this.controller.type){case "stream":return!1;case "feature-tile-3d":return this.controller.extent=
a,!0}};c.prototype.validateGeometryType=function(){switch(this.layer.geometryType){case "multipatch":case "multipoint":return l.reject(new k("featurelayerview3d:unsupported-geometry-type","Unsupported geometry type ${geometryType}",{geometryType:this.layer.geometryType}))}};c.prototype._getResourceInfo=function(){var a=this.controller&&this.controller instanceof q?this.controller:null;return{displayedNumberOfFeatures:this.loadedGraphics.length,maximumNumberOfFeatures:a?a.maximumNumberOfFeatures:-1,
totalNumberOfFeatures:a?a.serviceDataCount:-1,nodes:0,core:this.graphics3d.graphicsCore.performanceInfo,elevationUpdating:this.graphics3d.elevationAlignment.updating,visibilityFrustum:!this.graphics3d.frustumVisibility.suspended,visibilityScale:!this.graphics3d.scaleVisibility.suspended}};Object.defineProperty(c.prototype,"performanceInfo",{get:function(){return this._getResourceInfo()},enumerable:!0,configurable:!0});d.__decorate([e.property()],c.prototype,"loadedGraphics",void 0);d.__decorate([e.property({dependsOn:["graphics3d.suspended"]})],
c.prototype,"suspended",void 0);d.__decorate([e.property({dependsOn:["graphics3d.updating","controller.updating"]})],c.prototype,"updating",void 0);d.__decorate([e.property()],c.prototype,"controller",void 0);d.__decorate([e.property()],c.prototype,"graphics3d",void 0);d.__decorate([e.property({readOnly:!0})],c.prototype,"asyncGraphicsUpdates",void 0);d.__decorate([e.property({readOnly:!0})],c.prototype,"suspendResumeExtentMode",void 0);d.__decorate([e.property({type:Boolean})],c.prototype,"slicePlaneEnabled",
void 0);d.__decorate([e.property({readOnly:!0,dependsOn:["graphics3d.suspendInfo"]})],c.prototype,"suspendInfo",void 0);d.__decorate([e.property({aliasOf:"graphics3d.graphicsCore.hasDraped"})],c.prototype,"hasDraped",void 0);return c=d.__decorate([e.subclass("esri.views.3d.layers.FeatureLikeLayerView3D")],c)}(h)}});