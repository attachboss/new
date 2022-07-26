// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../core/maybe ../../geometry/support/jsonUtils ../../geometry/support/scaleUtils ../../layers/support/layerSourceUtils ../../layers/support/layerUtils".split(" "),function(F,k,v,w,x,y,r){Object.defineProperty(k,"__esModule",{value:!0});k.identifyToIdentifyRESTParameters=function(a,f){var b=a.toJSON(),e=b.dpi,h=b.dynamicLayers,d=b.geometry,c=b.geometryPrecision,l=b.height,g=b.layerDefinitions,m=b.layerIds,n=b.layerOption,p=b.layerTimeOptions;a=b.mapExtent;var k=b.maxAllowableOffset,
z=b.returnFieldName,A=b.returnGeometry,B=b.returnUnformattedValues,C=b.returnZ,q=b.spatialReference,t=b.timeExtent,D=b.tolerance,b=b.width;f=f&&v.isSome(f.geometry)?f.geometry:null;c={geometryPrecision:c,maxAllowableOffset:k,returnFieldName:z,returnGeometry:A,returnUnformattedValues:B,returnZ:C,tolerance:D};d=f&&f.toJSON()||d;c.imageDisplay=b+","+l+","+e;d&&(delete d.spatialReference,c.geometry=JSON.stringify(d),c.geometryType=w.getJsonType(d));q?c.sr=q.wkid||JSON.stringify(q):d&&d.spatialReference?
c.sr=d.spatialReference.wkid||JSON.stringify(d.spatialReference):a&&a.spatialReference&&(c.sr=a.spatialReference.wkid||JSON.stringify(a.spatialReference));c.time=t?t.join(","):null;a&&(c.mapExtent=a.xmin+","+a.ymin+","+a.xmax+","+a.ymax);c.layers=n;m&&(c.layers+=":"+m.join(","));if(g){l=[];for(e=0;e<g.length;e++)n=g[e],l[n.id]=n.definitionExpression;c.layerDefs=r.serializeLayerDefinitions(l)}if(h&&h.length){var u=[];a=x.getScale({extent:a,width:b,spatialReference:a.spatialReference});var E=r.getLayersForScale(a,
h);a=function(b){var a=h[b],c=a.id;!a.subLayerIds&&m&&-1!==m.indexOf(c)&&-1!==E.indexOf(c)&&(b={id:c},b.source=a.source&&y.sourceToJSON(a.source),a=null,g&&g.length&&(a=(a=g.filter(function(a){return a.id===c})[0])&&a.definitionExpression),a&&(b.definitionExpression=a),a=void 0,p&&p[c]&&(a=p[c]),a&&(b.layerTimeOptions=a),u.push(b))};for(e=0;e<h.length;e++)a(e);a=JSON.stringify(u);"[]"===a&&(a="[{}]");c.dynamicLayers=a}return c}});