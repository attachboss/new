// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../core/JSONSupport ../../core/accessorSupport/decorators ../../core/accessorSupport/ensureType ../../geometry/support/jsonUtils".split(" "),function(b,k,d,g,e,h,f){b=function(b){function c(a){a=b.call(this,a)||this;a.geometries1=null;a.geometries2=null;a.relation=null;a.relationParameter=null;return a}d.__extends(c,b);d.__decorate([e.property({json:{read:{reader:function(a){return a?a.map(function(a){return f.fromJSON(a)}):null}},write:{writer:function(a,b){b.geometries1=
a.map(function(a){return a.toJSON()})}}}})],c.prototype,"geometries1",void 0);d.__decorate([e.property({json:{read:{reader:function(a){return a?a.map(function(a){return f.fromJSON(a)}):null}},write:{writer:function(a,b){b.geometries2=a.map(function(a){return a.toJSON()})}}}})],c.prototype,"geometries2",void 0);d.__decorate([e.property({type:String,json:{write:!0}})],c.prototype,"relation",void 0);d.__decorate([e.property({type:String,json:{write:!0}})],c.prototype,"relationParameter",void 0);return c=
d.__decorate([e.subclass("esri.tasks.support.RelationParameters")],c)}(g.JSONSupport);b.from=h.default(b);return b});