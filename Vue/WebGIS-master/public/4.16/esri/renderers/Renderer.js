// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../core/jsonMap ../core/JSONSupport ../core/SetUtils ../core/accessorSupport/decorators ./support/AuthoringInfo".split(" "),function(m,n,b,g,h,k,d,l){var e=new g.default({simple:"simple",uniqueValue:"unique-value",classBreaks:"class-breaks",heatmap:"heatmap",dotDensity:"dot-density",dictionary:"dictionary"},{ignoreUnknown:!0});return function(f){function a(a){a=f.call(this,a)||this;a.authoringInfo=null;a.type=null;return a}b.__extends(a,f);a.prototype.getRequiredFields=
function(a){return b.__awaiter(this,void 0,void 0,function(){var c;return b.__generator(this,function(b){switch(b.label){case 0:if(!this.collectRequiredFields)return[2,[]];c=new Set;return[4,this.collectRequiredFields(c,a)];case 1:return b.sent(),[2,k.valuesOfSet(c).sort()]}})})};a.prototype.getSymbol=function(a,b){};a.prototype.getSymbolAsync=function(a,c){return b.__awaiter(this,void 0,void 0,function(){return b.__generator(this,function(a){return[2]})})};a.prototype.getSymbols=function(){return[]};
a.prototype.getAttributeHash=function(){return JSON.stringify(this)};a.prototype.getMeshHash=function(){return JSON.stringify(this)};b.__decorate([d.property({type:l,json:{write:!0}})],a.prototype,"authoringInfo",void 0);b.__decorate([d.property({type:e.apiValues,readOnly:!0,json:{type:e.jsonValues,read:!1,write:{writer:e.write,ignoreOrigin:!0}}})],a.prototype,"type",void 0);return a=b.__decorate([d.subclass("esri.renderers.Renderer")],a)}(h.JSONSupport)});