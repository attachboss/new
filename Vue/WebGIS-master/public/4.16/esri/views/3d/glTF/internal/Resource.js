// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../../core/compilerUtils ../../../../core/promiseUtils ../../../../core/string ../../../../core/urlUtils ../../../../core/urlUtils ../../../../core/Version ../../../../core/libs/gl-matrix-2/mat4 ../../../../core/libs/gl-matrix-2/mat4f64 ../../../../core/libs/gl-matrix-2/quat ../../../../core/libs/gl-matrix-2/quatf64 ./BinaryStreamReader ./fillDefaults ./pathUtils ../../support/buffer/BufferView ../../support/buffer/utils".split(" "),function(z,A,f,E,B,F,G,v,C,q,
w,H,I,D,x,J,h,y){function K(a){switch(a.componentType){case 5120:return new h.BufferViewVec2i8(a.raw,a.byteOffset,a.byteStride,a.byteOffset+a.byteStride*a.entryCount);case 5121:return new h.BufferViewVec2u8(a.raw,a.byteOffset,a.byteStride,a.byteOffset+a.byteStride*a.entryCount);case 5122:return new h.BufferViewVec2i16(a.raw,a.byteOffset,a.byteStride,a.byteOffset+a.byteStride*a.entryCount);case 5123:return new h.BufferViewVec2u16(a.raw,a.byteOffset,a.byteStride,a.byteOffset+a.byteStride*a.entryCount);
case 5125:return new h.BufferViewVec2u32(a.raw,a.byteOffset,a.byteStride,a.byteOffset+a.byteStride*a.entryCount);case 5126:return new h.BufferViewVec2f(a.raw,a.byteOffset,a.byteStride,a.byteOffset+a.byteStride*a.entryCount);default:E.neverReached(a.componentType)}}function L(a){return f.__awaiter(this,void 0,void 0,function(){return f.__generator(this,function(e){return[2,B.create(function(e,b){var d=new Blob([a]),c=new FileReader;c.onload=function(){e(JSON.parse(c.result))};c.onerror=function(e){b(e)};
c.readAsText(d)})]})})}function M(a,e){return f.__awaiter(this,void 0,void 0,function(){return f.__generator(this,function(c){return[2,B.create(function(b,d){var c=new Blob([a],{type:e}),g=URL.createObjectURL(c),k=new Image;k.addEventListener("load",function(){URL.revokeObjectURL(g);"decode"in k?k.decode().then(function(){return b(k)},function(){return b(k)}):b(k)});k.addEventListener("error",function(b){URL.revokeObjectURL(g);d(b)});k.src=g})]})})}var p;Object.defineProperty(A,"__esModule",{value:!0});
z=function(){function a(e,c,b,d,a){this.context=e;this.errorContext=c;this.uri=b;this.json=d;this.glbBuffer=a;this.bufferCache=new Map;this.textureCache=new Map;this.materialCache=new Map;this.nodeParentMap=new Map;this.nodeTransformCache=new Map;this.baseUri=J.splitURI(this.uri).dirPart;this.checkVersionSupported();this.checkRequiredExtensionsSupported();c.errorUnsupportedIf(null==d.scenes,"Scenes must be defined.");c.errorUnsupportedIf(null==d.meshes,"Meshes must be defined");c.errorUnsupportedIf(null==
d.nodes,"Nodes must be defined.");this.computeNodeParents()}a.load=function(e,c,b,d){return f.__awaiter(this,void 0,void 0,function(){var l,g,k,h,m,n;return f.__generator(this,function(f){switch(f.label){case 0:if(v.isDataProtocol(b)){l=v.dataComponents(b);if("model/gltf-binary"!==l.mediaType)try{return g=JSON.parse(l.isBase64?atob(l.data):l.data),[2,new a(e,c,b,g)]}catch(R){}k=v.dataToArrayBuffer(b);if(a.isGLBData(k))return[2,this.fromGLBData(e,c,b,k)]}return F.endsWith(b,".gltf")?[4,e.loadJSON(b,
d)]:[3,2];case 1:return h=f.sent(),[2,new a(e,c,b,h)];case 2:return[4,e.loadBinary(b,d)];case 3:return m=f.sent(),a.isGLBData(m)?[2,this.fromGLBData(e,c,b,m)]:[4,e.loadJSON(b,d)];case 4:return n=f.sent(),[2,new a(e,c,b,n)]}})})};a.isGLBData=function(e){e=new D.BinaryStreamReader(e);return 4<=e.remainingBytes()&&1179937895===e.readUint32()};a.fromGLBData=function(e,c,b,d){return f.__awaiter(this,void 0,void 0,function(){var l;return f.__generator(this,function(g){switch(g.label){case 0:return[4,a.parseGLBData(c,
d)];case 1:return l=g.sent(),[2,new a(e,c,b,l.json,l.binaryData)]}})})};a.parseGLBData=function(e,a){return f.__awaiter(this,void 0,void 0,function(){var b,d,c,g,k,h,m,n,r;return f.__generator(this,function(l){switch(l.label){case 0:b=new D.BinaryStreamReader(a),e.assert(12<=b.remainingBytes(),"GLB binary data is insufficiently large."),d=b.readUint32(),c=b.readUint32(),g=b.readUint32(),e.assert(1179937895===d,"Magic first 4 bytes do not fit to expected GLB value."),e.assert(a.byteLength>=g,"GLB binary data is smaller than header specifies."),
e.errorUnsupportedIf(2!==c,"An unsupported GLB container version was detected. Only version 2 is supported."),k=0,l.label=1;case 1:if(!(8<=b.remainingBytes()))return[3,5];n=b.readUint32();r=b.readUint32();if(0!==k)return[3,3];e.assert(1313821514===r,"First GLB chunk must be JSON.");e.assert(0<=n,"No JSON data found.");return[4,L(b.readUint8Array(n))];case 2:return h=l.sent(),[3,4];case 3:1===k?(e.errorUnsupportedIf(5130562!==r,"Second GLB chunk expected to be BIN."),m=b.readUint8Array(n)):e.warnUnsupported("More than 2 GLB chunks detected. Skipping."),
l.label=4;case 4:return k+=1,[3,1];case 5:return h||e.error("No GLB JSON chunk detected."),[2,{json:h,binaryData:m}]}})})};a.prototype.getBuffer=function(e,a){return f.__awaiter(this,void 0,void 0,function(){var b,d,c,g;return f.__generator(this,function(l){switch(l.label){case 0:return b=this.json.buffers[e],d=this.errorContext,null==b.uri?(d.assert(null!=this.glbBuffer,"GLB buffer not present"),[2,this.glbBuffer]):(c=this.bufferCache.get(e))?[3,2]:[4,this.context.loadBinary(this.resolveUri(b.uri),
a)];case 1:g=l.sent(),c=new Uint8Array(g),this.bufferCache.set(e,c),d.assert(c.byteLength===b.byteLength,"Buffer byte lengths should match."),l.label=2;case 2:return[2,c]}})})};a.prototype.getAccessor=function(e,a){return f.__awaiter(this,void 0,void 0,function(){var b,d,c,g,k,h,m,n;return f.__generator(this,function(l){switch(l.label){case 0:return b=this.json.accessors[e],d=this.errorContext,d.errorUnsupportedIf(null==b.bufferView,"Some accessor does not specify a bufferView."),d.errorUnsupportedIf(b.type in
["MAT2","MAT3","MAT4"],"AttributeType "+b.type+" is not supported"),c=this.json.bufferViews[b.bufferView],[4,this.getBuffer(c.buffer,a)];case 1:return g=l.sent(),k=N[b.type],h=O[b.componentType],m=k*h,n=c.byteStride||m,[2,{raw:g.buffer,byteStride:n,byteOffset:g.byteOffset+(c.byteOffset||0)+(b.byteOffset||0),entryCount:b.count,isDenselyPacked:n===m,componentCount:k,componentByteSize:h,componentType:b.componentType,min:b.min,max:b.max,normalized:!!b.normalized}]}})})};a.prototype.getIndexData=function(e,
a){return f.__awaiter(this,void 0,void 0,function(){var b;return f.__generator(this,function(d){switch(d.label){case 0:return null==e.indices?[2,null]:[4,this.getAccessor(e.indices,a)];case 1:b=d.sent();if(b.isDenselyPacked)switch(b.componentType){case 5121:return[2,new Uint8Array(b.raw,b.byteOffset,b.entryCount)];case 5123:return[2,new Uint16Array(b.raw,b.byteOffset,b.entryCount)];case 5125:return[2,new Uint32Array(b.raw,b.byteOffset,b.entryCount)]}else switch(b.componentType){case 5121:return[2,
y.scalar.makeDense(this.wrapAccessor(h.BufferViewUint8,b))];case 5123:return[2,y.scalar.makeDense(this.wrapAccessor(h.BufferViewUint16,b))];case 5125:return[2,y.scalar.makeDense(this.wrapAccessor(h.BufferViewUint32,b))]}return[2,void 0]}})})};a.prototype.getPositionData=function(e,a){return f.__awaiter(this,void 0,void 0,function(){var b,d;return f.__generator(this,function(c){switch(c.label){case 0:return b=this.errorContext,b.errorUnsupportedIf(null==e.attributes.POSITION,"No POSITION vertex data found."),
[4,this.getAccessor(e.attributes.POSITION,a)];case 1:return d=c.sent(),b.errorUnsupportedIf(5126!==d.componentType,"Expected type FLOAT for POSITION vertex attribute, but found "+t[d.componentType]),b.errorUnsupportedIf(3!==d.componentCount,"POSITION vertex attribute must have 3 components, but found "+d.componentCount.toFixed()),[2,this.wrapAccessor(h.BufferViewVec3f,d)]}})})};a.prototype.getNormalData=function(e,a){return f.__awaiter(this,void 0,void 0,function(){var b,d;return f.__generator(this,
function(c){switch(c.label){case 0:return b=this.errorContext,b.assert(null!=e.attributes.NORMAL,"No NORMAL vertex data found."),[4,this.getAccessor(e.attributes.NORMAL,a)];case 1:return d=c.sent(),b.errorUnsupportedIf(5126!==d.componentType,"Expected type FLOAT for NORMAL vertex attribute, but found "+t[d.componentType]),b.errorUnsupportedIf(3!==d.componentCount,"NORMAL vertex attribute must have 3 components, but found "+d.componentCount.toFixed()),[2,this.wrapAccessor(h.BufferViewVec3f,d)]}})})};
a.prototype.getTangentData=function(e,a){return f.__awaiter(this,void 0,void 0,function(){var b,d;return f.__generator(this,function(c){switch(c.label){case 0:return b=this.errorContext,b.assert(null!=e.attributes.TANGENT,"No TANGENT vertex data found."),[4,this.getAccessor(e.attributes.TANGENT,a)];case 1:return d=c.sent(),b.errorUnsupportedIf(5126!==d.componentType,"Expected type FLOAT for TANGENT vertex attribute, but found "+t[d.componentType]),b.errorUnsupportedIf(4!==d.componentCount,"TANGENT vertex attribute must have 4 components, but found "+
d.componentCount.toFixed()),[2,new h.BufferViewVec4f(d.raw,d.byteOffset,d.byteStride,d.byteOffset+d.byteStride*d.entryCount)]}})})};a.prototype.getTextureCoordinates=function(e,a){return f.__awaiter(this,void 0,void 0,function(){var b,d;return f.__generator(this,function(c){switch(c.label){case 0:return b=this.errorContext,b.assert(null!=e.attributes.TEXCOORD_0,"No TEXCOORD_0 vertex data found."),[4,this.getAccessor(e.attributes.TEXCOORD_0,a)];case 1:d=c.sent();b.errorUnsupportedIf(2!==d.componentCount,
"TEXCOORD_0 vertex attribute must have 2 components, but found "+d.componentCount.toFixed());if(5126===d.componentType)return[2,this.wrapAccessor(h.BufferViewVec2f,d)];b.errorUnsupportedIf(!d.normalized,"Integer component types are only supported for a normalized accessor for TEXCOORD_0.");return[2,K(d)]}})})};a.prototype.getVertexColors=function(e,a){return f.__awaiter(this,void 0,void 0,function(){var b,d;return f.__generator(this,function(c){switch(c.label){case 0:return b=this.errorContext,b.assert(null!=
e.attributes.COLOR_0,"No COLOR_0 vertex data found."),[4,this.getAccessor(e.attributes.COLOR_0,a)];case 1:d=c.sent();b.errorUnsupportedIf(4!==d.componentCount&&3!==d.componentCount,"COLOR_0 attribute must have 3 or 4 components, but found "+d.componentCount.toFixed());if(4===d.componentCount){if(5126===d.componentType)return[2,this.wrapAccessor(h.BufferViewVec4f,d)];if(5121===d.componentType)return[2,this.wrapAccessor(h.BufferViewVec4u8,d)];if(5123===d.componentType)return[2,this.wrapAccessor(h.BufferViewVec4u16,
d)]}else if(3===d.componentCount){if(5126===d.componentType)return[2,this.wrapAccessor(h.BufferViewVec3f,d)];if(5121===d.componentType)return[2,this.wrapAccessor(h.BufferViewVec3u8,d)];if(5123===d.componentType)return[2,this.wrapAccessor(h.BufferViewVec3u16,d)]}b.errorUnsupported("Unsupported component type for COLOR_0 attribute: "+t[d.componentType]);return[2,void 0]}})})};a.prototype.hasPositions=function(e){return void 0!==e.attributes.POSITION};a.prototype.hasNormals=function(e){return void 0!==
e.attributes.NORMAL};a.prototype.hasVertexColors=function(e){return void 0!==e.attributes.COLOR_0};a.prototype.hasTextureCoordinates=function(e){return void 0!==e.attributes.TEXCOORD_0};a.prototype.hasTangents=function(e){return void 0!==e.attributes.TANGENT};a.prototype.getMaterial=function(e,a){return f.__awaiter(this,void 0,void 0,function(){var b,d,c,g,h,p,m,n,r,q,t;return f.__generator(this,function(f){switch(f.label){case 0:b=this.errorContext;if(d=this.materialCache.get(e.material))return[3,
15];c=null!=e.material?x.material(this.json.materials[e.material]):x.material();g=c.pbrMetallicRoughness;h=this.hasVertexColors(e);p=void 0;if(!g.baseColorTexture)return[3,2];b.errorUnsupportedIf(0!==(g.baseColorTexture.texCoord||0),"Only TEXCOORD with index 0 is supported.");return[4,this.getTexture(g.baseColorTexture.index,a)];case 1:p=f.sent(),f.label=2;case 2:m=void 0;if(!c.normalTexture)return[3,5];if(0===(c.normalTexture.texCoord||0))return[3,3];b.warnUnsupported("Only TEXCOORD with index 0 is supported for the normal map texture.");
return[3,5];case 3:return[4,this.getTexture(c.normalTexture.index,a)];case 4:m=f.sent(),f.label=5;case 5:n=void 0;if(!c.occlusionTexture)return[3,8];if(0===(c.occlusionTexture.texCoord||0))return[3,6];b.warnUnsupported("Only TEXCOORD with index 0 is supported for the occlusion texture.");return[3,8];case 6:return[4,this.getTexture(c.occlusionTexture.index,a)];case 7:n=f.sent(),f.label=8;case 8:r=void 0;if(!c.emissiveTexture)return[3,11];if(0===(c.emissiveTexture.texCoord||0))return[3,9];b.warnUnsupported("Only TEXCOORD with index 0 is supported for the emissive texture.");
return[3,11];case 9:return[4,this.getTexture(c.emissiveTexture.index,a)];case 10:r=f.sent(),f.label=11;case 11:q=void 0;if(!g.metallicRoughnessTexture)return[3,14];if(0===(g.metallicRoughnessTexture.texCoord||0))return[3,12];b.warnUnsupported("Only TEXCOORD with index 0 is supported for the metallicRoughness texture.");return[3,14];case 12:return[4,this.getTexture(g.metallicRoughnessTexture.index,a)];case 13:q=f.sent(),f.label=14;case 14:t=null!=e.material?e.material:-1,d={alphaMode:c.alphaMode,alphaCutoff:c.alphaCutoff,
color:g.baseColorFactor,doubleSided:!!c.doubleSided,colorTexture:p,normalTexture:m,name:c.name,id:t,occlusionTexture:n,emissiveTexture:r,emissiveFactor:c.emissiveFactor,metallicFactor:g.metallicFactor,roughnessFactor:g.roughnessFactor,metallicRoughnessTexture:q,vertexColors:h,ESRI_externalColorMixMode:c.extras.ESRI_externalColorMixMode},f.label=15;case 15:return[2,d]}})})};a.prototype.getTexture=function(a,c){return f.__awaiter(this,void 0,void 0,function(){var b,e,h,g,k,p,m,n;return f.__generator(this,
function(d){switch(d.label){case 0:b=this.errorContext;e=this.json.textures[a];h=x.textureSampler(null!=e.sampler?this.json.samplers[e.sampler]:{});b.errorUnsupportedIf(null==e.source,"Source is expected to be defined for a texture.");g=this.json.images[e.source];if(k=this.textureCache.get(a))return[3,6];p=void 0;return g.uri?[4,this.context.loadImage(this.resolveUri(g.uri),c)]:[3,2];case 1:return p=d.sent(),[3,5];case 2:return b.errorUnsupportedIf(null==g.bufferView,"Image bufferView must be defined."),
b.errorUnsupportedIf(null==g.mimeType,"Image mimeType must be defined."),m=this.json.bufferViews[g.bufferView],[4,this.getBuffer(m.buffer,c)];case 3:return n=d.sent(),b.errorUnsupportedIf(null!=m.byteStride,"byteStride not supported for image buffer"),[4,M(new Uint8Array(n.buffer,n.byteOffset+(m.byteOffset||0),m.byteLength),g.mimeType)];case 4:p=d.sent(),d.label=5;case 5:k={data:p,wrapS:h.wrapS,wrapT:h.wrapT,minFilter:h.minFilter,name:g.name,id:a},this.textureCache.set(a,k),d.label=6;case 6:return[2,
k]}})})};a.prototype.getNodeTransform=function(a){if(void 0===a)return P;var c=this.nodeTransformCache.get(a);if(!c){var c=this.getNodeTransform(this.getNodeParent(a)),b=this.json.nodes[a];if(b.matrix)c=q.mat4.multiply(w.mat4f64.create(),c,b.matrix);else if(b.translation||b.rotation||b.scale)c=w.mat4f64.clone(c),b.translation&&q.mat4.translate(c,c,b.translation),b.rotation&&(u[3]=H.quat.getAxisAngle(u,b.rotation),q.mat4.rotate(c,c,u[3],u)),b.scale&&q.mat4.scale(c,c,b.scale);this.nodeTransformCache.set(a,
c)}return c};a.prototype.wrapAccessor=function(a,c){return new a(c.raw,c.byteOffset,c.byteStride,c.byteOffset+c.byteStride*(c.entryCount-1)+c.componentByteSize*c.componentCount)};a.prototype.resolveUri=function(a){return G.makeAbsolute(a,this.baseUri)};a.prototype.getNodeParent=function(a){return this.nodeParentMap.get(a)};a.prototype.checkVersionSupported=function(){var a=C.Version.parse(this.json.asset.version,"glTF");Q.validate(a)};a.prototype.checkRequiredExtensionsSupported=function(){var a=
this.json,c=this.errorContext;a.extensionsRequired&&0!==a.extensionsRequired.length&&c.errorUnsupported("gltf loader was not able to load unsupported feature. Required extensions: "+a.extensionsRequired.join(", "))};a.prototype.computeNodeParents=function(){var a=this;this.json.nodes.forEach(function(c,b){c.children&&c.children.forEach(function(c){a.nodeParentMap.set(c,b)})})};return a}();A.Resource=z;var Q=new C.Version(2,0,"glTF"),P=q.mat4.fromXRotation(w.mat4f64.create(),Math.PI/2),u=I.quatf64.create(),
N={SCALAR:1,VEC2:2,VEC3:3,VEC4:4},O=(p={},p[5120]=1,p[5121]=1,p[5122]=2,p[5123]=2,p[5126]=4,p[5125]=4,p),t={5120:"BYTE",5121:"UNSIGNED_BYTE",5122:"SHORT",5123:"UNSIGNED_SHORT",5125:"UNSIGNED_INT",5126:"FLOAT"}});