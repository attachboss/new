// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../core/arrayUtils ../../../core/arrayUtils ../../../core/asyncUtils ../../../core/Collection ../../../core/Logger ../../../core/maybe ../../../core/promiseUtils ../../../core/screenUtils ../../../core/SetUtils ../../../core/typedArrayUtil ../../../core/unitUtils ../../../core/accessorSupport/decorators ../../../core/libs/gl-matrix-2/vec3 ../../../core/libs/gl-matrix-2/vec3f32 ../../../geometry/support/aaBoundingBox ../../../geometry/support/aaBoundingRect ../../../layers/graphics/dehydratedFeatures ../../../layers/support/CodedValue ../../../layers/support/domains ../../../layers/support/fieldUtils ../../../layers/support/PromiseQueue ../../../symbols/support/unitConversionUtils ./LayerView3D ./PointCloudWorkerHandle ./i3s/I3SUtil ./i3s/LoDUtil ./i3s/PagedNodeIndex ./i3s/PointCloudRendererUtil ./i3s/PointCloudWorkerUtil ./i3s/PointGraphic ./i3s/PointRenderer ./support/layerViewUpdatingProperties ./support/PopupSceneLayerView ../support/geometryUtils ../support/orientedBoundingBox ../support/projectionUtils ../../layers/LayerView ../../support/layerViewUtils ../../support/Scheduler".split(" "),
function(B,na,g,u,S,E,T,U,n,p,V,F,v,W,h,X,G,Y,H,Z,aa,ba,I,ca,da,ea,fa,J,w,ga,m,x,K,L,ha,ia,M,ja,N,ka,O,la){var y=U.getLogger("esri.views.3d.layers.PointCloudLayerView3D"),ma=M.plane.create();B=function(q){function c(){var a=null!==q&&q.apply(this,arguments)||this;a.maximumPointCount=4E6;a.slicePlaneEnabled=!1;a._renderer=null;a._rendererAdded=!1;a._renderedNodes=new Set;a._nodeScales=new Map;a._updateViewNeeded=!0;a._lodFactor=1;a._maxLoggedBoxWarnings=5;a._pageMultiplier=1;a._nodeLoadEpoch=0;a._indexQueue=
[];a._workQueue=[];a._idleQueue=new ca.default;a._indexPagesLoading=new Map;a._loadingNodes=new Map;a._recalcWork=!0;a._layerIsVisible=!1;a._codedDomainPopulationPromise=null;a._codedDomainPopulationAbortController=null;a._totalWork=0;a._index=null;a._loadingInitNodePage=!1;a._nodeIdArray=[];return a}g.__extends(c,q);Object.defineProperty(c.prototype,"pointScale",{get:function(){var a=m.getSplatSizeAlgorithm(this.layer&&this.layer.renderer);return a&&null!=a.scaleFactor?a.scaleFactor:1},enumerable:!0,
configurable:!0});Object.defineProperty(c.prototype,"useRealWorldSymbolSizes",{get:function(){var a=m.getFixedSizeAlgorithm(this.layer&&this.layer.renderer);return a&&null!=a.useRealWorldSymbolSizes?a.useRealWorldSymbolSizes:!1},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"pointSize",{get:function(){var a=m.getFixedSizeAlgorithm(this.layer&&this.layer.renderer);return a&&null!=a.size?a.size:0},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"inverseDensity",
{get:function(){return this.layer&&this.layer.renderer?96/this.layer.renderer.pointsPerInch:5},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"availableFields",{get:function(){var a=m.getRendererInfo(this.layer),b=new Set;a.primaryAttribute&&b.add(a.primaryAttribute.name);a.modulationAttribute&&b.add(a.primaryAttribute.name);if(a=m.getFilterInfo(this.layer))for(var d=0;d<a.length;d++)b.add(a[d].attributeInfo.name);if(this.layer.outFields)for(a=0,d=I.unpackFieldNames(this.layer.fields,
this.layer.outFields);a<d.length;a++)b.add(d[a]);return F.valuesOfSet(b)},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"_clippingBox",{get:function(){if(!this.view||!this.view.clippingArea)return null;var a=Y.create();return N.extentToBoundingBox(this.view.clippingArea,a,this.view.renderSpatialReference)?a:null},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"_elevationOffset",{get:function(){var a=this.layer&&this.layer.elevationInfo;if(a&&"absolute-height"===
a.mode){var b=W.getMetersPerVerticalUnitForSR(this.layer.spatialReference),d=da.getMetersPerUnit(a.unit);return n.unwrapOr(a.offset,0)*d/b}return 0},enumerable:!0,configurable:!0});c.prototype.initialize=function(){var a=this,b=this.view.resourceController,d=b.scheduler;this._worker=new fa.PointCloudWorkerHandle(d);this.addResolvingPromise(this._worker.promise);this._tmpPoint=Z.makeDehydratedPoint(0,0,0,this.layer.spatialReference);J.checkPointCloudLayerValid(this.layer);J.checkPointCloudLayerCompatibleWithView(this.layer,
this.view);this._streamDataRequester=b.createStreamDataRequester(2);this._initRenderer();var b=this._initNodePages(),f=this.view.resourceController.memoryController;this._memCache=f.getMemCache(this.layer.uid);this.updatingHandles.add(this,"_clippingBox",function(){return a._setUpdateViewNeeded()},2);this.updatingHandles.add(this,"_elevationOffset",function(){return a._elevationOffsetChanged()},2);this.updatingHandles.add(this.layer,"renderer",function(){return a._rendererChanged()},2);this.updatingHandles.add(this.layer,
"filters",function(){return a._reload()},2);this.updatingHandles.add(this.layer,"outFields",function(){return a._reload()},2);this.updatingHandles.add(this.layer,"scaleRangeId",function(){return a._setUpdateViewNeeded()});this.updatingHandles.add(this,"clippingArea",function(){return a._setUpdateViewNeeded()},2);this.updatingHandles.add(this.view.state,"camera",function(){return a._setUpdateViewNeeded()});this.handles.add([this.view.basemapTerrain.on("scale-change",function(b){return a._scaleUpdateHandler(b)}),
f.events.on("quality-changed",function(){return a._setUpdateViewNeeded()})]);this.addResolvingPromise(b);this.when(function(){a.handles.add([d.registerTask(la.Task.POINT_CLOUD_LAYER,function(b){return a._process(b)},function(){return a._needsUpdate()}),d.registerIdleStateCallbacks(function(){return a._idleBegin()},function(){return a._idleEnd()}),a.updatingHandles.add(a,"suspended",function(b){b?a._clearNodeState():a._setUpdateViewNeeded()},2)])},function(){a.updatingHandles.removeAll();a.handles.removeAll()})};
c.prototype._setUpdateViewNeeded=function(){this._updateViewNeeded=!0;this._updateLoading()};c.prototype.destroy=function(){this.cancelLoading();this._worker&&(this._worker.destroy(),this._worker=null);this._destroyRenderer();this._memCache.destroy();this._memCache=null;this._codedDomainPopulationAbortController&&(this._codedDomainPopulationAbortController.abort(),this._codedDomainPopulationAbortController=null);this._codedDomainPopulationPromise=null};c.prototype._initRenderer=function(){var a=this;
this._renderer=new L.PointRenderer({createGraphic:function(b,d,f){return a._createGraphic(b,d,f)}});this._renderer.layerUid=this.layer.uid;this.updatingHandles.add(this,"_clippingBox",function(b){return a._renderer.clippingBox=b},2);this.updatingHandles.add(this,"suspended",function(b){return a._setPointsVisible(!b)},2);this.updatingHandles.add(this,"pointScale",function(b){return a._renderer.scaleFactor=b},2);this._renderer.minSizePx=Math.sqrt(2);this.updatingHandles.add(this,"useRealWorldSymbolSizes",
function(b){return a._renderer.useRealWorldSymbolSizes=b},2);this.updatingHandles.add(this,"pointSize",function(b){var d=V.pt2px(b);a._renderer.size=b;a._renderer.sizePx=d},2);this.updatingHandles.add(this,"slicePlaneEnabled",function(b){return a._renderer.slicePlane=b},2);this.updatingHandles.add(this,"inverseDensity",function(){return a._setUpdateViewNeeded()},2);this.updatingHandles.add(this,"maximumPointCount",function(){return a._setUpdateViewNeeded()},2);this.updatingHandles.add(this.view,"qualitySettings.sceneService.pointCloud.lodFactor",
function(b){a._lodFactor=b;a._setUpdateViewNeeded()},2)};c.prototype._destroyRenderer=function(){this._renderer.removeAll();this._setPointsVisible(!1)};c.prototype._createGraphic=function(a,b,d){var f=n.isSome(a.pointIdFilterMap)?a.pointIdFilterMap[b]:b;d=this.view.computeMapPointFromVec3d(d);var e=this._createGraphicAttributes(a,f);return new K.PointGraphic({pointCloudMetadata:{nodeId:a.id,pointIndexInNode:b,attributePointIndexInNode:f,epoch:this._nodeLoadEpoch},geometry:d,attributes:e,layer:this.layer,
sourceLayer:this.layer})};c.prototype._createGraphicAttributes=function(a,b){var d={},f=0;for(a=a.attributes;f<a.length;f++){var e=a[f];this._encodeGraphicAttribute(e.attributeInfo,e.values,b,d)}return d};c.prototype._encodeGraphicAttribute=function(a,b,d,f){var e=a.storageInfo&&a.storageInfo.attributeValues,c=e?e.valuesPerElement:1;if(1===c)f[a.name]=b[d];else if("UInt8"===e.valueType&&4>=c){for(var e=0,g=d*=c;g<d+c;g++)e=(e<<8)+b[g];f[a.name]=e}else f[a.name]=void 0};c.prototype._setPointsVisible=
function(a){a&&!this._rendererAdded?(this.view._stage.addRenderPlugin([4],this._renderer),this._rendererAdded=!0):!a&&this._rendererAdded&&(this.view._stage.removeRenderPlugin(this._renderer),this._rendererAdded=!1)};c.prototype._rendererChanged=function(){this._renderer.useFixedSizes=m.rendererUsesFixedSizes(this.layer.renderer);this._reload()};c.prototype._reload=function(){this._clearNodeState();this._memCache.clear();this._setUpdateViewNeeded()};c.prototype._elevationOffsetChanged=function(){this._clearNodeState();
this._memCache.clear();this._initNodePages()};c.prototype._scaleUpdateHandler=function(a){var b=this;this.layer.minScale||this.layer.maxScale?N.boundingRectToBoundingRect(a.extent,a.spatialReference,P,this.layer.spatialReference)&&(this._nodeScales.forEach(function(d,c){b._renderedNodes.has(c)?(d=b._index.getNode(c),H.containsPoint(P,d.obb.center)&&b._nodeScales.set(c,a.scale)):b._nodeScales.delete(c)}),this._setUpdateViewNeeded()):this._nodeScales.clear()};c.prototype.displayNodes=function(a){this._workQueue=
w.nodeDiff(u.keysOfSet(this._renderedNodes),a,this._index);w.sortFrontToBack(this._workQueue,this.view.state.camera.viewForward,this._index);w.splitWorkEntries(this._workQueue,8,this._index);this._updateQueues();this._totalWork=this._computeWork();this._updateLoading();this._layerIsVisible=0<a.length||this._loadingInitNodePage;this.notifyChange("suspended")};c.prototype.cancelLoading=function(){this._cancelNodeLoading();this._cancelIndexLoading()};c.prototype._cancelNodeLoading=function(){var a=[];
this._loadingNodes.forEach(function(b){return a.push(b.abortController)});this._loadingNodes.clear();for(var b=0;b<a.length;b++)a[b].abort();this._workQueue=[];this._idleQueue.cancelAll();this._totalWork=this._computeWork();this._updateLoading()};c.prototype._updateQueues=function(){var a=this,b=new Set;this._workQueue.forEach(function(a){return a.load.forEach(function(a){return b.add(a)})});var d=[],c=new Map;this._loadingNodes.forEach(function(a,e){b.has(e)?c.set(e,a):d.push(a)});this._loadingNodes=
c;for(var e=0;e<d.length;e++)d[e].abortController.abort();this._workQueue=this._workQueue.filter(function(b){var d=0;for(b=b.load;d<b.length;d++)if(a._loadingNodes.has(b[d]))return a._recalcWork=!0,!1;return!0});this._totalWork=this._computeWork();this._updateLoading()};c.prototype._cancelIndexLoading=function(){this._indexQueue=[];this._indexPagesLoading.forEach(function(a){return a.abortController.abort()});this._indexPagesLoading.clear();this._totalWork=this._computeWork();this._updateLoading()};
c.prototype._clearNodeState=function(){var a=this;this._nodeLoadEpoch++;this._renderedNodes.forEach(function(b){return a._removeFromRenderer(b)});this._cancelNodeLoading()};c.prototype._idleBegin=function(){this._setUpdateViewNeeded()};c.prototype._idleEnd=function(){this._setUpdateViewNeeded()};c.prototype._needsUpdate=function(){return this.suspended?this._updateViewNeeded:this._updateViewNeeded||0<this._indexQueue.length||0<this._workQueue.length||0<this._idleQueue.length};c.prototype._process=
function(a){var b=this;if(this.suspended)this._updateViewNeeded&&(this._updateViewNeeded=!1,a=this._isRootNodeVisible(),a!==this._layerIsVisible&&(this._layerIsVisible=a,this.notifyChange("suspended")),this._updateLoading());else{for(a.run(function(){return b._updateWorkQueues()});0<this._indexQueue.length&&a.run(function(){return b._processIndexQueue()}););for(this._processWorkQueue(a);0<this._idleQueue.length&&a.run(function(){return b._idleQueue.process()}););}};c.prototype._processIndexQueue=
function(){var a=this,b=this._indexQueue.shift(),d=this._loadNodePage(b);this._indexPagesLoading.set(b,d);d.promise.then(function(d){a._index.addPage(b,d,a._elevationOffset);a._setUpdateViewNeeded()}).then(function(){a._indexPagesLoading.delete(b)},function(){a._indexPagesLoading.delete(b)});return!0};c.prototype._processWorkQueue=function(a){for(;!a.done;){var b=this._scheduleWorkEntry();if(n.isNone(b))break;this._processWorkEntry(b);a.madeProgress()}};c.prototype._scheduleWorkEntry=function(){for(var a=
this,b=this._workQueue.length;b--;){var d=this._workQueue.shift();if(S.find(d.remove,function(b){return!a._renderedNodes.has(b)}))this._workQueue.push(d);else return d}return null};c.prototype._processWorkEntry=function(a){var b=this;if(0===a.load.length)for(var d=0,c=a.remove;d<c.length;d++)this._removeFromRenderer(c[d]);else p.all(a.load.map(function(a){var d=p.createAbortController(),c=b._memCache.pop(a.toString());n.isSome(c)?b._loadingNodes.set(a,{abortController:d,promise:p.resolve(c)}):b._loadingNodes.has(a)||
b._loadingNodes.set(a,{abortController:d,promise:b.loadNode(a,d.signal)});return b._loadingNodes.get(a).promise})).then(function(d){for(var c=0;c<a.load.length;c++)if(d[c]){var e=b._setupRendererData(a.load[c],d[c]);b._addToRenderer(e)}d=0;for(c=a.remove;d<c.length;d++)b._removeFromRenderer(c[d])}).catch(function(){}).then(function(){for(var d=0,c=a.load;d<c.length;d++)b._loadingNodes.delete(c[d]);b._updateLoading();b._recalcWork&&0===b._idleQueue.length&&0===b._indexQueue.length&&0===b._loadingNodes.size&&
(b._recalcWork=!1,b._setUpdateViewNeeded())}),this._updateLoading()};c.prototype.populateClassCodeCodedDomain=function(a,b){return g.__awaiter(this,void 0,void 0,function(){var d,c,e,l;return g.__generator(this,function(f){switch(f.label){case 0:return d=this.layer.fieldsIndex.get("CLASS_CODE"),!d||d.domain||-1===a.indexOf(d.name)?[2]:[4,E.result(this.layer.queryCachedStatistics("CLASS_CODE",{signal:b}))];case 1:c=f.sent();if(!1===c.ok)return[2];l=(e=c.value)&&e.labels&&e.labels.labels;if(!l||!Array.isArray(l))return[2];
d.domain=new ba.CodedValueDomain({name:"CLASS_CODE",codedValues:l.map(function(a){return new aa.default({code:a.value,name:a.label})})});return[2]}})})};c.prototype.prepareFetchPopupFeatures=function(a){return g.__awaiter(this,void 0,void 0,function(){var b=this;return g.__generator(this,function(d){this._codedDomainPopulationPromise||(this._codedDomainPopulationAbortController=p.createAbortController(),this._codedDomainPopulationPromise=this.populateClassCodeCodedDomain(a,this._codedDomainPopulationAbortController.signal).then(function(){b._codedDomainPopulationAbortController=
null}));return[2,this._codedDomainPopulationPromise]})})};c.prototype.whenGraphicAttributes=function(a,b){return g.__awaiter(this,void 0,void 0,function(){var d,c,e,l,k,h=this;return g.__generator(this,function(f){switch(f.label){case 0:return d=this._splitGraphicsPerNode(a),c=this.layer.attributeStorageInfo,e=b.map(function(a){return m.getAttributeInfo(c,a)}),l=function(a,b){return g.__awaiter(h,void 0,void 0,function(){var d,c=this;return g.__generator(this,function(f){switch(f.label){case 0:return d=
this._index.getNode(b),[4,E.forEach(e,function(b){return g.__awaiter(c,void 0,void 0,function(){var c,f,e,l,k,R;return g.__generator(this,function(g){switch(g.label){case 0:return b.useElevation?[4,this._loadElevationAttributeFromGeometry(d.resourceId)]:[3,2];case 1:return f=g.sent(),[3,4];case 2:return[4,this._loadAndParseAttribute(d,b)];case 3:f=g.sent(),g.label=4;case 4:c=f;if(!c)return[2];e=0;for(l=a;e<l.length;e++)k=l[e],this._isValidPointGraphic(k)&&(R=k.pointCloudMetadata.attributePointIndexInNode,
this._encodeGraphicAttribute(b,c,R,k.attributes));return[2]}})})})];case 1:return f.sent(),[2]}})})},k=[],d.forEach(function(a,b){k.push(l(a,b))}),[4,p.eachAlways(k)];case 1:return f.sent(),[2,a]}})})};c.prototype._isValidPointGraphic=function(a){return a instanceof K.PointGraphic&&a.pointCloudMetadata&&a.pointCloudMetadata.epoch===this._nodeLoadEpoch};c.prototype._splitGraphicsPerNode=function(a){for(var b=new Map,d=0;d<a.length;d++){var c=a[d];if(this._isValidPointGraphic(c)){var e=c.pointCloudMetadata,
g=b.get(e.nodeId);g?g.push(c):b.set(e.nodeId,[c])}}return b};c.prototype._loadAndParseAttribute=function(a,b){return g.__awaiter(this,void 0,void 0,function(){var d;return g.__generator(this,function(c){switch(c.label){case 0:return[4,this._loadAttribute(a.resourceId,b,null)];case 1:return d=c.sent(),[2,n.isSome(d)?x.getAttributeValues({attributeInfo:b,buffer:d},null,a.vertexCount):null]}})})};c.prototype._loadElevationAttributeFromGeometry=function(a){return g.__awaiter(this,void 0,void 0,function(){var b,
d,c,e;return g.__generator(this,function(f){switch(f.label){case 0:return b=this.layer.store.defaultGeometrySchema,c=x.readGeometry,e=[b],[4,this._loadGeometry(a,null)];case 1:return d=c.apply(void 0,e.concat([f.sent()])),[2,x.elevationFromPositions(d,d.length/3)]}})})};c.prototype.highlight=function(a){var b=this;if(!a)return{remove:function(){},pause:function(){},resume:function(){}};a=T.isCollection(a)?a.toArray():Array.isArray(a)?a:[a];return this._renderer.highlight(a.map(function(a){return b._graphicToPointDefinition(a)}))};
c.prototype._graphicToPointDefinition=function(a){if(!this._isValidPointGraphic(a))return null;var b=a.pointCloudMetadata;a=b.nodeId;b=b.pointIndexInNode;return null!=a&&null!=b?{nodeId:a,pointId:b}:null};c.prototype._computeWork=function(){for(var a=0,b=0,c=this._workQueue;b<c.length;b++)var f=c[b],a=a+(f.load.length+f.remove.length);a+=this._loadingNodes.size;a+=(this._indexQueue.length+this._indexPagesLoading.size)*this._index.pageSize;a+=this._loadingInitNodePage?100:0;return a+=this._updateViewNeeded?
100:0};Object.defineProperty(c.prototype,"updatingProgressValue",{get:function(){if(this.suspended)return this._updateViewNeeded?0:1;var a=this._computeWork();return 1-Math.min(this._totalWork,a)/this._totalWork},enumerable:!0,configurable:!0});c.prototype._updateLoading=function(){this.notifyChange("updating");this.notifyChange("updatingProgressValue")};c.prototype.canResume=function(){return q.prototype.canResume.call(this)&&this._layerIsVisible};c.prototype.isUpdating=function(){return this.suspended?
this._updateViewNeeded:0<this._computeWork()};c.prototype._initNodePages=function(){var a=this,b=this.layer.store.index;this._index=new ga(this.layer.spatialReference,this.view.renderCoordsHelper.spatialReference,b.nodesPerPage||b.nodePerIndexBlock);this._cancelIndexLoading();this._traverseVisible=this._index.createVisibilityTraverse();this._layerIsVisible=this._loadingInitNodePage=!0;this.notifyChange("suspended");this._updateLoading();this._pageMultiplier=null!=b.nodesPerPage?1:b.nodePerIndexBlock;
return this._loadNodePage(0).promise.then(function(b){a._index.addPage(0,b,a._elevationOffset);a._loadingInitNodePage=!1;a._setUpdateViewNeeded()})};c.prototype._loadNodePage=function(a){var b=this,c=p.createAbortController();return{promise:this._requestJSON(this.baseUrl+"/nodepages/"+a*this._pageMultiplier,c.signal).then(function(c){return c.nodes.map(function(c,d){return{resourceId:null!=c.resourceId?c.resourceId:a*b._index.pageSize+d,obb:c.obb,firstChild:c.firstChild,childCount:c.childCount,vertexCount:null!=
c.vertexCount?c.vertexCount:c.pointCount,lodThreshold:null!=c.lodThreshold?c.lodThreshold:c.effectiveArea}})}),abortController:c}};c.prototype._updateWorkQueues=function(){if(!this._updateViewNeeded)return!1;for(var a=this.inverseDensity/this._lodFactor*this._getLodMemoryFactor(),b=this.maximumPointCount*this._lodFactor*this._getLodMemoryFactor(),c=this._computeNodesForMinimumDensity(a),f=this._computePointCount(c),e=Math.sqrt(f/(.75*b));f>b;)a*=e,c=this._computeNodesForMinimumDensity(a),f=this._computePointCount(c),
e=Math.sqrt(2);this.displayNodes(c);this._updateViewNeeded=!1;this._updateLoading();return!0};c.prototype._computePointCount=function(a){for(var b=0,c=0;c<a.length;c++){var f=this._index.getNode(a[c]);f&&(b+=f.vertexCount)}return b};c.prototype._getLodMemoryFactor=function(){return this.view.resourceController.memoryController.memoryFactor};c.prototype._isRootNodeVisible=function(){var a=!1;this._traverseVisible({frustumPlanes:this.view.state.camera.frustum.planes,clippingBox:this._clippingBox},{predicate:function(b,
c,f){a=f;return!1},pageMiss:function(){}});return a};c.prototype._computeNodesForMinimumDensity=function(a){var b=this,c=this.view.state.camera,f=c.frustum,e=this._clippingBox,g=c.viewForward,k=X.vec3.dot(g,c.eye),h=M.plane.fromNormalAndOffset(g,-k,ma),p=c.perScreenPixelRatio/2,C=a*a,r=this._nodeIdArray;r.length=0;a=O.extractSafeScaleBounds(this.layer);var D=a.minScale,n=a.maxScale,m=0===D&&0===n?function(a){return r.push(a)}:function(a){var c=b._getScale(a);O.scaleBoundsPredicate(c,D,n)&&r.push(a)};
this._traverseVisible({frustumPlanes:f.planes,clippingBox:e},{predicate:function(a,c,d){if(!d)return!1;if(0===c.childCount)return m(a),!1;d=b._index.getRenderObb(a);return b._computeAveragePixelArea(d,c.lodThreshold,c.vertexCount,h,p)<=C?(m(a),!1):!0},pageMiss:function(a,c){m(a);0>b._indexQueue.indexOf(c)&&b._indexQueue.push(c)}});return r};c.prototype._getScale=function(a){var b=this._nodeScales.get(a);null==b&&(b=this._index.getNode(a).obb.center,this._tmpPoint.x=b[0],this._tmpPoint.y=b[1],this._tmpPoint.z=
b[2],b=this.view.basemapTerrain.getScale(this._tmpPoint),this._nodeScales.set(a,b));return b};c.prototype._computeAveragePixelArea=function(a,b,c,f,e){a=Math.max(1E-7,ja.minimumDistancePlane(a,f));return b/(a*a)/(4*e*e)/c};c.prototype.loadNode=function(a,b){try{return this.loadNodeAsync(a,b)}catch(d){throw p.isAbortError(d)||y.error(d),d;}};c.prototype.loadAdditionalUserAttributes=function(a,b,c){return g.__awaiter(this,void 0,void 0,function(){var d,e,l,k,h,t,C,r,D,Q;return g.__generator(this,function(f){switch(f.label){case 0:d=
this.layer.outFields;if(!d)return[2,[]];e=I.unpackFieldNames(this.layer.fields,d);l=F.SetFromValues(a.map(function(a){return n.isSome(a)?a.name:null}));k=this.layer.attributeStorageInfo;h=[];t=0;for(C=e;t<C.length;t++)r=C[t],l.has(r)||(D=m.getAttributeInfo(k,r))&&h.push(b(D));return[4,p.eachAlwaysValues(h)];case 1:return Q=f.sent(),p.throwIfAborted(c),[2,n.mapSome(Q,function(a){return a})]}})})};c.prototype.loadNodeAsync=function(a,b){return g.__awaiter(this,void 0,void 0,function(){var c,f,e,h,k,
q=this;return g.__generator(this,function(d){c=this._index.getNode(a);f=m.getRendererInfo(this.layer);e=m.getFilterInfo(this.layer);h=c.resourceId;k=function(a){return g.__awaiter(q,void 0,void 0,function(){var c;return g.__generator(this,function(d){switch(d.label){case 0:return n.isNone(a)?[2,null]:a.useElevation?[2,{attributeInfo:a,buffer:null}]:[4,this._loadAttribute(h,a,b)];case 1:return c=d.sent(),[2,n.isSome(c)?{attributeInfo:a,buffer:c}:null]}})})};return[2,this._idleQueue.push(function(){return g.__awaiter(q,
void 0,void 0,function(){var c,d,l,m,n,q,t,u,z,v,w,x,y,A,B;return g.__generator(this,function(r){switch(r.label){case 0:return c=this._loadGeometry(h,b),d=f.primaryAttribute,l=f.modulationAttribute,m=k(d),n=k(l),q=e.map(function(a){return a.attributeInfo}),t=q.map(function(a){return k(a)}),u=this.loadAdditionalUserAttributes(g.__spreadArrays([d,l],q),k,b),[4,p.all([c,m,n,p.all(t),u])];case 1:return z=r.sent(),v=z[0],w=z[1],x=z[2],y=z[3],A=z[4],p.throwIfAborted(b),B={geometryBuffer:v,primaryAttributeData:w,
modulationAttributeData:x,filterAttributesData:y,userAttributesData:A,schema:this.layer.store.defaultGeometrySchema,rendererInfo:f,filterInfo:e,obb:this._index.getRenderObb(a),elevationOffset:this._elevationOffset,inSR:this.layer.spatialReference.toJSON(),outSR:this.view.renderCoordsHelper.spatialReference.toJSON()},[2,this._worker.invoke(B,b)]}})})})]})})};c.prototype._loadGeometry=function(a,b){return g.__awaiter(this,void 0,void 0,function(){return g.__generator(this,function(c){return[2,this._requestBinary(this.baseUrl+
"/nodes/"+a+"/geometries/0",b)]})})};c.prototype._loadAttribute=function(a,b,c){return g.__awaiter(this,void 0,void 0,function(){var d;return g.__generator(this,function(e){if(n.isNone(b)||!b.storageInfo)return[2,null];d=b.storageInfo.key;return[2,this._requestBinary(this.baseUrl+"/nodes/"+a+"/attributes/"+d,c)]})})};c.prototype._requestJSON=function(a,b){return this._streamDataRequester.request(a,"json",{query:{f:"json"},signal:b})};c.prototype._requestBinary=function(a,b){return this._streamDataRequester.request(a,
"binary",{signal:b})};c.prototype._removeFromRenderer=function(a){if(this._renderedNodes.has(a)){var b=this._renderer.removeNode(a);this._renderedNodes.delete(a);this._nodeScales.delete(a);this._memCache.put(b.id.toString(),b,5*b.coordinates.length+128)}};c.prototype._addToRenderer=function(a){this._renderedNodes.has(a.id)||(this._renderedNodes.add(a.id),this._renderer.addNode(a))};c.prototype._setupRendererData=function(a,b){var c=this._index.getNode(a),f=Math.sqrt(c.lodThreshold/c.vertexCount),
e=this._index.getRenderObb(a);if(L.PointRenderer.isInstanceOfNode(b))return b.splatSize=f,b.obb=e,b.origin=G.vec3f32.clone(b.obb.center),b;if(b.obb.halfSize[0]>1.001*e.halfSize[0]||b.obb.halfSize[1]>1.001*e.halfSize[1]||b.obb.halfSize[2]>1.001*e.halfSize[2]){if(0<this._maxLoggedBoxWarnings){var g=function(a){return"["+a.halfSize[0]+", "+a.halfSize[1]+", "+a.halfSize[2]+"]"};y.warn("Node "+a+" reported bounding box too small. got "+g(e)+" but points cover "+g(b.obb));0===--this._maxLoggedBoxWarnings&&
y.warn("  Too many bounding box errors, stopping reporting for this layer.")}this._index.setRenderObb(a,b.obb)}return{id:a,coordinates:b.points,origin:G.vec3f32.clone(e.center),rgb:b.rgb,attributes:b.attributes,pointIdFilterMap:b.pointIdFilterMap,highlights:null,splatSize:f,obb:e,isLeaf:0===c.childCount}};c.prototype.getUsedMemory=function(){var a=0;this._renderer.forEachNode(function(b){a+=A;a+=v.estimateSize(b.coordinates);var c=0;for(b=b.attributes;c<b.length;c++){var f=b[c].values;v.isArrayBuffer(f.buffer)&&
(a+=v.estimateSize(f))}});return a};c.prototype.getUnloadedMemory=function(){var a=this,b=this._renderedNodes.size;if(4>b)return 0;for(var c=u.keysOfSet(this._renderedNodes).reduce(function(b,c){return b+a._index.getNode(c).vertexCount}),f=this._loadingNodes.size,e=0;e<this._workQueue.length;e++)f+=this._workQueue[e].load.length,f-=this._workQueue[e].remove.length;if(0>f)return 0;e=f*c/b;b=(this.getUsedMemory()-b*A)/c;return e*b+f*A};c.prototype.ignoresMemoryFactor=function(){return!1};Object.defineProperty(c.prototype,
"performanceInfo",{get:function(){var a=this;return{nodes:this._renderedNodes.size,displayedNumberOfFeatures:u.keysOfSet(this._renderedNodes).reduce(function(b,c){return b+a._index.getNode(c).vertexCount},0),maximumNumberOfFeatures:this.maximumPointCount,totalNumberOfFeatures:-1,core:null,"Loading Nodes":this._loadingNodes.size,"Index Queue":this._indexQueue.length,"Work Queue":this._workQueue.length,"Idle Queue":this._idleQueue.length}},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,
"test",{get:function(){return{index:this._index,visibleNodes:this._renderedNodes}},enumerable:!0,configurable:!0});g.__decorate([h.property()],c.prototype,"layer",void 0);g.__decorate([h.property({readOnly:!0,aliasOf:"layer.parsedUrl.path"})],c.prototype,"baseUrl",void 0);g.__decorate([h.property({readOnly:!0,dependsOn:["layer.renderer"]})],c.prototype,"pointScale",null);g.__decorate([h.property({readOnly:!0,dependsOn:["layer.renderer"]})],c.prototype,"useRealWorldSymbolSizes",null);g.__decorate([h.property({readOnly:!0,
dependsOn:["layer.renderer"]})],c.prototype,"pointSize",null);g.__decorate([h.property({readOnly:!0,dependsOn:["layer.renderer"]})],c.prototype,"inverseDensity",null);g.__decorate([h.property()],c.prototype,"maximumPointCount",void 0);g.__decorate([h.property({readOnly:!0,dependsOn:["layer.renderer","layer.filters","layer.outFields"]})],c.prototype,"availableFields",null);g.__decorate([h.property({readOnly:!0,dependsOn:["view.clippingArea"]})],c.prototype,"_clippingBox",null);g.__decorate([h.property({readOnly:!0,
dependsOn:["layer.elevationInfo"]})],c.prototype,"_elevationOffset",null);g.__decorate([h.property({type:Boolean})],c.prototype,"slicePlaneEnabled",void 0);g.__decorate([h.property()],c.prototype,"updating",void 0);g.__decorate([h.property(ha.updatingProgress)],c.prototype,"updatingProgress",void 0);g.__decorate([h.property({readOnly:!0,dependsOn:["suspended"]})],c.prototype,"updatingProgressValue",null);return c=g.__decorate([h.subclass("esri.views.3d.layers.PointCloudLayerView3D")],c)}(ia.PopupSceneLayerView(ea.LayerView3D(ka)));
var P=H.create(),A=160;return B});