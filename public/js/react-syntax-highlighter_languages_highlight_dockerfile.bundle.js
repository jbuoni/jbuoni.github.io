(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_dockerfile"],{

/***/ "./node_modules/highlight.js/lib/languages/dockerfile.js":
/*!***************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/dockerfile.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(hljs) {\n  return {\n    aliases: ['docker'],\n    case_insensitive: true,\n    keywords: 'from maintainer expose env arg user onbuild stopsignal',\n    contains: [\n      hljs.HASH_COMMENT_MODE,\n      hljs.APOS_STRING_MODE,\n      hljs.QUOTE_STRING_MODE,\n      hljs.NUMBER_MODE,\n      {\n        beginKeywords: 'run cmd entrypoint volume add copy workdir label healthcheck shell',\n        starts: {\n          end: /[^\\\\]$/,\n          subLanguage: 'bash'\n        }\n      }\n    ],\n    illegal: '</'\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvZG9ja2VyZmlsZS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9kb2NrZXJmaWxlLmpzPzQ0YjUiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihobGpzKSB7XG4gIHJldHVybiB7XG4gICAgYWxpYXNlczogWydkb2NrZXInXSxcbiAgICBjYXNlX2luc2Vuc2l0aXZlOiB0cnVlLFxuICAgIGtleXdvcmRzOiAnZnJvbSBtYWludGFpbmVyIGV4cG9zZSBlbnYgYXJnIHVzZXIgb25idWlsZCBzdG9wc2lnbmFsJyxcbiAgICBjb250YWluczogW1xuICAgICAgaGxqcy5IQVNIX0NPTU1FTlRfTU9ERSxcbiAgICAgIGhsanMuQVBPU19TVFJJTkdfTU9ERSxcbiAgICAgIGhsanMuUVVPVEVfU1RSSU5HX01PREUsXG4gICAgICBobGpzLk5VTUJFUl9NT0RFLFxuICAgICAge1xuICAgICAgICBiZWdpbktleXdvcmRzOiAncnVuIGNtZCBlbnRyeXBvaW50IHZvbHVtZSBhZGQgY29weSB3b3JrZGlyIGxhYmVsIGhlYWx0aGNoZWNrIHNoZWxsJyxcbiAgICAgICAgc3RhcnRzOiB7XG4gICAgICAgICAgZW5kOiAvW15cXFxcXSQvLFxuICAgICAgICAgIHN1Ykxhbmd1YWdlOiAnYmFzaCdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF0sXG4gICAgaWxsZWdhbDogJzwvJ1xuICB9XG59OyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/highlight.js/lib/languages/dockerfile.js\n");

/***/ })

}]);