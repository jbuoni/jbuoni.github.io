(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_delphi"],{

/***/ "./node_modules/highlight.js/lib/languages/delphi.js":
/*!***********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/delphi.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(hljs) {\n  var KEYWORDS =\n    'exports register file shl array record property for mod while set ally label uses raise not ' +\n    'stored class safecall var interface or private static exit index inherited to else stdcall ' +\n    'override shr asm far resourcestring finalization packed virtual out and protected library do ' +\n    'xorwrite goto near function end div overload object unit begin string on inline repeat until ' +\n    'destructor write message program with read initialization except default nil if case cdecl in ' +\n    'downto threadvar of try pascal const external constructor type public then implementation ' +\n    'finally published procedure absolute reintroduce operator as is abstract alias assembler ' +\n    'bitpacked break continue cppdecl cvar enumerator experimental platform deprecated ' +\n    'unimplemented dynamic export far16 forward generic helper implements interrupt iochecks ' +\n    'local name nodefault noreturn nostackframe oldfpccall otherwise saveregisters softfloat ' +\n    'specialize strict unaligned varargs ';\n  var COMMENT_MODES = [\n    hljs.C_LINE_COMMENT_MODE,\n    hljs.COMMENT(/\\{/, /\\}/, {relevance: 0}),\n    hljs.COMMENT(/\\(\\*/, /\\*\\)/, {relevance: 10})\n  ];\n  var DIRECTIVE = {\n    className: 'meta',\n    variants: [\n      {begin: /\\{\\$/, end: /\\}/},\n      {begin: /\\(\\*\\$/, end: /\\*\\)/}\n    ]\n  };\n  var STRING = {\n    className: 'string',\n    begin: /'/, end: /'/,\n    contains: [{begin: /''/}]\n  };\n  var CHAR_STRING = {\n    className: 'string', begin: /(#\\d+)+/\n  };\n  var CLASS = {\n    begin: hljs.IDENT_RE + '\\\\s*=\\\\s*class\\\\s*\\\\(', returnBegin: true,\n    contains: [\n      hljs.TITLE_MODE\n    ]\n  };\n  var FUNCTION = {\n    className: 'function',\n    beginKeywords: 'function constructor destructor procedure', end: /[:;]/,\n    keywords: 'function constructor|10 destructor|10 procedure|10',\n    contains: [\n      hljs.TITLE_MODE,\n      {\n        className: 'params',\n        begin: /\\(/, end: /\\)/,\n        keywords: KEYWORDS,\n        contains: [STRING, CHAR_STRING, DIRECTIVE].concat(COMMENT_MODES)\n      },\n      DIRECTIVE\n    ].concat(COMMENT_MODES)\n  };\n  return {\n    aliases: ['dpr', 'dfm', 'pas', 'pascal', 'freepascal', 'lazarus', 'lpr', 'lfm'],\n    case_insensitive: true,\n    keywords: KEYWORDS,\n    illegal: /\"|\\$[G-Zg-z]|\\/\\*|<\\/|\\|/,\n    contains: [\n      STRING, CHAR_STRING,\n      hljs.NUMBER_MODE,\n      CLASS,\n      FUNCTION,\n      DIRECTIVE\n    ].concat(COMMENT_MODES)\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvZGVscGhpLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2RlbHBoaS5qcz8xZjhhIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaGxqcykge1xuICB2YXIgS0VZV09SRFMgPVxuICAgICdleHBvcnRzIHJlZ2lzdGVyIGZpbGUgc2hsIGFycmF5IHJlY29yZCBwcm9wZXJ0eSBmb3IgbW9kIHdoaWxlIHNldCBhbGx5IGxhYmVsIHVzZXMgcmFpc2Ugbm90ICcgK1xuICAgICdzdG9yZWQgY2xhc3Mgc2FmZWNhbGwgdmFyIGludGVyZmFjZSBvciBwcml2YXRlIHN0YXRpYyBleGl0IGluZGV4IGluaGVyaXRlZCB0byBlbHNlIHN0ZGNhbGwgJyArXG4gICAgJ292ZXJyaWRlIHNociBhc20gZmFyIHJlc291cmNlc3RyaW5nIGZpbmFsaXphdGlvbiBwYWNrZWQgdmlydHVhbCBvdXQgYW5kIHByb3RlY3RlZCBsaWJyYXJ5IGRvICcgK1xuICAgICd4b3J3cml0ZSBnb3RvIG5lYXIgZnVuY3Rpb24gZW5kIGRpdiBvdmVybG9hZCBvYmplY3QgdW5pdCBiZWdpbiBzdHJpbmcgb24gaW5saW5lIHJlcGVhdCB1bnRpbCAnICtcbiAgICAnZGVzdHJ1Y3RvciB3cml0ZSBtZXNzYWdlIHByb2dyYW0gd2l0aCByZWFkIGluaXRpYWxpemF0aW9uIGV4Y2VwdCBkZWZhdWx0IG5pbCBpZiBjYXNlIGNkZWNsIGluICcgK1xuICAgICdkb3dudG8gdGhyZWFkdmFyIG9mIHRyeSBwYXNjYWwgY29uc3QgZXh0ZXJuYWwgY29uc3RydWN0b3IgdHlwZSBwdWJsaWMgdGhlbiBpbXBsZW1lbnRhdGlvbiAnICtcbiAgICAnZmluYWxseSBwdWJsaXNoZWQgcHJvY2VkdXJlIGFic29sdXRlIHJlaW50cm9kdWNlIG9wZXJhdG9yIGFzIGlzIGFic3RyYWN0IGFsaWFzIGFzc2VtYmxlciAnICtcbiAgICAnYml0cGFja2VkIGJyZWFrIGNvbnRpbnVlIGNwcGRlY2wgY3ZhciBlbnVtZXJhdG9yIGV4cGVyaW1lbnRhbCBwbGF0Zm9ybSBkZXByZWNhdGVkICcgK1xuICAgICd1bmltcGxlbWVudGVkIGR5bmFtaWMgZXhwb3J0IGZhcjE2IGZvcndhcmQgZ2VuZXJpYyBoZWxwZXIgaW1wbGVtZW50cyBpbnRlcnJ1cHQgaW9jaGVja3MgJyArXG4gICAgJ2xvY2FsIG5hbWUgbm9kZWZhdWx0IG5vcmV0dXJuIG5vc3RhY2tmcmFtZSBvbGRmcGNjYWxsIG90aGVyd2lzZSBzYXZlcmVnaXN0ZXJzIHNvZnRmbG9hdCAnICtcbiAgICAnc3BlY2lhbGl6ZSBzdHJpY3QgdW5hbGlnbmVkIHZhcmFyZ3MgJztcbiAgdmFyIENPTU1FTlRfTU9ERVMgPSBbXG4gICAgaGxqcy5DX0xJTkVfQ09NTUVOVF9NT0RFLFxuICAgIGhsanMuQ09NTUVOVCgvXFx7LywgL1xcfS8sIHtyZWxldmFuY2U6IDB9KSxcbiAgICBobGpzLkNPTU1FTlQoL1xcKFxcKi8sIC9cXCpcXCkvLCB7cmVsZXZhbmNlOiAxMH0pXG4gIF07XG4gIHZhciBESVJFQ1RJVkUgPSB7XG4gICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgdmFyaWFudHM6IFtcbiAgICAgIHtiZWdpbjogL1xce1xcJC8sIGVuZDogL1xcfS99LFxuICAgICAge2JlZ2luOiAvXFwoXFwqXFwkLywgZW5kOiAvXFwqXFwpL31cbiAgICBdXG4gIH07XG4gIHZhciBTVFJJTkcgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICBiZWdpbjogLycvLCBlbmQ6IC8nLyxcbiAgICBjb250YWluczogW3tiZWdpbjogLycnL31dXG4gIH07XG4gIHZhciBDSEFSX1NUUklORyA9IHtcbiAgICBjbGFzc05hbWU6ICdzdHJpbmcnLCBiZWdpbjogLygjXFxkKykrL1xuICB9O1xuICB2YXIgQ0xBU1MgPSB7XG4gICAgYmVnaW46IGhsanMuSURFTlRfUkUgKyAnXFxcXHMqPVxcXFxzKmNsYXNzXFxcXHMqXFxcXCgnLCByZXR1cm5CZWdpbjogdHJ1ZSxcbiAgICBjb250YWluczogW1xuICAgICAgaGxqcy5USVRMRV9NT0RFXG4gICAgXVxuICB9O1xuICB2YXIgRlVOQ1RJT04gPSB7XG4gICAgY2xhc3NOYW1lOiAnZnVuY3Rpb24nLFxuICAgIGJlZ2luS2V5d29yZHM6ICdmdW5jdGlvbiBjb25zdHJ1Y3RvciBkZXN0cnVjdG9yIHByb2NlZHVyZScsIGVuZDogL1s6O10vLFxuICAgIGtleXdvcmRzOiAnZnVuY3Rpb24gY29uc3RydWN0b3J8MTAgZGVzdHJ1Y3RvcnwxMCBwcm9jZWR1cmV8MTAnLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBobGpzLlRJVExFX01PREUsXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3BhcmFtcycsXG4gICAgICAgIGJlZ2luOiAvXFwoLywgZW5kOiAvXFwpLyxcbiAgICAgICAga2V5d29yZHM6IEtFWVdPUkRTLFxuICAgICAgICBjb250YWluczogW1NUUklORywgQ0hBUl9TVFJJTkcsIERJUkVDVElWRV0uY29uY2F0KENPTU1FTlRfTU9ERVMpXG4gICAgICB9LFxuICAgICAgRElSRUNUSVZFXG4gICAgXS5jb25jYXQoQ09NTUVOVF9NT0RFUylcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBhbGlhc2VzOiBbJ2RwcicsICdkZm0nLCAncGFzJywgJ3Bhc2NhbCcsICdmcmVlcGFzY2FsJywgJ2xhemFydXMnLCAnbHByJywgJ2xmbSddLFxuICAgIGNhc2VfaW5zZW5zaXRpdmU6IHRydWUsXG4gICAga2V5d29yZHM6IEtFWVdPUkRTLFxuICAgIGlsbGVnYWw6IC9cInxcXCRbRy1aZy16XXxcXC9cXCp8PFxcL3xcXHwvLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBTVFJJTkcsIENIQVJfU1RSSU5HLFxuICAgICAgaGxqcy5OVU1CRVJfTU9ERSxcbiAgICAgIENMQVNTLFxuICAgICAgRlVOQ1RJT04sXG4gICAgICBESVJFQ1RJVkVcbiAgICBdLmNvbmNhdChDT01NRU5UX01PREVTKVxuICB9O1xufTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/highlight.js/lib/languages/delphi.js\n");

/***/ })

}]);