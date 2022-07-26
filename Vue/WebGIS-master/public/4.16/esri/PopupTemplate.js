// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ./core/arrayUtils ./core/Collection ./core/JSONSupport ./core/lang ./core/Logger ./core/promiseUtils ./core/SetUtils ./core/accessorSupport/decorators ./core/accessorSupport/ensureType ./layers/support/fieldUtils ./popup/content ./popup/ExpressionInfo ./popup/FieldInfo ./popup/LayerOptions ./popup/RelatedRecordsInfo ./popup/content/AttachmentsContent ./popup/content/Content ./popup/content/CustomContent ./popup/content/FieldsContent ./popup/content/MediaContent ./popup/content/TextContent ./popup/content/support/mediaInfoTypes ./support/actions/ActionBase ./support/actions/ActionButton ./support/actions/ActionToggle".split(" "),
function(O,P,d,u,h,v,g,w,r,x,f,y,t,z,A,B,C,D,k,E,F,l,m,n,G,H,I,J){var K=h.ofType({key:"type",defaultKeyValue:"button",base:H,typeMap:{button:I,toggle:J}}),L={base:E,key:"type",typeMap:{media:m,custom:F,text:n,attachments:k,fields:l}},M=w.getLogger("esri.PopupTemplate"),N=["attachments","fields","media","text"];return function(p){function b(){var a=null!==p&&p.apply(this,arguments)||this;a.actions=null;a.content="";a.expressionInfos=null;a.fieldInfos=null;a.layerOptions=null;a.lastEditInfoEnabled=
!0;a.outFields=null;a.overwriteActions=!1;a.title="";a.relatedRecordsInfo=null;return a}d.__extends(b,p);q=b;b.prototype.castContent=function(a){if(Array.isArray(a))return a.map(function(a){return y.ensureOneOfType(L,a)});if("string"===typeof a||"function"===typeof a||a instanceof HTMLElement||r.isPromiseLike(a))return a;M.error("content error","unsupported content value",{value:a});return null};b.prototype.readContent=function(a,c){a=c.popupElements;return Array.isArray(a)&&0<a.length?this._readPopupInfoElements(c):
this._readPopupInfo(c)};b.prototype.writeContent=function(a,c){var e=this;"string"===typeof a?c.description=a:Array.isArray(a)&&(c.popupElements=a.filter(function(a){return-1!==N.indexOf(a.type)}).map(function(a){return a&&a.toJSON()}),c.popupElements.forEach(function(a){"attachments"===a.type?e._writeAttachmentContent(c):"media"===a.type?e._writeMediaContent(a,c):"text"===a.type&&e._writeTextContent(a,c)}))};b.prototype.writeFieldInfos=function(a,c){var e=this.content,e=Array.isArray(e)?e:null;if(a){var b=
e?e.some(function(a){return"fields"===a.type&&(!a.fieldInfos||0===a.fieldInfos.length)}):!1;c.fieldInfos=a.filter(Boolean).map(function(a){a=a.toJSON();b||(a.visible=!1);return a})}if(e)for(a=0;a<e.length;a++){var d=e[a];"fields"===d.type&&this._writeFieldsContent(d,c)}};b.prototype.writeLayerOptions=function(a,c){c.layerOptions=!a||null===a.showNoDataRecords&&null===a.returnTopmostRaster?null:a.toJSON()};b.prototype.writeTitle=function(a,c){c.title=a||""};b.prototype.clone=function(){var a=this.actions,
a=a?g.clone(a.toArray()):[];return new q({actions:a,content:Array.isArray(this.content)?g.clone(this.content):this.content,expressionInfos:Array.isArray(this.expressionInfos)?g.clone(this.expressionInfos):null,fieldInfos:Array.isArray(this.fieldInfos)?g.clone(this.fieldInfos):null,layerOptions:this.layerOptions?g.clone(this.layerOptions):null,lastEditInfoEnabled:this.lastEditInfoEnabled,outFields:Array.isArray(this.outFields)?g.clone(this.outFields):null,overwriteActions:this.overwriteActions,title:this.title,
relatedRecordsInfo:this.relatedRecordsInfo?g.clone(this.relatedRecordsInfo):null})};b.prototype.collectRequiredFields=function(a,c){return d.__awaiter(this,void 0,void 0,function(){return d.__generator(this,function(e){switch(e.label){case 0:return[4,this._collectExpressionInfoFields(a,c,this.expressionInfos)];case 1:return e.sent(),t.collectFields(a,c,d.__spreadArrays(this.outFields||[],this._getActionsFields(this.actions),this._getTitleFields(this.title),this._getContentFields(this.content))),[2]}})})};
b.prototype.getRequiredFields=function(a){return d.__awaiter(this,void 0,void 0,function(){var c;return d.__generator(this,function(e){switch(e.label){case 0:return c=new Set,[4,this.collectRequiredFields(c,a)];case 1:return e.sent(),[2,x.valuesOfSet(c).sort()]}})})};b.prototype._writeFieldsContent=function(a,c){Array.isArray(a.fieldInfos)&&a.fieldInfos.length&&(a=g.clone(a.fieldInfos),Array.isArray(c.fieldInfos)?a.forEach(function(a){var e=u.find(c.fieldInfos,function(c){return c.fieldName.toLowerCase()===
a.fieldName.toLowerCase()});e?e.visible=!0:c.fieldInfos.push(a)}):c.fieldInfos=a)};b.prototype._writeAttachmentContent=function(a){a.showAttachments||(a.showAttachments=!0)};b.prototype._writeTextContent=function(a,c){!c.description&&a.text&&(c.description=a.text)};b.prototype._writeMediaContent=function(a,c){Array.isArray(a.mediaInfos)&&a.mediaInfos.length&&(a=g.clone(a.mediaInfos),Array.isArray(c.mediaInfos)?c.mediaInfos=d.__spreadArrays(c.mediaInfos,a):c.mediaInfos=a)};b.prototype._readPopupInfoElements=
function(a){var c=a.description,e=a.mediaInfos,b=!1,d=!1;return a.popupElements.map(function(a){if("media"===a.type)return a.mediaInfos||!e||d||(a.mediaInfos=e,d=!0),m.fromJSON(a);if("text"===a.type)return a.text||!c||b||(a.text=c,b=!0),n.fromJSON(a);if("attachments"===a.type)return k.fromJSON(a);if("fields"===a.type)return l.fromJSON(a)}).filter(Boolean)};b.prototype._readPopupInfo=function(a){var c=a.description,e=a.mediaInfos;a=a.showAttachments;var b=[];c?b.push(new n({text:c})):b.push(new l);
Array.isArray(e)&&e.length&&b.push(m.fromJSON({mediaInfos:e}));a&&b.push(k.fromJSON({displayType:"list"}));return b.length?b:c};b.prototype._getContentElementFields=function(a){var c=this;if(!a||"attachments"===a.type)return[];if("custom"===a.type)return a.outFields||[];if("fields"===a.type)return this._getFieldInfoFields(a.fieldInfos||this.fieldInfos);if("media"===a.type)return(a.mediaInfos||[]).reduce(function(a,b){return d.__spreadArrays(a,c._getMediaInfoFields(b))},[]);if("text"===a.type)return this._extractFieldNames(a.text)};
b.prototype._getMediaInfoFields=function(a){var c=a.caption,b=a.value||{},f=b.fields,g=void 0===f?[]:f,f=b.normalizeField,h=b.tooltipField,k=b.sourceURL,b=b.linkURL;a=d.__spreadArrays(this._extractFieldNames(a.title),this._extractFieldNames(c),this._extractFieldNames(k),this._extractFieldNames(b),g);f&&a.push(f);h&&a.push(h);return a};b.prototype._getContentFields=function(a){var c=this;return"string"===typeof a?this._extractFieldNames(a):Array.isArray(a)?a.reduce(function(a,b){return d.__spreadArrays(a,
c._getContentElementFields(b))},[]):[]};b.prototype._collectExpressionInfoFields=function(a,b,e){return d.__awaiter(this,void 0,void 0,function(){return d.__generator(this,function(c){switch(c.label){case 0:return e?[4,r.all(e.map(function(c){return t.collectArcadeFieldNames(a,b,c.expression)}))]:[2];case 1:return c.sent(),[2]}})})};b.prototype._getFieldInfoFields=function(a){return a?a.filter(function(a){return"undefined"===typeof a.visible?!0:!!a.visible}).map(function(a){return a.fieldName}).filter(function(a){return-1===
a.indexOf("relationships/")&&-1===a.indexOf("expression/")}):[]};b.prototype._getActionsFields=function(a){var b=this;return a?a.toArray().reduce(function(a,c){return d.__spreadArrays(a,b._getActionFields(c))},[]):[]};b.prototype._getActionFields=function(a){var b=a.className,e=a.type,e="button"===e||"toggle"===e?a.image:"";return d.__spreadArrays(this._extractFieldNames(a.title),this._extractFieldNames(b),this._extractFieldNames(e))};b.prototype._getTitleFields=function(a){return"string"===typeof a?
this._extractFieldNames(a):[]};b.prototype._extractFieldNames=function(a){if(!a||"string"!==typeof a)return[];a=a.match(/{[^}]*}/g);if(!a)return[];var b=/\{(\w+):.+\}/;return(a=a.filter(function(a){return!(0===a.indexOf("{relationships/")||0===a.indexOf("{expression/"))}).map(function(a){return a.replace(b,"{$1}")}))?a.map(function(a){return a.slice(1,-1)}):[]};var q;d.__decorate([f.property({type:K})],b.prototype,"actions",void 0);d.__decorate([f.property()],b.prototype,"content",void 0);d.__decorate([f.cast("content")],
b.prototype,"castContent",null);d.__decorate([f.reader("content",["description","popupElements","mediaInfos","showAttachments"])],b.prototype,"readContent",null);d.__decorate([f.writer("content",{popupElements:{type:h.ofType(z.types)},showAttachments:{type:Boolean},mediaInfos:{type:h.ofType(G.types)},description:{type:String}})],b.prototype,"writeContent",null);d.__decorate([f.property({type:[A],json:{write:!0}})],b.prototype,"expressionInfos",void 0);d.__decorate([f.property({type:[B]})],b.prototype,
"fieldInfos",void 0);d.__decorate([f.writer("fieldInfos")],b.prototype,"writeFieldInfos",null);d.__decorate([f.property({type:C})],b.prototype,"layerOptions",void 0);d.__decorate([f.writer("layerOptions")],b.prototype,"writeLayerOptions",null);d.__decorate([f.property({type:Boolean,json:{read:{source:"showLastEditInfo"},write:{target:"showLastEditInfo"},default:!0}})],b.prototype,"lastEditInfoEnabled",void 0);d.__decorate([f.property()],b.prototype,"outFields",void 0);d.__decorate([f.property()],
b.prototype,"overwriteActions",void 0);d.__decorate([f.property({json:{type:String}})],b.prototype,"title",void 0);d.__decorate([f.writer("title")],b.prototype,"writeTitle",null);d.__decorate([f.property({type:D,json:{write:!0}})],b.prototype,"relatedRecordsInfo",void 0);return b=q=d.__decorate([f.subclass("esri.PopupTemplate")],b)}(v.JSONSupport)});