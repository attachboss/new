// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","tslib","./DisplayObject"],function(g,h,f,k){Object.defineProperty(h,"__esModule",{value:!0});g=function(c){function b(){var a=null!==c&&c.apply(this,arguments)||this;a._childrenSet=new Set;a.children=[];return a}f.__extends(b,c);Object.defineProperty(b.prototype,"blendMode",{get:function(){return this._blendMode},set:function(a){this._blendMode=a;this.requestRender()},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"clips",{get:function(){return this._clips},
set:function(a){this._clips=a;this.children.forEach(function(e){return e.clips=a})},enumerable:!0,configurable:!0});b.prototype.doRender=function(a){a=this.createRenderParams(a);this.renderChildren(a)};b.prototype.addChild=function(a){return this.addChildAt(a,this.children.length)};b.prototype.addChildAt=function(a,e){void 0===e&&(e=this.children.length);if(!a||this.contains(a))return a;var b=a.parent;b&&b!==this&&b.removeChild(a);e>=this.children.length?this.children.push(a):this.children.splice(e,
0,a);this._childrenSet.add(a);a.parent=this;a.stage=this.stage;this!==this.stage&&(a.clips=this.clips);this.requestRender();return a};b.prototype.contains=function(a){return this._childrenSet.has(a)};b.prototype.removeAllChildren=function(){this._childrenSet.clear();for(var a=0,b=this.children;a<b.length;a++){var d=b[a];this!==this.stage&&(d.clips=null);d.stage=null;d.parent=null}this.children.length=0};b.prototype.removeChild=function(a){return this.contains(a)?this.removeChildAt(this.children.indexOf(a)):
a};b.prototype.removeChildAt=function(a){if(0>a||a>=this.children.length)return null;a=this.children.splice(a,1)[0];this._childrenSet.delete(a);this!==this.stage&&(a.clips=null);a.stage=null;a.parent=null;return a};b.prototype.sortChildren=function(a){return this.children.sort(a)};b.prototype.onAttach=function(){c.prototype.onAttach.call(this);for(var a=this.stage,b=0,d=this.children;b<d.length;b++)d[b].stage=a};b.prototype.onDetach=function(){c.prototype.onDetach.call(this);for(var a=0,b=this.children;a<
b.length;a++)b[a].stage=null};b.prototype.renderChildren=function(a){for(var b=this.children,d=b.length,c=0;c<d;c++)b[c].processRender(a)};b.prototype.createRenderParams=function(a){return f.__assign(f.__assign({},a),{blendMode:this.blendMode,globalOpacity:a.globalOpacity*this.opacity})};return b}(k.DisplayObject);h.Container=g});