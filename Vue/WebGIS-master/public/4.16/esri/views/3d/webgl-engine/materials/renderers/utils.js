// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../core/maybe ../../../../../core/maybe ../../../../../core/libs/gl-matrix-2/mat4 ../../../../../core/libs/gl-matrix-2/mat4f64 ../../lib/doublePrecisionUtils ../../lib/Util".split(" "),function(r,c,l,m,g,n,p,q){Object.defineProperty(c,"__esModule",{value:!0});c.addObject3DStateID=function(a,b){l.isNone(a)&&(a=[]);a.push(b);return a};c.removeObject3DStateID=function(a,b){if(l.isNone(a))return a;a=a.filter(function(a){return a!==b});return 0===a.length?null:a};c.isInstanceHidden=
function(a){return m.isSome(a)?!a.visible:!1};c.acquireMaterials=function(a,b){var d=new Map;d.set(0,b.acquire(a,0));d.set(3,b.acquire(a,3));d.set(2,b.acquire(a,2));d.set(1,b.acquire(a,1));d.set(4,b.acquire(a,4));return d};c.releaseMaterials=function(a,b){b.release(a,0);b.release(a,3);b.release(a,2);b.release(a,1);b.release(a,4)};c.calculateTransformRelToOrigin=function(a,b,d){var c=a.origin.vec3;q.setMatrixTranslation3(k,-c[0],-c[1],-c[2]);m.isSome(a.transformation)?g.mat4.multiply(b,k,a.transformation):
g.mat4.copy(b,k);d&&(g.mat4.invert(d,b),g.mat4.transpose(d,d))};c.encodeDoubleVec3=function(a,b,d,c,f){h[0]=a.get(b,0);h[1]=a.get(b,1);h[2]=a.get(b,2);p.encodeDoubleArray(h,e,3);d.set(f,0,e[0]);c.set(f,0,e[1]);d.set(f,1,e[2]);c.set(f,1,e[3]);d.set(f,2,e[4]);c.set(f,2,e[5])};var h=new Float64Array(3),e=new Float32Array(6),k=n.mat4f64.create()});