(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_flix"],{

/***/ "./node_modules/highlight.js/lib/languages/flix.js":
/*!*********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/flix.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (hljs) {\n\n    var CHAR = {\n        className: 'string',\n        begin: /'(.|\\\\[xXuU][a-zA-Z0-9]+)'/\n    };\n\n    var STRING = {\n        className: 'string',\n        variants: [\n            {\n                begin: '\"', end: '\"'\n            }\n        ]\n    };\n\n    var NAME = {\n        className: 'title',\n        begin: /[^0-9\\n\\t \"'(),.`{}\\[\\]:;][^\\n\\t \"'(),.`{}\\[\\]:;]+|[^0-9\\n\\t \"'(),.`{}\\[\\]:;=]/\n    };\n\n    var METHOD = {\n        className: 'function',\n        beginKeywords: 'def',\n        end: /[:={\\[(\\n;]/,\n        excludeEnd: true,\n        contains: [NAME]\n    };\n\n    return {\n        keywords: {\n            literal: 'true false',\n            keyword: 'case class def else enum if impl import in lat rel index let match namespace switch type yield with'\n        },\n        contains: [\n            hljs.C_LINE_COMMENT_MODE,\n            hljs.C_BLOCK_COMMENT_MODE,\n            CHAR,\n            STRING,\n            METHOD,\n            hljs.C_NUMBER_MODE\n        ]\n    };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvZmxpeC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9mbGl4LmpzP2ExNGUiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaGxqcykge1xuXG4gICAgdmFyIENIQVIgPSB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgICAgIGJlZ2luOiAvJygufFxcXFxbeFh1VV1bYS16QS1aMC05XSspJy9cbiAgICB9O1xuXG4gICAgdmFyIFNUUklORyA9IHtcbiAgICAgICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBiZWdpbjogJ1wiJywgZW5kOiAnXCInXG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9O1xuXG4gICAgdmFyIE5BTUUgPSB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3RpdGxlJyxcbiAgICAgICAgYmVnaW46IC9bXjAtOVxcblxcdCBcIicoKSwuYHt9XFxbXFxdOjtdW15cXG5cXHQgXCInKCksLmB7fVxcW1xcXTo7XSt8W14wLTlcXG5cXHQgXCInKCksLmB7fVxcW1xcXTo7PV0vXG4gICAgfTtcblxuICAgIHZhciBNRVRIT0QgPSB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2Z1bmN0aW9uJyxcbiAgICAgICAgYmVnaW5LZXl3b3JkczogJ2RlZicsXG4gICAgICAgIGVuZDogL1s6PXtcXFsoXFxuO10vLFxuICAgICAgICBleGNsdWRlRW5kOiB0cnVlLFxuICAgICAgICBjb250YWluczogW05BTUVdXG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGtleXdvcmRzOiB7XG4gICAgICAgICAgICBsaXRlcmFsOiAndHJ1ZSBmYWxzZScsXG4gICAgICAgICAgICBrZXl3b3JkOiAnY2FzZSBjbGFzcyBkZWYgZWxzZSBlbnVtIGlmIGltcGwgaW1wb3J0IGluIGxhdCByZWwgaW5kZXggbGV0IG1hdGNoIG5hbWVzcGFjZSBzd2l0Y2ggdHlwZSB5aWVsZCB3aXRoJ1xuICAgICAgICB9LFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgaGxqcy5DX0xJTkVfQ09NTUVOVF9NT0RFLFxuICAgICAgICAgICAgaGxqcy5DX0JMT0NLX0NPTU1FTlRfTU9ERSxcbiAgICAgICAgICAgIENIQVIsXG4gICAgICAgICAgICBTVFJJTkcsXG4gICAgICAgICAgICBNRVRIT0QsXG4gICAgICAgICAgICBobGpzLkNfTlVNQkVSX01PREVcbiAgICAgICAgXVxuICAgIH07XG59OyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/highlight.js/lib/languages/flix.js\n");

/***/ })

}]);