(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_dust"],{

/***/ "./node_modules/highlight.js/lib/languages/dust.js":
/*!*********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/dust.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(hljs) {\n  var EXPRESSION_KEYWORDS = 'if eq ne lt lte gt gte select default math sep';\n  return {\n    aliases: ['dst'],\n    case_insensitive: true,\n    subLanguage: 'xml',\n    contains: [\n      {\n        className: 'template-tag',\n        begin: /\\{[#\\/]/, end: /\\}/, illegal: /;/,\n        contains: [\n          {\n            className: 'name',\n            begin: /[a-zA-Z\\.-]+/,\n            starts: {\n              endsWithParent: true, relevance: 0,\n              contains: [\n                hljs.QUOTE_STRING_MODE\n              ]\n            }\n          }\n        ]\n      },\n      {\n        className: 'template-variable',\n        begin: /\\{/, end: /\\}/, illegal: /;/,\n        keywords: EXPRESSION_KEYWORDS\n      }\n    ]\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvZHVzdC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9kdXN0LmpzP2Y0ZGEiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihobGpzKSB7XG4gIHZhciBFWFBSRVNTSU9OX0tFWVdPUkRTID0gJ2lmIGVxIG5lIGx0IGx0ZSBndCBndGUgc2VsZWN0IGRlZmF1bHQgbWF0aCBzZXAnO1xuICByZXR1cm4ge1xuICAgIGFsaWFzZXM6IFsnZHN0J10sXG4gICAgY2FzZV9pbnNlbnNpdGl2ZTogdHJ1ZSxcbiAgICBzdWJMYW5ndWFnZTogJ3htbCcsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAndGVtcGxhdGUtdGFnJyxcbiAgICAgICAgYmVnaW46IC9cXHtbI1xcL10vLCBlbmQ6IC9cXH0vLCBpbGxlZ2FsOiAvOy8sXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnbmFtZScsXG4gICAgICAgICAgICBiZWdpbjogL1thLXpBLVpcXC4tXSsvLFxuICAgICAgICAgICAgc3RhcnRzOiB7XG4gICAgICAgICAgICAgIGVuZHNXaXRoUGFyZW50OiB0cnVlLCByZWxldmFuY2U6IDAsXG4gICAgICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICAgICAgaGxqcy5RVU9URV9TVFJJTkdfTU9ERVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICd0ZW1wbGF0ZS12YXJpYWJsZScsXG4gICAgICAgIGJlZ2luOiAvXFx7LywgZW5kOiAvXFx9LywgaWxsZWdhbDogLzsvLFxuICAgICAgICBrZXl3b3JkczogRVhQUkVTU0lPTl9LRVlXT1JEU1xuICAgICAgfVxuICAgIF1cbiAgfTtcbn07Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/highlight.js/lib/languages/dust.js\n");

/***/ })

}]);