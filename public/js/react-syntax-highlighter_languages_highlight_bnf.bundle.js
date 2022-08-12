(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_bnf"],{

/***/ "./node_modules/highlight.js/lib/languages/bnf.js":
/*!********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/bnf.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(hljs){\n  return {\n    contains: [\n      // Attribute\n      {\n        className: 'attribute',\n        begin: /</, end: />/\n      },\n      // Specific\n      {\n        begin: /::=/,\n        starts: {\n          end: /$/,\n          contains: [\n            {\n              begin: /</, end: />/\n            },\n            // Common\n            hljs.C_LINE_COMMENT_MODE,\n            hljs.C_BLOCK_COMMENT_MODE,\n            hljs.APOS_STRING_MODE,\n            hljs.QUOTE_STRING_MODE\n          ]\n        }\n      }\n    ]\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvYm5mLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2JuZi5qcz83NWRhIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaGxqcyl7XG4gIHJldHVybiB7XG4gICAgY29udGFpbnM6IFtcbiAgICAgIC8vIEF0dHJpYnV0ZVxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdhdHRyaWJ1dGUnLFxuICAgICAgICBiZWdpbjogLzwvLCBlbmQ6IC8+L1xuICAgICAgfSxcbiAgICAgIC8vIFNwZWNpZmljXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAvOjo9LyxcbiAgICAgICAgc3RhcnRzOiB7XG4gICAgICAgICAgZW5kOiAvJC8sXG4gICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYmVnaW46IC88LywgZW5kOiAvPi9cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyBDb21tb25cbiAgICAgICAgICAgIGhsanMuQ19MSU5FX0NPTU1FTlRfTU9ERSxcbiAgICAgICAgICAgIGhsanMuQ19CTE9DS19DT01NRU5UX01PREUsXG4gICAgICAgICAgICBobGpzLkFQT1NfU1RSSU5HX01PREUsXG4gICAgICAgICAgICBobGpzLlFVT1RFX1NUUklOR19NT0RFXG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICB9XG4gICAgXVxuICB9O1xufTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/highlight.js/lib/languages/bnf.js\n");

/***/ })

}]);