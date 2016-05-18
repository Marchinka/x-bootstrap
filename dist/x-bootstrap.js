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

	var _utils = __webpack_require__(1);

	var _utils2 = _interopRequireDefault(_utils);

	var _elementBase = __webpack_require__(3);

	var _elementBase2 = _interopRequireDefault(_elementBase);

	var _inputElementBase = __webpack_require__(4);

	var _inputElementBase2 = _interopRequireDefault(_inputElementBase);

	var _dropdownOption = __webpack_require__(5);

	var _dropdownOption2 = _interopRequireDefault(_dropdownOption);

	var _additionalInfo = __webpack_require__(6);

	var _additionalInfo2 = _interopRequireDefault(_additionalInfo);

	var _inputRadio = __webpack_require__(7);

	var _inputRadio2 = _interopRequireDefault(_inputRadio);

	var _inputRadioGroup = __webpack_require__(8);

	var _inputRadioGroup2 = _interopRequireDefault(_inputRadioGroup);

	var _testElement = __webpack_require__(9);

	var _testElement2 = _interopRequireDefault(_testElement);

	var _base = __webpack_require__(10);

	var _base2 = _interopRequireDefault(_base);

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

	_utils2.default.register('dropdown-option', _utils2.default.extend(_dropdownOption2.default).from(_elementBase2.default));

	_utils2.default.register('additional-info', _utils2.default.extend(_additionalInfo2.default).from(_elementBase2.default));

	_utils2.default.register('input-radio', _utils2.default.extend(_inputRadio2.default).from(_elementBase2.default));

	_utils2.default.register('input-radio-group', _utils2.default.extend(_inputRadioGroup2.default).from(_inputElementBase2.default));

	var protoTag = _utils2.default.extend(_testElement2.default).from(_base2.default);
	xtag.register('x-clock', protoTag);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extender = __webpack_require__(2);

	var _extender2 = _interopRequireDefault(_extender);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  extend: function extend(element) {
	    return new _extender2.default(element);
	  },
	  forMoUnsupported: function forMoUnsupported(action) {
	    if (!this.isBrowserSupportingMo()) {
	      action();
	    }
	  },
	  isBrowserSupportingMo: function isBrowserSupportingMo() {
	    if (!document.all) {
	      return true;
	    }
	    return false;
	  },
	  register: function register(elementName, object) {
	    return xtag.register(elementName, object);
	  }
	};

/***/ },
/* 2 */
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
				var source = _.clone(baseElement);
				var target = _.clone(this.elementToExtend);
				var lifecycle = _(source.lifecycle || {}).extend(target.lifecycle || {});
				var accessors = _(source.accessors || {}).extend(target.accessors || {});
				var methods = _(source.methods || {}).extend(target.methods || {});
				var events = _(source.events || {}).extend(target.events || {});
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
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _utils = __webpack_require__(1);

	var _utils2 = _interopRequireDefault(_utils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
		methods: {
			getRenderingRoot: function getRenderingRoot() {
				// Could be used for shadow dom
				return this;
			},
			selectInRenderingRoot: function selectInRenderingRoot(selector) {
				return this.getRenderingRoot().querySelector(selector);
			},
			raiseAttributeChanged: function raiseAttributeChanged(attributeName, oldValue, newValue) {
				if (_utils2.default.isBrowserSupportingMo()) {
					return;
				} else if (!this.changeCallback) {
					console.log("You should implement a 'changeCallback' for browsers not supporting mutation observers.");
				} else {
					this.changeCallback(attributeName, oldValue, newValue);
				}
			}
		}
	};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _utils = __webpack_require__(1);

	var _utils2 = _interopRequireDefault(_utils);

	var _elementBase = __webpack_require__(3);

	var _elementBase2 = _interopRequireDefault(_elementBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var inputElementBase = {
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
	        label: {
	            attribute: {},
	            get: function get() {
	                return this.getAttribute('label');
	            },
	            set: function set(value) {
	                this.xtag.data.label = value;
	            }
	        },
	        error: {
	            attribute: {},
	            get: function get() {
	                return this.getAttribute('error') || '';
	            },
	            set: function set(value) {
	                var old = this.xtag.data.error;
	                this.xtag.data.error = value;
	                this.raiseAttributeChanged("error", old, value);
	            }
	        },
	        errorClass: {
	            attribute: {},
	            get: function get() {
	                if (this.error) {
	                    return "form-group has-error";
	                }
	                return "form-group";
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
	        },
	        disabled: {
	            attribute: {},
	            get: function get() {
	                return this.hasAttribute('disabled');
	            },
	            set: function set(data) {
	                this.xtag.data.disabled = data;
	            }
	        }
	    },
	    methods: {
	        getData: function getData() {
	            if (!this.field) {
	                throw new Error("Attribute 'field' must be defined");
	            }
	            var data = {};
	            data[this.field] = this.value;
	            return data;
	        }
	    }
	};

	exports.default = _utils2.default.extend(inputElementBase).from(_elementBase2.default);

/***/ },
/* 5 */
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
/* 6 */
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
	                data[this.field] = this.executeFromWindow();
	            } else {
	                data[this.field] = this.value;
	            }
	            return data;
	        },
	        executeFromWindow: function executeFromWindow() {
	            var functionInWindow = window[this.valueOf];
	            if (functionInWindow) {
	                var result = functionInWindow();
	                return result;
	            } else {
	                throw new Error("Not valid function name in 'value-of' property");
	            }
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
	var template = function template(data) {
	    return '    \n\t<div class="radio">\n      <label>\n      \t<input \tname="' + data.field + '"\n      \t\t\tvalue="' + data.value + '"\n      \t\t\ttype="radio"\n      \t\t\t' + data.disabled + '\n      \t\t\t' + data.checked + '/>\n      \t\t<span class="radio-label">' + data.label + '</span>\n      \t</label>\n    </div>';
	};

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
	        label: {
	            attribute: {},
	            get: function get() {
	                return this.getAttribute('label');
	            },
	            set: function set(data) {
	                this.xtag.data.label = data;
	            }
	        },
	        checked: {
	            attribute: { boolean: true },
	            get: function get() {
	                return this.hasAttribute('checked');
	            },
	            set: function set(data) {
	                this.xtag.data.checked = data === true;
	            }
	        },
	        disabled: {
	            attribute: { boolean: true },
	            get: function get() {
	                return this.hasAttribute('disabled');
	            },
	            set: function set(data) {
	                this.xtag.data.disabled = data === true;
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
	                field: this.field,
	                value: this.value,
	                label: this.label,
	                disabled: this.disabled ? 'disabled' : '',
	                checked: this.checked ? 'checked' : ''
	            };
	            this.getRenderingRoot().innerHTML = template(data);
	        },
	        isChecked: function isChecked() {
	            var input = this.selectInRenderingRoot("input");
	            var manuallyChecked = input.checked;
	            var input = this.selectInRenderingRoot("input[checked]");
	            var defaultCheck = input ? input.checked : false;
	            return manuallyChecked || defaultCheck;
	        }
	    }
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var template = function template(data) {
	    return '    \n\t<div class="' + data.errorClass + '">\n        <label>' + data.label + '</label>\n        <div class="inner-content">\n        \t' + data.innerContent + '\n        </div>\n        <span class="help-block">\n        \t' + data.error + '\n        </span>\n    </div>';
	};

	exports.default = {
	    accessors: {
	        required: {
	            attribute: { boolean: true },
	            get: function get() {
	                return this.hasAttribute('required');
	            },
	            set: function set(data) {
	                this.xtag.data.required = data;
	            }
	        },
	        requiredMessage: {
	            attribute: {},
	            get: function get() {
	                return this.getAttribute('required-message') || '';
	            },
	            set: function set(data) {
	                this.xtag.data.requiredMessage = data;
	            }
	        }
	    },
	    lifecycle: {
	        created: function created() {
	            this.innerContent = this.innerHTML;
	            this.render();
	        },
	        attributeChanged: function attributeChanged(attributeName) {
	            this.changeCallback(attributeName);
	        }
	    },
	    methods: {
	        render: function render() {
	            var data = {
	                label: this.label,
	                error: this.error,
	                errorClass: this.errorClass,
	                innerContent: this.innerContent
	            };
	            this.getRenderingRoot().innerHTML = template(data);
	            this.innerRadios = this.getRenderingRoot().querySelectorAll("input-radio");
	            this.assignFieldAndDisabledToRadios();
	            this.checkRadioValue(this.value);
	            this.fixMultipleChecks();
	        },
	        assignFieldAndDisabledToRadios: function assignFieldAndDisabledToRadios() {
	            _.each(this.innerRadios, function (radioButton) {
	                radioButton.field = this.field;
	                radioButton.disabled = radioButton.disabled || this.disabled;
	            }, this);
	        },
	        fixMultipleChecks: function fixMultipleChecks() {
	            var checkedRadios = this.getRenderingRoot().querySelectorAll("input-radio[checked]");
	            if (checkedRadios.length < 2) {
	                return;
	            }

	            _.each(checkedRadios, function (radio) {
	                radio.checked = false;
	            });

	            _.last(checkedRadios).checked = true;
	        },
	        uncheckAllRadios: function uncheckAllRadios() {
	            _.each(this.innerRadios, function (radioButton) {
	                radioButton.checked = false;
	            }, this);
	        },
	        checkRadioValue: function checkRadioValue(radioValue) {
	            if (!radioValue) {
	                return;
	            }
	            _.each(this.innerRadios, function (radioButton) {
	                radioButton.checked = radioButton.value == radioValue;
	            }, this);
	        },
	        renderErrorTag: function renderErrorTag() {
	            if (this.error) {
	                this.errorSpan.textContent = this.error;
	                this.formGroup.className = "form-group has-error";
	            } else {
	                this.errorSpan.textContent = undefined;
	                this.formGroup.className = "form-group";
	            }
	        },
	        validate: function validate() {
	            if (!this.required) {
	                this.error = '';
	                return true;
	            }
	            var data = this.getData();
	            if (!data[this.field]) {
	                this.error = this.requiredMessage;
	                return false;
	            }
	            this.error = '';
	            return true;
	        },
	        getData: function getData() {
	            if (!this.field) {
	                throw new Error("Attribute 'field' must be defined");
	            }

	            var data = {};
	            _.each(this.innerRadios, function (radio) {
	                if (radio.isChecked()) {
	                    radio.checked = true;
	                    data[this.field] = radio.value;
	                } else {
	                    radio.checked = false;
	                }
	            }, this);

	            return data;
	        },
	        changeCallback: function changeCallback(attributeName) {
	            if (attributeName === "error") {
	                this.selectInRenderingRoot(".form-group").className = this.errorClass;
	                this.selectInRenderingRoot(".help-block").textContent = this.error;
	                return;
	            }
	            this.render();
	        }
	    },
	    events: {
	        tap: function tap(e) {
	            if (e.target.nodeName === "INPUT-RADIO" || e.target.nodeName === "INPUT" || e.target.className === "radio-label") {
	                this.error = '';
	            }
	        }
	    }
	};

/***/ },
/* 9 */
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
/* 10 */
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

/***/ }
/******/ ]);