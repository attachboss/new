// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../../../../core/Logger ../../../../../../core/screenUtils ../../color ../../number ../../Utils ../../materialKey/MaterialKey ./util ./WGLBaseLineTemplate ./WGLMeshTemplate".split(" "),function(g,t,A,B,u,x,v,y,z,C,D,E){Object.defineProperty(t,"__esModule",{value:!0});var F=B.getLogger("esri.views.2d.engine.webgl.WGLLineTemplate");g=function(g){function h(e,a,b,f,h,d,m,r,n,p,k,q,l,w,u,v,t){var c=g.call(this)||this;e=z.LineMaterialKey.load(z.createMaterialKey(c.geometryType,
e,l));a&&(e.sdf=a.sdf,e.pattern=!0,e.textureBinding=a.textureBinding);c._capType=f;c._joinType=h;c._miterLimitCosine=C.getLimitCosine(d);c.tessellationProperties._fillColor=m;c.tessellationProperties._tl=r;c.tessellationProperties._br=n;c._hasPattern=p;c._isDashed=k;c._joinOnUTurn=v;c._isColorLocked=q;c._isOutline=l;c._zOrder=u;c.effects=t;c._materialKey=e.data;c.tessellationProperties._bitset=q?1:0;c.tessellationProperties._halfWidth=.5*b;c.tessellationProperties._halfReferenceWidth=.5*w;c._initializeTessellator(!1);
return c}A.__extends(h,g);h.fromCIMLine=function(e,a,b,f,g){var d=a.color,m=a.scaleFactor||1,r=a.isDashed,n=a.cap;r&&1===n&&(n=2);var p=a.join,m=u.pt2px(a.width)*m,k=u.pt2px(a.referenceWidth),q=u.pt2px(a.miterLimit),d=d&&x.premultiplyAlphaRGBA(d)||0;if(!b)return new h(e,b,m,n,p,q,d,0,0,!1,r,a.colorLocked,f,k,a.zOrder,g,a.effects);var l=b.rect,w=l.x+1+b.width,t=l.y+1+b.height,l=v.i1616to32(l.x+1,l.y+1),w=v.i1616to32(w,t);return new h(e,b,m,n,p,q,d,l,w,!0,r,a.colorLocked,f,k,a.zOrder,g,a.effects)};
h.fromSimpleLine=function(e,a,b,f,g){var d=b.color,m="solid"!==b.style&&"none"!==b.style,r=y.getCapType(b.cap||"round",m),n=y.getJoinType(b.join||"round"),d=d&&"none"!==b.style&&x.premultiplyAlphaRGBA(d)||0;"none"===b.style&&(d=0);var p=u.pt2px(b.width);b=b.miterLimit;if(!f)return new h(e,f,p,r,n,b,d,0,0,!1,m,!1,a,p,0,g,null);var k=f.rect,q=k.x+1+f.width,l=k.y+1+f.height,k=v.i1616to32(k.x+1,k.y+1),q=v.i1616to32(q,l);return new h(e,f,p,r,n,b,d,k,q,!0,m,!1,a,p,0,g,null)};h.fromPictureLineSymbol=function(e,
a,b,f){F.error("PictureLineSymbol support does not exist!");return null};return h}(D.default(E.default));t.default=g});