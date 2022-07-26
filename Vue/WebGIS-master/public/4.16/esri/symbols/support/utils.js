// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../Color ../../symbols ../../core/asyncUtils ../../core/compilerUtils ../../core/has ../../core/maybe ../../core/screenUtils ../../core/libs/gl-matrix-2/vec3f64 ./gfxUtils ./Symbol3DMaterial @dojo/framework/shim/Promise".split(" "),function(v,h,f,p,l,w,q,x,g,y,z,A,B){function m(a,b){if(null==b)return a;a=a.toRgba();a[3]*=b;return new p(a)}function C(a,b,c){if(a=a.symbolLayers){var d=function(a){a=g.isSome(a)?a:null;b=b||a||null!=c&&D;return m(b,c)};a.forEach(function(a){if("object"!==
a.type||null==a.resource.href||b)if("water"===a.type)a.color=d(a.color);else{var e=g.isSome(a.material)?a.material.color:null,e=d(e);g.isNone(a.material)?a.material=new B.default({color:e}):a.material.color=e;null!=c&&"outline"in a&&g.isSome(a.outline)&&g.isSome(a.outline.color)&&(a.outline.color=m(a.outline.color,c))}})}}function E(a,b){return f.__awaiter(this,void 0,void 0,function(){var c,d=this;return f.__generator(this,function(e){switch(e.label){case 0:return(c=a.symbolLayers)?[4,w.forEach(c,
function(a){return f.__awaiter(d,void 0,void 0,function(){return f.__generator(this,function(c){return[2,F(a,b)]})})})]:[2];case 1:return e.sent(),[2]}})})}function F(a,b){return f.__awaiter(this,void 0,void 0,function(){var c;return f.__generator(this,function(d){switch(d.label){case 0:c=a.type;switch(c){case "extrude":return[3,1];case "icon":return[3,2];case "line":return[3,2];case "text":return[3,2];case "path":return[3,3];case "object":return[3,4];case "fill":return[3,6];case "water":return[3,
6]}return[3,7];case 1:return a.size="number"===typeof b[2]?b[2]:0,[3,8];case 2:return d=r(b),g.isSome(d)&&(a.size=d),[3,8];case 3:return d=t(b,z.vec3f64.ONES,[a.width,void 0,a.height]),a.width=n(b[0],a.width,1,d),a.height=n(b[2],a.height,1,d),[3,8];case 4:return[4,G(a,b)];case 5:return d.sent(),[3,8];case 6:return[3,8];case 7:q.neverReached(a),d.label=8;case 8:return[2]}})})}function r(a){for(var b=0;b<a.length;b++){var c=a[b];if("number"===typeof c)return c}return null}function G(a,b){return f.__awaiter(this,
void 0,void 0,function(){var c,d,e,g;return f.__generator(this,function(f){switch(f.label){case 0:return[4,H(a)];case 1:return c=f.sent(),d=c.resourceSize,e=c.symbolSize,g=t(b,d,e),a.width=n(b[0],e[0],d[0],g),a.depth=n(b[1],e[1],d[1],g),a.height=n(b[2],e[2],d[2],g),[2]}})})}function t(a,b,c){for(var d=0;3>d;d++){var e=a[d];switch(e){case "symbol-value":return null!=c[d]?c[d]/b[d]:1;case "proportional":break;default:if(e&&b[d])return e/b[d]}}return 1}function H(a){return f.__awaiter(this,void 0,void 0,
function(){var b,c,d,e,g,h,l,k;return f.__generator(this,function(f){switch(f.label){case 0:return[4,new Promise(function(a,b){v(["./symbolLayerUtils"],a,b)})];case 1:return b=f.sent(),[4,b.computeObjectLayerResourceSize(a,10)];case 2:c=f.sent();d=a.width;e=a.height;g=a.depth;h=[d,g,e];l=1;for(k=0;3>k;k++)if(null!=h[k]){l=h[k]/c[k];break}for(k=0;3>k;k++)null==h[k]&&(h[k]=c[k]*l);return[2,{resourceSize:c,symbolSize:h}]}})})}function n(a,b,c,d){switch(a){case "proportional":return c*d;case "symbol-value":return null!=
b?b:c;default:return a}}Object.defineProperty(h,"__esModule",{value:!0});var u=/\/resource\/(.*?)\.svg$/,D=new p("white");h.getSymbolOutlineSize=function(a){if(!a)return 0;if(l.isSymbol3D(a)){var b=a.symbolLayers&&a.symbolLayers.length;b?(a=a.symbolLayers.getItemAt(b-1),a="outline"in a?g.get(a,"outline","size"):void 0):a=void 0;return g.isSome(a)?a:0}return(a=A.getStroke(a))&&y.px2pt(a.width)||0};h.isVolumetricSymbol=function(a){if(!a||!a.symbolLayers)return!1;switch(a.type){case "point-3d":return a.symbolLayers.some(function(a){return"object"===
a.type});case "line-3d":return a.symbolLayers.some(function(a){return"path"===a.type});case "polygon-3d":return a.symbolLayers.some(function(a){return"object"===a.type||"extrude"===a.type});default:return!1}};h.getIconHref=function(a,b){b=b.resource.href;return!x("esri-canvas-svg-support")&&a.styleOrigin&&u.test(b)?b.replace(u,"/resource/png/$1.png"):b};h.applyOpacityToColor=m;h.applyColorToSymbol=function(a,b,c){if(a&&(b||null!=c))if(b&&(b=new p(b)),l.isSymbol3D(a))C(a,b,c);else if(l.isSymbol2D(a)){if(b=
b||a.color)a.color=m(b,c);null!=c&&"outline"in a&&a.outline&&a.outline.color&&(a.outline.color=m(a.outline.color,c))}};h.applySizesToSymbol=function(a,b){return f.__awaiter(this,void 0,void 0,function(){return f.__generator(this,function(c){if(!a||!b)return[2];if(l.isSymbol3D(a))return[2,E(a,b)];if(l.isSymbol2D(a)&&(c=r(b),!g.isNone(c)))switch(a.type){case "simple-marker":a.size=c;break;case "picture-marker":var d=a.width/a.height;1<d?(a.width=c,a.height=c*d):(a.width=c*d,a.height=c);break;case "simple-line":a.width=
c;break;case "text":a.font.size=c;break;case "simple-fill":case "picture-fill":break;case "cim":break;default:q.neverReached(a)}return[2]})})};h.applyRotationToSymbol=function(a,b,c){a&&null!=b&&(l.isSymbol3D(a)?(a=a.symbolLayers)&&a.forEach(function(a){if(a&&"object"===a.type)switch(c){case "tilt":a.tilt=b;break;case "roll":a.roll=b;break;default:a.heading=b}}):!l.isSymbol2D(a)||"simple-marker"!==a.type&&"picture-marker"!==a.type&&"text"!==a.type||(a.angle=b))}});