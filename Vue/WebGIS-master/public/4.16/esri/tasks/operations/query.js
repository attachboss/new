// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../request ../../core/maybe ../../core/promiseUtils ../../core/urlUtils ../../geometry/support/jsonUtils ../../geometry/support/normalizeUtils ../../layers/graphics/OptimizedFeatureSet ./pbfQueryUtils ./urlUtils ./zscale @dojo/framework/shim/Promise".split(" "),function(y,e,f,n,p,l,q,r,t,u,v,w,x){function m(a,b){var c=a.geometry;a=a.toJSON();c&&(a.geometry=JSON.stringify(c),a.geometryType=r.getJsonType(c),a.inSR=c.spatialReference.wkid||JSON.stringify(c.spatialReference));
a.groupByFieldsForStatistics&&(a.groupByFieldsForStatistics=a.groupByFieldsForStatistics.join(","));a.objectIds&&(a.objectIds=a.objectIds.join(","));a.orderByFields&&(a.orderByFields=a.orderByFields.join(","));!a.outFields||b&&(b.returnCountOnly||b.returnExtentOnly||b.returnIdsOnly)?delete a.outFields:-1!==a.outFields.indexOf("*")?a.outFields="*":a.outFields=a.outFields.join(",");a.outSR?a.outSR=a.outSR.wkid||JSON.stringify(a.outSR):c&&(a.returnGeometry||a.returnCentroid)&&(a.outSR=a.inSR);a.returnGeometry&&
delete a.returnGeometry;a.outStatistics&&(a.outStatistics=JSON.stringify(a.outStatistics));a.pixelSize&&(a.pixelSize=JSON.stringify(a.pixelSize));a.quantizationParameters&&(a.quantizationParameters=JSON.stringify(a.quantizationParameters));a.source&&(a.layer=JSON.stringify({source:a.source}),delete a.source);if(a.timeExtent){c=a.timeExtent;b=c.start;c=c.end;if(null!=b||null!=c)a.time=b===c?b:(null==b?"null":b)+","+(null==c?"null":c);delete a.timeExtent}return a}function h(a,b,c,d,g){void 0===d&&(d=
{});var k="string"===typeof a?q.urlToObject(a):a;a=b.geometry?[b.geometry]:[];d.responseType="pbf"===c?"array-buffer":"json";return t.normalizeCentralMeridian(a,null,d).then(function(a){a=a&&a[0];p.isSome(a)&&(b=b.clone(),b.geometry=a);a=w.mapParameters(f.__assign(f.__assign(f.__assign(f.__assign({},k.query),{f:c}),g),m(b,g)));return n(k.path+"/query",f.__assign(f.__assign({},d),{query:a}))})}Object.defineProperty(e,"__esModule",{value:!0});e.queryToQueryStringParameters=m;e.executeQuery=function(a,
b,c,d){var g;return f.__awaiter(this,void 0,void 0,function(){var k,e;return f.__generator(this,function(f){switch(f.label){case 0:if(null===(g=b.timeExtent)||void 0===g||!g.isEmpty)return[3,1];e={data:{features:[]}};return[3,3];case 1:return[4,h(a,b,"json",d)];case 2:e=f.sent(),f.label=3;case 3:return k=e,x.applyFeatureSetZUnitScaling(b,c,k.data),[2,k]}})})};e.executeQueryPBF=function(a,b,c,d){var g;return(null===(g=b.timeExtent)||void 0===g?0:g.isEmpty)?l.resolve({data:new u.default}):h(a,b,"pbf",
d).then(function(a){var b=v.parsePBFFeatureQuery(a.data,c);a.data=b;return a})};e.executeQueryForIds=function(a,b,c){var d;return(null===(d=b.timeExtent)||void 0===d?0:d.isEmpty)?l.resolve({data:{objectIds:[]}}):h(a,b,"json",c,{returnIdsOnly:!0})};e.executeQueryForCount=function(a,b,c){var d;return(null===(d=b.timeExtent)||void 0===d?0:d.isEmpty)?l.resolve({data:{count:0}}):h(a,b,"json",c,{returnIdsOnly:!0,returnCountOnly:!0})};e.executeQueryForExtent=function(a,b,c){var d;return(null===(d=b.timeExtent)||
void 0===d?0:d.isEmpty)?l.resolve({data:{count:0,extent:null}}):h(a,b,"json",c,{returnExtentOnly:!0,returnCountOnly:!0}).then(function(a){var b=a.data;if(b.hasOwnProperty("extent"))return a;if(b.features)throw Error("Layer does not support extent calculation.");if(b.hasOwnProperty("count"))throw Error("Layer does not support extent calculation.");return a})};e.runQuery=h});