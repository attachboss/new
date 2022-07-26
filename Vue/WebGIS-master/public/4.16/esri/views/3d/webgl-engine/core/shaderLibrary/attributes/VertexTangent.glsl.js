// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","tslib","../../shaderModules/interfaces"],function(h,b,c,d){Object.defineProperty(b,"__esModule",{value:!0});b.VertexTangent=function(a,b){a.varyings.add("tbnTangent","vec3");a.varyings.add("tbnBiTangent","vec3");0===b.viewingMode?a.vertex.code.add(d.glsl(e||(e=c.__makeTemplateObject(["\n      void forwardVertexTangent(vec3 n) {\n        tbnTangent \x3d normalize(cross(vec3(0.0, 0.0, 1.0), n));\n        tbnBiTangent \x3d normalize(cross(n, tbnTangent));\n      }\n    "],
["\n      void forwardVertexTangent(vec3 n) {\n        tbnTangent \x3d normalize(cross(vec3(0.0, 0.0, 1.0), n));\n        tbnBiTangent \x3d normalize(cross(n, tbnTangent));\n      }\n    "])))):a.vertex.code.add(d.glsl(f||(f=c.__makeTemplateObject(["\n      void forwardVertexTangent(vec3 n) {\n        tbnTangent \x3d vec3(1.0, 0.0, 0.0);\n        tbnBiTangent \x3d normalize(cross(n, tbnTangent));\n      }\n    "],["\n      void forwardVertexTangent(vec3 n) {\n        tbnTangent \x3d vec3(1.0, 0.0, 0.0);\n        tbnBiTangent \x3d normalize(cross(n, tbnTangent));\n      }\n    "]))));
a.fragment.code.add(d.glsl(g||(g=c.__makeTemplateObject(["\n      mat3 getTBNMatrix(vec3 n) {\n        return mat3(tbnTangent, tbnBiTangent, n);\n      }\n    "],["\n      mat3 getTBNMatrix(vec3 n) {\n        return mat3(tbnTangent, tbnBiTangent, n);\n      }\n    "]))))};var e,f,g});