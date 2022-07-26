// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","../../core/has","../../core/maybe","./ShaderTranspiler"],function(l,m,n,h,k){function g(d,b){if(h.isNone(d)||d.length!==b.length)return!0;for(var a=0;a<d.length;++a)if(d[a]!==b[a])return!0;return!1}return function(){function d(b,a,c,e,f){void 0===f&&(f={});this._glName=this._context=null;this._locations={};this._id=void 0;this._initialized=!1;this._fShader=this._vShader=null;this._defines={};this._nameToUniformLocation={};this._nameToAttribLocation={};this._nameToUniform1=
{};this._nameToUniform1v={};this._nameToUniform2={};this._nameToUniform3={};this._nameToUniform4={};this._nameToUniformMatrix3={};this._nameToUniformMatrix4={};b||console.error("RenderingContext isn't initialized!");0===a.length&&console.error("Shaders source should not be empty!");this._context=b;this._vertexShaderSource=a;this._fragmentShaderSource=c;if(Array.isArray(f))for(b=0;b<f.length;b++)this._defines[f[b]]="1";else this._defines=f;this._id=d._nextId++;this._locations=e}Object.defineProperty(d.prototype,
"id",{get:function(){return this._id},enumerable:!0,configurable:!0});Object.defineProperty(d.prototype,"glName",{get:function(){return this._glName},enumerable:!0,configurable:!0});Object.defineProperty(d.prototype,"locations",{get:function(){return this._locations},enumerable:!0,configurable:!0});d.prototype.getDefine=function(b){return this._defines[b]};d.prototype.dispose=function(){if(this._context){var b=this._context.gl;this._vShader&&(b.deleteShader(this._vShader),this._vShader=null);this._fShader&&
(b.deleteShader(this._fShader),this._fShader=null);this._glName&&(b.deleteProgram(this._glName),this._glName=null);this._context=null}};d.prototype.initialize=function(){if(!this._initialized){this._vShader=this._loadShader(35633);this._fShader=this._loadShader(35632);this._vShader&&this._fShader||console.error("Error loading shaders!");var b=this._context.gl,a=b.createProgram();b.attachShader(a,this._vShader);b.attachShader(a,this._fShader);for(var c in this._locations)b.bindAttribLocation(a,this._locations[c],
c);b.linkProgram(a);this._glName=a;this._initialized=!0}};d.prototype.getUniformLocation=function(b){this.initialize();void 0===this._nameToUniformLocation[b]&&(this._nameToUniformLocation[b]=this._context.gl.getUniformLocation(this._glName,b));return this._nameToUniformLocation[b]};d.prototype.hasUniform=function(b){return null!==this.getUniformLocation(b)};d.prototype.getAttribLocation=function(b){this.initialize();void 0===this._nameToAttribLocation[b]&&(this._nameToAttribLocation[b]=this._context.gl.getAttribLocation(this._glName,
b));return this._nameToAttribLocation[b]};d.prototype.setUniform1i=function(b,a){var c=this._nameToUniform1[b];if(void 0===c||a!==c)this._context.bindProgram(this),this._context.gl.uniform1i(this.getUniformLocation(b),a),this._nameToUniform1[b]=a};d.prototype.setUniform1iv=function(b,a){var c=this._nameToUniform1v[b];g(c,a)&&(this._context.bindProgram(this),this._context.gl.uniform1iv(this.getUniformLocation(b),a),void 0===c?this._nameToUniform1v[b]=d._arrayCopy(a):d._arrayAssign(a,c))};d.prototype.setUniform2iv=
function(b,a){var c=this._nameToUniform2[b];g(c,a)&&(this._context.bindProgram(this),this._context.gl.uniform2iv(this.getUniformLocation(b),a),void 0===c?this._nameToUniform2[b]=d._arrayCopy(a):d._arrayAssign(a,c))};d.prototype.setUniform3iv=function(b,a){var c=this._nameToUniform3[b];g(c,a)&&(this._context.bindProgram(this),this._context.gl.uniform3iv(this.getUniformLocation(b),a),void 0===c?this._nameToUniform3[b]=d._arrayCopy(a):d._arrayAssign(a,c))};d.prototype.setUniform4iv=function(b,a){var c=
this._nameToUniform4[b];g(c,a)&&(this._context.bindProgram(this),this._context.gl.uniform4iv(this.getUniformLocation(b),a),void 0===c?this._nameToUniform4[b]=d._arrayCopy(a):d._arrayAssign(a,c))};d.prototype.setUniform1f=function(b,a){var c=this._nameToUniform1[b];if(void 0===c||a!==c)this._context.bindProgram(this),this._context.gl.uniform1f(this.getUniformLocation(b),a),this._nameToUniform1[b]=a};d.prototype.setUniform1fv=function(b,a){var c=this._nameToUniform1v[b];g(c,a)&&(this._context.bindProgram(this),
this._context.gl.uniform1fv(this.getUniformLocation(b),a),void 0===c?this._nameToUniform1v[b]=d._arrayCopy(a):d._arrayAssign(a,c))};d.prototype.setUniform2f=function(b,a,c){var e=this._nameToUniform2[b];if(void 0===e||a!==e[0]||c!==e[1])this._context.bindProgram(this),this._context.gl.uniform2f(this.getUniformLocation(b),a,c),void 0===e?this._nameToUniform2[b]=[a,c]:(e[0]=a,e[1]=c)};d.prototype.setUniform2fv=function(b,a){var c=this._nameToUniform2[b];g(c,a)&&(this._context.bindProgram(this),this._context.gl.uniform2fv(this.getUniformLocation(b),
a),void 0===c?this._nameToUniform2[b]=d._arrayCopy(a):d._arrayAssign(a,c))};d.prototype.setUniform3f=function(b,a,c,e){var d=this._nameToUniform3[b];if(void 0===d||a!==d[0]||c!==d[1]||e!==d[2])this._context.bindProgram(this),this._context.gl.uniform3f(this.getUniformLocation(b),a,c,e),void 0===d?this._nameToUniform3[b]=[a,c,e]:(d[0]=a,d[1]=c,d[2]=e)};d.prototype.setUniform3fv=function(b,a){var c=this._nameToUniform3[b];g(c,a)&&(this._context.bindProgram(this),this._context.gl.uniform3fv(this.getUniformLocation(b),
a),void 0===c?this._nameToUniform3[b]=d._arrayCopy(a):d._arrayAssign(a,c))};d.prototype.setUniform4f=function(b,a,c,d,f){var e=this._nameToUniform4[b];if(void 0===e||a!==e[0]||c!==e[1]||d!==e[2]||f!==e[3])this._context.bindProgram(this),this._context.gl.uniform4f(this.getUniformLocation(b),a,c,d,f),void 0===e?this._nameToUniform4[b]=[a,c,d,f]:(e[0]=a,e[1]=c,e[2]=d,e[3]=f)};d.prototype.setUniform4fv=function(b,a){var c=this._nameToUniform4[b];g(c,a)&&(this._context.bindProgram(this),this._context.gl.uniform4fv(this.getUniformLocation(b),
a),void 0===c?this._nameToUniform4[b]=d._arrayCopy(a):d._arrayAssign(a,c))};d.prototype.setUniformMatrix3fv=function(b,a,c){void 0===c&&(c=!1);var e=this._nameToUniformMatrix3[b],f;f=h.isNone(e)?!0:9!==e.length?g(e,a):9!==e.length||e[0]!==a[0]||e[1]!==a[1]||e[2]!==a[2]||e[3]!==a[3]||e[4]!==a[4]||e[5]!==a[5]||e[6]!==a[6]||e[7]!==a[7]||e[8]!==a[8];f&&(this._context.bindProgram(this),this._context.gl.uniformMatrix3fv(this.getUniformLocation(b),c,a),void 0===e?this._nameToUniformMatrix3[b]=d._arrayCopy(a):
d._arrayAssign(a,e))};d.prototype.setUniformMatrix4fv=function(b,a,c){void 0===c&&(c=!1);var e=this._nameToUniformMatrix4[b],f;f=h.isNone(e)?!0:16!==e.length?g(e,a):16!==e.length||e[0]!==a[0]||e[1]!==a[1]||e[2]!==a[2]||e[3]!==a[3]||e[4]!==a[4]||e[5]!==a[5]||e[6]!==a[6]||e[7]!==a[7]||e[8]!==a[8]||e[9]!==a[9]||e[10]!==a[10]||e[11]!==a[11]||e[12]!==a[12]||e[13]!==a[13]||e[14]!==a[14]||e[15]!==a[15];f&&(this._context.bindProgram(this),this._context.gl.uniformMatrix4fv(this.getUniformLocation(b),c,a),
void 0===e?this._nameToUniformMatrix4[b]=d._arrayCopy(a):d._arrayAssign(a,e))};d.prototype.assertCompatibleVertexAttributeLocations=function(b){(b=b.locations===this.locations)||console.error("VertexAttributeLocations are incompatible");return b};d._padToThree=function(b){var a=b.toString();1E3>b&&(a=("  "+b).slice(-3));return a};d.prototype._addLineNumbers=function(b){var a=2;return b.replace(/\n/g,function(){return"\n"+d._padToThree(a++)+":"})};d.prototype._loadShader=function(b){var a=35633===
b,c=a?this._vertexShaderSource:this._fragmentShaderSource,d="",f;for(f in this._defines)d+="#define "+f+" "+this._defines[f]+"\n";c=d+c;"webgl2"===this._context.contextVersion&&(c=k.transpileShader(c,a?"vertex":"fragment"));a=this._context.gl;b=a.createShader(b);a.shaderSource(b,c);a.compileShader(b);return b};d._arrayCopy=function(b){for(var a=[],c=0;c<b.length;++c)a.push(b[c]);return a};d._arrayAssign=function(b,a){for(var c=0;c<b.length;++c)a[c]=b[c]};d._nextId=0;return d}()});