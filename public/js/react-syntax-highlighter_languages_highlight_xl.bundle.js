(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_xl"],{

/***/ "./node_modules/highlight.js/lib/languages/xl.js":
/*!*******************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/xl.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(hljs) {\n  var BUILTIN_MODULES =\n    'ObjectLoader Animate MovieCredits Slides Filters Shading Materials LensFlare Mapping VLCAudioVideo ' +\n    'StereoDecoder PointCloud NetworkAccess RemoteControl RegExp ChromaKey Snowfall NodeJS Speech Charts';\n\n  var XL_KEYWORDS = {\n    keyword:\n      'if then else do while until for loop import with is as where when by data constant ' +\n      'integer real text name boolean symbol infix prefix postfix block tree',\n    literal:\n      'true false nil',\n    built_in:\n      'in mod rem and or xor not abs sign floor ceil sqrt sin cos tan asin ' +\n      'acos atan exp expm1 log log2 log10 log1p pi at text_length text_range ' +\n      'text_find text_replace contains page slide basic_slide title_slide ' +\n      'title subtitle fade_in fade_out fade_at clear_color color line_color ' +\n      'line_width texture_wrap texture_transform texture scale_?x scale_?y ' +\n      'scale_?z? translate_?x translate_?y translate_?z? rotate_?x rotate_?y ' +\n      'rotate_?z? rectangle circle ellipse sphere path line_to move_to ' +\n      'quad_to curve_to theme background contents locally time mouse_?x ' +\n      'mouse_?y mouse_buttons ' +\n      BUILTIN_MODULES\n  };\n\n  var DOUBLE_QUOTE_TEXT = {\n    className: 'string',\n    begin: '\"', end: '\"', illegal: '\\\\n'\n  };\n  var SINGLE_QUOTE_TEXT = {\n    className: 'string',\n    begin: '\\'', end: '\\'', illegal: '\\\\n'\n  };\n  var LONG_TEXT = {\n    className: 'string',\n    begin: '<<', end: '>>'\n  };\n  var BASED_NUMBER = {\n    className: 'number',\n    begin: '[0-9]+#[0-9A-Z_]+(\\\\.[0-9-A-Z_]+)?#?([Ee][+-]?[0-9]+)?'\n  };\n  var IMPORT = {\n    beginKeywords: 'import', end: '$',\n    keywords: XL_KEYWORDS,\n    contains: [DOUBLE_QUOTE_TEXT]\n  };\n  var FUNCTION_DEFINITION = {\n    className: 'function',\n    begin: /[a-z][^\\n]*->/, returnBegin: true, end: /->/,\n    contains: [\n      hljs.inherit(hljs.TITLE_MODE, {starts: {\n        endsWithParent: true,\n        keywords: XL_KEYWORDS\n      }})\n    ]\n  };\n  return {\n    aliases: ['tao'],\n    lexemes: /[a-zA-Z][a-zA-Z0-9_?]*/,\n    keywords: XL_KEYWORDS,\n    contains: [\n    hljs.C_LINE_COMMENT_MODE,\n    hljs.C_BLOCK_COMMENT_MODE,\n    DOUBLE_QUOTE_TEXT,\n    SINGLE_QUOTE_TEXT,\n    LONG_TEXT,\n    FUNCTION_DEFINITION,\n    IMPORT,\n    BASED_NUMBER,\n    hljs.NUMBER_MODE\n    ]\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMveGwuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMveGwuanM/MjYzOSJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGhsanMpIHtcbiAgdmFyIEJVSUxUSU5fTU9EVUxFUyA9XG4gICAgJ09iamVjdExvYWRlciBBbmltYXRlIE1vdmllQ3JlZGl0cyBTbGlkZXMgRmlsdGVycyBTaGFkaW5nIE1hdGVyaWFscyBMZW5zRmxhcmUgTWFwcGluZyBWTENBdWRpb1ZpZGVvICcgK1xuICAgICdTdGVyZW9EZWNvZGVyIFBvaW50Q2xvdWQgTmV0d29ya0FjY2VzcyBSZW1vdGVDb250cm9sIFJlZ0V4cCBDaHJvbWFLZXkgU25vd2ZhbGwgTm9kZUpTIFNwZWVjaCBDaGFydHMnO1xuXG4gIHZhciBYTF9LRVlXT1JEUyA9IHtcbiAgICBrZXl3b3JkOlxuICAgICAgJ2lmIHRoZW4gZWxzZSBkbyB3aGlsZSB1bnRpbCBmb3IgbG9vcCBpbXBvcnQgd2l0aCBpcyBhcyB3aGVyZSB3aGVuIGJ5IGRhdGEgY29uc3RhbnQgJyArXG4gICAgICAnaW50ZWdlciByZWFsIHRleHQgbmFtZSBib29sZWFuIHN5bWJvbCBpbmZpeCBwcmVmaXggcG9zdGZpeCBibG9jayB0cmVlJyxcbiAgICBsaXRlcmFsOlxuICAgICAgJ3RydWUgZmFsc2UgbmlsJyxcbiAgICBidWlsdF9pbjpcbiAgICAgICdpbiBtb2QgcmVtIGFuZCBvciB4b3Igbm90IGFicyBzaWduIGZsb29yIGNlaWwgc3FydCBzaW4gY29zIHRhbiBhc2luICcgK1xuICAgICAgJ2Fjb3MgYXRhbiBleHAgZXhwbTEgbG9nIGxvZzIgbG9nMTAgbG9nMXAgcGkgYXQgdGV4dF9sZW5ndGggdGV4dF9yYW5nZSAnICtcbiAgICAgICd0ZXh0X2ZpbmQgdGV4dF9yZXBsYWNlIGNvbnRhaW5zIHBhZ2Ugc2xpZGUgYmFzaWNfc2xpZGUgdGl0bGVfc2xpZGUgJyArXG4gICAgICAndGl0bGUgc3VidGl0bGUgZmFkZV9pbiBmYWRlX291dCBmYWRlX2F0IGNsZWFyX2NvbG9yIGNvbG9yIGxpbmVfY29sb3IgJyArXG4gICAgICAnbGluZV93aWR0aCB0ZXh0dXJlX3dyYXAgdGV4dHVyZV90cmFuc2Zvcm0gdGV4dHVyZSBzY2FsZV8/eCBzY2FsZV8/eSAnICtcbiAgICAgICdzY2FsZV8/ej8gdHJhbnNsYXRlXz94IHRyYW5zbGF0ZV8/eSB0cmFuc2xhdGVfP3o/IHJvdGF0ZV8/eCByb3RhdGVfP3kgJyArXG4gICAgICAncm90YXRlXz96PyByZWN0YW5nbGUgY2lyY2xlIGVsbGlwc2Ugc3BoZXJlIHBhdGggbGluZV90byBtb3ZlX3RvICcgK1xuICAgICAgJ3F1YWRfdG8gY3VydmVfdG8gdGhlbWUgYmFja2dyb3VuZCBjb250ZW50cyBsb2NhbGx5IHRpbWUgbW91c2VfP3ggJyArXG4gICAgICAnbW91c2VfP3kgbW91c2VfYnV0dG9ucyAnICtcbiAgICAgIEJVSUxUSU5fTU9EVUxFU1xuICB9O1xuXG4gIHZhciBET1VCTEVfUVVPVEVfVEVYVCA9IHtcbiAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgIGJlZ2luOiAnXCInLCBlbmQ6ICdcIicsIGlsbGVnYWw6ICdcXFxcbidcbiAgfTtcbiAgdmFyIFNJTkdMRV9RVU9URV9URVhUID0ge1xuICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgYmVnaW46ICdcXCcnLCBlbmQ6ICdcXCcnLCBpbGxlZ2FsOiAnXFxcXG4nXG4gIH07XG4gIHZhciBMT05HX1RFWFQgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICBiZWdpbjogJzw8JywgZW5kOiAnPj4nXG4gIH07XG4gIHZhciBCQVNFRF9OVU1CRVIgPSB7XG4gICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICBiZWdpbjogJ1swLTldKyNbMC05QS1aX10rKFxcXFwuWzAtOS1BLVpfXSspPyM/KFtFZV1bKy1dP1swLTldKyk/J1xuICB9O1xuICB2YXIgSU1QT1JUID0ge1xuICAgIGJlZ2luS2V5d29yZHM6ICdpbXBvcnQnLCBlbmQ6ICckJyxcbiAgICBrZXl3b3JkczogWExfS0VZV09SRFMsXG4gICAgY29udGFpbnM6IFtET1VCTEVfUVVPVEVfVEVYVF1cbiAgfTtcbiAgdmFyIEZVTkNUSU9OX0RFRklOSVRJT04gPSB7XG4gICAgY2xhc3NOYW1lOiAnZnVuY3Rpb24nLFxuICAgIGJlZ2luOiAvW2Etel1bXlxcbl0qLT4vLCByZXR1cm5CZWdpbjogdHJ1ZSwgZW5kOiAvLT4vLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBobGpzLmluaGVyaXQoaGxqcy5USVRMRV9NT0RFLCB7c3RhcnRzOiB7XG4gICAgICAgIGVuZHNXaXRoUGFyZW50OiB0cnVlLFxuICAgICAgICBrZXl3b3JkczogWExfS0VZV09SRFNcbiAgICAgIH19KVxuICAgIF1cbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBhbGlhc2VzOiBbJ3RhbyddLFxuICAgIGxleGVtZXM6IC9bYS16QS1aXVthLXpBLVowLTlfP10qLyxcbiAgICBrZXl3b3JkczogWExfS0VZV09SRFMsXG4gICAgY29udGFpbnM6IFtcbiAgICBobGpzLkNfTElORV9DT01NRU5UX01PREUsXG4gICAgaGxqcy5DX0JMT0NLX0NPTU1FTlRfTU9ERSxcbiAgICBET1VCTEVfUVVPVEVfVEVYVCxcbiAgICBTSU5HTEVfUVVPVEVfVEVYVCxcbiAgICBMT05HX1RFWFQsXG4gICAgRlVOQ1RJT05fREVGSU5JVElPTixcbiAgICBJTVBPUlQsXG4gICAgQkFTRURfTlVNQkVSLFxuICAgIGhsanMuTlVNQkVSX01PREVcbiAgICBdXG4gIH07XG59OyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/highlight.js/lib/languages/xl.js\n");

/***/ })

}]);