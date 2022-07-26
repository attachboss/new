// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","../languageUtils"],function(p,f,d){function l(c){for(var a=0,b=0;b<c.length;b++)a+=c[b];return a/c.length}function m(c){for(var a=l(c),b=0,d=0;d<c.length;d++)b+=Math.pow(a-c[d],2);return b/c.length}Object.defineProperty(f,"__esModule",{value:!0});f.decodeStatType=function(c){switch(c.toLowerCase()){case "distinct":return"distinct";case "avg":case "mean":return"avg";case "min":return"min";case "sum":return"sum";case "max":return"max";case "stdev":case "stddev":return"stddev";
case "var":case "variance":return"var";case "count":return"count"}return""};f.calculateStat=function(c,a,b){void 0===b&&(b=1E3);switch(c.toLowerCase()){case "distinct":a:{c=b;b=[];for(var f={},h=[],g=0;g<a.length;g++){if(void 0!==a[g]&&null!==a[g]&&a[g]!==d.voidOperation){var e=a[g];if(d.isNumber(e)||d.isString(e))void 0===f[e]&&(b.push(e),f[e]=1);else{for(var n=!1,k=0;k<h.length;k++)!0===d.equalityTest(h[k],e)&&(n=!0);!1===n&&(h.push(e),b.push(e))}}if(b.length>=c&&-1!==c){a=b;break a}}a=b}return a;
case "avg":case "mean":return l(d.toNumberArray(a));case "min":return Math.min.apply(Math,d.toNumberArray(a));case "sum":a=d.toNumberArray(a);for(b=c=0;b<a.length;b++)c+=a[b];return c;case "max":return Math.max.apply(Math,d.toNumberArray(a));case "stdev":case "stddev":return Math.sqrt(m(d.toNumberArray(a)));case "var":case "variance":return m(d.toNumberArray(a));case "count":return a.length}return 0}});