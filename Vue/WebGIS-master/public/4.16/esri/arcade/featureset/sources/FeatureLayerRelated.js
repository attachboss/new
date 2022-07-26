// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../Graphic ../support/FeatureSet ../support/IdSet ../support/shared ../../../core/promiseUtils ../../../tasks/support/RelationshipQuery".split(" "),function(y,z,v,w,x,r,q,k,t){return function(u){function b(a){var c=u.call(this,a)||this;c.declaredClass="esri.arcade.featureset.sources.FeatureLayerRelated";c._findObjectId=-1;c._requestStandardised=!1;c._removeGeometry=!1;c._overrideFields=null;c.featureObjectId=null;c.relatedLayer=null;c.relationship=null;a.spatialReference&&
(c.spatialReference=a.spatialReference);c._transparent=!0;c._maxProcessing=1E3;c._layer=a.layer;c._wset=null;c._findObjectId=a.objectId;c.featureObjectId=a.objectId;c.relationship=a.relationship;c.relatedLayer=a.relatedLayer;void 0!==a.outFields&&(c._overrideFields=a.outFields);void 0!==a.includeGeometry&&(c._removeGeometry=!1===a.includeGeometry);return c}v.__extends(b,u);b.prototype._maxQueryRate=function(){return q.defaultMaxRecords};b.prototype.end=function(){return this._layer};b.prototype.optimisePagingFeatureQueries=
function(){};b.prototype.load=function(){var a=this;null===this._loadPromise&&(this._loadPromise=k.create(function(c,f){k.all([a._layer.load(),a.relatedLayer.load()]).then(function(){a._initialiseFeatureSet();c(a)},f)}));return this._loadPromise};b.prototype.nativeCapabilities=function(){return this.relatedLayer.nativeCapabilities()};b.prototype._initialiseFeatureSet=function(){null==this.spatialReference&&(this.spatialReference=this._layer.spatialReference);this.geometryType=this.relatedLayer.geometryType;
this.fields=this.relatedLayer.fields.slice(0);if(null!==this._overrideFields)if(1===this._overrideFields.length&&"*"===this._overrideFields[0])this._overrideFields=null;else{for(var a=[],c=[],f=0,g=this.fields;f<g.length;f++){var b=g[f];if("oid"===b.type)a.push(b),c.push(b.name);else for(var e=0,h=this._overrideFields;e<h.length;e++)if(h[e].toLowerCase()===b.name.toLowerCase()){a.push(b);c.push(b.name);break}}this.fields=a;this._overrideFields=c}if(a=this._layer.nativeCapabilities())this._databaseType=
a.databaseType,this._requestStandardised=a.requestStandardised;this.objectIdField=this.relatedLayer.objectIdField;this.hasM=this.relatedLayer.supportsM;this.hasZ=this.relatedLayer.supportsZ;this.typeIdField=this.relatedLayer.typeIdField;this.types=this.relatedLayer.types};b.prototype.databaseType=function(){var a=this;return this.relatedLayer.databaseType().then(function(){a._databaseType=a.relatedLayer._databaseType;return a._databaseType})};b.prototype.isTable=function(){return this.relatedLayer.isTable()};
b.prototype._isInFeatureSet=function(){return q.IdState.InFeatureSet};b.prototype._candidateIdTransform=function(a){return a};b.prototype._getSet=function(a){var c=this;return null===this._wset?this._ensureLoaded().then(function(){return c._getFilteredSet("",null,null,null,a)}).then(function(a){return c._wset=a}):k.resolve(this._wset)};b.prototype._changeFeature=function(a){for(var c={},b=0,g=this.fields;b<g.length;b++){var l=g[b];c[l.name]=a.attributes[l.name]}return new w({geometry:!0===this._removeGeometry?
null:a.geometry,attributes:c})};b.prototype._getFilteredSet=function(a,c,b,g,l){var e=this;return this.databaseType().then(function(){if(e.isTable()&&c&&null!==a&&""!==a){var f=new r([],[],!0,null);return f}f=e._layer.nativeCapabilities();if(!1===f.canQueryRelated)return f=new r([],[],!0,null);if(f.capabilities.queryRelated&&f.capabilities.queryRelated.supportsPagination)return e._getFilteredSetUsingPaging(a,c,b,g,l);var d="",p=!1;null!==g&&f.capabilities&&f.capabilities.queryRelated&&!0===f.capabilities.queryRelated.supportsOrderBy&&
(d=g.constructClause(),p=!0);var m=new t;m.objectIds=[e._findObjectId];var n=null!==e._overrideFields?e._overrideFields:e._fieldsIncludingObjectId(e.relatedLayer.fields?e.relatedLayer.fields.map(function(a){return a.name}):["*"]);m.outFields=n;m.relationshipId=e.relationship.id;m.where="1\x3d1";n=!0;!0===e._removeGeometry&&(n=!1);m.returnGeometry=n;e._requestStandardised&&(m.sqlFormat="standard");m.outSpatialReference=e.spatialReference;m.orderByFields=""!==d?d.split(","):null;return f.source.queryRelatedFeatures(m).then(function(f){e._checkCancelled(l);
var g=f[e._findObjectId]?f[e._findObjectId].features:[];f=[];for(var d=0;d<g.length;d++)e._featureCache[g[d].attributes[e._layer.objectIdField]]=g[d],f.push(g[d].attributes[e._layer.objectIdField]);g=c&&null!==a&&""!==a;d=null!==b&&void 0!==b;return new r(g||d?f:[],g||d?[]:f,p,null)})})};b.prototype._fieldsIncludingObjectId=function(a){if(null===a)return[this.objectIdField];a=a.slice(0);if(-1<a.indexOf("*"))return a;for(var c=!1,f=0;f<a.length;f++)if(a[f].toUpperCase()===this.objectIdField.toUpperCase()){c=
!0;break}!1===c&&a.push(this.objectIdField);return a};b.prototype._getFilteredSetUsingPaging=function(a,c,f,b,l){var e=this;try{var g="",d=!1,p=this._layer.nativeCapabilities();null!==b&&p&&p.capabilities.queryRelated&&!0===p.capabilities.queryRelated.supportsOrderBy&&(g=b.constructClause(),d=!0);return this.databaseType().then(function(){var b=e._maxQueryRate(),n=p.capabilities.query.maxRecordCount;void 0!==n&&n<b&&(b=n);var n=c&&null!==a&&""!==a,h=null!==f&&void 0!==f,k=null,q=!0;!0===e._removeGeometry&&
(q=!1);var t=null!==e._overrideFields?e._overrideFields:e._fieldsIncludingObjectId(e.relatedLayer.fields?e.relatedLayer.fields.map(function(a){return a.name}):["*"]),k=new r(n||h?["GETPAGES"]:[],n||h?[]:["GETPAGES"],d,{outFields:t.join(","),resultRecordCount:b,resultOffset:0,objectIds:[e._findObjectId],where:"1\x3d1",orderByFields:g,returnGeometry:q,returnIdsOnly:"false",internal:{set:[],lastRetrieved:0,lastPage:0,fullyResolved:!1}});return e._expandPagedSet(k,b,0,0,l).then(function(){return k})})}catch(m){return k.reject(m)}};
b.prototype._expandPagedSet=function(a,c,b,g,l){return this._expandPagedSetFeatureSet(a,c,b,g,l)};b.prototype._clonePageDefinition=function(a){return null===a?null:!0!==a.groupbypage?{groupbypage:!1,outFields:a.outFields,resultRecordCount:a.resultRecordCount,resultOffset:a.resultOffset,where:a.where,objectIds:a.objectIds,orderByFields:a.orderByFields,returnGeometry:a.returnGeometry,returnIdsOnly:a.returnIdsOnly,internal:a.internal}:{groupbypage:!0,outFields:a.outFields,resultRecordCount:a.resultRecordCount,
useOIDpagination:a.useOIDpagination,generatedOid:a.generatedOid,groupByFieldsForStatistics:a.groupByFieldsForStatistics,resultOffset:a.resultOffset,outStatistics:a.outStatistics,geometry:a.geometry,where:a.where,objectIds:a.objectIds,orderByFields:a.orderByFields,returnGeometry:a.returnGeometry,returnIdsOnly:a.returnIdsOnly,internal:a.internal}};b.prototype._getPhysicalPage=function(a,c,b){var f=this;try{var l=a.pagesDefinition.internal.lastRetrieved,e=a.pagesDefinition.internal.lastPage,h=this._layer.nativeCapabilities(),
d=new t;!0===this._requestStandardised&&(d.sqlFormat="standard");d.relationshipId=this.relationship.id;d.objectIds=a.pagesDefinition.objectIds;d.resultOffset=a.pagesDefinition.internal.lastPage;d.resultRecordCount=a.pagesDefinition.resultRecordCount;d.outFields=a.pagesDefinition.outFields.split(",");d.where=a.pagesDefinition.where;d.orderByFields=""!==a.pagesDefinition.orderByFields?a.pagesDefinition.orderByFields.split(","):null;d.returnGeometry=a.pagesDefinition.returnGeometry;d.outSpatialReference=
this.spatialReference;return h.source.queryRelatedFeatures(d).then(function(c){f._checkCancelled(b);if(a.pagesDefinition.internal.lastPage!==e)return 0;for(var d=c[f._findObjectId]?c[f._findObjectId].features:[],g=0;g<d.length;g++)a.pagesDefinition.internal.set[l+g]=d[g].attributes[f._layer.objectIdField];for(g=0;g<d.length;g++)f._featureCache[d[g].attributes[f._layer.objectIdField]]=d[g];c=c[f._findObjectId]?!1===c[f._findObjectId].exceededTransferLimit:!0;d.length!==a.pagesDefinition.resultRecordCount&&
c&&(a.pagesDefinition.internal.fullyResolved=!0);a.pagesDefinition.internal.lastRetrieved=l+d.length;a.pagesDefinition.internal.lastPage+=a.pagesDefinition.resultRecordCount;return d.length})}catch(p){return k.reject(p)}};b.prototype._getFeatures=function(a,c,b,g){var f=this,e=[];-1!==c&&void 0===this._featureCache[c]&&e.push(c);var h=this._maxQueryRate();if(!0===this._checkIfNeedToExpandKnownPage(a,h))return this._expandPagedSet(a,h,0,0,g).then(function(){return f._getFeatures(a,c,b,g)});for(var h=
0,d=a._lastFetchedIndex;d<a._known.length;d++){h++;h<=b&&(a._lastFetchedIndex+=1);if("GETPAGES"!==a._known[d]&&void 0===this._featureCache[a._known[d]]&&(a._known[d]!==c&&e.push(a._known[d]),e.length>b))break;if(h>=b&&0===e.length)break}return 0===e.length?k.resolve("success"):k.reject(Error("Unaccounted for Features. Not in Feature Collection"))};b.prototype._refineSetBlock=function(a,c,b){return k.resolve(a)};b.prototype._stat=function(a,c,b,g,l,e,h){return k.resolve({calculated:!1})};b.prototype._canDoAggregates=
function(a,c,b,g,l){return k.resolve(!1)};b.prototype.relationshipMetaData=function(){return this.relatedLayer.relationshipMetaData()};b.prototype.serviceUrl=function(){return this.relatedLayer.serviceUrl()};b.prototype.queryAttachments=function(a,c,b,g){return this.relatedLayer.queryAttachments(a,c,b,g)};b.prototype.getFeatureByObjectId=function(a,b){return this.relatedLayer.getFeatureByObjectId(a,b)};return b}(x)});