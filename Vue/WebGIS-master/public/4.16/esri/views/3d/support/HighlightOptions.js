// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../Color ../../../core/Accessor ../../../core/maybe ../../../core/accessorSupport/decorators ../../../core/libs/gl-matrix-2/vec4f32".split(" "),function(l,m,c,d,h,k,e,g){return function(f){function a(){var b=null!==f&&f.apply(this,arguments)||this;b.color=new d([0,255,255]);b.haloColor=null;b.haloOpacity=1;b.fillOpacity=.25;return b}c.__extends(a,f);a.toEngineOptions=function(b){var a=d.toUnitRGBA(b.color),c=k.isSome(b.haloColor)?d.toUnitRGBA(b.haloColor):a;return{color:g.vec4f32.fromValues(a[0],
a[1],a[2],a[3]),haloColor:g.vec4f32.fromValues(c[0],c[1],c[2],c[3]),haloOpacity:b.haloOpacity,haloOpacityOccluded:.25*b.haloOpacity,fillOpacity:b.fillOpacity,fillOpacityOccluded:.25*b.fillOpacity}};c.__decorate([e.property({type:d})],a.prototype,"color",void 0);c.__decorate([e.property({type:d})],a.prototype,"haloColor",void 0);c.__decorate([e.property()],a.prototype,"haloOpacity",void 0);c.__decorate([e.property()],a.prototype,"fillOpacity",void 0);return a=c.__decorate([e.subclass("esri.views.3d.support.HighlightOptions")],
a)}(h)});