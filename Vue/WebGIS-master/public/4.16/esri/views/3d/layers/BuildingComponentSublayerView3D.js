// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../Graphic ../../../core/Error ../../../core/Logger ../../../core/maybe ../../../core/promiseUtils ../../../core/SetUtils ../../../core/accessorSupport/decorators ../../../core/sql/WhereClause ../../../layers/support/fieldUtils ./BuildingSublayerView3D ./I3SMeshView3D ./i3s/BuildingFilterUtil ./i3s/I3SUtil ./support/DefinitionExpressionSceneLayerView ../../layers/support/popupUtils".split(" "),function(G,H,c,w,t,x,y,u,z,d,A,g,B,C,v,D,E,p){var h=x.getLogger("esri.views.3d.layers.BuildingComponentSublayerView3D");
return function(f){function b(){var a=null!==f&&f.apply(this,arguments)||this;a.layerView=null;a._elevationContext="scene";a._isIntegratedMesh=!1;a._supportsLabeling=!1;a.lodFactor=1;a.progressiveLoadFactor=1;return a}c.__extends(b,f);Object.defineProperty(b.prototype,"layerUid",{get:function(){return this.layer.layer.uid},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"sublayerUid",{get:function(){return this.layer.uid},enumerable:!0,configurable:!0});b.prototype.initialize=function(){var a=
this;this.updatingHandles.add(this,"layer.renderer",function(){return a._updateRequiredFields()});this.updatingHandles.add(this,"definitionExpressionFields",function(){return a._updateRequiredFields()});this.updatingHandles.add(this,"filterExpressionFields",function(){return a._updateRequiredFields()});this.updatingHandles.add(this.layer,"renderer",function(e){return a._rendererChange(e)},2);this.updatingHandles.add(this,"parsedDefinitionExpression",function(){return a._filterChange()});this.updatingHandles.add(this,
"parsedFilterExpressions",function(){return a._updateSymbologyOverride()},2);this.addResolvingPromise(this._updateRequiredFields())};Object.defineProperty(b.prototype,"parsedFilterExpressions",{get:function(){var a=this;return"Overview"===this.layer.modelName?[]:this.layerView.filterExpressions.map(function(e){var b=e[0];e=e[1];var c;try{c=A.WhereClause.create(b,a.layer.fieldsIndex)}catch(k){return h.error("Failed to parse filterExpression: "+k),null}if(!c.isStandardized)return h.error("filterExpression is using non standard function"),
null;b=[];D.findFieldsCaseInsensitive(c.fieldNames,a.layer.fields,{missingFields:b});return 0<b.length?(h.error("filterExpression references unknown fields: "+b.join(", ")),null):[c,e]}).filter(function(a){return null!=a})},enumerable:!0,configurable:!0});b.prototype._updateSymbologyOverride=function(){var a=this,b=this.parsedFilterExpressions;0<b.length?this._setSymbologyOverride(function(e,c){for(var k=0;k<b.length;k++){var d=b[k],F=d[0],d=d[1];try{if(F.testFeature(e))return v.applyFilterMode(c,
d)}catch(l){a.logError(l)}}return v.applyFilterMode(c,null)},this.filterExpressionFields):this._setSymbologyOverride(null,null)};Object.defineProperty(b.prototype,"filterExpressionFields",{get:function(){return g.fixFields(this.layer.fields,this.parsedFilterExpressions.reduce(function(a,b){return a.concat(b[0].fieldNames)},[]))},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"availableFields",{get:function(){var a=this.layer,b=a.fields,d=this.requiredFields;if(a.outFields||a.layer.outFields)a=
c.__spreadArrays(a.outFields||[],a.layer.outFields||[]),d=c.__spreadArrays(g.unpackFieldNames(b,a),d);return g.fixFields(b,d)},enumerable:!0,configurable:!0});b.prototype._createLayerGraphic=function(a){a=new w(null,null,a);a.layer=this.layer.layer;a.sourceLayer=this.layer;return a};b.prototype.canResume=function(){return f.prototype.canResume.call(this)&&(!this._controller||this._controller.rootNodeVisible)};b.prototype.isUpdating=function(){return this.updatingMeshView3D};b.prototype.fetchPopupFeatures=
function(a,b){return c.__awaiter(this,void 0,void 0,function(){var a,d,e,f,h,l,q,m,r,n;return c.__generator(this,function(c){switch(c.label){case 0:if(a=this._validateFetchPopupFeatures(b))return[2,u.reject(a)];if(!y.isSome(b)||!b.clientGraphics||0===b.clientGraphics.length)return[2,[]];d=[];e=[];h=g.unpackFieldNames;l=[this.layer.fields];return[4,p.getRequiredFields(this.layer,p.getFetchPopupTemplate(this.layer,b))];case 1:f=h.apply(void 0,l.concat([c.sent()]));q=new Set;m=0;for(r=b.clientGraphics;m<
r.length;m++)n=r[m],g.populateMissingFields(f,n,q)?e.push(n):d.push(n);return 0===e.length?[2,u.resolve(d)]:[2,this.whenGraphicAttributes(e,z.valuesOfSet(q)).catch(function(){return e}).then(function(a){return d.concat(a)})]}})})};b.prototype._updateRequiredFields=function(){return c.__awaiter(this,void 0,void 0,function(){var a,b,d,f;return c.__generator(this,function(e){switch(e.label){case 0:return b=g.fixFields,d=[this.layer.fields],this.layer.renderer?[4,this.layer.renderer.getRequiredFields(this.layer.fields)]:
[3,2];case 1:return f=e.sent(),[3,3];case 2:f=[],e.label=3;case 3:return a=b.apply(void 0,d.concat([c.__spreadArrays.apply(void 0,[f,this.definitionExpressionFields||[],this.filterExpressionFields||[]])])),this._set("requiredFields",a),[2]}})})};b.prototype._validateFetchPopupFeatures=function(b){var a=this.layer;if(!a.popupEnabled)return new t("buildingscenelayerview3d:fetchPopupFeatures","Popups are disabled",{layer:a});if(!p.getFetchPopupTemplate(a,b))return new t("buildingscenelayerview3d:fetchPopupFeatures",
"Layer does not define a popup template",{layer:a})};b.prototype.getFilters=function(){var a=f.prototype.getFilters.call(this);this.addSqlFilter(a,this.parsedDefinitionExpression,this.definitionExpressionFields,this.logError);return a};c.__decorate([d.property()],b.prototype,"layer",void 0);c.__decorate([d.property()],b.prototype,"layerView",void 0);c.__decorate([d.property({dependsOn:["updatingMeshView3D"]})],b.prototype,"updating",void 0);c.__decorate([d.property({dependsOn:["_controller.rootNodeVisible"]})],
b.prototype,"suspended",void 0);c.__decorate([d.property({readOnly:!0,aliasOf:"view.qualitySettings.sceneService.3dObject.lodFactor"})],b.prototype,"lodFactor",void 0);c.__decorate([d.property({readOnly:!0,dependsOn:["layerView.filterExpressions","layer.fieldsIndex"]})],b.prototype,"parsedFilterExpressions",null);c.__decorate([d.property({type:[String],readOnly:!0,dependsOn:["parsedFilterExpressions"]})],b.prototype,"filterExpressionFields",null);c.__decorate([d.property({type:[String],readOnly:!0})],
b.prototype,"requiredFields",void 0);c.__decorate([d.property({type:[String],readOnly:!0,dependsOn:["layer.outFields","layer.layer.outFields","requiredFields"]})],b.prototype,"availableFields",null);return b=c.__decorate([d.subclass("esri.views.3d.layers.BuildingComponentSublayerView3D")],b)}(E.DefinitionExpressionSceneLayerView(C.I3SMeshView3D(B)))});