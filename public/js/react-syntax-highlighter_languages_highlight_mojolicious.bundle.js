(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_mojolicious"],{

/***/ "./node_modules/highlight.js/lib/languages/mojolicious.js":
/*!****************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/mojolicious.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(hljs) {\n  return {\n    subLanguage: 'xml',\n    contains: [\n      {\n        className: 'meta',\n        begin: '^__(END|DATA)__$'\n      },\n    // mojolicious line\n      {\n        begin: \"^\\\\s*%{1,2}={0,2}\", end: '$',\n        subLanguage: 'perl'\n      },\n    // mojolicious block\n      {\n        begin: \"<%{1,2}={0,2}\",\n        end: \"={0,1}%>\",\n        subLanguage: 'perl',\n        excludeBegin: true,\n        excludeEnd: true\n      }\n    ]\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvbW9qb2xpY2lvdXMuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvbW9qb2xpY2lvdXMuanM/NjZiYSJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGhsanMpIHtcbiAgcmV0dXJuIHtcbiAgICBzdWJMYW5ndWFnZTogJ3htbCcsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgICAgIGJlZ2luOiAnXl9fKEVORHxEQVRBKV9fJCdcbiAgICAgIH0sXG4gICAgLy8gbW9qb2xpY2lvdXMgbGluZVxuICAgICAge1xuICAgICAgICBiZWdpbjogXCJeXFxcXHMqJXsxLDJ9PXswLDJ9XCIsIGVuZDogJyQnLFxuICAgICAgICBzdWJMYW5ndWFnZTogJ3BlcmwnXG4gICAgICB9LFxuICAgIC8vIG1vam9saWNpb3VzIGJsb2NrXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiBcIjwlezEsMn09ezAsMn1cIixcbiAgICAgICAgZW5kOiBcIj17MCwxfSU+XCIsXG4gICAgICAgIHN1Ykxhbmd1YWdlOiAncGVybCcsXG4gICAgICAgIGV4Y2x1ZGVCZWdpbjogdHJ1ZSxcbiAgICAgICAgZXhjbHVkZUVuZDogdHJ1ZVxuICAgICAgfVxuICAgIF1cbiAgfTtcbn07Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/highlight.js/lib/languages/mojolicious.js\n");

/***/ })

}]);