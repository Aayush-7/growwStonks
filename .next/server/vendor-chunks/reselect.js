"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/reselect";
exports.ids = ["vendor-chunks/reselect"];
exports.modules = {

/***/ "(ssr)/./node_modules/reselect/lib/defaultMemoize.js":
/*!*****************************************************!*\
  !*** ./node_modules/reselect/lib/defaultMemoize.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.createCacheKeyComparator = createCacheKeyComparator;\nexports.defaultEqualityCheck = void 0;\nexports.defaultMemoize = defaultMemoize;\n// Cache implementation based on Erik Rasmussen's `lru-memoize`:\n// https://github.com/erikras/lru-memoize\nvar NOT_FOUND = 'NOT_FOUND';\n\nfunction createSingletonCache(equals) {\n  var entry;\n  return {\n    get: function get(key) {\n      if (entry && equals(entry.key, key)) {\n        return entry.value;\n      }\n\n      return NOT_FOUND;\n    },\n    put: function put(key, value) {\n      entry = {\n        key: key,\n        value: value\n      };\n    },\n    getEntries: function getEntries() {\n      return entry ? [entry] : [];\n    },\n    clear: function clear() {\n      entry = undefined;\n    }\n  };\n}\n\nfunction createLruCache(maxSize, equals) {\n  var entries = [];\n\n  function get(key) {\n    var cacheIndex = entries.findIndex(function (entry) {\n      return equals(key, entry.key);\n    }); // We found a cached entry\n\n    if (cacheIndex > -1) {\n      var entry = entries[cacheIndex]; // Cached entry not at top of cache, move it to the top\n\n      if (cacheIndex > 0) {\n        entries.splice(cacheIndex, 1);\n        entries.unshift(entry);\n      }\n\n      return entry.value;\n    } // No entry found in cache, return sentinel\n\n\n    return NOT_FOUND;\n  }\n\n  function put(key, value) {\n    if (get(key) === NOT_FOUND) {\n      // TODO Is unshift slow?\n      entries.unshift({\n        key: key,\n        value: value\n      });\n\n      if (entries.length > maxSize) {\n        entries.pop();\n      }\n    }\n  }\n\n  function getEntries() {\n    return entries;\n  }\n\n  function clear() {\n    entries = [];\n  }\n\n  return {\n    get: get,\n    put: put,\n    getEntries: getEntries,\n    clear: clear\n  };\n}\n\nvar defaultEqualityCheck = function defaultEqualityCheck(a, b) {\n  return a === b;\n};\n\nexports.defaultEqualityCheck = defaultEqualityCheck;\n\nfunction createCacheKeyComparator(equalityCheck) {\n  return function areArgumentsShallowlyEqual(prev, next) {\n    if (prev === null || next === null || prev.length !== next.length) {\n      return false;\n    } // Do this in a for loop (and not a `forEach` or an `every`) so we can determine equality as fast as possible.\n\n\n    var length = prev.length;\n\n    for (var i = 0; i < length; i++) {\n      if (!equalityCheck(prev[i], next[i])) {\n        return false;\n      }\n    }\n\n    return true;\n  };\n}\n\n// defaultMemoize now supports a configurable cache size with LRU behavior,\n// and optional comparison of the result value with existing values\nfunction defaultMemoize(func, equalityCheckOrOptions) {\n  var providedOptions = typeof equalityCheckOrOptions === 'object' ? equalityCheckOrOptions : {\n    equalityCheck: equalityCheckOrOptions\n  };\n  var _providedOptions$equa = providedOptions.equalityCheck,\n      equalityCheck = _providedOptions$equa === void 0 ? defaultEqualityCheck : _providedOptions$equa,\n      _providedOptions$maxS = providedOptions.maxSize,\n      maxSize = _providedOptions$maxS === void 0 ? 1 : _providedOptions$maxS,\n      resultEqualityCheck = providedOptions.resultEqualityCheck;\n  var comparator = createCacheKeyComparator(equalityCheck);\n  var cache = maxSize === 1 ? createSingletonCache(comparator) : createLruCache(maxSize, comparator); // we reference arguments instead of spreading them for performance reasons\n\n  function memoized() {\n    var value = cache.get(arguments);\n\n    if (value === NOT_FOUND) {\n      // @ts-ignore\n      value = func.apply(null, arguments);\n\n      if (resultEqualityCheck) {\n        var entries = cache.getEntries();\n        var matchingEntry = entries.find(function (entry) {\n          return resultEqualityCheck(entry.value, value);\n        });\n\n        if (matchingEntry) {\n          value = matchingEntry.value;\n        }\n      }\n\n      cache.put(arguments, value);\n    }\n\n    return value;\n  }\n\n  memoized.clearCache = function () {\n    return cache.clear();\n  };\n\n  return memoized;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVzZWxlY3QvbGliL2RlZmF1bHRNZW1vaXplLmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViLDhDQUE2QztBQUM3QztBQUNBLENBQUMsRUFBQztBQUNGLGdDQUFnQztBQUNoQyw0QkFBNEI7QUFDNUIsc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUssR0FBRzs7QUFFUjtBQUNBLHVDQUF1Qzs7QUFFdkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNOzs7QUFHTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw0QkFBNEI7O0FBRTVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7O0FBR047O0FBRUEsb0JBQW9CLFlBQVk7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNHQUFzRzs7QUFFdEc7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2dyb3d3LXN0b25rcy1zcmMvLi9ub2RlX21vZHVsZXMvcmVzZWxlY3QvbGliL2RlZmF1bHRNZW1vaXplLmpzP2E1M2UiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmNyZWF0ZUNhY2hlS2V5Q29tcGFyYXRvciA9IGNyZWF0ZUNhY2hlS2V5Q29tcGFyYXRvcjtcbmV4cG9ydHMuZGVmYXVsdEVxdWFsaXR5Q2hlY2sgPSB2b2lkIDA7XG5leHBvcnRzLmRlZmF1bHRNZW1vaXplID0gZGVmYXVsdE1lbW9pemU7XG4vLyBDYWNoZSBpbXBsZW1lbnRhdGlvbiBiYXNlZCBvbiBFcmlrIFJhc211c3NlbidzIGBscnUtbWVtb2l6ZWA6XG4vLyBodHRwczovL2dpdGh1Yi5jb20vZXJpa3Jhcy9scnUtbWVtb2l6ZVxudmFyIE5PVF9GT1VORCA9ICdOT1RfRk9VTkQnO1xuXG5mdW5jdGlvbiBjcmVhdGVTaW5nbGV0b25DYWNoZShlcXVhbHMpIHtcbiAgdmFyIGVudHJ5O1xuICByZXR1cm4ge1xuICAgIGdldDogZnVuY3Rpb24gZ2V0KGtleSkge1xuICAgICAgaWYgKGVudHJ5ICYmIGVxdWFscyhlbnRyeS5rZXksIGtleSkpIHtcbiAgICAgICAgcmV0dXJuIGVudHJ5LnZhbHVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gTk9UX0ZPVU5EO1xuICAgIH0sXG4gICAgcHV0OiBmdW5jdGlvbiBwdXQoa2V5LCB2YWx1ZSkge1xuICAgICAgZW50cnkgPSB7XG4gICAgICAgIGtleToga2V5LFxuICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgIH07XG4gICAgfSxcbiAgICBnZXRFbnRyaWVzOiBmdW5jdGlvbiBnZXRFbnRyaWVzKCkge1xuICAgICAgcmV0dXJuIGVudHJ5ID8gW2VudHJ5XSA6IFtdO1xuICAgIH0sXG4gICAgY2xlYXI6IGZ1bmN0aW9uIGNsZWFyKCkge1xuICAgICAgZW50cnkgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMcnVDYWNoZShtYXhTaXplLCBlcXVhbHMpIHtcbiAgdmFyIGVudHJpZXMgPSBbXTtcblxuICBmdW5jdGlvbiBnZXQoa2V5KSB7XG4gICAgdmFyIGNhY2hlSW5kZXggPSBlbnRyaWVzLmZpbmRJbmRleChmdW5jdGlvbiAoZW50cnkpIHtcbiAgICAgIHJldHVybiBlcXVhbHMoa2V5LCBlbnRyeS5rZXkpO1xuICAgIH0pOyAvLyBXZSBmb3VuZCBhIGNhY2hlZCBlbnRyeVxuXG4gICAgaWYgKGNhY2hlSW5kZXggPiAtMSkge1xuICAgICAgdmFyIGVudHJ5ID0gZW50cmllc1tjYWNoZUluZGV4XTsgLy8gQ2FjaGVkIGVudHJ5IG5vdCBhdCB0b3Agb2YgY2FjaGUsIG1vdmUgaXQgdG8gdGhlIHRvcFxuXG4gICAgICBpZiAoY2FjaGVJbmRleCA+IDApIHtcbiAgICAgICAgZW50cmllcy5zcGxpY2UoY2FjaGVJbmRleCwgMSk7XG4gICAgICAgIGVudHJpZXMudW5zaGlmdChlbnRyeSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBlbnRyeS52YWx1ZTtcbiAgICB9IC8vIE5vIGVudHJ5IGZvdW5kIGluIGNhY2hlLCByZXR1cm4gc2VudGluZWxcblxuXG4gICAgcmV0dXJuIE5PVF9GT1VORDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHB1dChrZXksIHZhbHVlKSB7XG4gICAgaWYgKGdldChrZXkpID09PSBOT1RfRk9VTkQpIHtcbiAgICAgIC8vIFRPRE8gSXMgdW5zaGlmdCBzbG93P1xuICAgICAgZW50cmllcy51bnNoaWZ0KHtcbiAgICAgICAga2V5OiBrZXksXG4gICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChlbnRyaWVzLmxlbmd0aCA+IG1heFNpemUpIHtcbiAgICAgICAgZW50cmllcy5wb3AoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRFbnRyaWVzKCkge1xuICAgIHJldHVybiBlbnRyaWVzO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgZW50cmllcyA9IFtdO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQ6IGdldCxcbiAgICBwdXQ6IHB1dCxcbiAgICBnZXRFbnRyaWVzOiBnZXRFbnRyaWVzLFxuICAgIGNsZWFyOiBjbGVhclxuICB9O1xufVxuXG52YXIgZGVmYXVsdEVxdWFsaXR5Q2hlY2sgPSBmdW5jdGlvbiBkZWZhdWx0RXF1YWxpdHlDaGVjayhhLCBiKSB7XG4gIHJldHVybiBhID09PSBiO1xufTtcblxuZXhwb3J0cy5kZWZhdWx0RXF1YWxpdHlDaGVjayA9IGRlZmF1bHRFcXVhbGl0eUNoZWNrO1xuXG5mdW5jdGlvbiBjcmVhdGVDYWNoZUtleUNvbXBhcmF0b3IoZXF1YWxpdHlDaGVjaykge1xuICByZXR1cm4gZnVuY3Rpb24gYXJlQXJndW1lbnRzU2hhbGxvd2x5RXF1YWwocHJldiwgbmV4dCkge1xuICAgIGlmIChwcmV2ID09PSBudWxsIHx8IG5leHQgPT09IG51bGwgfHwgcHJldi5sZW5ndGggIT09IG5leHQubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSAvLyBEbyB0aGlzIGluIGEgZm9yIGxvb3AgKGFuZCBub3QgYSBgZm9yRWFjaGAgb3IgYW4gYGV2ZXJ5YCkgc28gd2UgY2FuIGRldGVybWluZSBlcXVhbGl0eSBhcyBmYXN0IGFzIHBvc3NpYmxlLlxuXG5cbiAgICB2YXIgbGVuZ3RoID0gcHJldi5sZW5ndGg7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoIWVxdWFsaXR5Q2hlY2socHJldltpXSwgbmV4dFtpXSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9O1xufVxuXG4vLyBkZWZhdWx0TWVtb2l6ZSBub3cgc3VwcG9ydHMgYSBjb25maWd1cmFibGUgY2FjaGUgc2l6ZSB3aXRoIExSVSBiZWhhdmlvcixcbi8vIGFuZCBvcHRpb25hbCBjb21wYXJpc29uIG9mIHRoZSByZXN1bHQgdmFsdWUgd2l0aCBleGlzdGluZyB2YWx1ZXNcbmZ1bmN0aW9uIGRlZmF1bHRNZW1vaXplKGZ1bmMsIGVxdWFsaXR5Q2hlY2tPck9wdGlvbnMpIHtcbiAgdmFyIHByb3ZpZGVkT3B0aW9ucyA9IHR5cGVvZiBlcXVhbGl0eUNoZWNrT3JPcHRpb25zID09PSAnb2JqZWN0JyA/IGVxdWFsaXR5Q2hlY2tPck9wdGlvbnMgOiB7XG4gICAgZXF1YWxpdHlDaGVjazogZXF1YWxpdHlDaGVja09yT3B0aW9uc1xuICB9O1xuICB2YXIgX3Byb3ZpZGVkT3B0aW9ucyRlcXVhID0gcHJvdmlkZWRPcHRpb25zLmVxdWFsaXR5Q2hlY2ssXG4gICAgICBlcXVhbGl0eUNoZWNrID0gX3Byb3ZpZGVkT3B0aW9ucyRlcXVhID09PSB2b2lkIDAgPyBkZWZhdWx0RXF1YWxpdHlDaGVjayA6IF9wcm92aWRlZE9wdGlvbnMkZXF1YSxcbiAgICAgIF9wcm92aWRlZE9wdGlvbnMkbWF4UyA9IHByb3ZpZGVkT3B0aW9ucy5tYXhTaXplLFxuICAgICAgbWF4U2l6ZSA9IF9wcm92aWRlZE9wdGlvbnMkbWF4UyA9PT0gdm9pZCAwID8gMSA6IF9wcm92aWRlZE9wdGlvbnMkbWF4UyxcbiAgICAgIHJlc3VsdEVxdWFsaXR5Q2hlY2sgPSBwcm92aWRlZE9wdGlvbnMucmVzdWx0RXF1YWxpdHlDaGVjaztcbiAgdmFyIGNvbXBhcmF0b3IgPSBjcmVhdGVDYWNoZUtleUNvbXBhcmF0b3IoZXF1YWxpdHlDaGVjayk7XG4gIHZhciBjYWNoZSA9IG1heFNpemUgPT09IDEgPyBjcmVhdGVTaW5nbGV0b25DYWNoZShjb21wYXJhdG9yKSA6IGNyZWF0ZUxydUNhY2hlKG1heFNpemUsIGNvbXBhcmF0b3IpOyAvLyB3ZSByZWZlcmVuY2UgYXJndW1lbnRzIGluc3RlYWQgb2Ygc3ByZWFkaW5nIHRoZW0gZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnNcblxuICBmdW5jdGlvbiBtZW1vaXplZCgpIHtcbiAgICB2YXIgdmFsdWUgPSBjYWNoZS5nZXQoYXJndW1lbnRzKTtcblxuICAgIGlmICh2YWx1ZSA9PT0gTk9UX0ZPVU5EKSB7XG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICB2YWx1ZSA9IGZ1bmMuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcblxuICAgICAgaWYgKHJlc3VsdEVxdWFsaXR5Q2hlY2spIHtcbiAgICAgICAgdmFyIGVudHJpZXMgPSBjYWNoZS5nZXRFbnRyaWVzKCk7XG4gICAgICAgIHZhciBtYXRjaGluZ0VudHJ5ID0gZW50cmllcy5maW5kKGZ1bmN0aW9uIChlbnRyeSkge1xuICAgICAgICAgIHJldHVybiByZXN1bHRFcXVhbGl0eUNoZWNrKGVudHJ5LnZhbHVlLCB2YWx1ZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChtYXRjaGluZ0VudHJ5KSB7XG4gICAgICAgICAgdmFsdWUgPSBtYXRjaGluZ0VudHJ5LnZhbHVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNhY2hlLnB1dChhcmd1bWVudHMsIHZhbHVlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBtZW1vaXplZC5jbGVhckNhY2hlID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBjYWNoZS5jbGVhcigpO1xuICB9O1xuXG4gIHJldHVybiBtZW1vaXplZDtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/reselect/lib/defaultMemoize.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/reselect/lib/index.js":
/*!********************************************!*\
  !*** ./node_modules/reselect/lib/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.createSelector = void 0;\nexports.createSelectorCreator = createSelectorCreator;\nexports.createStructuredSelector = void 0;\nObject.defineProperty(exports, \"defaultEqualityCheck\", ({\n  enumerable: true,\n  get: function get() {\n    return _defaultMemoize.defaultEqualityCheck;\n  }\n}));\nObject.defineProperty(exports, \"defaultMemoize\", ({\n  enumerable: true,\n  get: function get() {\n    return _defaultMemoize.defaultMemoize;\n  }\n}));\n\nvar _defaultMemoize = __webpack_require__(/*! ./defaultMemoize */ \"(ssr)/./node_modules/reselect/lib/defaultMemoize.js\");\n\nfunction getDependencies(funcs) {\n  var dependencies = Array.isArray(funcs[0]) ? funcs[0] : funcs;\n\n  if (!dependencies.every(function (dep) {\n    return typeof dep === 'function';\n  })) {\n    var dependencyTypes = dependencies.map(function (dep) {\n      return typeof dep === 'function' ? \"function \" + (dep.name || 'unnamed') + \"()\" : typeof dep;\n    }).join(', ');\n    throw new Error(\"createSelector expects all input-selectors to be functions, but received the following types: [\" + dependencyTypes + \"]\");\n  }\n\n  return dependencies;\n}\n\nfunction createSelectorCreator(memoize) {\n  for (var _len = arguments.length, memoizeOptionsFromArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n    memoizeOptionsFromArgs[_key - 1] = arguments[_key];\n  }\n\n  var createSelector = function createSelector() {\n    for (var _len2 = arguments.length, funcs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {\n      funcs[_key2] = arguments[_key2];\n    }\n\n    var _recomputations = 0;\n\n    var _lastResult; // Due to the intricacies of rest params, we can't do an optional arg after `...funcs`.\n    // So, start by declaring the default value here.\n    // (And yes, the words 'memoize' and 'options' appear too many times in this next sequence.)\n\n\n    var directlyPassedOptions = {\n      memoizeOptions: undefined\n    }; // Normally, the result func or \"output selector\" is the last arg\n\n    var resultFunc = funcs.pop(); // If the result func is actually an _object_, assume it's our options object\n\n    if (typeof resultFunc === 'object') {\n      directlyPassedOptions = resultFunc; // and pop the real result func off\n\n      resultFunc = funcs.pop();\n    }\n\n    if (typeof resultFunc !== 'function') {\n      throw new Error(\"createSelector expects an output function after the inputs, but received: [\" + typeof resultFunc + \"]\");\n    } // Determine which set of options we're using. Prefer options passed directly,\n    // but fall back to options given to createSelectorCreator.\n\n\n    var _directlyPassedOption = directlyPassedOptions,\n        _directlyPassedOption2 = _directlyPassedOption.memoizeOptions,\n        memoizeOptions = _directlyPassedOption2 === void 0 ? memoizeOptionsFromArgs : _directlyPassedOption2; // Simplifying assumption: it's unlikely that the first options arg of the provided memoizer\n    // is an array. In most libs I've looked at, it's an equality function or options object.\n    // Based on that, if `memoizeOptions` _is_ an array, we assume it's a full\n    // user-provided array of options. Otherwise, it must be just the _first_ arg, and so\n    // we wrap it in an array so we can apply it.\n\n    var finalMemoizeOptions = Array.isArray(memoizeOptions) ? memoizeOptions : [memoizeOptions];\n    var dependencies = getDependencies(funcs);\n    var memoizedResultFunc = memoize.apply(void 0, [function recomputationWrapper() {\n      _recomputations++; // apply arguments instead of spreading for performance.\n\n      return resultFunc.apply(null, arguments);\n    }].concat(finalMemoizeOptions)); // If a selector is called with the exact same arguments we don't need to traverse our dependencies again.\n\n    var selector = memoize(function dependenciesChecker() {\n      var params = [];\n      var length = dependencies.length;\n\n      for (var i = 0; i < length; i++) {\n        // apply arguments instead of spreading and mutate a local list of params for performance.\n        // @ts-ignore\n        params.push(dependencies[i].apply(null, arguments));\n      } // apply arguments instead of spreading for performance.\n\n\n      _lastResult = memoizedResultFunc.apply(null, params);\n      return _lastResult;\n    });\n    Object.assign(selector, {\n      resultFunc: resultFunc,\n      memoizedResultFunc: memoizedResultFunc,\n      dependencies: dependencies,\n      lastResult: function lastResult() {\n        return _lastResult;\n      },\n      recomputations: function recomputations() {\n        return _recomputations;\n      },\n      resetRecomputations: function resetRecomputations() {\n        return _recomputations = 0;\n      }\n    });\n    return selector;\n  }; // @ts-ignore\n\n\n  return createSelector;\n}\n\nvar createSelector = /* #__PURE__ */createSelectorCreator(_defaultMemoize.defaultMemoize);\nexports.createSelector = createSelector;\n\n// Manual definition of state and output arguments\nvar createStructuredSelector = function createStructuredSelector(selectors, selectorCreator) {\n  if (selectorCreator === void 0) {\n    selectorCreator = createSelector;\n  }\n\n  if (typeof selectors !== 'object') {\n    throw new Error('createStructuredSelector expects first argument to be an object ' + (\"where each property is a selector, instead received a \" + typeof selectors));\n  }\n\n  var objectKeys = Object.keys(selectors);\n  var resultSelector = selectorCreator( // @ts-ignore\n  objectKeys.map(function (key) {\n    return selectors[key];\n  }), function () {\n    for (var _len3 = arguments.length, values = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {\n      values[_key3] = arguments[_key3];\n    }\n\n    return values.reduce(function (composition, value, index) {\n      composition[objectKeys[index]] = value;\n      return composition;\n    }, {});\n  });\n  return resultSelector;\n};\n\nexports.createStructuredSelector = createStructuredSelector;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVzZWxlY3QvbGliL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViLDhDQUE2QztBQUM3QztBQUNBLENBQUMsRUFBQztBQUNGLHNCQUFzQjtBQUN0Qiw2QkFBNkI7QUFDN0IsZ0NBQWdDO0FBQ2hDLHdEQUF1RDtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQztBQUNGLGtEQUFpRDtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQzs7QUFFRixzQkFBc0IsbUJBQU8sQ0FBQyw2RUFBa0I7O0FBRWhEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDJHQUEyRyxhQUFhO0FBQ3hIO0FBQ0E7O0FBRUE7QUFDQSw0RUFBNEUsZUFBZTtBQUMzRjtBQUNBOztBQUVBOztBQUVBLHFCQUFxQjtBQUNyQjtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUCxrQ0FBa0M7O0FBRWxDO0FBQ0EsMENBQTBDOztBQUUxQztBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047OztBQUdBO0FBQ0E7QUFDQSw4R0FBOEc7QUFDOUc7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUJBQXlCOztBQUV6QjtBQUNBLEtBQUssZ0NBQWdDOztBQUVyQztBQUNBO0FBQ0E7O0FBRUEsc0JBQXNCLFlBQVk7QUFDbEM7QUFDQTtBQUNBO0FBQ0EsUUFBUTs7O0FBR1I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLOzs7QUFHTDtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCOztBQUV0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCw2RUFBNkUsZUFBZTtBQUM1RjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUssSUFBSTtBQUNULEdBQUc7QUFDSDtBQUNBOztBQUVBLGdDQUFnQyIsInNvdXJjZXMiOlsid2VicGFjazovL2dyb3d3LXN0b25rcy1zcmMvLi9ub2RlX21vZHVsZXMvcmVzZWxlY3QvbGliL2luZGV4LmpzPzA3NDUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmNyZWF0ZVNlbGVjdG9yID0gdm9pZCAwO1xuZXhwb3J0cy5jcmVhdGVTZWxlY3RvckNyZWF0b3IgPSBjcmVhdGVTZWxlY3RvckNyZWF0b3I7XG5leHBvcnRzLmNyZWF0ZVN0cnVjdHVyZWRTZWxlY3RvciA9IHZvaWQgMDtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImRlZmF1bHRFcXVhbGl0eUNoZWNrXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9kZWZhdWx0TWVtb2l6ZS5kZWZhdWx0RXF1YWxpdHlDaGVjaztcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJkZWZhdWx0TWVtb2l6ZVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfZGVmYXVsdE1lbW9pemUuZGVmYXVsdE1lbW9pemU7XG4gIH1cbn0pO1xuXG52YXIgX2RlZmF1bHRNZW1vaXplID0gcmVxdWlyZShcIi4vZGVmYXVsdE1lbW9pemVcIik7XG5cbmZ1bmN0aW9uIGdldERlcGVuZGVuY2llcyhmdW5jcykge1xuICB2YXIgZGVwZW5kZW5jaWVzID0gQXJyYXkuaXNBcnJheShmdW5jc1swXSkgPyBmdW5jc1swXSA6IGZ1bmNzO1xuXG4gIGlmICghZGVwZW5kZW5jaWVzLmV2ZXJ5KGZ1bmN0aW9uIChkZXApIHtcbiAgICByZXR1cm4gdHlwZW9mIGRlcCA9PT0gJ2Z1bmN0aW9uJztcbiAgfSkpIHtcbiAgICB2YXIgZGVwZW5kZW5jeVR5cGVzID0gZGVwZW5kZW5jaWVzLm1hcChmdW5jdGlvbiAoZGVwKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIGRlcCA9PT0gJ2Z1bmN0aW9uJyA/IFwiZnVuY3Rpb24gXCIgKyAoZGVwLm5hbWUgfHwgJ3VubmFtZWQnKSArIFwiKClcIiA6IHR5cGVvZiBkZXA7XG4gICAgfSkuam9pbignLCAnKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJjcmVhdGVTZWxlY3RvciBleHBlY3RzIGFsbCBpbnB1dC1zZWxlY3RvcnMgdG8gYmUgZnVuY3Rpb25zLCBidXQgcmVjZWl2ZWQgdGhlIGZvbGxvd2luZyB0eXBlczogW1wiICsgZGVwZW5kZW5jeVR5cGVzICsgXCJdXCIpO1xuICB9XG5cbiAgcmV0dXJuIGRlcGVuZGVuY2llcztcbn1cblxuZnVuY3Rpb24gY3JlYXRlU2VsZWN0b3JDcmVhdG9yKG1lbW9pemUpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIG1lbW9pemVPcHRpb25zRnJvbUFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIG1lbW9pemVPcHRpb25zRnJvbUFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgdmFyIGNyZWF0ZVNlbGVjdG9yID0gZnVuY3Rpb24gY3JlYXRlU2VsZWN0b3IoKSB7XG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBmdW5jcyA9IG5ldyBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgZnVuY3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICB2YXIgX3JlY29tcHV0YXRpb25zID0gMDtcblxuICAgIHZhciBfbGFzdFJlc3VsdDsgLy8gRHVlIHRvIHRoZSBpbnRyaWNhY2llcyBvZiByZXN0IHBhcmFtcywgd2UgY2FuJ3QgZG8gYW4gb3B0aW9uYWwgYXJnIGFmdGVyIGAuLi5mdW5jc2AuXG4gICAgLy8gU28sIHN0YXJ0IGJ5IGRlY2xhcmluZyB0aGUgZGVmYXVsdCB2YWx1ZSBoZXJlLlxuICAgIC8vIChBbmQgeWVzLCB0aGUgd29yZHMgJ21lbW9pemUnIGFuZCAnb3B0aW9ucycgYXBwZWFyIHRvbyBtYW55IHRpbWVzIGluIHRoaXMgbmV4dCBzZXF1ZW5jZS4pXG5cblxuICAgIHZhciBkaXJlY3RseVBhc3NlZE9wdGlvbnMgPSB7XG4gICAgICBtZW1vaXplT3B0aW9uczogdW5kZWZpbmVkXG4gICAgfTsgLy8gTm9ybWFsbHksIHRoZSByZXN1bHQgZnVuYyBvciBcIm91dHB1dCBzZWxlY3RvclwiIGlzIHRoZSBsYXN0IGFyZ1xuXG4gICAgdmFyIHJlc3VsdEZ1bmMgPSBmdW5jcy5wb3AoKTsgLy8gSWYgdGhlIHJlc3VsdCBmdW5jIGlzIGFjdHVhbGx5IGFuIF9vYmplY3RfLCBhc3N1bWUgaXQncyBvdXIgb3B0aW9ucyBvYmplY3RcblxuICAgIGlmICh0eXBlb2YgcmVzdWx0RnVuYyA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGRpcmVjdGx5UGFzc2VkT3B0aW9ucyA9IHJlc3VsdEZ1bmM7IC8vIGFuZCBwb3AgdGhlIHJlYWwgcmVzdWx0IGZ1bmMgb2ZmXG5cbiAgICAgIHJlc3VsdEZ1bmMgPSBmdW5jcy5wb3AoKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHJlc3VsdEZ1bmMgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcImNyZWF0ZVNlbGVjdG9yIGV4cGVjdHMgYW4gb3V0cHV0IGZ1bmN0aW9uIGFmdGVyIHRoZSBpbnB1dHMsIGJ1dCByZWNlaXZlZDogW1wiICsgdHlwZW9mIHJlc3VsdEZ1bmMgKyBcIl1cIik7XG4gICAgfSAvLyBEZXRlcm1pbmUgd2hpY2ggc2V0IG9mIG9wdGlvbnMgd2UncmUgdXNpbmcuIFByZWZlciBvcHRpb25zIHBhc3NlZCBkaXJlY3RseSxcbiAgICAvLyBidXQgZmFsbCBiYWNrIHRvIG9wdGlvbnMgZ2l2ZW4gdG8gY3JlYXRlU2VsZWN0b3JDcmVhdG9yLlxuXG5cbiAgICB2YXIgX2RpcmVjdGx5UGFzc2VkT3B0aW9uID0gZGlyZWN0bHlQYXNzZWRPcHRpb25zLFxuICAgICAgICBfZGlyZWN0bHlQYXNzZWRPcHRpb24yID0gX2RpcmVjdGx5UGFzc2VkT3B0aW9uLm1lbW9pemVPcHRpb25zLFxuICAgICAgICBtZW1vaXplT3B0aW9ucyA9IF9kaXJlY3RseVBhc3NlZE9wdGlvbjIgPT09IHZvaWQgMCA/IG1lbW9pemVPcHRpb25zRnJvbUFyZ3MgOiBfZGlyZWN0bHlQYXNzZWRPcHRpb24yOyAvLyBTaW1wbGlmeWluZyBhc3N1bXB0aW9uOiBpdCdzIHVubGlrZWx5IHRoYXQgdGhlIGZpcnN0IG9wdGlvbnMgYXJnIG9mIHRoZSBwcm92aWRlZCBtZW1vaXplclxuICAgIC8vIGlzIGFuIGFycmF5LiBJbiBtb3N0IGxpYnMgSSd2ZSBsb29rZWQgYXQsIGl0J3MgYW4gZXF1YWxpdHkgZnVuY3Rpb24gb3Igb3B0aW9ucyBvYmplY3QuXG4gICAgLy8gQmFzZWQgb24gdGhhdCwgaWYgYG1lbW9pemVPcHRpb25zYCBfaXNfIGFuIGFycmF5LCB3ZSBhc3N1bWUgaXQncyBhIGZ1bGxcbiAgICAvLyB1c2VyLXByb3ZpZGVkIGFycmF5IG9mIG9wdGlvbnMuIE90aGVyd2lzZSwgaXQgbXVzdCBiZSBqdXN0IHRoZSBfZmlyc3RfIGFyZywgYW5kIHNvXG4gICAgLy8gd2Ugd3JhcCBpdCBpbiBhbiBhcnJheSBzbyB3ZSBjYW4gYXBwbHkgaXQuXG5cbiAgICB2YXIgZmluYWxNZW1vaXplT3B0aW9ucyA9IEFycmF5LmlzQXJyYXkobWVtb2l6ZU9wdGlvbnMpID8gbWVtb2l6ZU9wdGlvbnMgOiBbbWVtb2l6ZU9wdGlvbnNdO1xuICAgIHZhciBkZXBlbmRlbmNpZXMgPSBnZXREZXBlbmRlbmNpZXMoZnVuY3MpO1xuICAgIHZhciBtZW1vaXplZFJlc3VsdEZ1bmMgPSBtZW1vaXplLmFwcGx5KHZvaWQgMCwgW2Z1bmN0aW9uIHJlY29tcHV0YXRpb25XcmFwcGVyKCkge1xuICAgICAgX3JlY29tcHV0YXRpb25zKys7IC8vIGFwcGx5IGFyZ3VtZW50cyBpbnN0ZWFkIG9mIHNwcmVhZGluZyBmb3IgcGVyZm9ybWFuY2UuXG5cbiAgICAgIHJldHVybiByZXN1bHRGdW5jLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgfV0uY29uY2F0KGZpbmFsTWVtb2l6ZU9wdGlvbnMpKTsgLy8gSWYgYSBzZWxlY3RvciBpcyBjYWxsZWQgd2l0aCB0aGUgZXhhY3Qgc2FtZSBhcmd1bWVudHMgd2UgZG9uJ3QgbmVlZCB0byB0cmF2ZXJzZSBvdXIgZGVwZW5kZW5jaWVzIGFnYWluLlxuXG4gICAgdmFyIHNlbGVjdG9yID0gbWVtb2l6ZShmdW5jdGlvbiBkZXBlbmRlbmNpZXNDaGVja2VyKCkge1xuICAgICAgdmFyIHBhcmFtcyA9IFtdO1xuICAgICAgdmFyIGxlbmd0aCA9IGRlcGVuZGVuY2llcy5sZW5ndGg7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gYXBwbHkgYXJndW1lbnRzIGluc3RlYWQgb2Ygc3ByZWFkaW5nIGFuZCBtdXRhdGUgYSBsb2NhbCBsaXN0IG9mIHBhcmFtcyBmb3IgcGVyZm9ybWFuY2UuXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgcGFyYW1zLnB1c2goZGVwZW5kZW5jaWVzW2ldLmFwcGx5KG51bGwsIGFyZ3VtZW50cykpO1xuICAgICAgfSAvLyBhcHBseSBhcmd1bWVudHMgaW5zdGVhZCBvZiBzcHJlYWRpbmcgZm9yIHBlcmZvcm1hbmNlLlxuXG5cbiAgICAgIF9sYXN0UmVzdWx0ID0gbWVtb2l6ZWRSZXN1bHRGdW5jLmFwcGx5KG51bGwsIHBhcmFtcyk7XG4gICAgICByZXR1cm4gX2xhc3RSZXN1bHQ7XG4gICAgfSk7XG4gICAgT2JqZWN0LmFzc2lnbihzZWxlY3Rvciwge1xuICAgICAgcmVzdWx0RnVuYzogcmVzdWx0RnVuYyxcbiAgICAgIG1lbW9pemVkUmVzdWx0RnVuYzogbWVtb2l6ZWRSZXN1bHRGdW5jLFxuICAgICAgZGVwZW5kZW5jaWVzOiBkZXBlbmRlbmNpZXMsXG4gICAgICBsYXN0UmVzdWx0OiBmdW5jdGlvbiBsYXN0UmVzdWx0KCkge1xuICAgICAgICByZXR1cm4gX2xhc3RSZXN1bHQ7XG4gICAgICB9LFxuICAgICAgcmVjb21wdXRhdGlvbnM6IGZ1bmN0aW9uIHJlY29tcHV0YXRpb25zKCkge1xuICAgICAgICByZXR1cm4gX3JlY29tcHV0YXRpb25zO1xuICAgICAgfSxcbiAgICAgIHJlc2V0UmVjb21wdXRhdGlvbnM6IGZ1bmN0aW9uIHJlc2V0UmVjb21wdXRhdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiBfcmVjb21wdXRhdGlvbnMgPSAwO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBzZWxlY3RvcjtcbiAgfTsgLy8gQHRzLWlnbm9yZVxuXG5cbiAgcmV0dXJuIGNyZWF0ZVNlbGVjdG9yO1xufVxuXG52YXIgY3JlYXRlU2VsZWN0b3IgPSAvKiAjX19QVVJFX18gKi9jcmVhdGVTZWxlY3RvckNyZWF0b3IoX2RlZmF1bHRNZW1vaXplLmRlZmF1bHRNZW1vaXplKTtcbmV4cG9ydHMuY3JlYXRlU2VsZWN0b3IgPSBjcmVhdGVTZWxlY3RvcjtcblxuLy8gTWFudWFsIGRlZmluaXRpb24gb2Ygc3RhdGUgYW5kIG91dHB1dCBhcmd1bWVudHNcbnZhciBjcmVhdGVTdHJ1Y3R1cmVkU2VsZWN0b3IgPSBmdW5jdGlvbiBjcmVhdGVTdHJ1Y3R1cmVkU2VsZWN0b3Ioc2VsZWN0b3JzLCBzZWxlY3RvckNyZWF0b3IpIHtcbiAgaWYgKHNlbGVjdG9yQ3JlYXRvciA9PT0gdm9pZCAwKSB7XG4gICAgc2VsZWN0b3JDcmVhdG9yID0gY3JlYXRlU2VsZWN0b3I7XG4gIH1cblxuICBpZiAodHlwZW9mIHNlbGVjdG9ycyAhPT0gJ29iamVjdCcpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NyZWF0ZVN0cnVjdHVyZWRTZWxlY3RvciBleHBlY3RzIGZpcnN0IGFyZ3VtZW50IHRvIGJlIGFuIG9iamVjdCAnICsgKFwid2hlcmUgZWFjaCBwcm9wZXJ0eSBpcyBhIHNlbGVjdG9yLCBpbnN0ZWFkIHJlY2VpdmVkIGEgXCIgKyB0eXBlb2Ygc2VsZWN0b3JzKSk7XG4gIH1cblxuICB2YXIgb2JqZWN0S2V5cyA9IE9iamVjdC5rZXlzKHNlbGVjdG9ycyk7XG4gIHZhciByZXN1bHRTZWxlY3RvciA9IHNlbGVjdG9yQ3JlYXRvciggLy8gQHRzLWlnbm9yZVxuICBvYmplY3RLZXlzLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIHNlbGVjdG9yc1trZXldO1xuICB9KSwgZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIF9sZW4zID0gYXJndW1lbnRzLmxlbmd0aCwgdmFsdWVzID0gbmV3IEFycmF5KF9sZW4zKSwgX2tleTMgPSAwOyBfa2V5MyA8IF9sZW4zOyBfa2V5MysrKSB7XG4gICAgICB2YWx1ZXNbX2tleTNdID0gYXJndW1lbnRzW19rZXkzXTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWVzLnJlZHVjZShmdW5jdGlvbiAoY29tcG9zaXRpb24sIHZhbHVlLCBpbmRleCkge1xuICAgICAgY29tcG9zaXRpb25bb2JqZWN0S2V5c1tpbmRleF1dID0gdmFsdWU7XG4gICAgICByZXR1cm4gY29tcG9zaXRpb247XG4gICAgfSwge30pO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdFNlbGVjdG9yO1xufTtcblxuZXhwb3J0cy5jcmVhdGVTdHJ1Y3R1cmVkU2VsZWN0b3IgPSBjcmVhdGVTdHJ1Y3R1cmVkU2VsZWN0b3I7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/reselect/lib/index.js\n");

/***/ })

};
;