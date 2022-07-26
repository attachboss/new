// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/ObjectStack ../../../../core/libs/gl-matrix-2/vec3 ../stack ./ray".split(" "),function(r,e,n,h,p,g){function f(a){return a?{ray:g.create(a.ray),c0:a.c0,c1:a.c1}:{ray:g.create(),c0:0,c1:Number.MAX_VALUE}}function l(a,b,c,d){void 0===d&&(d=f());g.copy(a,d.ray);d.c0=b;d.c1=c;return d}function m(a,b,c){void 0===c&&(c=f());var d=h.vec3.length(a.vector);g.fromValues(a.origin,b,c.ray);c.c0=0;c.c1=d;return c}function k(a,b,c){return h.vec3.add(c,a.ray.origin,h.vec3.scale(c,
a.ray.direction,b))}Object.defineProperty(e,"__esModule",{value:!0});e.create=f;e.wrap=function(a,b,c){var d=q.get();d.ray=a;d.c0=b;d.c1=c;return d};e.copy=function(a,b){void 0===b&&(b=f());return l(a.ray,a.c0,a.c1,b)};e.fromValues=l;e.fromRay=function(a,b){void 0===b&&(b=f());g.copy(a,b.ray);b.c0=0;b.c1=Number.MAX_VALUE;return b};e.fromLineSegment=function(a,b){void 0===b&&(b=f());var c=h.vec3.normalize(p.sv3d.get(),a.vector);return m(a,c,b)};e.fromLineSegmentAndDirection=m;e.getStart=function(a,
b){return k(a,a.c0,b)};e.getEnd=function(a,b){return k(a,a.c1,b)};e.getAt=k;var q=new n.ObjectStack(function(){return{c0:0,c1:0,ray:null}})});