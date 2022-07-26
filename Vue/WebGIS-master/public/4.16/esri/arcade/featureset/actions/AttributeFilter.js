// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../support/FeatureSet ../support/IdSet ../support/shared ../support/sqlUtils ../../../core/promiseUtils ../../../core/sql/WhereClause ../../../geometry/SpatialReference".split(" "),function(w,x,u,q,m,k,n,g,r,v){var p=function(l){function d(b){var a=l.call(this,b)||this;a.declaredClass="esri.arcade.featureset.actions.AttributeFilter";a._maxProcessing=1E3;a._parent=b.parentfeatureset;b.whereclause instanceof r.WhereClause?(a._whereclause=b.whereclause,a._whereClauseFunction=
null):(a._whereClauseFunction=b.whereclause,a._whereclause=null);return a}u.__extends(d,l);d.prototype._initialiseFeatureSet=function(){null!==this._parent?(this.fields=this._parent.fields.slice(0),this.geometryType=this._parent.geometryType,this.objectIdField=this._parent.objectIdField,this.spatialReference=this._parent.spatialReference,this.hasM=this._parent.hasM,this.hasZ=this._parent.hasZ,this.typeIdField=this._parent.typeIdField,this.types=this._parent.types):(this.fields=[],this.objectIdField=
this.typeIdField="",this.spatialReference=new v({wkid:4326}),this.geometryType=k.layerGeometryEsriConstants.point)};d.prototype._getSet=function(b){var a=this;return null===this._wset?this._ensureLoaded().then(function(){return a._parent._getFilteredSet("",null,a._whereclause,null,b)}).then(function(c){a._checkCancelled(b);a._wset=null!==a._whereClauseFunction?new m(c._candidates.slice(0).concat(c._known.slice(0)),[],c._ordered,a._clonePageDefinition(c.pagesDefinition)):new m(c._candidates.slice(0),
c._known.slice(0),c._ordered,a._clonePageDefinition(c.pagesDefinition));return a._wset}):g.resolve(this._wset)};d.prototype._isInFeatureSet=function(b){var a=this._parent._isInFeatureSet(b);if(a===k.IdState.NotInFeatureSet)return a;a=this._idstates[b];return void 0===a?k.IdState.Unknown:a};d.prototype._getFeature=function(b,a,c){return this._parent._getFeature(b,a,c)};d.prototype._getFeatures=function(b,a,c,f){return this._parent._getFeatures(b,a,c,f)};d.prototype._featureFromCache=function(b){return this._parent._featureFromCache(b)};
d.prototype.executeWhereClause=function(b){return this._whereclause.testFeature(b)};d.prototype.executeWhereClauseDeferred=function(b){if(null!==this._whereClauseFunction)try{var a=this._whereClauseFunction(b);return g.isPromiseLike(a)?a:g.resolve(a)}catch(c){return g.reject(c)}return g.resolve(this.executeWhereClause(b))};d.prototype._fetchAndRefineFeatures=function(b,a,c){var f=this,e=new m([],b,!1,null),d=Math.min(a,b.length);return this._parent._getFeatures(e,-1,d,c).then(function(){f._checkCancelled(c);
if(null==f._whereClauseFunction){for(var h=0;h<d;h++){var e=f._parent._featureFromCache(b[h]);!0===f.executeWhereClause(e)?f._idstates[b[h]]=k.IdState.InFeatureSet:f._idstates[b[h]]=k.IdState.NotInFeatureSet}return"success"}for(var t=[],h=0;h<d;h++)e=f._parent._featureFromCache(b[h]),t.push(f.executeWhereClauseDeferred(e));return g.all(t).then(function(c){for(var e=0;e<a;e++)f._idstates[b[e]]=!0===c[e]?k.IdState.InFeatureSet:k.IdState.NotInFeatureSet;return"success"})})};d.prototype._getFilteredSet=
function(b,a,c,d,e){var f=this;null===this._whereClauseFunction&&(null!==c?null!==this._whereclause&&(c=n.combine(this._whereclause,c)):c=this._whereclause);return this._ensureLoaded().then(function(){return f._parent._getFilteredSet(b,a,c,d,e)}).then(function(a){f._checkCancelled(e);return null!==f._whereClauseFunction?new m(a._candidates.slice(0).concat(a._known.slice(0)),[],a._ordered,f._clonePageDefinition(a.pagesDefinition)):new m(a._candidates.slice(0),a._known.slice(0),a._ordered,f._clonePageDefinition(a.pagesDefinition))})};
d.prototype._stat=function(b,a,c,f,e,d,h){var k=this;if(null!==this._whereClauseFunction)return null===e&&""===c&&null===f?this._manualStat(b,a,d,h):g.resolve({calculated:!1});var l=this._whereclause;null!==e&&null!==this._whereclause&&(l=n.combine(this._whereclause,e));return this._parent._stat(b,a,c,f,l,d,h).then(function(g){return!1===g.calculated?null===e&&""===c&&null===f?k._manualStat(b,a,d,h):{calculated:!1}:g})};d.prototype._canDoAggregates=function(b,a,c,d,e){if(null!==this._whereClauseFunction)return g.resolve(!1);
null!==e?null!==this._whereclause&&(e=n.combine(this._whereclause,e)):e=this._whereclause;return null===this._parent?g.resolve(!1):this._parent._canDoAggregates(b,a,c,d,e)};d.prototype._getAggregatePagesDataSourceDefinition=function(b,a,c,d,e,l,h){if(null===this._parent)return g.reject(Error("Should never be called"));null!==e?null!==this._whereclause&&(e=n.combine(this._whereclause,e)):e=this._whereclause;return this._parent._getAggregatePagesDataSourceDefinition(b,a,c,d,e,l,h)};return d}(q);q._featuresetFunctions.filter=
function(g){if("function"===typeof g)return new p({parentfeatureset:this,whereclause:g});var d=null;g instanceof r.WhereClause&&(d=g);return new p({parentfeatureset:this,whereclause:d})};return p});