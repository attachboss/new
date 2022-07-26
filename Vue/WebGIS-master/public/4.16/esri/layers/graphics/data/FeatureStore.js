// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../core/Error ../../../core/Evented ../../../core/Logger ../../../core/maybe ../../../geometry/support/aaBoundingBox ../../../geometry/support/aaBoundingRect ../../../geometry/support/spatialReferenceUtils ../featureConversionUtils ./BoundsStore ./executeTileQuery ./optimizedFeatureQueryEngineAdapter".split(" "),function(l,m,u,y,z,A,n,B,g,C,D,E,v,F){Object.defineProperty(m,"__esModule",{value:!0});var G=A.getLogger("esri.layers.graphics.data.FeatureStore");l=function(){function b(a){this.geometryInfo=
a;this._boundsStore=new E.BoundsStore;this._featuresById=new Map;this._markedIds=new Set;this.events=new z;this.featureAdapter=F.optimizedFeatureQueryEngineAdapter}Object.defineProperty(b.prototype,"geometryType",{get:function(){return this.geometryInfo.geometryType},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"hasM",{get:function(){return this.geometryInfo.hasM},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"hasZ",{get:function(){return this.geometryInfo.hasZ},
enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"numFeatures",{get:function(){return this._featuresById.size},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"fullBounds",{get:function(){var a=this;if(!this.numFeatures)return null;var c=g.create(g.NEGATIVE_INFINITY);this._featuresById.forEach(function(b){if(b=a._boundsStore.get(b.objectId))c[0]=Math.min(b[0],c[0]),c[1]=Math.min(b[1],c[1]),c[2]=Math.max(b[2],c[2]),c[3]=Math.max(b[3],c[3])});return c},enumerable:!0,
configurable:!0});Object.defineProperty(b.prototype,"storeStatistics",{get:function(){var a=0;this._featuresById.forEach(function(c){c.geometry&&c.geometry.coords&&(a+=c.geometry.coords.length)});return{featureCount:this._featuresById.size,vertexCount:a/(this.hasZ?this.hasM?4:3:this.hasM?3:2)}},enumerable:!0,configurable:!0});b.prototype.add=function(a){this._add(a);this._emitChanged()};b.prototype.addMany=function(a){for(var c=0;c<a.length;c++)this._add(a[c]);this._emitChanged()};b.prototype.clear=
function(){this._featuresById.clear();this._boundsStore.clear();this._emitChanged()};b.prototype.removeById=function(a){a=this._featuresById.get(a);if(!a)return null;this._remove(a);this._emitChanged();return a};b.prototype.removeManyById=function(a){this._boundsStore.invalidateIndex();for(var c=0;c<a.length;c++){var b=this._featuresById.get(a[c]);b&&this._remove(b)}this._emitChanged()};b.prototype.forEachBounds=function(a,c,b){for(var d=0;d<a.length;d++){var e=this._boundsStore.get(a[d].objectId);
e&&c(B.fromRect(b,e))}};b.prototype.getFeature=function(a){return this._featuresById.get(a)};b.prototype.has=function(a){return this._featuresById.has(a)};b.prototype.forEach=function(a){this._featuresById.forEach(function(c){return a(c)})};b.prototype.forEachInBounds=function(a,c){var b=this;this._boundsStore.forEachInBounds(a,function(a){c(b._featuresById.get(a))})};b.prototype.startMarkingUsedFeatures=function(){this._boundsStore.invalidateIndex();this._markedIds.clear()};b.prototype.sweep=function(){var a=
this,c=!1;this._featuresById.forEach(function(b,d){a._markedIds.has(d)||(c=!0,a._remove(b))});this._markedIds.clear();c&&this._emitChanged()};b.prototype.executeTileQuery=function(a,c,b){return u.__awaiter(this,void 0,void 0,function(){var d,e,r,l,p,h,t,f,m,w,q,k,n,x;return u.__generator(this,function(u){d=b.returnGeometry;e=b.returnCentroid;r=b.returnOutline;l=b.pixelBuffer;p=new Set;h=[];t=l*a.resolution;f=g.pad(a.bounds,t,g.create());v.createTileFeatures(h,p,this.geometryInfo,this,f,d,e,r,{originPosition:"upperLeft",
scale:[a.resolution,a.resolution],translate:[a.bounds[0],a.bounds[3]]});if("esriGeometryPoint"===this.geometryType||e)if(m=C.getInfo(c))w=m.valid,q=w[0],k=w[1],f[0]<q&&(n=g.fromValues(k-t,f[1],k,f[3]),v.createTileFeatures(h,p,this.geometryInfo,this,n,d,e,r,{originPosition:"upperLeft",scale:[a.resolution,a.resolution],translate:[k,a.bounds[3]]})),f[2]>k&&(x=g.fromValues(q,f[1],q+t,f[3]),v.createTileFeatures(h,p,this.geometryInfo,this,x,d,e,r,{originPosition:"upperLeft",scale:[a.resolution,a.resolution],
translate:[q-k+a.bounds[0],a.bounds[3]]}));h.sort(function(a,b){return a.localId-b.localId});return[2,{features:h,objectIds:p}]})})};b.prototype._emitChanged=function(){this.events.emit("changed",void 0)};b.prototype._add=function(a){if(a){var b=a.objectId;if(null==b)G.error(new y("featurestore:invalid-feature","feature id is missing",{feature:a}));else{var e=this._featuresById.get(b),d;this._markedIds.add(b);if(e)a.localId=e.localId,d=this._boundsStore.get(b),this._boundsStore.delete(b);else if(n.isSome(this.onFeatureAdd))this.onFeatureAdd(a);
a.geometry&&a.geometry.coords&&a.geometry.coords.length?(d=D.getBoundsOptimizedGeometry(d||g.create(),a.geometry,this.geometryInfo.hasZ,this.geometryInfo.hasM),this._boundsStore.set(b,d)):this._boundsStore.set(b,null);this._featuresById.set(b,a)}}};b.prototype._remove=function(a){if(n.isSome(this.onFeatureRemove))this.onFeatureRemove(a);this._markedIds.delete(a.objectId);this._boundsStore.delete(a.objectId);this._featuresById.delete(a.objectId);return a};return b}();m.default=l});