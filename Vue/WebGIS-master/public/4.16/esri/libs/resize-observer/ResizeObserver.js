// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
(function(p,l){"object"===typeof exports&&"undefined"!==typeof module?module.exports=l():"function"===typeof define&&define.amd?define(l):p.ResizeObserver=l()})(this,function(){function p(b,a){function c(){g&&(g=!1,b());e&&f()}function d(){y(c)}function f(){var c=Date.now();if(g){if(2>c-h)return;e=!0}else g=!0,e=!1,setTimeout(d,a);h=c}var g=!1,e=!1,h=0;return f}function l(b){for(var a=[],c=1;c<arguments.length;c++)a[c-1]=arguments[c];return a.reduce(function(a,c){return a+(parseFloat(b["border-"+
c+"-width"])||0)},0)}var r=function(){function b(a,c){var b=-1;a.some(function(a,d){return a[0]===c?(b=d,!0):!1});return b}return"undefined"!==typeof Map?Map:function(){function a(){this.__entries__=[]}Object.defineProperty(a.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0});a.prototype.get=function(a){a=b(this.__entries__,a);return(a=this.__entries__[a])&&a[1]};a.prototype.set=function(a,d){var c=b(this.__entries__,a);~c?this.__entries__[c][1]=d:this.__entries__.push([a,
d])};a.prototype.delete=function(a){var c=this.__entries__;a=b(c,a);~a&&c.splice(a,1)};a.prototype.has=function(a){return!!~b(this.__entries__,a)};a.prototype.clear=function(){this.__entries__.splice(0)};a.prototype.forEach=function(a,b){void 0===b&&(b=null);for(var c=0,d=this.__entries__;c<d.length;c++){var e=d[c];a.call(b,e[1],e[0])}};return a}()}(),q="undefined"!==typeof window&&"undefined"!==typeof document&&window.document===document,k="undefined"!==typeof global&&global.Math===Math?global:"undefined"!==
typeof self&&self.Math===Math?self:"undefined"!==typeof window&&Math===Math?window:Function("return this")(),y=function(){return"function"===typeof requestAnimationFrame?requestAnimationFrame.bind(k):function(b){return setTimeout(function(){return b(Date.now())},1E3/60)}}(),z="top right bottom left width height size weight".split(" "),A="undefined"!==typeof MutationObserver,B=function(){function b(){this.mutationEventsAdded_=this.connected_=!1;this.mutationsObserver_=null;this.observers_=[];this.onTransitionEnd_=
this.onTransitionEnd_.bind(this);this.refresh=p(this.refresh.bind(this),20)}b.prototype.addObserver=function(a){~this.observers_.indexOf(a)||this.observers_.push(a);this.connected_||this.connect_()};b.prototype.removeObserver=function(a){var c=this.observers_;a=c.indexOf(a);~a&&c.splice(a,1);!c.length&&this.connected_&&this.disconnect_()};b.prototype.refresh=function(){this.updateObservers_()&&this.refresh()};b.prototype.updateObservers_=function(){var a=this.observers_.filter(function(a){return a.gatherActive(),
a.hasActive()});a.forEach(function(a){return a.broadcastActive()});return 0<a.length};b.prototype.connect_=function(){q&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),A?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=
!0),this.connected_=!0)};b.prototype.disconnect_=function(){q&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.connected_=this.mutationEventsAdded_=!1)};b.prototype.onTransitionEnd_=function(a){a=a.propertyName;var c=void 0===
a?"":a;z.some(function(a){return!!~c.indexOf(a)})&&this.refresh()};b.getInstance=function(){this.instance_||(this.instance_=new b);return this.instance_};b.instance_=null;return b}(),t=function(b,a){for(var c=0,d=Object.keys(a);c<d.length;c++){var f=d[c];Object.defineProperty(b,f,{value:a[f],enumerable:!1,writable:!1,configurable:!0})}return b},n=function(b){return b&&b.ownerDocument&&b.ownerDocument.defaultView||k},u={x:0,y:0,width:0,height:0},C=function(){return"undefined"!==typeof SVGGraphicsElement?
function(b){return b instanceof n(b).SVGGraphicsElement}:function(b){return b instanceof n(b).SVGElement&&"function"===typeof b.getBBox}}(),D=function(){function b(a){this.broadcastHeight=this.broadcastWidth=0;this.contentRect_={x:0,y:0,width:0,height:0};this.target=a}b.prototype.isActive=function(){var a;var c=this.target;if(q)if(C(c))a=c.getBBox(),a={x:0,y:0,width:a.width,height:a.height};else{var b=c.clientWidth,f=c.clientHeight;if(b||f){var g=n(c).getComputedStyle(c);a={};for(var e=0,h=["top",
"right","bottom","left"];e<h.length;e++){var m=h[e];a[m]=parseFloat(g["padding-"+m])||0}var k=a.left+a.right,m=a.top+a.bottom,e=parseFloat(g.width)||0,h=parseFloat(g.height)||0;"border-box"===g.boxSizing&&(Math.round(e+k)!==b&&(e-=l(g,"left","right")+k),Math.round(h+m)!==f&&(h-=l(g,"top","bottom")+m));c!==n(c).document.documentElement&&(c=Math.round(e+k)-b,f=Math.round(h+m)-f,1!==Math.abs(c)&&(e-=c),1!==Math.abs(f)&&(h-=f));a={x:a.left,y:a.top,width:e,height:h}}else a=u}else a=u;this.contentRect_=
a;return a.width!==this.broadcastWidth||a.height!==this.broadcastHeight};b.prototype.broadcastRect=function(){var a=this.contentRect_;this.broadcastWidth=a.width;this.broadcastHeight=a.height;return a};return b}(),E=function(){return function(b,a){var c=a.x,d=a.y,f=a.width;a=a.height;var g=Object.create(("undefined"!==typeof DOMRectReadOnly?DOMRectReadOnly:Object).prototype);t(g,{x:c,y:d,width:f,height:a,top:d,right:c+f,bottom:a+d,left:c});t(this,{target:b,contentRect:g})}}(),F=function(){function b(a,
b,d){this.activeObservations_=[];this.observations_=new r;if("function"!==typeof a)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=a;this.controller_=b;this.callbackCtx_=d}b.prototype.observe=function(a){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!==typeof Element&&Element instanceof Object){if(!(a instanceof n(a).Element))throw new TypeError('parameter 1 is not of type "Element".');var b=this.observations_;
b.has(a)||(b.set(a,new D(a)),this.controller_.addObserver(this),this.controller_.refresh())}};b.prototype.unobserve=function(a){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!==typeof Element&&Element instanceof Object){if(!(a instanceof n(a).Element))throw new TypeError('parameter 1 is not of type "Element".');var b=this.observations_;b.has(a)&&(b.delete(a),b.size||this.controller_.removeObserver(this))}};b.prototype.disconnect=function(){this.clearActive();
this.observations_.clear();this.controller_.removeObserver(this)};b.prototype.gatherActive=function(){var a=this;this.clearActive();this.observations_.forEach(function(b){b.isActive()&&a.activeObservations_.push(b)})};b.prototype.broadcastActive=function(){if(this.hasActive()){var a=this.callbackCtx_,b=this.activeObservations_.map(function(a){return new E(a.target,a.broadcastRect())});this.callback_.call(a,b,a);this.clearActive()}};b.prototype.clearActive=function(){this.activeObservations_.splice(0)};
b.prototype.hasActive=function(){return 0<this.activeObservations_.length};return b}(),v="undefined"!==typeof WeakMap?new WeakMap:new r,w=function(){function b(a){if(!(this instanceof b))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var c=B.getInstance(),c=new F(a,c,this);v.set(this,c)}return b}();["observe","unobserve","disconnect"].forEach(function(b){w.prototype[b]=function(){var a;return(a=v.get(this))[b].apply(a,
arguments)}});var x;x="undefined"!==typeof k.ResizeObserver?k.ResizeObserver:w;return x});