// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../core/JSONSupport ../../core/accessorSupport/decorators/property ../../core/accessorSupport/decorators/subclass".split(" "),function(f,b,c,h,e,g){Object.defineProperty(b,"__esModule",{value:!0});b.ElementMixin=function(b){return function(d){function a(){var a=null!==d&&d.apply(this,arguments)||this;a.description=null;a.label=null;a.visibilityExpression=null;return a}c.__extends(a,d);c.__decorate([e.property({type:String,json:{write:!0}})],a.prototype,"description",
void 0);c.__decorate([e.property({type:String,json:{write:!0}})],a.prototype,"label",void 0);c.__decorate([e.property({type:String,json:{write:!0}})],a.prototype,"visibilityExpression",void 0);return a=c.__decorate([g.subclass("esri.form.elements.ElementMixin")],a)}(b)};f=function(b){function d(a){a=b.call(this,a)||this;a.type=null;return a}c.__extends(d,b);c.__decorate([e.property()],d.prototype,"type",void 0);return d=c.__decorate([g.subclass("esri.form.elements.Element")],d)}(b.ElementMixin(h.JSONSupport));
b.Element=f});