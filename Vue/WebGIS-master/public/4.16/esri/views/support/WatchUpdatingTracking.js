// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../core/Accessor ../../core/Handles ../../core/scheduling ../../core/watchUtils ../../core/accessorSupport/decorators ../../core/accessorSupport/wire".split(" "),function(n,p,h,r,t,u,k,q,v){Object.defineProperty(p,"__esModule",{value:!0});n=function(l){function b(){var a=null!==l&&l.apply(this,arguments)||this;a.updating=!1;a.handleId=0;a.handles=new t;a.scheduleHandleId=0;a.pendingPromises=new Set;return a}h.__extends(b,l);b.prototype.destroy=function(){this.removeAll();
this.handles.destroy()};b.prototype.add=function(a,e,d,c){var b=this;void 0===c&&(c=0);var f=0!==(c&1),m=++this.handleId;f||this.installSyncUpdatingWatch(a,e,m);a=0!==(c&2)?k.init(a,e,d,f):a.watch(e,d,f);this.handles.add(a,m);return{remove:function(){b.handles.remove(m)}}};b.prototype.addOnCollectionPropertyChange=function(a,e,d,c){var b=this;void 0===c&&(c=0);c=0!==(c&2);var f=++this.handleId;this.handles.add([k.on(a,e,"after-changes",this.createSyncUpdatingCallback()),k.on(a,e,"change",d,c?function(a){d({added:a.items,
removed:[],moved:[],target:a})}:null)],f);return{remove:function(){b.handles.remove(f)}}};b.prototype.addOnCollectionChange=function(a,e,b){var c=this;void 0===b&&(b=0);b=0!==(b&2);var d=++this.handleId;this.handles.add([a.on("after-changes",this.createSyncUpdatingCallback()),a.on("change",e)],d);b&&e({added:a.items,removed:[],moved:[],target:a});return{remove:function(){c.handles.remove(d)}}};b.prototype.addPromise=function(a){var b=this;if(!a)return a;var d=++this.handleId;this.handles.add({remove:function(){b.pendingPromises.delete(a)&&
(0!==b.pendingPromises.size||b.handles.has(g)||b._set("updating",!1))}},d);this.pendingPromises.add(a);this._set("updating",!0);var c=function(){return b.handles.remove(d)};a.then(c,c);return a};b.prototype.removeAll=function(){this.pendingPromises.clear();this.handles.removeAll();this._set("updating",!1)};b.prototype.installSyncUpdatingWatch=function(a,b,d){a=v.default(a,b,this.createSyncUpdatingCallback());this.handles.add(a,d);return a};b.prototype.createSyncUpdatingCallback=function(){var a=this;
return function(){a.handles.remove(g);++a.scheduleHandleId;var b=a.scheduleHandleId;a._get("updating")||a._set("updating",!0);a.handles.add(u.schedule(function(){b===a.scheduleHandleId&&(a._set("updating",0<a.pendingPromises.size),a.handles.remove(g))}),g)}};h.__decorate([q.property({readOnly:!0})],b.prototype,"updating",void 0);return b=h.__decorate([q.subclass("esri.views.support.WatchUpdatingTracking")],b)}(r);p.WatchUpdatingTracking=n;var g=-42});