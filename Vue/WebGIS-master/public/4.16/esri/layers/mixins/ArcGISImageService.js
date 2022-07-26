// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../geometry ../../Graphic ../../rasterRenderers ../../request ../../core/Error ../../core/jsonMap ../../core/lang ../../core/Logger ../../core/maybe ../../core/promiseUtils ../../core/urlUtils ../../core/accessorSupport/decorators ../../core/accessorSupport/ensureType ../support/commonProperties ../support/DimensionalDefinition ../support/ExportImageServiceParameters ../support/Field ../support/FieldsIndex ../support/imageryRendererUtils ../support/MosaicRule ../support/PixelBlock ../support/RasterFunction ../support/RasterInfo ../support/RasterJobHandler ../support/rasterFormats/RasterCodec ../../renderers/support/RasterSymbolizer ../../tasks/ImageServiceIdentifyTask ../../tasks/QueryTask ../../tasks/support/FeatureSet ../../tasks/support/ImageServiceIdentifyParameters ../../tasks/support/Query".split(" "),
function(oa,N,c,r,Y,O,n,A,p,P,Z,u,w,aa,f,ba,Q,ca,da,B,ea,E,x,fa,D,F,ga,G,ha,ia,ja,R,ka,la){function ma(c){if(!c)return null;c=JSON.stringify(c).match(/"rasterFunction":"(.*?")/gi);return(c=null===c||void 0===c?void 0:c.map(function(c){return c.replace('"rasterFunction":"',"").replace('"',"")}))?c.join("/"):null}Object.defineProperty(N,"__esModule",{value:!0});var na=Z.getLogger("esri.layers.mixins.ArcGISImageService"),S=p.strict()({RSP_NearestNeighbor:"nearest",RSP_BilinearInterpolation:"bilinear",
RSP_CubicConvolution:"cubic",RSP_Majority:"majority"}),T=p.strict()({esriNoDataMatchAny:"any",esriNoDataMatchAll:"all"}),U=p.strict()({U1:"u1",U2:"u2",U4:"u4",U8:"u8",S8:"s8",U16:"u16",S16:"s16",U32:"u32",S32:"s32",F32:"f32",F64:"f64",C64:"c64",C128:"c128",UNKNOWN:"unknown"});N.ArcGISImageService=function(p){return function(p){function b(){var a=null!==p&&p.apply(this,arguments)||this;a._functionRasterInfos={};a._rasterJobHandler={instance:null,refCount:0,connectionPromise:null};a._symbolizer=null;
a._defaultServiceMosaicRule=null;a.rasterAttributeTableFieldPrefix="Raster.";a.adjustAspectRatio=null;a.bandCount=null;a.bandIds=void 0;a.capabilities=null;a.compressionQuality=void 0;a.compressionTolerance=.01;a.copyright=null;a.definitionExpression=null;a.exportImageServiceParameters=null;a.rasterInfo=null;a.fields=null;a.fullExtent=null;a.hasMultidimensions=!1;a.imageMaxHeight=4100;a.imageMaxWidth=4100;a.interpolation=void 0;a.multidimensionalInfo=null;a.noData=null;a.noDataInterpretation=void 0;
a.objectIdField=null;a.pixelSizeX=null;a.pixelSizeY=null;a.pixelFilter=null;a.raster=void 0;a.viewId=void 0;a.renderer=null;a.rasterAttributeTable=null;a.rasterFunctionInfos=null;a.serviceDataType=null;a.spatialReference=null;a.pixelType=null;a.serviceRasterInfo=null;a.sourceJSON=null;a.url=null;a.version=null;return a}c.__extends(b,p);b.prototype.initialize=function(){this._set("exportImageServiceParameters",new da.ExportImageServiceParameters({layer:this}))};b.prototype.readDefaultServiceMosaicRule=
function(a,e){return x.fromJSON(e)};Object.defineProperty(b.prototype,"rasterFunctionNamesIndex",{get:function(){var a=new Map;if(!this.rasterFunctionInfos||1>this.rasterFunctionInfos.length)return a;this.rasterFunctionInfos.forEach(function(e){a.set(e.name.toLowerCase().replace(/ /gi,"_"),e.name)});return a},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"queryTask",{get:function(){return new ja({url:this.url})},enumerable:!0,configurable:!0});b.prototype.readBandIds=function(a,
e){if(Array.isArray(a)&&0<a.length&&a.every(function(a){return"number"===typeof a}))return a};b.prototype.readCapabilities=function(a,e){return this._readCapabilities(e)};b.prototype.writeCompressionQuality=function(a,e,d){null!=a&&"lerc"!==this.format&&(e[d]=a)};b.prototype.writeCompressionTolerance=function(a,e,d){"lerc"===this.format&&null!=a&&(e[d]=a)};Object.defineProperty(b.prototype,"fieldsIndex",{get:function(){return this.fields?new ea(this.fields):null},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,
"format",{get:function(){return this._get("format")||(null!=this.pixelFilter?"lerc":"jpgpng")},set:function(a){a&&-1<"png png8 png24 png32 jpg bmp jpgpng lerc tiff".split(" ").indexOf(a.toLowerCase())&&this._set("format",a.toLowerCase())},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"mosaicRule",{set:function(a){a&&a.mosaicMethod&&(a=x.fromJSON(c.__assign(c.__assign({},a.toJSON()),{mosaicMethod:a.mosaicMethod,mosaicOperation:a.mosaicOperation})));this._set("mosaicRule",a)},enumerable:!0,
configurable:!0});b.prototype.readMosaicRule=function(a,e){return x.fromJSON(a||e.mosaicRule||e)};b.prototype.writeMosaicRule=function(a,e,d){a=this.mosaicRule;var g=this.definitionExpression;a?g&&g!==a.where&&(a=a.clone(),a.where=g):g&&(a=new x({where:g}));this._isValidCustomizedMosaicRule(a)&&(e[d]=a.toJSON())};b.prototype.writeNoData=function(a,e,d){null!=a&&"number"===typeof a&&(e[d]=a)};b.prototype.readObjectIdField=function(a,e){a||(a=(a=e.fields.filter(function(a){return"esriFieldTypeOID"===
a.type||"oid"===a.type}))&&a[0]&&a[0].name);return a};Object.defineProperty(b.prototype,"parsedUrl",{get:function(){return this.url?aa.urlToObject(this.url):null},enumerable:!0,configurable:!0});b.prototype.readRenderer=function(a,e,d){a=O.read(e&&e.layerDefinition&&e.layerDefinition.drawingInfo&&e.layerDefinition.drawingInfo.renderer,d)||void 0;if(null!=a)return E.isSupportedRendererType(a)||na.warn("ArcGISImageService","Imagery layer doesn't support given renderer type."),a};Object.defineProperty(b.prototype,
"rasterFields",{get:function(){var a=this.rasterAttributeTableFieldPrefix||"Raster.",e=new B({name:"Raster.ItemPixelValue",alias:"Item Pixel Value",domain:null,editable:!1,length:50,type:"string"}),d=new B({name:"Raster.ServicePixelValue",alias:"Service Pixel Value",domain:null,editable:!1,length:50,type:"string"}),g=new B({name:"Raster.ServicePixelValue.Raw",alias:"Raw Service Pixel Value",domain:null,editable:!1,length:50,type:"string"}),b=this.fields?P.clone(this.fields):[];b.push(d);this.capabilities.operations.supportsQuery&&
this.fields&&0<this.fields.length&&b.push(e);10.4<=this.version&&this.rasterFunctionInfos&&this.rasterFunctionInfos.some(function(a){return"none"===a.name.toLowerCase()})&&b.push(g);this.rasterFunctionInfos&&this.rasterFunctionInfos.filter(function(a){return"none"!==a.name.toLowerCase()}).forEach(function(a){b.push(new B({name:"Raster.ServicePixelValue."+a.name,alias:a.name,domain:null,editable:!1,length:50,type:"string"}))});null==this.pixelFilter||"esriImageServiceDataTypeVector-UV"!==this.serviceDataType&&
"esriImageServiceDataTypeVector-MagDir"!==this.serviceDataType||(b.push(new B({name:"Raster.Magnitude",alias:"Magnitude",domain:null,editable:!1,type:"double"})),b.push(new B({name:"Raster.Direction",alias:"Direction",domain:null,editable:!1,type:"double"})));(e=this.rasterInfo.attributeTable&&this.rasterInfo.attributeTable.fields||null)&&0<e.length&&(e=e.filter(function(a){return"esriFieldTypeOID"!==a.type&&"value"!==a.name.toLowerCase()}).map(function(e){var b=P.clone(e);b.name=a+e.name;return b}),
b=b.concat(e));return b},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"renderingRule",{set:function(a){a&&a.rasterFunction&&(a=D.fromJSON(c.__assign(c.__assign({},a.toJSON()),{rasterFunction:a.rasterFunction,rasterFunctionArguments:a.rasterFunctionArguments})));this._set("renderingRule",a)},enumerable:!0,configurable:!0});b.prototype.readRenderingRule=function(a,e){a=e.rasterFunctionInfos;return e.renderingRule||a&&a.length&&"None"!==a[0].name?D.fromJSON(e.renderingRule||{rasterFunctionInfos:e.rasterFunctionInfos}):
null};b.prototype.writeRenderingRule=function(a,e,b){this._isRFTJson(a)||(e[b]=a.toJSON())};b.prototype.readSpatialReference=function(a,e){return(a=a||e.extent.spatialReference)?r.SpatialReference.fromJSON(a):null};b.prototype.readPixelType=function(a){return U.fromJSON(a)||a};b.prototype.writePixelType=function(a,e,b){if(u.isNone(this.serviceRasterInfo)||this.pixelType!==this.serviceRasterInfo.pixelType)e[b]=U.toJSON(a)};b.prototype.readVersion=function(a,e){(a=e.currentVersion)||(a=e.hasOwnProperty("fields")||
e.hasOwnProperty("timeInfo")?10:9.3);return a};b.prototype.applyFilter=function(a){var e=a;this.pixelFilter&&(e=this._clonePixelData(a),this.pixelFilter(e));return e};b.prototype.applyRenderer=function(a,e){return c.__awaiter(this,void 0,void 0,function(){var b,g,m,f,k;return c.__generator(this,function(d){switch(d.label){case 0:b=a;if(this._isPicture()||!this.renderer||!this._symbolizer||this.pixelFilter)return[3,5];g=JSON.stringify(this._cachedRendererJson)!==JSON.stringify(this.renderer.toJSON());
m=this._rasterJobHandler.instance;f=this.bandIds;if(!m)return[3,4];if(!g)return[3,2];this._symbolizer.bind();return[4,m.updateSymbolizer(this._symbolizer,e)];case 1:d.sent(),this._cachedRendererJson=this.renderer.toJSON(),d.label=2;case 2:return[4,m.symbolize(c.__assign({bandIds:f},a),e)];case 3:return k=d.sent(),b={extent:a.extent,pixelBlock:k},[3,5];case 4:b={extent:a.extent,pixelBlock:this._symbolizer.symbolize(c.__assign({bandIds:f},a))},d.label=5;case 5:return[2,b]}})})};b.prototype.destroy=
function(){this._shutdownJobHandler()};b.prototype.increaseRasterJobHandlerUsage=function(){this._rasterJobHandler.refCount++};b.prototype.decreaseRasterJobHandlerUsage=function(){this._rasterJobHandler.refCount--;0>=this._rasterJobHandler.refCount&&this._shutdownJobHandler()};b.prototype.fetchImage=function(a,e,b,g){var d=this;void 0===g&&(g={});if(null==a||null==e||null==b)return w.reject(new A("imagery-layer:fetch-image","Insufficient parameters for requesting an image. A valid extent, width and height values are required."));
var c=this.renderer||this._symbolizer?this.generateRasterInfo(this.renderingRule,{signal:g.signal}):null;return w.when(c).then(function(c){c&&(d.rasterInfo=c);c={imageServiceParameters:d.getExportImageServiceParameters(a,e,b,g.timeExtent),imageProps:{extent:a,width:e,height:b,format:d.format},requestAsImageElement:g.requestAsImageElement&&!d.pixelFilter||!1,signal:g.signal};return d._requestArrayBuffer(c)})};b.prototype.fetchKeyProperties=function(a){a=a&&a.renderingRule&&a.renderingRule.toJSON();
return n(this.parsedUrl.path+"/keyProperties",{query:this._getQueryParams({renderingRule:10.3<=this.version&&a?JSON.stringify(a):null})}).then(function(a){return a.data})};b.prototype.fetchRasterAttributeTable=function(a){a=a&&a.renderingRule&&a.renderingRule.toJSON();return 10.1>this.version?w.reject(new A("#fetchRasterAttributeTable()","Failed to get rasterAttributeTable")):n(this.parsedUrl.path+"/rasterAttributeTable",{query:this._getQueryParams({renderingRule:10.3<=this.version&&a?JSON.stringify(a):
null})}).then(function(a){return R.fromJSON(a.data)})};b.prototype.getCatalogItemRasterInfo=function(a,e){return c.__awaiter(this,void 0,void 0,function(){var b,g,m,f,k;return c.__generator(this,function(d){switch(d.label){case 0:return b=n(this.parsedUrl.path+"/"+a+"/info",c.__assign({query:this._getQueryParams()},e)).then(function(a){return a.data}),g=n(this.parsedUrl.path+"/"+a+"/info/keyProperties",c.__assign({query:this._getQueryParams()},e)).then(function(a){return a.data}).catch(function(){}),
[4,w.all([b,g])];case 1:m=d.sent();if(!m[0])return[2,void 0];f=r.Extent.fromJSON(m[0].extent);k=m[0].statistics?m[0].statistics.map(function(a){return{min:a[0],max:a[1],avg:a[2],stddev:a[3]}}):null;return[2,new F({bandCount:m[0].bandCount,extent:f,spatialReference:f.sr,pixelSize:new r.Point({x:m[0].pixelSizeX,y:m[0].pixelSizeY,spatialReference:f.sr}),pixelType:m[0].pixelType.toLowerCase(),statistics:k,histograms:m[0].histograms,keyProperties:m[1]})]}})})};b.prototype.getCatalogItemICSInfo=function(a,
e){return c.__awaiter(this,void 0,void 0,function(){var b,g,m,f,k,h,q,l,y,t,L,W,p,v,X,A,H,u,B,K,z,J,x,D,E,F,C,I,G,M;return c.__generator(this,function(d){switch(d.label){case 0:return[4,n(this.parsedUrl.path+"/"+a+"/info/ics",c.__assign({query:this._getQueryParams()},e))];case 1:g=(b=d.sent().data)&&b.ics;if(!g)return[2,void 0];m=null;d.label=2;case 2:return d.trys.push([2,4,,5]),[4,n(this.parsedUrl.path+"/"+a+"/info",c.__assign({query:this._getQueryParams()},e))];case 3:return f=d.sent(),m=f.data.extent,
[3,5];case 4:return d.sent(),[3,5];case 5:if(!m||!m.spatialReference)return[2,{ics:g,icsToPixelTransform:null,icsExtent:null,northDirection:null}];k=10.7<=this.version?n(this.parsedUrl.path+"/"+a+"/info/icstopixel",c.__assign({query:this._getQueryParams()},e)).then(function(a){return a.data}).catch(function(){return{}}):{};h=m.spatialReference;q={geometries:JSON.stringify({geometryType:"esriGeometryEnvelope",geometries:[m]}),inSR:h.wkid||h,outSR:"0:"+a};l=n(this.parsedUrl.path+"/project",c.__assign({query:this._getQueryParams(q)},
e)).then(function(a){return a.data}).catch(function(){return{}});y=5;t=(m.xmin+m.xmax)/2;L=(m.ymax-m.ymin)/(y+1);W=m.ymin+L;p=[];for(v=0;v<y;v++)p.push({x:t,y:W+L*v});X={geometries:JSON.stringify({geometryType:"esriGeometryPoint",geometries:p}),inSR:h.wkid||h,outSR:"0:"+a};A=n(this.parsedUrl.path+"/project",c.__assign({query:this._getQueryParams(X)},e)).then(function(a){return a.data}).catch(function(){return{}});return[4,w.all([k,l,A])];case 6:H=d.sent();u=H[0].ipxf;null==u&&(B=g.geodataXform&&g.geodataXform.xf_0)&&
"topup"===B.name.toLowerCase()&&(u={affine:{name:"ics [sensor: Frame] to pixel (column, row) transformation",coefficients:B.coefficients,cellsizeRatio:0,type:"GeometricXform"}});if(K=r.Extent.fromJSON(H[1]&&H[1].geometries&&H[1].geometries[0]))K.spatialReference=new r.SpatialReference({wkid:0,imageCoordinateSystem:g});z=H[2].geometries?H[2].geometries.filter(function(a){return null!=a}):[];J=z.length;if(3>J)return[2,{ics:g,icsToPixelTransform:u,icsExtent:K,northDirection:null}];for(v=F=E=D=x=0;v<
J;v++)x+=z[v].x,D+=z[v].y,E+=z[v].x*z[v].x,F+=z[v].x*z[v].y;C=(J*F-x*D)/(J*E-x*x);I=0;G=z[y-1].x>z[0].x;M=z[y-1].y>z[0].y;Infinity===C?I=M?90:270:0===C?I=G?0:180:0<C?I=G?180*Math.atan(C)/Math.PI:180*Math.atan(C)/Math.PI+180:0>C&&(I=M?180+180*Math.atan(C)/Math.PI:360+180*Math.atan(C)/Math.PI);return[2,{ics:g,icsToPixelTransform:u,icsExtent:K,northDirection:I}]}})})};b.prototype.generateRasterInfo=function(a,e){return c.__awaiter(this,void 0,void 0,function(){var b,g;return c.__generator(this,function(d){switch(d.label){case 0:if((!a||
"none"===a.functionName.toLowerCase())&&u.isSome(this.serviceRasterInfo))return[2,this.serviceRasterInfo];b=ma(a);if(this._functionRasterInfos[b])return[2,this._functionRasterInfos[b]];g=this._generateRasterInfo(a,e);this._functionRasterInfos[b]=g;d.label=1;case 1:return d.trys.push([1,3,,4]),[4,g];case 2:return[2,d.sent()];case 3:return d.sent(),this._functionRasterInfos[b]=null,[2,null];case 4:return[2]}})})};b.prototype.getExportImageServiceParameters=function(a,e,b,g){a=a.clone().shiftCentralMeridian();
var d=a.spatialReference;if(d.imageCoordinateSystem)var f=d.imageCoordinateSystem,k=f.id,f=f.referenceServiceName,d=null!=k?f?-1<this.parsedUrl.path.toLowerCase().indexOf("/"+f.toLowerCase()+"/")?"0:"+k:JSON.stringify({icsid:k,icsns:f}):"0:"+k:JSON.stringify({ics:d.imageCoordinateSystem});else d=d.wkid||JSON.stringify(d.toJSON());u.isSome(this.serviceRasterInfo)&&this.pixelType!==this.serviceRasterInfo.pixelType&&(this.exportImageServiceParameters.pixelType=this.pixelType);var k=this.exportImageServiceParameters.toJSON(),
f=k.bandIds,h=k.noData,q=k.mosaicRule,l=k.renderingRule;f instanceof Array&&0<f.length&&(k.bandIds=f.join(","));h instanceof Array&&0<h.length&&(k.noData=h.join(","));var y=this.timeInfo;q&&q.multidimensionalDefinition&&g&&y&&y.startField&&(q.multidimensionalDefinition=q.multidimensionalDefinition.filter(function(a){return a.dimensionName!==y.startField}));k.mosaicRule=q&&JSON.stringify(q);k.renderingRule=l&&JSON.stringify(l);f={};if(g)if(h=g.toJSON(),g=h.start,h=h.end,g&&h&&g===h)f.time=""+g;else if(null!=
g||null!=h)f.time=(null==g?"null":g)+","+(null==h?"null":h);return c.__assign(c.__assign({bbox:a.xmin+","+a.ymin+","+a.xmax+","+a.ymax,bboxSR:d,imageSR:d,size:e+","+b},k),f)};b.prototype.queryRasters=function(a){return this.queryTask.execute(a)};b.prototype.queryVisibleRasters=function(a,e){var b=this;if(!a)return w.reject(new A("imagery-layer: query-visible-rasters","missing query parameter"));var g=e||{pixelSize:null,returnDomainValues:!1,returnTopmostRaster:!1,showNoDataRecords:!1};e=g.pixelSize;
var c=g.returnDomainValues,f=g.returnTopmostRaster,k=g.showNoDataRecords,h=!1,q=g=null,l=this.rasterFunctionNamesIndex;if(a.outFields&&(h=a.outFields.some(function(a){return-1===a.toLowerCase().indexOf("raster.servicepixelvalue")}),10.4<=this.version)){var y=a.outFields.filter(function(a){return-1<a.toLowerCase().indexOf("raster.servicepixelvalue")&&24<a.length}).map(function(a){a=a.slice(25);return[b._updateRenderingRulesFunctionName(a,l),a]}),g=y.map(function(a){return new D({functionName:a[0]})}),
q=y.map(function(a){return a[1]});0===g.length?this.renderingRule?(g.push(this.renderingRule),q.push(this.renderingRule.functionName)):g=null:this.renderingRule&&!g.some(function(a){return a.functionName===b.renderingRule.functionName})&&(g.push(this.renderingRule),q.push(this.renderingRule.functionName))}var t=!a.outSpatialReference||a.outSpatialReference.equals(this.spatialReference);e=this._getQueryParams({geometry:a.geometry,timeExtent:a.timeExtent,mosaicRule:this.exportImageServiceParameters.mosaicRule,
renderingRule:10.4>this.version?this.renderingRule:null,renderingRules:g,pixelSize:e,returnCatalogItems:h,returnGeometry:t,maxItemCount:f?1:null});delete e.f;var n=new ka(e),u=new ia({url:this.url}),p=this.generateRasterInfo(this.renderingRule);return w.create(function(e){p.then(function(){u.execute(n).then(function(d){var g=a.outFields;if(h&&!t&&d.catalogItems&&d.catalogItems.features&&0<d.catalogItems.features.length){var f=b.objectIdField||"ObjectId",m=d.catalogItems.features,l=m.map(function(a){return a.attributes&&
a.attributes[f]}),l=new la({objectIds:l,returnGeometry:!0,outSpatialReference:a.outSpatialReference,outFields:[f]});return b.queryRasters(l).then(function(h){h&&h.features&&0<h.features.length&&h.features.forEach(function(e){m.forEach(function(b){b.attributes[f]===e.attributes[f]&&(b.geometry=new r.Polygon(e.geometry),b.geometry.spatialReference=a.outSpatialReference)})});e(b._processVisibleRastersResponse(d,{returnDomainValues:c,templateRRFunctionNames:q,showNoDataRecords:k,templateFields:g}))}).catch(function(){throw new A("imagery-layer:query-visible-rasters",
"encountered error when querying visible rasters geometry");})}e(b._processVisibleRastersResponse(d,{returnDomainValues:c,templateRRFunctionNames:q,showNoDataRecords:k,templateFields:g}))}).catch(function(){throw new A("imagery-layer:query-visible-rasters","encountered error when querying visible rasters");})})})};b.prototype._fetchService=function(a){var e;return c.__awaiter(this,void 0,void 0,function(){var b,g,f,V,k,h,q,l=this;return c.__generator(this,function(d){switch(d.label){case 0:return(b=
this.sourceJSON)?[3,2]:[4,n(this.parsedUrl.path,{query:this._getQueryParams(),signal:a})];case 1:g=d.sent(),f=g.data,V=g.ssl,this.sourceJSON=b=f,V&&(this.url=this.url.replace(/^http:/i,"https:")),d.label=2;case 2:if(k=-1<(null===(e=b.capabilities)||void 0===e?void 0:e.toLowerCase().split(",").map(function(a){return a.trim()}).indexOf("tilesonly")))throw new A("imagery-layer:fetch-metadata","use ImageryTileLayer to open tiles-only image services");this.read(b,{origin:"service",url:this.parsedUrl});
u.isSome(this.serviceRasterInfo)&&!this.rasterInfo&&(this.rasterInfo=this.serviceRasterInfo);h=u.isSome(this.serviceRasterInfo)?w.resolve(this.serviceRasterInfo):this._fetchAuxiliaryRasterInfo({serviceInfo:b,signal:a}).then(function(a){l._set("serviceRasterInfo",a);return a});q=this.renderingRule&&"none"!==this.renderingRule.functionName.toLowerCase()?this.generateRasterInfo(this.renderingRule,{signal:a}):null;return[2,w.all([h,q]).then(function(a){a[1]?l._set("rasterInfo",a[1]):l._set("rasterInfo",
a[0]);l._configDefaultRenderer();l.watch("renderer",function(){return l._configDefaultRenderer()});l.watch("renderingRule",function(a){(l.renderer||l._symbolizer||l.popupEnabled&&l.popupTemplate)&&l.generateRasterInfo(a).then(function(a){a&&(l.rasterInfo=a)})});(a=u.isSome(l.serviceRasterInfo)&&l.serviceRasterInfo.multidimensionalInfo)&&l._updateMultidimensionalDefinition(a)})]}})})};b.prototype._initJobHandler=function(){return c.__awaiter(this,void 0,void 0,function(){var a,e=this;return c.__generator(this,
function(b){switch(b.label){case 0:if(null!=this._rasterJobHandler.connectionPromise)return[2,this._rasterJobHandler.connectionPromise];a=new ga;this._rasterJobHandler.connectionPromise=a.initialize().then(function(){e._rasterJobHandler.instance=a},function(){return null});return[4,this._rasterJobHandler.connectionPromise];case 1:return b.sent(),[2]}})})};b.prototype._shutdownJobHandler=function(){this._rasterJobHandler.instance&&this._rasterJobHandler.instance.destroy();this._rasterJobHandler.instance=
null;this._rasterJobHandler.connectionPromise=null;this._rasterJobHandler.refCount=0};b.prototype._isPicture=function(){return!this.format||-1<this.format.indexOf("jpg")||-1<this.format.indexOf("png")};b.prototype._configDefaultRenderer=function(){if(!this._isPicture()&&!this.pixelFilter){if(!this.bandIds&&3<=this.rasterInfo.bandCount){var a=E.getDefaultBandCombination(this.rasterInfo);!a||3===this.rasterInfo.bandCount&&0===a[0]&&1===a[1]&&2===a[2]||(this.bandIds=a)}this.renderer||(this.renderer=
E.createDefaultRenderer(this.rasterInfo,this.bandIds));this._symbolizer?(this._symbolizer.renderer=this.renderer,this._symbolizer.rasterInfo=this.rasterInfo):this._symbolizer=new ha({renderer:this.renderer,rasterInfo:this.rasterInfo});this._symbolizer.bind()||(this._symbolizer=null)}};b.prototype._clonePixelData=function(a){return null==a?a:{extent:a.extent&&a.extent.clone(),pixelBlock:a.pixelBlock&&a.pixelBlock.clone()}};b.prototype._getQueryParams=function(a){return c.__assign({raster:this.raster,
viewId:this.viewId,f:"json"},a)};b.prototype._decodePixelBlock=function(a,b,d){return this._rasterJobHandler.instance?this._rasterJobHandler.instance.decode({data:a,options:b}):G.decode(a,b,d)};b.prototype._fetchAuxiliaryRasterInfo=function(a){var b=a&&a.serviceInfo;if(!b)return w.reject(new A("imagery-layer:fetch-metadata","valid serviceInfo is required"));var d=a.renderingRule?JSON.stringify(a.renderingRule.toJSON()):null,g=a.signal;a=b.hasRasterAttributeTable&&10.1<=this.version?n(this.parsedUrl.path+
"/rasterAttributeTable",{query:this._getQueryParams({renderingRule:10.1<=this.version?d:null}),signal:g}).then(function(a){return R.fromJSON(a.data)}).catch(function(){return null}):!1;var c=b.hasColormap&&10.1<=this.version?n(this.parsedUrl.path+"/colormap",{query:this._getQueryParams({renderingRule:10.6<=this.version?d:null}),signal:g}).then(function(a){return a.data&&a.data.colormap}):!1,f=b.hasHistograms&&10.1<=this.version?n(this.parsedUrl.path+"/histograms",{query:this._getQueryParams({renderingRule:10.1<=
this.version?d:null}),signal:g}).then(function(a){return a.data&&a.data.histograms}):!1,d=10.3<=this.version?n(this.parsedUrl.path+"/keyProperties",{query:this._getQueryParams({renderingRule:d}),signal:g}).then(function(a){return a.data}).catch(function(){}):!1,g=b.hasMultidimensions&&10.3<=this.version?n(this.parsedUrl.path+"/multidimensionalInfo",{query:this._getQueryParams(),signal:g}).then(function(a){return a.data&&a.data.multidimensionalInfo}):!1;return w.all([a,c,f,d,g]).then(function(a){var e=
null;if(b.minValues&&b.minValues.length===b.bandCount)for(var e=[],d=0;d<b.minValues.length;d++)e.push({min:b.minValues[d],max:b.maxValues[d],avg:b.meanValues[d],stddev:b.stdvValues[d]});var d=Math.ceil((b.extent.xmax-b.extent.xmin)/b.pixelSizeX-.1),g=Math.ceil((b.extent.ymax-b.extent.ymin)/b.pixelSizeY-.1),c=r.SpatialReference.fromJSON(b.spatialReference||b.extent.spatialReference);return new F({width:d,height:g,bandCount:b.bandCount,extent:r.Extent.fromJSON(b.extent),spatialReference:c,pixelSize:new r.Point({x:b.pixelSizeX,
y:b.pixelSizeY,spatialReference:c}),pixelType:b.pixelType.toLowerCase(),statistics:e,attributeTable:a[0]||null,colormap:a[1]||null,histograms:a[2]||null,keyProperties:a[3]||null,multidimensionalInfo:a[4]||null})})};b.prototype._requestArrayBuffer=function(a){var b=this,d=a.imageProps,g=a.signal;if(a.requestAsImageElement&&!this.pixelFilter&&d.format&&-1<d.format.indexOf("png"))return n(this.parsedUrl.path+"/exportImage",{responseType:"image",query:this._getQueryParams(c.__assign({f:"image"},a.imageServiceParameters)),
signal:g}).then(function(a){return{imageElement:a.data,params:d}});var f=this._initJobHandler();a=n(this.parsedUrl.path+"/exportImage",{responseType:"array-buffer",query:this._getQueryParams(c.__assign({f:"image"},a.imageServiceParameters)),signal:g});return w.all([a,f]).then(function(a){a=a[0].data;var e=d.format||"jpgpng",f=e;"bsq"!==f&&"bip"!==f&&(f=G.getFormat(a));if(!f)throw new A("imagery-layer:fetch-image","unsupported format signature "+String.fromCharCode.apply(null,new Uint8Array(a)));var f=
-1<e.indexOf("png")&&("png"===f||"jpg"===f),m={signal:g};return f?G.decode(a,c.__assign({useCanvas:!0},d),m).then(function(a){return{pixelData:{pixelBlock:a,extent:d.extent},params:d}}):b._decodePixelBlock(a,{width:d.width,height:d.height,planes:null,pixelType:null,noDataValue:null,format:e},m).then(function(a){return{pixelData:{pixelBlock:a,extent:d.extent},params:d}})})};b.prototype._generateRasterInfo=function(a,b){return c.__awaiter(this,void 0,void 0,function(){var e,g;return c.__generator(this,
function(d){switch(d.label){case 0:return[4,n(this.parsedUrl.path,c.__assign({query:this._getQueryParams({renderingRule:a})},b))];case 1:return e=d.sent().data,[4,this._fetchAuxiliaryRasterInfo(c.__assign({serviceInfo:e,renderingRule:a},b))];case 2:return g=d.sent(),[2,g]}})})};b.prototype._isValidCustomizedMosaicRule=function(a){return a&&JSON.stringify(a.toJSON())!==JSON.stringify(this._defaultServiceMosaicRule&&this._defaultServiceMosaicRule.toJSON())};b.prototype._updateMultidimensionalDefinition=
function(a){if(!this._isValidCustomizedMosaicRule(this.mosaicRule)){var b=a.variables[0].dimensions;a=[];for(var d in b)if(b.hasOwnProperty(d)){var g=b[d],c=g.extent,f=!0,k=[c[0]];g.hasRanges&&!0===g.hasRanges?(f=!1,k=[g.values[0]]):"stdz"===g.name.toLowerCase()&&Math.abs(c[1])<=Math.abs(c[0])&&(k=[c[1]]);a.push(new ca({variableName:"",dimensionName:b[d].name,isSlice:f,values:k}))}0<a.length&&(this.mosaicRule=this.mosaicRule||new x,d=this.mosaicRule.multidimensionalDefinition,!d||d&&0>=d.length)&&
(this.mosaicRule.multidimensionalDefinition=a)}};b.prototype._formatAttributeValue=function(a,b){if("string"===typeof a&&(b=(b=this._getFieldInfo(this.popupTemplate&&this.popupTemplate.fieldInfos,b))&&b.format)){var d=void 0,e=void 0;return-1<a.trim().indexOf(",")?(d=",",this._formatDelimitedString(a,d,d+" ",b)):-1<a.trim().indexOf(" ")?(d=e=" ",this._formatDelimitedString(a,d,e,b)):this._formatNumberFromString(a,b)}return a};b.prototype._getFieldInfo=function(a,b){if(a&&a.length&&b){var d=b.toLowerCase(),
e=void 0;a.some(function(a){return!a.fieldName||a.fieldName.toLowerCase()!==d&&a.fieldName.toLowerCase()!==d.replace(/ /g,"_")?!1:(e=a,!0)});return e}};b.prototype._formatDelimitedString=function(a,b,d,c){var e=this;return a&&b&&d&&c?a.trim().split(b).map(function(a){return e._formatNumberFromString(a,c)}).join(d):a};b.prototype._formatNumberFromString=function(a,b){if(!a||!b)return a;var d=Number(a);return isNaN(d)?a:b.format(d)};b.prototype._processVisibleRastersResponse=function(a,b){b=b||{};var d=
a.value,e=b.templateRRFunctionNames,c=b.showNoDataRecords,f=b.returnDomainValues,k=b.templateFields;b=a.processedValues;var h=a.catalogItems&&a.catalogItems.features,q=a.properties&&a.properties.Values&&a.properties.Values.map(function(a){return a.replace(/ /gi,", ")})||[],l=this.objectIdField||"ObjectId";a="string"===typeof d&&-1<d.toLowerCase().indexOf("nodata");var n=[];!d||h||a||(h={},h[l]=0,h=new Y(this.fullExtent,null,h),q=[d],h=[h]);if(!h)return[];this._updateResponseFieldNames(h,k);for(var t,
p,l=0;l<h.length;l++){k=h[l];if(null!=d&&!a){t=q[l];p=this.renderingRule&&b&&0<b.length&&e&&0<e.length&&-1<e.indexOf(this.renderingRule.functionName)?b[e.indexOf(this.renderingRule.functionName)]:d;if("nodata"===t.toLowerCase()&&!c)continue;k.attributes["Raster.ItemPixelValue"]=this._formatAttributeValue(t,"Raster.ItemPixelValue");k.attributes["Raster.ServicePixelValue"]=this._formatAttributeValue(p,"Raster.ServicePixelValue");this._updateFeatureWithMagDirValues(k,t);var r=this.fields&&0<this.fields.length;
p=this.renderingRule&&u.isSome(this.serviceRasterInfo)&&this.serviceRasterInfo.attributeTable?r?t:d:p;this.renderingRule||(p=r?t:d);this._updateFeatureWithRasterAttributeTableValues(k,p)}k.sourceLayer=this;f&&this._updateFeatureWithDomainValues(k);if(e&&b&&e.length===b.length)for(t=0;t<e.length;t++)r="Raster.ServicePixelValue."+e[t],k.attributes[r]=this._formatAttributeValue(b[t],r);n.push(h[l])}return n};b.prototype._updateFeatureWithRasterAttributeTableValues=function(a,b){var d=this,e=this.rasterInfo&&
this.rasterInfo.attributeTable||u.isSome(this.serviceRasterInfo)&&this.serviceRasterInfo.attributeTable,c=e&&e.features;if(c){var e=e.fields,f=e.map(function(a){return a.name}).filter(function(a){return"value"===a.toLowerCase()}),k=f&&f[0];if(k){var h=c.filter(function(a){return a.attributes[k]===(null!=b?parseInt(b,10):null)});h&&h[0]&&e.forEach(function(b){var e=d.rasterAttributeTableFieldPrefix+b.name;a.attributes[e]=d._formatAttributeValue(h[0].attributes[b.name],e)})}}};b.prototype._updateFeatureWithMagDirValues=
function(a,b){if(this.pixelFilter&&("esriImageServiceDataTypeVector-UV"===this.serviceDataType||"esriImageServiceDataTypeVector-MagDir"===this.serviceDataType)){var d=b.replace(" ",",").split(",").map(function(a){return parseFloat(a)});b=d.map(function(a){return[a]});d=d.map(function(a){return{minValue:a,maxValue:a,noDataValue:null}});b=new fa({height:1,width:1,pixelType:"f32",pixels:b,statistics:d});this.pixelFilter({pixelBlock:b,extent:new r.Extent(0,0,0,0,this.spatialReference)});a.attributes["Raster.Magnitude"]=
b.pixels[0][0];a.attributes["Raster.Direction"]=b.pixels[1][0]}};b.prototype._updateFeatureWithDomainValues=function(a){var b=this.fields&&this.fields.filter(function(a){return a.domain&&"coded-value"===a.domain.type});null!=b&&b.forEach(function(b){var d=a.attributes[b.name];if(null!=d){var e=b.domain.codedValues.filter(function(a){return a.code===d})[0];e&&(a.attributes[b.name]=e.name)}})};b.prototype._updateResponseFieldNames=function(a,b){if(b&&!(1>b.length)){var d=this.fieldsIndex;d&&a.forEach(function(a){if(a&&
a.attributes)for(var e=0;e<b.length;e++){var c=b[e];if(d.has(c)){var f=d.get(c).name;f!==c&&(a.attributes[c]=a.attributes[f],delete a.attributes[f])}}})}};b.prototype._updateRenderingRulesFunctionName=function(a,b){if(a&&!(1>a.length)){if("Raw"===a)return a.replace("Raw","None");var d=a.toLowerCase().replace(/ /gi,"_");return b.has(d)?b.get(d):a}};b.prototype._isRFTJson=function(a){return a.name&&a.arguments&&a.function&&a.hasOwnProperty("functionType")};b.prototype._readCapabilities=function(a){var b=
a.capabilities?a.capabilities.toLowerCase().split(",").map(function(a){return a.trim()}):["image","catalog"],d=a.currentVersion,c=a.advancedQueryCapabilities,f=a.maxRecordCount,n=-1<b.indexOf("image"),k="esriImageServiceDataTypeElevation"===a.serviceDataType,h=!!(a.spatialReference||a.extent&&a.extent.spatialReference);return{operations:{supportsComputeHistograms:n,supportsExportImage:n,supportsIdentify:n,supportsMeasure:-1<b.indexOf("mensuration")&&h,supportsDownload:-1<b.indexOf("download"),supportsQuery:-1<
b.indexOf("catalog")&&a.fields&&0<a.fields.length,supportsGetSamples:10.2<=d&&n,supportsProject:10.3<=d&&n,supportsComputeStatisticsHistograms:10.4<=d&&n,supportsQueryBoundary:10.6<=d&&n,supportsCalculateVolume:10.7<=d&&k,supportsComputePixelLocation:10.7<=d&&-1<b.indexOf("catalog")},query:{supportsStatistics:!(!c||!c.supportsStatistics),supportsOrderBy:!(!c||!c.supportsOrderBy),supportsDistinct:!(!c||!c.supportsDistinct),supportsPagination:!(!c||!c.supportsPagination),supportsStandardizedQueriesOnly:!(!c||
!c.useStandardizedQueries),maxRecordCount:f}}};c.__decorate([f.property()],b.prototype,"_functionRasterInfos",void 0);c.__decorate([f.property()],b.prototype,"_rasterJobHandler",void 0);c.__decorate([f.property()],b.prototype,"_symbolizer",void 0);c.__decorate([f.property()],b.prototype,"_defaultServiceMosaicRule",void 0);c.__decorate([f.reader("_defaultServiceMosaicRule",["defaultMosaicMethod"])],b.prototype,"readDefaultServiceMosaicRule",null);c.__decorate([f.property()],b.prototype,"_cachedRendererJson",
void 0);c.__decorate([f.property()],b.prototype,"rasterAttributeTableFieldPrefix",void 0);c.__decorate([f.property({readOnly:!0,dependsOn:["rasterFunctionInfos"]})],b.prototype,"rasterFunctionNamesIndex",null);c.__decorate([f.property({readOnly:!0,dependsOn:["url"]})],b.prototype,"queryTask",null);c.__decorate([f.property()],b.prototype,"adjustAspectRatio",void 0);c.__decorate([f.property({readOnly:!0}),f.aliasOf("serviceRasterInfo.bandCount")],b.prototype,"bandCount",void 0);c.__decorate([f.property({type:[ba.Integer],
json:{write:!0}})],b.prototype,"bandIds",void 0);c.__decorate([f.reader("bandIds")],b.prototype,"readBandIds",null);c.__decorate([f.property({readOnly:!0,json:{read:!1}})],b.prototype,"capabilities",void 0);c.__decorate([f.reader("service","capabilities",["capabilities","currentVersion","serviceDataType"])],b.prototype,"readCapabilities",null);c.__decorate([f.property({type:Number})],b.prototype,"compressionQuality",void 0);c.__decorate([f.writer("compressionQuality")],b.prototype,"writeCompressionQuality",
null);c.__decorate([f.property({type:Number})],b.prototype,"compressionTolerance",void 0);c.__decorate([f.writer("compressionTolerance")],b.prototype,"writeCompressionTolerance",null);c.__decorate([f.property({json:{read:{source:"copyrightText"}}})],b.prototype,"copyright",void 0);c.__decorate([f.property({type:String,json:{read:{source:"layerDefinition.definitionExpression"},write:{target:"layerDefinition.definitionExpression"}}})],b.prototype,"definitionExpression",void 0);c.__decorate([f.property({readOnly:!0,
constructOnly:!0})],b.prototype,"exportImageServiceParameters",void 0);c.__decorate([f.property()],b.prototype,"rasterInfo",void 0);c.__decorate([f.property({readOnly:!0,type:[B]})],b.prototype,"fields",void 0);c.__decorate([f.property({readOnly:!0,dependsOn:["fields"]})],b.prototype,"fieldsIndex",null);c.__decorate([f.property({type:String,json:{write:!0}})],b.prototype,"format",null);c.__decorate([f.property({type:r.Extent})],b.prototype,"fullExtent",void 0);c.__decorate([f.property({readOnly:!0})],
b.prototype,"hasMultidimensions",void 0);c.__decorate([f.property({json:{read:{source:"maxImageHeight"}}})],b.prototype,"imageMaxHeight",void 0);c.__decorate([f.property({json:{read:{source:"maxImageWidth"}}})],b.prototype,"imageMaxWidth",void 0);c.__decorate([f.property({type:String,json:{read:{reader:S.read},write:{writer:S.write}}})],b.prototype,"interpolation",void 0);c.__decorate([f.property({type:x})],b.prototype,"mosaicRule",null);c.__decorate([f.reader("mosaicRule",["mosaicRule","defaultMosaicMethod"])],
b.prototype,"readMosaicRule",null);c.__decorate([f.writer("mosaicRule")],b.prototype,"writeMosaicRule",null);c.__decorate([f.property({readOnly:!0}),f.aliasOf("serviceRasterInfo.multidimensionalInfo")],b.prototype,"multidimensionalInfo",void 0);c.__decorate([f.property()],b.prototype,"noData",void 0);c.__decorate([f.writer("noData")],b.prototype,"writeNoData",null);c.__decorate([f.property({type:String,json:{read:{reader:T.read},write:{writer:T.write}}})],b.prototype,"noDataInterpretation",void 0);
c.__decorate([f.property({type:String,readOnly:!0,json:{read:{source:["fields"]}}})],b.prototype,"objectIdField",void 0);c.__decorate([f.reader("objectIdField")],b.prototype,"readObjectIdField",null);c.__decorate([f.property({readOnly:!0,dependsOn:["url"]})],b.prototype,"parsedUrl",null);c.__decorate([f.property({readOnly:!0}),f.aliasOf("serviceRasterInfo.pixelSize.x")],b.prototype,"pixelSizeX",void 0);c.__decorate([f.property({readOnly:!0}),f.aliasOf("serviceRasterInfo.pixelSize.y")],b.prototype,
"pixelSizeY",void 0);c.__decorate([f.property({type:Function})],b.prototype,"pixelFilter",void 0);c.__decorate([f.property()],b.prototype,"raster",void 0);c.__decorate([f.property()],b.prototype,"viewId",void 0);c.__decorate([f.property({types:O.rasterRendererTypes,json:{read:{source:"layerDefinition.drawingInfo.renderer"},write:{target:"layerDefinition.drawingInfo.renderer"}}})],b.prototype,"renderer",void 0);c.__decorate([f.reader("renderer")],b.prototype,"readRenderer",null);c.__decorate([f.property(Q.opacityDrawingInfo)],
b.prototype,"opacity",void 0);c.__decorate([f.property({readOnly:!0}),f.aliasOf("serviceRasterInfo.attributeTable")],b.prototype,"rasterAttributeTable",void 0);c.__decorate([f.property({readOnly:!0,dependsOn:["fields","rasterInfo","capabilities"]})],b.prototype,"rasterFields",null);c.__decorate([f.property({readOnly:!0})],b.prototype,"rasterFunctionInfos",void 0);c.__decorate([f.property({type:D})],b.prototype,"renderingRule",null);c.__decorate([f.reader("renderingRule",["renderingRule","rasterFunctionInfos"])],
b.prototype,"readRenderingRule",null);c.__decorate([f.writer("renderingRule")],b.prototype,"writeRenderingRule",null);c.__decorate([f.property()],b.prototype,"serviceDataType",void 0);c.__decorate([f.property({readOnly:!0,type:r.SpatialReference})],b.prototype,"spatialReference",void 0);c.__decorate([f.reader("spatialReference",["spatialReference","extent"])],b.prototype,"readSpatialReference",null);c.__decorate([f.property()],b.prototype,"pixelType",void 0);c.__decorate([f.reader("pixelType")],b.prototype,
"readPixelType",null);c.__decorate([f.writer("pixelType")],b.prototype,"writePixelType",null);c.__decorate([f.property({constructOnly:!0,type:F})],b.prototype,"serviceRasterInfo",void 0);c.__decorate([f.property()],b.prototype,"sourceJSON",void 0);c.__decorate([f.property(Q.url)],b.prototype,"url",void 0);c.__decorate([f.property({readOnly:!0})],b.prototype,"version",void 0);c.__decorate([f.reader("version",["currentVersion","fields","timeInfo"])],b.prototype,"readVersion",null);return b=c.__decorate([f.subclass("esri.layers.mixins.ArcGISImageService")],
b)}(p)}});