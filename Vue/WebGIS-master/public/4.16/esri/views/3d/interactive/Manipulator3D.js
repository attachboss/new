// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../../geometry ../../../core/compilerUtils ../../../core/Evented ../../../core/maybe ../../../core/screenUtils ../../../core/accessorSupport/utils ../../../core/libs/gl-matrix-2/mat3 ../../../core/libs/gl-matrix-2/mat3f64 ../../../core/libs/gl-matrix-2/mat4 ../../../core/libs/gl-matrix-2/mat4f64 ../../../core/libs/gl-matrix-2/vec2 ../../../core/libs/gl-matrix-2/vec3 ../../../core/libs/gl-matrix-2/vec3f64 ../../../core/libs/gl-matrix-2/factories/vec3f64 ../../../geometry/support/aaBoundingRect ../../../layers/graphics/dehydratedFeatures ../../3d/support/ElevationProvider ../../3d/support/geometryUtils ../../3d/support/projectionUtils ../../3d/support/stack ../support/projectionUtils ../../3d/webgl-engine/lib/Camera ../../3d/webgl-engine/lib/Layer ../../3d/webgl-engine/lib/Object3D".split(" "),
function(B,C,t,P,Q,l,q,R,D,S,u,v,T,e,p,U,V,E,z,n,F,w,W,X,Y,Z){function G(b){return 0!==b[12]||0!==b[13]||0!==b[14]}Object.defineProperty(C,"__esModule",{value:!0});B=function(){function b(a){this.camera=new X.default;this._elevation={offset:0,override:null};this.collisionType={type:"point"};this.collisionPriority=0;this._renderObjects=[];this._available=this.autoScaleRenderObjects=!0;this._noDisplayCount=0;this._radius=10;this._worldSized=!1;this.focusMultiplier=2;this.touchMultiplier=2.5;this.worldOriented=
!1;this._modelTransform=v.mat4f64.create();this._worldFrame=null;this._renderLocation=p.vec3f64.create();this._renderLocationDirty=!0;this._location=new t.Point({x:0,y:0,z:0});this._elevationAlignedLocation=new t.Point;this.interactive=this._elevationAlignedLocationDirty=!0;this.selectable=!1;this.grabbable=!0;this.cursor=null;this._selected=this._hovering=this.dragging=this._grabbing=!1;this._state=0;this._focused=!1;this.events=new Q.EventEmitter;this._screenLocation={screenPointArray:q.createScreenPointArray(),
renderScreenPointArray:q.createRenderScreenPointArray3(),pixelSize:0};this._screenLocationDirty=!0;this._applyObjectTransform=null;this._engineResourcesAddedToStage=!1;this._engineResources=null;this._attached=!1;this._materialIdReferences=this._engineLayerId=null;this._location.spatialReference=a.view.spatialReference;for(var d in a)this[d]=a[d];this.view.state&&this.view.state.camera&&this.camera.copyFrom(this.view.state.camera)}b.prototype.destroy=function(){this._removeResourcesFromStage();this.camera=
this.view=this._engineResources=null};Object.defineProperty(b.prototype,"elevationInfo",{get:function(){return this._elevationInfo},set:function(a){this._elevationInfo=a;this._renderLocationDirty=this._elevationAlignedLocationDirty=!0;this._updateEngineObject()},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"renderObjects",{get:function(){return this._renderObjects},set:function(a){this._removeResourcesFromStage();this._engineResources=null;this._renderObjects=a.slice();this._updateEngineObject()},
enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"available",{get:function(){return this._available},set:function(a){a!==this._available&&(this._available=a,this._updateEngineObject())},enumerable:!0,configurable:!0});b.prototype.disableDisplay=function(){var a=this;this._noDisplayCount++;1===this._noDisplayCount&&this._updateEngineObject();return{remove:R.once(function(){a._noDisplayCount--;0===a._noDisplayCount&&a._updateEngineObject()})}};Object.defineProperty(b.prototype,"radius",
{get:function(){return this._radius},set:function(a){a!==this._radius&&(this._radius=a,this._updateEngineObject())},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"worldSized",{get:function(){return this._worldSized},set:function(a){a!==this._worldSized&&(this._worldSized=a,this._updateEngineObject())},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"modelTransform",{get:function(){return this._modelTransform},set:function(a){G(a)&&(this._screenLocationDirty=!0);
u.mat4.copy(this._modelTransform,a);this._updateEngineObject()},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"renderLocation",{get:function(){this._renderLocationDirty&&(this._renderLocationDirty=!1,this.view.renderCoordsHelper.toRenderCoords(this.elevationAlignedLocation,this._renderLocation),this.worldOriented?(this._worldFrame||(this._worldFrame=v.mat4f64.create()),F.computeLinearTransformation(this.view.renderSpatialReference,this._renderLocation,this._worldFrame,this.view.renderSpatialReference),
this._worldFrame[12]=0,this._worldFrame[13]=0,this._worldFrame[14]=0):this._worldFrame&&(this._worldFrame=null));return this._renderLocation},set:function(a){this.view.renderCoordsHelper.fromRenderCoords(a,this._location);this.elevationAlignedLocation=this._location},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"location",{get:function(){return this._location},set:function(a){E.clonePoint(a,this._location);this._elevationAlignedLocationDirty=this._screenLocationDirty=this._renderLocationDirty=
!0;this._updateEngineObject();this.events.emit("location-update",{location:this._location})},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"elevationAlignedLocation",{get:function(){if(!this._elevationAlignedLocationDirty)return this._elevationAlignedLocation;this._evaluateElevationAlignment();this._updateElevationAlignedLocation();return this._elevationAlignedLocation},set:function(a){E.clonePoint(a,this._location);this._evaluateElevationAlignment();this._location.z-=this._elevation.offset;
this._updateElevationAlignedLocation();this._updateEngineObject();this.events.emit("location-update",{location:this._location})},enumerable:!0,configurable:!0});b.prototype._updateElevationAlignedLocation=function(){this._elevationAlignedLocation.x=this.location.x;this._elevationAlignedLocation.y=this.location.y;var a=l.isSome(this._elevation.override)?this._elevation.override:this.location.z||0;this._elevationAlignedLocation.z=a+this._elevation.offset;this._elevationAlignedLocation.spatialReference=
this.location.spatialReference;this._screenLocationDirty=this._renderLocationDirty=!0;this._elevationAlignedLocationDirty=!1};Object.defineProperty(b.prototype,"grabbing",{get:function(){return this._grabbing},set:function(a){a!==this._grabbing&&(this._grabbing=a,this._setFocused(this._hovering||this._grabbing),this._updateEngineObject())},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"hovering",{get:function(){return this._hovering},set:function(a){a!==this._hovering&&(this._hovering=
a,this._setFocused(this._hovering||this._grabbing),this._updateEngineObject())},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"selected",{get:function(){return this._selected},set:function(a){a!==this._selected&&(this._selected=a,this._updateEngineObject(),this.events.emit("select-changed",{action:a?"select":"deselect"}))},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"state",{get:function(){return this._state},set:function(a){a!==this._state&&(this._state=
a,this._updateEngineObject())},enumerable:!0,configurable:!0});b.prototype.updateStateEnabled=function(a,d){this.state=d?this.state|a:this.state&~a};b.prototype._setFocused=function(a){a!==this._focused&&(this._focused=a,this.events.emit("focus-changed",{action:!0===a?"focus":"unfocus"}))};Object.defineProperty(b.prototype,"focused",{get:function(){return this._focused},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"screenLocation",{get:function(){this.ensureScreenLocation();return this._screenLocation},
enumerable:!0,configurable:!0});b.prototype.ensureScreenLocation=function(){if(this._screenLocationDirty){this._screenLocation.pixelSize=this.camera.computeScreenPixelSizeAt(this.renderLocation);this._screenLocationDirty=!1;var a;G(this._modelTransform)?(a=this._calculateModelTransformOffset(aa),a=e.vec3.add(a,a,this.renderLocation)):a=this.renderLocation;this.camera.projectPoint(a,this._screenLocation.renderScreenPointArray);this.camera.renderToScreen(this._screenLocation.renderScreenPointArray,
this._screenLocation.screenPointArray)}};Object.defineProperty(b.prototype,"applyObjectTransform",{get:function(){return this._applyObjectTransform},set:function(a){this._applyObjectTransform=a;this._screenLocationDirty=!0;this._updateEngineObject()},enumerable:!0,configurable:!0});b.prototype.intersectionDistance=function(a,d){var c;if(!this.available)return null;var b=q.screenPointObjectToArray(a,ba);a=this._getCollisionRadius(d);d=-1*this.collisionPriority;switch(this.collisionType.type){case "point":if(T.vec2.squaredDistance(this.screenLocation.screenPointArray,
b)<a*a)return this.screenLocation.renderScreenPointArray[2]+d;break;case "line":var k=this.collisionType.paths;c=this._getWorldToScreenObjectScale();c=this._calculateObjectTransform(c,x);a*=this.screenLocation.pixelSize;for(var b=n.ray.fromScreen(this.camera,b,A),g=0,f=k;g<f.length;g++)if(k=f[g],0!==k.length)for(var h=e.vec3.transformMat4(H,k[0],c),m=1;m<k.length;m++){var l=e.vec3.transformMat4(I,k[m],c),r=n.lineSegment.closestRayDistance2(n.lineSegment.fromPoints(h,l,J),b);if(null!=r&&r<a*a)return c=
e.vec3.add(w.sv3d.get(),h,l),e.vec3.scale(c,c,.5),a=q.castRenderScreenPointArray(w.sv3d.get()),this.camera.projectPoint(c,a),a[2]+d;e.vec3.copy(h,l)}break;case "disc":h=this.collisionType.direction;k=null!==(c=this.collisionType.offset)&&void 0!==c?c:U.ZEROS;c=this._getWorldToScreenObjectScale();c=this._calculateObjectTransform(c,x);a*=this.screenLocation.pixelSize;b=n.ray.fromScreen(this.camera,b,A);m=D.mat3.fromMat4(K,c);h=e.vec3.transformMat3(L,h,m);m=e.vec3.transformMat4(M,k,c);n.plane.fromPositionAndNormal(m,
h,y);g=N;if(n.plane.intersectRay(y,b,g)&&e.vec3.squaredDistance(g,m)<a*a)return this.screenLocation.renderScreenPointArray[2]+d;break;case "ribbon":c=this.collisionType;k=c.paths;h=c.direction;c=this._getWorldToScreenObjectScale();c=this._calculateObjectTransform(c,x);a*=this.camera.computeScreenPixelSizeAt(this.renderLocation);b=n.ray.fromScreen(this.camera,b,A);m=D.mat3.fromMat4(K,c);h=e.vec3.transformMat3(L,h,m);m=this._calculateModelTransformPosition(M);n.plane.fromPositionAndNormal(m,h,y);g=
N;if(!n.plane.intersectRay(y,b,g))break;b=0;for(f=k;b<f.length;b++)if(k=f[b],0!==k.length)for(h=e.vec3.transformMat4(H,k[0],c),m=1;m<k.length;m++){l=e.vec3.transformMat4(I,k[m],c);r=n.lineSegment.distance2(n.lineSegment.fromPoints(h,l,J),g);if(null!=r&&r<a*a)return c=e.vec3.add(w.sv3d.get(),h,l),e.vec3.scale(c,c,.5),a=q.castRenderScreenPointArray(w.sv3d.get()),this.camera.projectPoint(c,a),a[2]+d;e.vec3.copy(h,l)}break;default:P.neverReached(this.collisionType)}return null};b.prototype.attach=function(a){void 0===
a&&(a={manipulator3D:{}});if(this.view._stage){a=a.manipulator3D;this._engineLayerId=a.engineLayerId;if(l.isNone(this._engineLayerId)){var d=new Y("manipulator-3d",{isPickable:!1});this.view._stage.add(0,d);this.view._stage.addToViewContent([d.id]);this._engineLayerId=d.id;a.engineLayerId=d.id}a.engineLayerReferences=(a.engineLayerReferences||0)+1;this._materialIdReferences=a.materialIdReferences;l.isNone(this._materialIdReferences)&&(this._materialIdReferences=new Map,a.materialIdReferences=this._materialIdReferences);
this.camera.copyFrom(this.view.state.camera);this._attached=!0;this._updateEngineObject();F.canProject(this._location.spatialReference,this.view.spatialReference)||(this.location=new t.Point({x:0,y:0,z:0,spatialReference:this.view.spatialReference}))}};b.prototype.detach=function(a){void 0===a&&(a={manipulator3D:{}});a=a.manipulator3D;a.engineLayerReferences--;var d=0===a.engineLayerReferences;d&&(a.engineLayerId=null);this._removeResourcesFromStage(d);this._materialIdReferences=this._engineLayerId=
this._engineResources=null;this._attached=!1};b.prototype.onViewChange=function(){this.camera.copyFrom(this.view.state.camera);this._screenLocationDirty=!0;this._updateEngineObject()};b.prototype.onElevationChange=function(a){W.pointToPoint(this.location,O,a.spatialReference);V.containsPointObject(a.extent,O)&&(this.location=this._location)};b.prototype._evaluateElevationAlignment=function(a){void 0===a&&(a=this.location);if(l.isNone(this.elevationInfo))return!1;var d=null,b=0,e=l.unwrapOr(this.elevationInfo.offset,
0);switch(this.elevationInfo.mode){case "on-the-ground":d=z.getElevationAtPoint(this.view.elevationProvider,a,"ground")||0;break;case "relative-to-ground":b=(z.getElevationAtPoint(this.view.elevationProvider,a,"ground")||0)+e;break;case "relative-to-scene":b=(z.getElevationAtPoint(this.view.elevationProvider,a,"scene")||0)+e;break;case "absolute-height":b=e}return b!==this._elevation.offset||d!==this._elevation.override?(this._elevation.offset=b,this._elevation.override=d,!0):!1};b.prototype._updateEngineObject=
function(){if(this._attached)if(this.available){var a=this._getWorldToScreenObjectScale(),b=x;!0===this.autoScaleRenderObjects&&(a*=this._getFocusedSize(this._radius,this.focused));this._calculateObjectTransform(a,b);for(var a=this._ensureEngineResources().objectsByState,c=(this.focused?2:1)|(this.selected?8:4),l=0<this._noDisplayCount,k=0;k<a.length;k++){var g=a[k],f=g.stateMask,g=g.objects;if(l)for(var f=0,h=g;f<h.length;f++)g=h[f],g.setVisible(!1);else if(h=0===(f&65520)||(this.state&f)===(f&65520),
0!==(f&15)&&(c&f)!==(f&15)||!h)for(f=0,h=g;f<h.length;f++)g=h[f],g.setVisible(!1);else for(f=0,h=g;f<h.length;f++)g=h[f],g.setVisible(!0),g.objectTransformation=b}}else this._removeResourcesFromStage()};b.prototype._ensureEngineResources=function(){if(l.isNone(this._engineResources)){var a=this.view._stage.getContent(0,l.unwrap(this._engineLayerId)),b=[],c=new Set;this.renderObjects.forEach(function(a){a=a.material;c.has(a)||(b.push(a),c.add(a))});var e=function(a,b){var d=b.geometry,c=b.material,
f=b.transform;Array.isArray(d)?d.forEach(function(b){return a.addGeometry(b,c,f)}):a.addGeometry(d,c,f)},k=new Map;this.renderObjects.forEach(function(a){var b=new Z({idHint:"manipulator",castShadow:!1});e(b,a);a=a.stateMask||0;var d=k.get(a)||[];d.push(b);k.set(a,d)});var g=[];k.forEach(function(a,b){g.push({stateMask:b,objects:a})});this._engineResources={objectsByState:g,layer:a,materials:b}}this._addResourcesToStage();return this._engineResources};b.prototype._addResourcesToStage=function(){var a=
this;if(!this._engineResourcesAddedToStage&&!l.isNone(this._engineResources)){var b=this._engineResources,c=b.objectsByState,e=b.layer;b.materials.forEach(function(b){var d=l.unwrap(a._materialIdReferences),c=d.get(b.id)||0;0===c&&a.view._stage.add(3,b);d.set(b.id,c+1)});c.forEach(function(b){b.objects.forEach(function(b){e.addObject(b);a.view._stage.add(1,b)})});this._engineResourcesAddedToStage=!0}};b.prototype._removeResourcesFromStage=function(a){var b=this;void 0===a&&(a=!1);if(this._engineResourcesAddedToStage&&
!l.isNone(this._engineResources)){var c=this._engineResources,e=c.layer,k=c.materials;c.objectsByState.forEach(function(a){a.objects.forEach(function(a){e.removeObject(a);b.view._stage.remove(1,a.id)})});k.forEach(function(a){var d=l.unwrap(b._materialIdReferences),c=d.get(a.id);1===c?(b.view._stage.remove(3,a.id),d.delete(a.id)):d.set(a.id,c-1)});a&&this.view._stage.remove(0,e.id);this._engineResourcesAddedToStage=!1}};b.prototype._getCollisionRadius=function(a){return this._getFocusedSize(this.radius,
!0)*("touch"===a?this.touchMultiplier:1)};b.prototype._getFocusedSize=function(a,b){return a*(b?this.focusMultiplier:1)};b.prototype._getWorldToScreenObjectScale=function(){return this._worldSized?1:this.screenLocation.pixelSize};b.prototype._calculateModelTransformPosition=function(a){var b=this._getWorldToScreenObjectScale(),b=this._calculateObjectTransform(b,ca);return e.vec3.set(a,b[12],b[13],b[14])};b.prototype._calculateModelTransformOffset=function(a){var b=this._calculateModelTransformPosition(a);
return e.vec3.subtract(a,b,this.renderLocation)};b.prototype._calculateObjectTransform=function(a,b){u.mat4.set(b,a,0,0,0,0,a,0,0,0,0,a,0,0,0,0,1);this._worldFrame&&u.mat4.multiply(b,b,this._worldFrame);u.mat4.multiply(b,b,this._modelTransform);b[12]+=this.renderLocation[0];b[13]+=this.renderLocation[1];b[14]+=this.renderLocation[2];b[15]=1;l.isSome(this._applyObjectTransform)&&this._applyObjectTransform(b);return b};Object.defineProperty(b.prototype,"test",{get:function(){var a=!1;if(l.isSome(this._engineResources))for(var b in this._engineResources.objectsByState){for(var c=
0,e=this._engineResources.objectsByState[b].objects;c<e.length;c++)if(e[c].isVisible){a=!0;break}if(a)break}return{areAnyResourcesVisible:a}},enumerable:!0,configurable:!0});return b}();C.Manipulator3D=B;var ba=q.createScreenPointArray(),J=n.lineSegment.create(),A=n.ray.create(),K=S.mat3f64.create(),ca=v.mat4f64.create(),x=v.mat4f64.create(),y=n.plane.create(),H=p.vec3f64.create(),I=p.vec3f64.create(),N=p.vec3f64.create(),L=p.vec3f64.create(),M=p.vec3f64.create(),aa=p.vec3f64.create(),O=new t.Point({x:0,
y:0,z:0,spatialReference:null})});