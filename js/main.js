/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/modules/appointment/appointment.js":
/*!*******************************************************!*\
  !*** ./src/blocks/modules/appointment/appointment.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_import_customSelect_customSelect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../js/import/customSelect/customSelect */ "./src/js/import/customSelect/customSelect.js");
/* harmony import */ var _js_import_customSelect_customSelect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_import_customSelect_customSelect__WEBPACK_IMPORTED_MODULE_0__);
//  *******  start castom select  ********

var select = new _js_import_customSelect_customSelect__WEBPACK_IMPORTED_MODULE_0___default.a('#select', {
  placeholder: 'Please select item',
  selectedId: '1',
  data: [{
    id: '1',
    value: 'Оберіть послугу'
  }, {
    id: '2',
    value: 'Angular'
  }, {
    id: '3',
    value: 'Vue'
  }, {
    id: '4',
    value: 'React Native'
  }, {
    id: '5',
    value: 'Next'
  }, {
    id: '6',
    value: 'Nefdsfst'
  }, {
    id: '7',
    value: 'React'
  }, {
    id: '8',
    value: 'Anfsfgular'
  }, {
    id: '9',
    value: 'Vue'
  }, {
    id: '10',
    value: 'React Native'
  }, {
    id: '11',
    value: 'Nexsdft'
  }, {
    id: '12',
    value: 'Nesfst'
  }],
  onSelect: function onSelect(item) {
    console.log('Selected Item', item);
  }
}); //  *******  end castom select  ********

document.querySelector('.contact-form__button input').addEventListener('click', function (e) {
  e.preventDefault();
});
; //  *******  start appointment fetch  ********
// const URL = 'http://localhost';
// function getAppointmentForm() {
// }
// function sendRequest(method, url, body = null) {
//     const headers = {
//         'Content-Type': 'application/json'
//     };
//     return fetch(url, {
//         method: method,
//         body: JSON.stringify(body),
//         headers: headers
//     }).then(response => {
//         if (response.ok) {
//             return response.json();
//         }
//         return response.json().then(err => {
//             const e = new Error('Щось пішло не так');
//             e.data = err;
//             throw e;
//         });
//     });
// }
// sendRequest('POST', URL, body)
//     .then(data => console.log(data))
//     .catch(data => console.log(data));
//  *******  end appointment fetch  ********

/***/ }),

/***/ "./src/blocks/modules/callbackButton/callbackButton.js":
/*!*************************************************************!*\
  !*** ./src/blocks/modules/callbackButton/callbackButton.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {var $text_call = document.querySelector('.text-call');
var $callback_bt = document.querySelector('.callback-bt');

function showHidenBackgCallbackButton() {
  $text_call.classList.toggle('text-call-hover');
  $callback_bt.classList.toggle('callback-bt-hover');
}

setInterval(showHidenBackgCallbackButton, 5000);
$('.callback-bt__modal-content input[type="submit"]').click(function (e) {
  var elements = $('.callback-bt-input, .modal-overlay__bt-input');
  e.preventDefault();
  elements.removeClass('activeModal');
});
$(document).ready(function ($) {
  var elements = $('.callback-bt-input, .modal-overlay__bt-input');
  $('.callback-bt').click(function () {
    if (!elements.hasClass('activeModal')) {
      elements.addClass('activeModal');
      setTimeout(function () {
        $('#focus').focus();
      }, 1000);
    } else {
      elements.removeClass('activeModal');
    }
  });
  $('.callback-bt__modal-content .close-modal').click(function () {
    elements.removeClass('activeModal');
  });
  $(document).keydown(function (e) {
    if (e.keyCode === 27) {
      e.stopPropagation();
      elements.removeClass('activeModal');
    }
  });
  $('.modal-overlay__bt-input').click(function (e) {
    if ($(e.target).closest('.callback-bt-input').length == 0) {
      elements.removeClass('activeModal');
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/blocks/modules/directionsOfWork/directionsOfWork.js":
/*!*****************************************************************!*\
  !*** ./src/blocks/modules/directionsOfWork/directionsOfWork.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  myFunction();
}; // Get the header


var header = document.querySelector(".header-top__section"); // Get the offset position of the navbar

var sticky = header.offsetTop; // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position

function myFunction() {
  if (window.pageYOffset > 60) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
} // mobile-btn


document.querySelector('.mobile-menu').addEventListener('click', function () {
  // document.querySelector('.header').classList.toggle('header-mobile-menu');
  document.querySelector('.bar1').classList.toggle('bar1-active');
  document.querySelector('.bar2').classList.toggle('bar2-active');
  document.querySelector('.bar3').classList.toggle('bar3-active');
  document.querySelector('.bar4').classList.toggle('bar4-active'); // document.querySelector('.mobile-menu__item').classList.toggle('mobile-menu__active');

  document.querySelector('.mobile-navigation').classList.toggle('show-m-navigation');
});

/***/ }),

/***/ "./src/blocks/modules/popupWindowAppointment/popupWindowAppointment.js":
/*!*****************************************************************************!*\
  !*** ./src/blocks/modules/popupWindowAppointment/popupWindowAppointment.js ***!
  \*****************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _js_import_customSelect_customSelect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../js/import/customSelect/customSelect */ "./src/js/import/customSelect/customSelect.js");
/* harmony import */ var _js_import_customSelect_customSelect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_import_customSelect_customSelect__WEBPACK_IMPORTED_MODULE_0__);
$(document).ready(function ($) {
  var elements = $('.modal-overlay, .modal');
  $('.header-top__btn, .link-red').click(function () {
    elements.addClass('active');
  });
  $('.close-modal').click(function () {
    elements.removeClass('active');
  });
  $(document).keydown(function (e) {
    if (e.keyCode === 27) {
      e.stopPropagation();
      elements.removeClass('active');
    }
  });
  $('.modal-overlay').click(function (e) {
    if ($(e.target).closest('.modal').length == 0) {
      elements.removeClass('active');
    }
  });
}); //  *******  start castom select  ********


var selectPopupWindow = new _js_import_customSelect_customSelect__WEBPACK_IMPORTED_MODULE_0___default.a('#selectPopupWindow', {
  placeholder: 'Please select item',
  selectedId: '1',
  data: [{
    id: '1',
    value: 'Оберіть послугу'
  }, {
    id: '2',
    value: 'Angular'
  }, {
    id: '3',
    value: 'Vue'
  }, {
    id: '4',
    value: 'React Native'
  }, {
    id: '5',
    value: 'Next'
  }, {
    id: '6',
    value: 'Nefdsfst'
  }, {
    id: '7',
    value: 'React'
  }, {
    id: '8',
    value: 'Anfsfgular'
  }, {
    id: '9',
    value: 'Vue'
  }, {
    id: '10',
    value: 'React Native'
  }, {
    id: '11',
    value: 'Nexsdft'
  }, {
    id: '12',
    value: 'Nesfst'
  }],
  onSelect: function onSelect(item) {
    console.log('Selected Item', item);
  }
}); //  *******  end castom select  ********
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/blocks/modules/preloader/preloader.js":
/*!***************************************************!*\
  !*** ./src/blocks/modules/preloader/preloader.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

;
body = addEventListener('load', function () {
  setTimeout(function () {
    var preloader = document.querySelector('#page-preloader');

    if (!preloader.classList.contains('done')) {
      preloader.classList.add('done');
    }
  }, 1000);
});

/***/ }),

/***/ "./src/blocks/modules/reviewsOfDoctors/reviewsOfDoctors.js":
/*!*****************************************************************!*\
  !*** ./src/blocks/modules/reviewsOfDoctors/reviewsOfDoctors.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function showMore() {
  var $span = document.querySelectorAll('.review__customer__text > p > span');

  var _iterator = _createForOfIteratorHelper($span),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var elm = _step.value;

      if (elm.textContent.length > 160) {
        var arrText = elm.textContent;
        var arrShort = arrText.slice(0, 120);
        var $p = elm.parentElement;
        $p.innerHTML = "<span>\u2014 \"".concat(arrShort, "\"...</span><a>\u0427\u0438\u0442\u0430\u0442\u0438 \u043F\u043E\u0432\u043D\u0456\u0441\u0442\u044E ></a>");
        showAllText(arrText, arrShort, $p);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  function showAllText(arrText, arrShort, $p) {
    $p.lastChild.addEventListener('click', function (e) {
      var reviewItem = document.querySelectorAll('.review__item');
      var currentItem;

      var _iterator2 = _createForOfIteratorHelper(reviewItem),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          item = _step2.value;

          if (!item.classList.contains('openReview')) {
            normalHeightItem = item.offsetHeight;
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      if (e.target.tagName === 'A') {
        if (e.target.textContent === 'Читати повністю >') {
          e.target.textContent = '< Сховати';
          e.target.previousElementSibling.textContent = "\u2014 \"".concat(arrText, "\"");
          currentItem = e.target.parentElement.parentElement.parentElement.parentElement.parentElement;
          currentItem.classList.toggle('openReview');
        } else {
          e.target.textContent = 'Читати повністю >';
          e.target.previousElementSibling.textContent = "\u2014 \"".concat(arrShort, "...\"");
          currentItem = e.target.parentElement.parentElement.parentElement.parentElement.parentElement;
          currentItem.classList.toggle('openReview');
          normalHeightItem = 'auto';
        }
      }

      leveTheHeight(normalHeightItem, currentItem);
    });
  }

  function leveTheHeight(normalHeightItem) {
    var reviewItem = document.querySelectorAll('.review__item');

    var _iterator3 = _createForOfIteratorHelper(reviewItem),
        _step3;

    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        item = _step3.value;

        if (!item.classList.contains('openReview')) {
          if (typeof normalHeightItem == 'number') {
            item.style.height = normalHeightItem + 'px';
          } else {
            item.style.height = normalHeightItem;
          }
        } else {
          item.style.height = 'auto';
        }
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
  }
}

showMore();

/***/ }),

/***/ "./src/js/import/customSelect/customSelect.js":
/*!****************************************************!*\
  !*** ./src/js/import/customSelect/customSelect.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var getTemplate = function getTemplate() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var placeholder = arguments.length > 1 ? arguments[1] : undefined;
  var selectedId = arguments.length > 2 ? arguments[2] : undefined;
  var text = placeholder !== null && placeholder !== void 0 ? placeholder : 'placeholder default';
  var items = data.map(function (item) {
    var cls = '';

    if (item.id === selectedId) {
      text = item.value;
      cls = 'selected';
    }

    return "\n               <li class=\"select__item ".concat(cls, "\" data-type=\"item\" data-id=\"").concat(item.id, "\">").concat(item.value, "</li>\n           ");
  });
  return "\n    <div class=\"select__backdrop\" data-type=\"backdrop\" ></div>\n    <div class=\"select__input\" data-type=\"input\">\n    <span data-type=\"value\">".concat(text, "</span>\n    <i class=\"fas fa-chevron-down\" data-type=\"arrow\"></i>\n   </div>\n   <div class=\"select__dropdown\">\n       <ul class=\"select__list\">\n       ").concat(items.join(''), "\n       </ul>\n   </div>\n    ");
};

var Select = /*#__PURE__*/function () {
  function Select(selector, options) {
    _classCallCheck(this, Select);

    this.$el = document.querySelector(selector);
    this.options = options;
    this.selectedId = options.selectedId;
    this.render();
    this.setup();
  }

  _createClass(Select, [{
    key: "render",
    value: function render() {
      var _this$options = this.options,
          placeholder = _this$options.placeholder,
          data = _this$options.data;
      this.$el.classList.add('select');
      this.$el.innerHTML = getTemplate(data, placeholder, this.selectedId);
    }
  }, {
    key: "setup",
    value: function setup() {
      this.clickHandler = this.clickHandler.bind(this);
      this.$el.addEventListener('click', this.clickHandler);
      this.$arrow = this.$el.querySelector('[data-type="arrow"]');
      this.$value = this.$el.querySelector('[data-type="value"]');
    }
  }, {
    key: "clickHandler",
    value: function clickHandler(event) {
      var type = event.target.dataset.type;

      if (type === 'input') {
        this.toggle();
      } else if (type === 'item') {
        var id = event.target.dataset.id;
        this.select(id);
        this.close();
      } else if (type === 'backdrop') {
        this.close();
      }
    }
  }, {
    key: "select",
    value: function select(id) {
      this.selectedId = id;
      this.$value.textContent = this.current.value;
      this.$el.querySelectorAll("[data-type=\"item\"]").forEach(function (el) {
        el.classList.remove('selected');
      });
      this.$el.querySelector("[data-id=\"".concat(id, "\"]")).classList.add('selected');
      this.options.onSelect ? this.options.onSelect(this.current) : null;
    }
  }, {
    key: "toggle",
    value: function toggle() {
      this.isOpen ? this.close() : this.open();
    }
  }, {
    key: "open",
    value: function open() {
      this.$el.classList.add('open');
      this.$arrow.classList.remove('fa-chevron-down');
      this.$arrow.classList.add('fa-chevron-up');
    }
  }, {
    key: "close",
    value: function close() {
      this.$el.classList.remove('open');
      this.$arrow.classList.add('fa-chevron-down');
      this.$arrow.classList.remove('fa-chevron-up');
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.$el.removeEventListener('click', this.clickHandler);
      this.$el.innerHTML = '';
    }
  }, {
    key: "isOpen",
    get: function get() {
      return this.$el.classList.contains('open');
    }
  }, {
    key: "current",
    get: function get() {
      var _this = this;

      return this.options.data.find(function (item) {
        return item.id === _this.selectedId;
      });
    }
  }]);

  return Select;
}();

module.exports = Select;

/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_directionsOfWork_directionsOfWork__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/directionsOfWork/directionsOfWork */ "./src/blocks/modules/directionsOfWork/directionsOfWork.js");
/* harmony import */ var _modules_directionsOfWork_directionsOfWork__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_directionsOfWork_directionsOfWork__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_reviewsOfDoctors_reviewsOfDoctors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/reviewsOfDoctors/reviewsOfDoctors */ "./src/blocks/modules/reviewsOfDoctors/reviewsOfDoctors.js");
/* harmony import */ var _modules_reviewsOfDoctors_reviewsOfDoctors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_reviewsOfDoctors_reviewsOfDoctors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_appointment_appointment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/appointment/appointment */ "./src/blocks/modules/appointment/appointment.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _modules_preloader_preloader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! %modules%/preloader/preloader */ "./src/blocks/modules/preloader/preloader.js");
/* harmony import */ var _modules_preloader_preloader__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_modules_preloader_preloader__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _modules_popupWindowAppointment_popupWindowAppointment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! %modules%/popupWindowAppointment/popupWindowAppointment */ "./src/blocks/modules/popupWindowAppointment/popupWindowAppointment.js");
/* harmony import */ var _modules_callbackButton_callbackButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! %modules%/callbackButton/callbackButton */ "./src/blocks/modules/callbackButton/callbackButton.js");
/* harmony import */ var _modules_callbackButton_callbackButton__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_modules_callbackButton_callbackButton__WEBPACK_IMPORTED_MODULE_7__);









/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");


/***/ })

/******/ });
//# sourceMappingURL=main.js.map