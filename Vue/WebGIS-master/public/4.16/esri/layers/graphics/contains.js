// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(t,a){function l(c,d,b,e,f){if(!c)return!1;d=d?b?4:3:b?3:2;b=c.coords;var g=!1,k=0,p=0;for(c=c.lengths;p<c.length;p++){for(var a=c[p],h=k,m=k,l=k+a*d;m<l;m+=d){h=m+d;h===l&&(h=k);var q=b[m],n=b[m+1],r=b[h],h=b[h+1];(n<f&&h>=f||h<f&&n>=f)&&q+(f-n)/(h-n)*(r-q)<e&&(g=!g)}k+=a*d}return g}Object.defineProperty(a,"__esModule",{value:!0});a.polygonContainsPoint=function(c,d,b,e){return l(c,d,b,e.coords[0],e.coords[1])};a.polygonContainsMultipoint=function(c,d,b,e,f,g){f=
f?g?4:3:g?3:2;g=e.coords;e=e.lengths;if(!e)return!1;for(var k=0,a=0;k<e.length;k++,a+=f)if(!l(c,d,b,g[a],g[a+1]))return!1;return!0};a.polygonContainsCoords=l});