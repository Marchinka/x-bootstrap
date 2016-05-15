/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _testElement = __webpack_require__(1);

	var _testElement2 = _interopRequireDefault(_testElement);

	var _base = __webpack_require__(2);

	var _base2 = _interopRequireDefault(_base);

	var _utils = __webpack_require__(3);

	var _utils2 = _interopRequireDefault(_utils);

	var _elementBase = __webpack_require__(5);

	var _elementBase2 = _interopRequireDefault(_elementBase);

	var _dropdownOption = __webpack_require__(6);

	var _dropdownOption2 = _interopRequireDefault(_dropdownOption);

	var _additionalInfo = __webpack_require__(7);

	var _additionalInfo2 = _interopRequireDefault(_additionalInfo);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	if (!window.$) {
		throw new Error("JQuery must be loaded as a dependency, as long as Underscore.js, Bootstrap.js and x-tag-core.js.");
	}

	if (!window._) {
		throw new Error("Underscore.js must be loaded as a dependency, as long as JQuery, Bootstrap.js and x-tag-core.js.");
	}

	if (!window.xtag) {
		throw new Error("x-tag-core.js must be loaded as a dependency, as long as JQuery, Underscore.js and Bootstrap.js.");
	}

	var protoTag = _utils2.default.extend(_testElement2.default).from(_base2.default);

	xtag.register('dropdown-option', _utils2.default.extend(_dropdownOption2.default).from(_elementBase2.default));

	xtag.register('additional-info', _utils2.default.extend(_additionalInfo2.default).from(_elementBase2.default));

	xtag.register('x-clock', protoTag);

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  lifecycle: {
	    created: function created() {
	      this.start();
	    }
	  },
	  methods: {
	    start: function start() {
	      this.update();
	      this.xtag.interval = setInterval(this.update.bind(this), 1000);
	    }
	  },
	  events: {
	    tap: function tap() {
	      if (this.xtag.interval) this.stop();else this.start();
	    }
	  }
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  methods: {
	    stop: function stop() {
	      this.xtag.interval = clearInterval(this.xtag.interval);
	    },
	    update: function update() {
	      this.textContent = new Date().toLocaleTimeString();
	    }
	  }
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extender = __webpack_require__(4);

	var _extender2 = _interopRequireDefault(_extender);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  extend: function extend(element) {
	    return new _extender2.default(element);
	  }
	};

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Extender = function () {
		function Extender(elementToExtend) {
			_classCallCheck(this, Extender);

			this.elementToExtend = elementToExtend;
		}

		_createClass(Extender, [{
			key: "from",
			value: function from(baseElement) {
				var target = _.clone(this.elementToExtend);
				var source = _.clone(baseElement);
				var lifecycle = _(target.lifecycle || {}).extend(source.lifecycle || {});
				var accessors = _(target.accessors || {}).extend(source.accessors || {});
				var methods = _(target.methods || {}).extend(source.methods || {});
				var events = _(target.events || {}).extend(source.events || {});
				var result = {
					lifecycle: lifecycle,
					accessors: accessors,
					methods: methods,
					events: events
				};
				return result;
				return xtag.merge(source, this.target);;
			}
		}]);

		return Extender;
	}();

	exports.default = Extender;

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		methods: {
			getRenderingRoot: function getRenderingRoot() {
				// Could be used for shadow dom
				return this;
			},
			selectInRenderingRoot: function selectInRenderingRoot(selector) {
				return this.getRenderingRoot().querySelector(selector);
			}
		}
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var template = function template(data) {
	    return '<li><a class="selectable">' + data.value + '</a></li>';
	};

	exports.default = {
	    accessors: {
	        key: {
	            attribute: {},
	            get: function get() {
	                return this.getAttribute('key') || '';
	            },
	            set: function set(data) {
	                this.xtag.data.key = data;
	            }
	        },
	        value: {
	            attribute: {},
	            get: function get() {
	                return this.getAttribute('value') || '';
	            },
	            set: function set(data) {
	                this.xtag.data.value = data;
	            }
	        }
	    },
	    lifecycle: {
	        created: function created() {
	            this.render();
	        },
	        attributeChanged: function attributeChanged(attributeName) {
	            this.render();
	        }
	    },
	    methods: {
	        render: function render() {
	            var data = {
	                value: this.value
	            };
	            this.getRenderingRoot().innerHTML = template(data);
	        }
	    }
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    accessors: {
	        field: {
	            attribute: {},
	            get: function get() {
	                return this.getAttribute('field');
	            },
	            set: function set(value) {
	                this.xtag.data.field = value;
	            }
	        },
	        value: {
	            attribute: {},
	            get: function get() {
	                return this.getAttribute('value');
	            },
	            set: function set(data) {
	                this.xtag.data.value = data;
	            }
	        },
	        valueOf: {
	            attribute: {},
	            get: function get() {
	                return this.getAttribute('value-of');
	            },
	            set: function set(data) {
	                this.xtag.data.valueOf = data;
	            }
	        }
	    },
	    methods: {
	        getData: function getData() {
	            if (!this.field) {
	                throw new Error("Attribute 'field' must be defined");
	            }
	            var data = {};
	            if (this.valueOf) {
	                var functionInWindow = window[this.valueOf];
	                if (functionInWindow) {
	                    var result = functionInWindow();
	                    data[this.field] = result;
	                } else {
	                    throw new Error("Not valid function name in 'value-of' property");
	                }
	            } else {
	                data[this.field] = this.value;
	            }
	            return data;
	        }
	    }
	};

/***/ }
/******/ ]);