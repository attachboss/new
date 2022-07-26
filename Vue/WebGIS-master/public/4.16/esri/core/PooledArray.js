// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","tslib","./arrayUtils","./HeapSort"],function(k,l,g,f,h){return function(){function b(a){var c=this;this.data=[];this._length=0;this._allocator=null;this._deallocator=function(){};this._shrink=function(){};this._hint=new f.PositionHint;a&&(a.initialSize&&(this.data=Array(a.initialSize)),a.allocator?(this._allocator=a.allocator,this._deallocator=a.deallocator):"deallocator"in a&&(this._deallocator=a.deallocator),a.shrink&&(this._shrink=function(){c.data.length>1.5*c.length&&
(c.data.length=Math.floor(1.1*c.length))}))}b.prototype.toArray=function(){return this.data.slice(0,this.length)};b.prototype.getItemAt=function(a){if(!(0>a||a>=this._length))return this.data[a]};Object.defineProperty(b.prototype,"length",{get:function(){return this._length},set:function(a){if(a>this._length)if(this._allocator)for(;this._length<a;)this.data[this._length++]=this._allocator(this.data[this._length]);else this._length=a;else{if(this._deallocator)for(var c=a;c<this._length;++c)this.data[c]=
this._deallocator(this.data[c]);this._length=a;this._shrink()}},enumerable:!0,configurable:!0});b.prototype.clear=function(){this.length=0};b.prototype.prune=function(){this.clear();this.data=[]};b.prototype.push=function(a){this.data[this._length++]=a};b.prototype.pushArray=function(a,c){void 0===c&&(c=a.length);for(var d=0;d<c;d++)this.data[this._length++]=a[d]};b.prototype.fill=function(a,c){for(var d=0;d<c;d++)this.data[this._length++]=a};b.prototype.pushNew=function(){this._allocator&&(this.data[this.length]=
this._allocator(this.data[this.length]));++this._length;return this.back()};b.prototype.pop=function(){if(0!==this.length){var a=this.data[this.length-1];--this.length;this._shrink();return a}};b.prototype.iterableRemoveMany=function(a){var c,d;return g.__generator(this,function(b){switch(b.label){case 0:c=[],d=0,b.label=1;case 1:if(!(d<this.length)||d>=this.length)return[3,4];0>f.indexOf(a.data,this.data[d],a.length,a._hint)&&c.push(this.data[d]);return[4];case 2:b.sent(),b.label=3;case 3:return++d,
[3,1];case 4:return this.data=c,this._length=this.data.length,[2]}})};b.prototype.remove=function(a){var c=f.indexOf(this.data,a,this.length,this._hint);if(-1!==c)return this.data.splice(c,1),--this.length,a};b.prototype.removeUnordered=function(a){a=f.removeUnordered(this.data,a,this.length,this._hint);void 0!==a&&--this.length;return a};b.prototype.removeUnorderedIndex=function(a){if(!(a>=this.length||0>a))return this.swapElements(a,this.length-1),this.pop()};b.prototype.removeUnorderedMany=function(a,
c,d){void 0===c&&(c=a.length);this.length=f.removeUnorderedMany(this.data,a,this.length,c,this._hint,d)};b.prototype.front=function(){if(0!==this.length)return this.data[0]};b.prototype.back=function(){if(0!==this.length)return this.data[this.length-1]};b.prototype.swapElements=function(a,c){var d;a>=this.length||c>=this.length||a===c||(d=[this.data[c],this.data[a]],this.data[a]=d[0],this.data[c]=d[1])};b.prototype.sort=function(a){h.sort(this.data,0,this.length,a)};b.prototype.iterableSort=function(a){return h.iterableSort(this.data,
0,this.length,a)};b.prototype.some=function(a,c){for(var d=0;d<this.length;++d)if(a.call(c,this.data[d],d,this.data))return!0;return!1};b.prototype.filterInPlace=function(a,c){for(var d=0,b=0;b<this._length;++b){var f=this.data[b];a.call(c,f,b,this.data)&&(this.data[b]=this.data[d],this.data[d]=f,d++)}if(this._deallocator)for(b=d;b<this._length;b++)this.data[b]=this._deallocator(this.data[b]);this._length=d;return this};b.prototype.forEach=function(a,c){for(var b=this.length,e=0;e<Math.min(this.length,
b);++e)a.call(c,this.data[e],e,this.data)};b.prototype.iterableForEach=function(){var a;return g.__generator(this,function(c){switch(c.label){case 0:a=0,c.label=1;case 1:return a<this.length?[4,this.data[a]]:[3,4];case 2:c.sent(),c.label=3;case 3:return++a,[3,1];case 4:return[2]}})};b.prototype.map=function(a,c){for(var b=Array(this.length),e=0;e<this.length;++e)b[e]=a.call(c,this.data[e],e,this.data);return b};b.prototype.reduce=function(a,b){for(var c=0;c<this.length;++c)b=a(b,this.data[c],c,this.data);
return b};return b}()});