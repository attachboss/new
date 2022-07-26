// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","tslib","../../shaderModules/interfaces"],function(f,a,d,e){Object.defineProperty(a,"__esModule",{value:!0});a.IsNaN=function(a){var c=e.glsl(b||(b=d.__makeTemplateObject(["\n    bool isNaN( float val )\n    {\n      return ( val \x3c 0.0 || 0.0 \x3c val || val \x3d\x3d 0.0 ) ? false : true;\n      // important: some nVidias failed to cope with version below.\n      // Probably wrong optimization.\n      /*return ( val \x3c\x3d 0.0 || 0.0 \x3c\x3d val ) ? false : true;*/\n    }\n  "],
["\n    bool isNaN( float val )\n    {\n      return ( val \x3c 0.0 || 0.0 \x3c val || val \x3d\x3d 0.0 ) ? false : true;\n      // important: some nVidias failed to cope with version below.\n      // Probably wrong optimization.\n      /*return ( val \x3c\x3d 0.0 || 0.0 \x3c\x3d val ) ? false : true;*/\n    }\n  "])));a.fragment.code.add(c);a.vertex.code.add(c)};var b});