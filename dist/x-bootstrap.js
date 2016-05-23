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

	var _inputTextElementBase = __webpack_require__(5);

	var _inputTextElementBase2 = _interopRequireDefault(_inputTextElementBase);

	var _dropdownInputElementBase = __webpack_require__(6);

	var _dropdownInputElementBase2 = _interopRequireDefault(_dropdownInputElementBase);

	var _dropdownInputTextElementBase = __webpack_require__(7);

	var _dropdownInputTextElementBase2 = _interopRequireDefault(_dropdownInputTextElementBase);

	var _formElementBase = __webpack_require__(8);

	var _formElementBase2 = _interopRequireDefault(_formElementBase);

	var _dropdownOption = __webpack_require__(9);

	var _dropdownOption2 = _interopRequireDefault(_dropdownOption);

	var _additionalInfo = __webpack_require__(10);

	var _additionalInfo2 = _interopRequireDefault(_additionalInfo);

	var _inputRadio = __webpack_require__(11);

	var _inputRadio2 = _interopRequireDefault(_inputRadio);

	var _inputRadioGroup = __webpack_require__(12);

	var _inputRadioGroup2 = _interopRequireDefault(_inputRadioGroup);

	var _inputCheckbox = __webpack_require__(13);

	var _inputCheckbox2 = _interopRequireDefault(_inputCheckbox);

	var _inputText = __webpack_require__(14);

	var _inputText2 = _interopRequireDefault(_inputText);

	var _inputTextarea = __webpack_require__(15);

	var _inputTextarea2 = _interopRequireDefault(_inputTextarea);

	var _inputSelect = __webpack_require__(16);

	var _inputSelect2 = _interopRequireDefault(_inputSelect);

	var _inputAutocomplete = __webpack_require__(17);

	var _inputAutocomplete2 = _interopRequireDefault(_inputAutocomplete);

	var _formAjax = __webpack_require__(18);

	var _formAjax2 = _interopRequireDefault(_formAjax);

	var _collectionSearchForm = __webpack_require__(19);

	var _collectionSearchForm2 = _interopRequireDefault(_collectionSearchForm);

	var _collectionElements = __webpack_require__(20);

	var _collectionElements2 = _interopRequireDefault(_collectionElements);

	var _collectionContainer = __webpack_require__(21);

	var _collectionContainer2 = _interopRequireDefault(_collectionContainer);

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

	var dropdownProto = _utils2.default.extend(_dropdownOption2.default).from(_elementBase2.default);
	_utils2.default.register('dropdown-option', dropdownProto);

	var additionaInfoProto = _utils2.default.extend(_additionalInfo2.default).from(_elementBase2.default);
	_utils2.default.register('additional-info', additionaInfoProto);

	var radioProto = _utils2.default.extend(_inputRadio2.default).from(_elementBase2.default);
	_utils2.default.register('input-radio', radioProto);

	var inputGroupProto = _utils2.default.extend(_inputRadioGroup2.default).from(_inputElementBase2.default);
	_utils2.default.register('input-radio-group', inputGroupProto);

	var checkboxProto = _utils2.default.extend(_inputCheckbox2.default).from(_inputElementBase2.default);
	_utils2.default.register('input-checkbox', checkboxProto);

	var textProto = _utils2.default.extend(_inputText2.default).from(_inputTextElementBase2.default);
	_utils2.default.register('input-text', textProto);

	var textareaProto = _utils2.default.extend(_inputTextarea2.default).from(_inputTextElementBase2.default);
	_utils2.default.register('input-textarea', textareaProto);

	var selectProto = _utils2.default.extend(_inputSelect2.default).from(_dropdownInputElementBase2.default);
	_utils2.default.register('input-select', selectProto);

	var selectProto = _utils2.default.extend(_inputAutocomplete2.default).from(_dropdownInputTextElementBase2.default);
	_utils2.default.register('input-autocomplete', selectProto);

	var formProto = _utils2.default.extend(_formAjax2.default).from(_formElementBase2.default);
	_utils2.default.register('form-ajax', formProto);

	var searchFormProto = _utils2.default.extend(_collectionSearchForm2.default).from(_formElementBase2.default);
	_utils2.default.register('collection-search-form', searchFormProto);

	var elementsProto = _utils2.default.extend(_collectionElements2.default).from(_elementBase2.default);
	_utils2.default.register('collection-elements', elementsProto);

	var collectionContainerProto = _utils2.default.extend(_collectionContainer2.default).from(_elementBase2.default);
	_utils2.default.register('collection-container', collectionContainerProto);

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
	  },
	  createElement: function createElement(tagName, object) {
	    var element = document.createElement(tagName);
	    for (var attrname in object) {
	      element[attrname] = object[attrname];
	    }
	    return element;
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
				var lifecycle = _(_(source.lifecycle).clone() || {}).extend(_(target.lifecycle).clone() || {});

				var accessors = _(_(source.accessors).clone() || {}).extend(_(target.accessors).clone() || {});

				var methods = _(_(source.methods).clone() || {}).extend(_(target.methods).clone() || {});

				var events = _(_(source.events).clone() || {}).extend(_(target.events).clone() || {});

				var result = {
					lifecycle: lifecycle,
					accessors: accessors,
					methods: methods,
					events: events
				};
				return result;
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
					var message = "You should implement a 'changeCallback' for element " + this.nodeName + ". It's a support for browsers not supporting mutation observers.";
					console.log();
				} else {
					if (oldValue != newValue) this.changeCallback(attributeName, oldValue, newValue);
				}
			},
			getInnerContent: function getInnerContent(selector) {
				var content = this.querySelector(selector);
				if (content) {
					return content;
				} else {
					return this;
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
	                var old = this.xtag.data.value;
	                this.xtag.data.value = data;
	                this.raiseAttributeChanged("value", old, data);
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
	        },
	        renderError: function renderError() {
	            var container = this.selectInRenderingRoot(".form-group");
	            container.className = this.errorClass;
	            var messageSpan = this.selectInRenderingRoot(".help-block");
	            messageSpan.textContent = this.error;
	        }
	    }
	};

	exports.default = _utils2.default.extend(inputElementBase).from(_elementBase2.default);

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _utils = __webpack_require__(1);

	var _utils2 = _interopRequireDefault(_utils);

	var _inputElementBase = __webpack_require__(4);

	var _inputElementBase2 = _interopRequireDefault(_inputElementBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var inputTextElementBase = {
	    accessors: {
	        placeholder: {
	            attribute: {},
	            get: function get() {
	                return this.getAttribute('placeholder') || '';
	            },
	            set: function set(value) {
	                this.xtag.data.placeholder = value;
	            }
	        },
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
	    methods: {
	        getInput: function getInput() {
	            var input = this.selectInRenderingRoot("input");
	            if (!input) {
	                throw new Error("A input must be defined inside input text template");
	            }
	            return input;
	        },
	        validate: function validate() {
	            if (!this.required) {
	                this.error = '';
	                return true;
	            }
	            if (!this.getInput().value) {
	                this.error = this.requiredMessage;
	                return false;
	            }
	            if (!this.getInput().value.trim()) {
	                this.error = this.requiredMessage;
	                return false;
	            }
	            this.error = '';
	            return true;
	        }
	    },
	    events: {
	        keyup: function keyup(e) {
	            this.value = this.getInput().value;
	            this.validate();
	        }
	    }
	};

	exports.default = _utils2.default.extend(inputTextElementBase).from(_inputElementBase2.default);

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _utils = __webpack_require__(1);

	var _utils2 = _interopRequireDefault(_utils);

	var _inputElementBase = __webpack_require__(4);

	var _inputElementBase2 = _interopRequireDefault(_inputElementBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var dropdownInputElementBase = {
	    accessors: {
	        url: {
	            attribute: {},
	            get: function get() {
	                return this.getAttribute('url');
	            },
	            set: function set(data) {
	                this.xtag.data.url = data;
	            }
	        }
	    },
	    methods: {
	        renderData: function renderData(data) {
	            if (!data) {
	                throw new Error("Data not defined.");
	            }

	            this.getDropdownMenu().innerHTML = '';
	            if (_.isEmpty(data)) {
	                return;
	            }

	            _.each(data, function (optionData) {
	                var dropdownOption = this.createDropdownOption(optionData);
	                this.getDropdownMenu().appendChild(dropdownOption);
	            }, this);
	        },
	        createDropdownOption: function createDropdownOption(optionData) {
	            var dropdownOption = _utils2.default.createElement("dropdown-option", {
	                key: optionData.key,
	                value: optionData.value
	            });
	            return dropdownOption;
	        },
	        getDropdown: function getDropdown() {
	            var dropdown = this.selectInRenderingRoot(".dropdown");
	            return dropdown;
	        },
	        getDropdownMenu: function getDropdownMenu() {
	            var dropdownMenu = this.selectInRenderingRoot(".dropdown-menu");
	            return dropdownMenu;
	        },
	        showMenu: function showMenu() {
	            if (this.disabled) {
	                this.hideMenu();
	            } else {
	                var dropdown = this.getDropdown();
	                if (dropdown) dropdown.className = "dropdown open";
	            }
	        },
	        hideMenu: function hideMenu() {
	            var dropdown = this.getDropdown();
	            if (dropdown) dropdown.className = "dropdown";
	        }
	    },
	    events: {
	        focus: function focus() {
	            this.showMenu();
	        },
	        blur: function blur() {
	            this.hideMenu();
	        },
	        mousedown: function mousedown(e) {
	            if (e.target.parentElement.parentElement.nodeName === "DROPDOWN-OPTION") {
	                var dropdownOption = e.target.parentElement.parentElement;
	                this.selectOption(dropdownOption);
	            }
	        }
	    }
	};

	exports.default = _utils2.default.extend(dropdownInputElementBase).from(_inputElementBase2.default);

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(1);

	var _utils2 = _interopRequireDefault(_utils);

	var _dropdownInputElementBase = __webpack_require__(6);

	var _dropdownInputElementBase2 = _interopRequireDefault(_dropdownInputElementBase);

	var _inputTextElementBase = __webpack_require__(5);

	var _inputTextElementBase2 = _interopRequireDefault(_inputTextElementBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _utils2.default.extend(_dropdownInputElementBase2.default).from(_inputTextElementBase2.default);

/***/ },
/* 8 */
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

	var formElementBase = {
	    methods: {
	        getInputElements: function getInputElements() {
	            var inputElements = this.getRenderingRoot().querySelector("form").querySelectorAll("input-text,input-textarea,input-select,input-autocomplete,input-checkbox,input-datetime,input-radio-group,additional-info");
	            return inputElements;
	        },
	        getEditableElements: function getEditableElements() {
	            var inputElements = this.getRenderingRoot().querySelector("form").querySelectorAll("input-text,input-textarea,input-select,input-autocomplete,input-checkbox,input-datetime,input-radio-group,additional-info");
	            return inputElements;
	        },
	        getData: function getData() {
	            var inputElements = this.getInputElements();
	            if (inputElements.length === 0) {
	                return null;
	            }

	            var data = {};
	            _.each(inputElements, function (currentInput) {
	                var inputData = currentInput.getData();
	                _.extend(data, inputData);
	            });
	            return data;
	        },
	        setData: function setData(object) {
	            for (var attributeName in object) {
	                var innerInput = this.selectInRenderingRoot("[field=" + attributeName + "]");
	                if (!innerInput) {
	                    continue;
	                } else if (innerInput.nodeName === "INPUT-CHECKBOX") {
	                    var fieldValue = object[attributeName];
	                    innerInput.checked = fieldValue === true;
	                } else {
	                    var fieldValue = object[attributeName];
	                    innerInput.value = fieldValue;
	                }
	            }
	        },
	        clearForm: function clearForm() {
	            var inputElements = this.getEditableElements();
	            _.each(inputElements, function (inputElement) {
	                if (inputElement.nodeName === "INPUT-CHECKBOX") {
	                    inputElement.checked = false;
	                } else {
	                    inputElement.value = "";
	                }
	            });
	        },
	        validate: function validate() {
	            var inputElements = this.getEditableElements();
	            var isFormValid = true;
	            _.each(inputElements, function (currentInput) {
	                var inputData = currentInput.getData();
	                if (_(currentInput.validate).isFunction()) {
	                    var isInputValid = currentInput.validate();
	                    isFormValid = isFormValid && isInputValid;
	                }
	            });
	            return isFormValid;
	        }
	    }
	};

	var formBase = _utils2.default.extend(formElementBase).from(_elementBase2.default);
	exports.default = formBase;

/***/ },
/* 9 */
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
	        inserted: function inserted() {
	            this.render();
	        },
	        attributeChanged: function attributeChanged(attributeName) {
	            this.changeCallback(attributeName);
	        }
	    },
	    methods: {
	        changeCallback: function changeCallback(attributeName) {
	            this.render();
	        },
	        render: function render() {
	            var data = {
	                value: this.value
	            };
	            this.getRenderingRoot().innerHTML = template(data);
	        }
	    }
	};

/***/ },
/* 10 */
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
	        changeCallback: function changeCallback(attributeName) {
	            return;
	        },
	        getData: function getData() {
	            if (!this.field) {
	                throw new Error("Attribute 'field' must be defined");
	            }
	            var data = {};
	            if (_(this.valueOf).isString()) {
	                data[this.field] = this.executeFromWindow();
	            } else {
	                data[this.field] = this.value;
	            }
	            return data;
	        },
	        executeFromWindow: function executeFromWindow() {
	            var functionInWindow = window[this.valueOf];
	            if (_(functionInWindow).isFunction()) {
	                var result = functionInWindow();
	                return result;
	            } else {
	                var message = "Not valid function name " + this.valueOf + " in 'value-of' property";
	                throw new Error();
	            }
	        }
	    }
	};

/***/ },
/* 11 */
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
	                var old = this.xtag.data.value;
	                this.xtag.data.value = data;
	                this.raiseAttributeChanged("value", old, data);
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
	            this.changeCallback(attributeName);
	        }
	    },
	    methods: {
	        changeCallback: function changeCallback() {
	            this.render();
	        },
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
/* 12 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var template = function template(data) {
	    return '    \n\t<div class="' + data.errorClass + '">\n        <label>' + data.label + '</label>\n        <radio-group-content class="inner-content">\n            ' + data.innerContent + '\n        </radio-group-content>\n        </div>\n        <span class="help-block">\n        \t' + data.error + '\n        </span>\n    </div>';
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
	            this.innerContent = this.getInnerContent("radio-group-content").innerHTML;
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
/* 13 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var template = function template(data) {
	    return "\n    <div class=\"" + data.errorClass + " checkbox\">\n        <label for=\"" + data.field + "\">\n            <input  type=\"checkbox\"\n                    id=\"" + data.field + "\"\n                    name=\"" + data.field + "\"\n                    " + data.checked + "\n                    " + data.disabled + "/>\n            <span class=\"label-text\">" + data.label + "</span>\n        </label>            \n        <span class=\"help-block\">" + data.error + "</span>\n    </div>";
	};

	exports.default = {
	    accessors: {
	        checked: {
	            attribute: { boolean: true },
	            get: function get() {
	                if (this.input) {
	                    return this.input.checked;
	                }
	                return false;
	            },
	            set: function set(data) {
	                if (this.input) {
	                    this.input.checked = data === true;
	                }
	            }
	        }
	    },
	    lifecycle: {
	        created: function created() {
	            this.render();
	            this.input = this.selectInRenderingRoot("input");
	        },
	        inserted: function inserted() {
	            this.render();
	            this.input = this.selectInRenderingRoot("input");
	        },
	        attributeChanged: function attributeChanged(attributeName, oldValue, newValue) {
	            this.changeCallback(attributeName, oldValue, newValue);
	        }
	    },
	    methods: {
	        changeCallback: function changeCallback(attributeName, oldValue, newValue) {
	            if (attributeName === "checked" && oldValue != newValue) {
	                this.input.checked = newValue === true;
	            }
	            this.render();
	        },
	        render: function render() {
	            var data = {
	                checked: this.checked ? 'checked' : '',
	                disabled: this.disabled ? 'disabled' : '',
	                error: this.error,
	                errorClass: this.errorClass,
	                field: this.field,
	                label: this.label
	            };
	            this.innerHTML = template(data);
	        },
	        validate: function validate() {
	            this.error = '';
	            return true;
	        },
	        getData: function getData() {
	            if (!this.field) {
	                throw new Error("Attribute 'field' must be defined");
	            }
	            var data = {};
	            data[this.field] = this.checked;
	            return data;
	        }
	    }
	};

/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var template = function template(data) {
	    return '\n    <div class="' + data.errorClass + '">\n        <label for="' + data.field + '">\n            ' + data.label + '\n        </label>\n        <input  type="text" \n                class="form-control"\n                id="' + data.field + '"\n                name="' + data.field + '"\n                placeholder="' + data.placeholder + '"\n                value="' + data.value + '"\n                ' + data.disabled + '/>\n        <span class="help-block">\n            ' + data.error + '\n        </span>\n        <input-text-content></input-text-content>\n    </div>';
	};

	var templateWithAddOn = function templateWithAddOn(data) {
	    return '\n    <div class="' + data.errorClass + '">\n        <label for="' + data.field + '">\n            ' + data.label + '\n        </label>\n        <div class=\'input-group\'>\n            <input  type="text" \n                    class="form-control"\n                    id="' + data.field + '"\n                    name="' + data.field + '"\n                    placeholder="' + data.placeholder + '"\n                    value="' + data.value + '"\n                    ' + data.disabled + '/>\n            <span class="input-group-addon">\n                <input-text-content>\n                    ' + data.innerContent + '\n                </input-text-content>\n            </span>\n        </div>                    \n        <span class="help-block">\n            ' + data.error + '\n        </span>\n    </div>';
	};

	exports.default = {
	    accessors: {
	        jquery: {
	            attribute: {},
	            get: function get() {
	                return this.getAttribute('jquery') || '';
	            },
	            set: function set(data) {
	                this.xtag.data.jquery = data;
	            }
	        },
	        dateFormat: {
	            attribute: {},
	            get: function get() {
	                return this.getAttribute('date-format') || '';
	            },
	            set: function set(data) {
	                this.xtag.data.dateFormat = data;
	            }
	        },
	        regex: {
	            attribute: {},
	            get: function get() {
	                return this.getAttribute('regex') || '';
	            },
	            set: function set(data) {
	                this.xtag.data.regex = data;
	            }
	        },
	        regexMessage: {
	            attribute: {},
	            get: function get() {
	                return this.getAttribute('regex-message') || '';
	            },
	            set: function set(data) {
	                this.xtag.data.regexMessage = data;
	            }
	        },
	        maxLength: {
	            attribute: {},
	            get: function get() {
	                return this.getAttribute('max-length');
	            },
	            set: function set(data) {
	                this.xtag.data.maxLength = data;
	            }
	        },
	        maxLengthMessage: {
	            attribute: {},
	            get: function get() {
	                return this.getAttribute('max-length-message') || '';
	            },
	            set: function set(data) {
	                this.xtag.data.maxLengthMessage = data;
	            }
	        }
	    },
	    lifecycle: {
	        created: function created() {
	            this.innerContent = this.getInnerContent("input-text-content").innerHTML;
	            this.render();
	        },
	        attributeChanged: function attributeChanged(attributeName, oldValue, newValue) {
	            this.changeCallback(attributeName, oldValue, newValue);
	        }
	    },
	    methods: {
	        changeCallback: function changeCallback(attributeName, oldValue, newValue) {
	            if (attributeName === "error") {
	                this.renderError();
	            } else if (attributeName === "value" && oldValue != newValue) {
	                this.getInput().value = newValue;
	            } else {
	                this.render();
	            }
	        },
	        render: function render() {
	            var data = {
	                field: this.field,
	                label: this.label,
	                error: this.error,
	                value: this.value,
	                placeholder: this.placeholder,
	                errorClass: this.errorClass,
	                disabled: this.disabled ? 'disabled' : ''
	            };
	            if (this.innerContent && this.innerContent.trim()) {
	                data.innerContent = this.innerContent;
	                this.innerHTML = templateWithAddOn(data);
	            } else {
	                this.innerHTML = template(data);
	            }
	            this.renderCalendar();
	        },
	        validate: function validate() {
	            if (this.regex) {
	                var regularExpression = new RegExp(this.regex);
	                var isMatching = this.value.match(regularExpression);
	                if (!isMatching) {
	                    this.error = this.regexMessage;
	                    return false;
	                }
	            }

	            if (this.value && this.maxLength) {
	                if (this.value.trim().length > this.maxLength) {
	                    this.error = this.maxLengthMessage;
	                    return false;
	                }
	            }

	            if (!this.required) {
	                this.error = '';
	                return true;
	            }

	            var input = this.getInput();
	            if (!input.value) {
	                this.error = this.requiredMessage;
	                return false;
	            }
	            if (!input.value.trim()) {
	                this.error = this.requiredMessage;
	                return false;
	            }

	            this.error = '';
	            return true;
	        },
	        renderCalendar: function renderCalendar() {
	            var self = this;
	            if (self.jquery && self.dateFormat) {
	                var $ = window[self.jquery];
	                $('#' + self.field).datetimepicker({
	                    format: self.dateFormat,
	                    showClear: true,
	                    showTodayButton: true,
	                    showClose: true,
	                    keepOpen: false
	                });
	                $('#' + self.field).on("dp.change", function (e) {
	                    var input = self.selectInRenderingRoot("input");
	                    self.value = input.value;
	                    self.validate();
	                });
	            }
	        }
	    }
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var template = function template(data) {
	    return '\n    <div class="' + data.errorClass + '">\n        <label for="' + data.field + '">\n            ' + data.label + '\n        </label>\n        <textarea   class="form-control"\n                    id="' + data.field + '"\n                    name="' + data.field + '"\n                    placeholder="' + data.placeholder + '"\n                    value="' + data.value + '"\n                    rows="' + data.rows + '"\n                    ' + data.disabled + '>' + data.value + '</textarea>\n        <span class="help-block">\n            ' + data.error + '\n        </span>\n    </div>';
	};

	exports.default = {
	    accessors: {
	        rows: {
	            attribute: {},
	            get: function get() {
	                return this.getAttribute('rows');
	            },
	            set: function set(data) {
	                this.xtag.data.rows = data;
	            }
	        },
	        maxLength: {
	            attribute: {},
	            get: function get() {
	                return this.getAttribute('max-length');
	            },
	            set: function set(data) {
	                this.xtag.data.maxLength = data;
	            }
	        },
	        maxLengthMessage: {
	            attribute: {},
	            get: function get() {
	                return this.getAttribute('max-length-message') || '';
	            },
	            set: function set(data) {
	                this.xtag.data.maxLengthMessage = data;
	            }
	        }
	    },
	    lifecycle: {
	        created: function created() {
	            this.render();
	        },
	        attributeChanged: function attributeChanged(attributeName, oldValue, newValue) {
	            this.changeCallback(attributeName, oldValue, newValue);
	        }
	    },
	    methods: {
	        changeCallback: function changeCallback(attributeName, oldValue, newValue) {
	            if (attributeName === "error") {
	                this.renderError();
	            } else if (attributeName === "value" && oldValue != newValue) {
	                this.selectInRenderingRoot("textarea").value = newValue;
	            } else {
	                this.render();
	            }
	        },
	        render: function render() {
	            var data = {
	                field: this.field,
	                label: this.label,
	                error: this.error,
	                errorClass: this.errorClass,
	                value: this.value,
	                rows: this.rows,
	                placeholder: this.placeholder,
	                disabled: this.disabled ? 'disabled' : ''
	            };
	            this.innerHTML = template(data);
	        },
	        validate: function validate() {
	            if (this.value && this.maxLength) {
	                if (this.value.trim().length > this.maxLength) {
	                    this.error = this.maxLengthMessage;
	                    return false;
	                }
	            }

	            if (!this.required) {
	                this.error = '';
	                return true;
	            }
	            var textarea = this.selectInRenderingRoot("textarea");
	            if (!textarea.value) {
	                this.error = this.requiredMessage;
	                return false;
	            }
	            if (!textarea.value.trim()) {
	                this.error = this.requiredMessage;
	                return false;
	            }

	            this.error = '';
	            return true;
	        }
	    },
	    events: {
	        keyup: function keyup(e) {
	            var textarea = this.selectInRenderingRoot("textarea");
	            this.value = textarea.value;
	            this.validate();
	        }
	    }
	};

/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var template = function template(data) {
	    return '    \n\t<div class="' + data.errorClass + '">\n        <div class="dropdown">\n            <label for="' + data.field + '">' + data.label + '</label>\n            <button class="' + data.buttonClass + '" id="' + data.field + '" type="button">\n                <span class="pull-left">' + data.buttonContent + '</span>\n                <span class="pull-right">\n                    <span class="caret"></span>\n                </span>\n            </button>\n            <ul class="dropdown-menu" style="width: 100%">\n                <input-select-content>\n                    ' + data.innerContent + '\n                </input-select-content>\n            </ul>\n        </div>\n        <span class="help-block">' + data.error + '</span>\n    </div>';
	};

	exports.default = {
	    accessors: {
	        placeholder: {
	            attribute: {},
	            get: function get() {
	                return this.getAttribute('placeholder') || '';
	            },
	            set: function set(value) {
	                this.xtag.data.placeholder = value;
	            }
	        },
	        buttonClass: {
	            attribute: {},
	            get: function get() {
	                if (this.disabled) {
	                    return "btn btn-default form-control disabled";
	                } else {
	                    return "btn btn-default form-control";
	                }
	            }
	        },
	        selectedValue: {
	            attribute: {},
	            get: function get() {
	                return this.getAttribute('selected-value') || '';
	            },
	            set: function set(value) {
	                this.xtag.data.selectedValue = value;
	            }
	        },
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
	            this.innerContent = this.getInnerContent("input-select-content").innerHTML;
	            this.render();
	        },
	        inserted: function inserted() {
	            this.fetchData();
	        },
	        attributeChanged: function attributeChanged(attributeName) {
	            this.changeCallback(attributeName);
	        }
	    },
	    methods: {
	        changeCallback: function changeCallback(attributeName) {
	            if (attributeName === "value") {
	                this.selectedValue = "";
	            }
	            this.render();
	        },
	        render: function render() {
	            var data = {
	                error: this.error,
	                errorClass: this.errorClass,
	                label: this.label,
	                buttonContent: this.selectedValue || this.value || this.placeholder,
	                field: this.field,
	                buttonClass: this.buttonClass,
	                innerContent: this.innerContent
	            };
	            this.innerHTML = template(data);
	        },
	        validate: function validate() {
	            if (!this.required) {
	                this.error = '';
	                return true;
	            }
	            if (!this.value) {
	                this.error = this.requiredMessage;
	                return false;
	            }
	            if (!this.value.trim()) {
	                this.error = this.requiredMessage;
	                return false;
	            }
	            this.error = '';
	            return true;
	        },
	        fetchData: function fetchData() {
	            var self = this;
	            if (!self.url) {
	                return;
	            }

	            if (!window.restService) {
	                throw new Error("'restService' must be assigned to main window for <input-select/> to work correctly");
	            }

	            window.restService.ajax({
	                url: self.url,
	                method: "GET",
	                success: function success(result) {
	                    self.renderData(result);
	                }
	            });
	        },
	        selectOption: function selectOption(dropdownOption) {
	            if (!dropdownOption) {
	                throw new Error("Not valid option for selection.");
	            }

	            this.value = dropdownOption.key || dropdownOption.value;
	            this.selectedValue = dropdownOption.value;
	            this.validate();
	        }
	    },
	    events: {
	        focus: function focus() {
	            this.showMenu();
	        },
	        blur: function blur() {
	            this.hideMenu();
	        }
	    }
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var template = function template(data) {
	    return '    \n\t<div class="' + data.errorClass + '">\n\t\t<div class="dropdown">\n\t\t\t<label for="' + data.field + '">' + data.label + '</label>\n\t\t\t<input class="form-control" type="text"\n\t\t\t\tid="' + data.field + '" \n                name="' + data.field + '" \n                value="' + data.value + '"\n                placeholder="' + data.placeholder + '"\n                ' + data.disabled + '/>\n            <ul class="dropdown-menu" style="width: 100%"></ul>\n        </div>\n        <span class="help-block">' + data.error + '</span>\n    </div>';
	};

	exports.default = {
	    lifecycle: {
	        created: function created() {
	            this.render();
	        },
	        inserted: function inserted() {
	            this.fetchData();
	        },
	        attributeChanged: function attributeChanged(attributeName, oldValue, newValue) {
	            this.changeCallback(attributeName, oldValue, newValue);
	        }
	    },
	    methods: {
	        render: function render() {
	            var data = {
	                placeholder: this.placeholder || '',
	                disabled: this.disabled ? 'disabled' : '',
	                error: this.error || '',
	                errorClass: this.errorClass || '',
	                field: this.field || '',
	                label: this.label || '',
	                value: this.value || ''
	            };
	            this.getRenderingRoot().innerHTML = template(data);
	        },
	        changeCallback: function changeCallback(attributeName, oldValue, newValue) {
	            if (attributeName === "error") {
	                this.renderError();
	            } else if (attributeName === "value") {
	                this.getInput().value = newValue;
	                this.fetchData();
	            } else {
	                this.render();
	            }

	            if (this.optionData) {
	                this.renderData(this.optionData);
	            }
	        },
	        fetchData: function fetchData() {
	            var self = this;
	            if (!self.url) {
	                return;
	            }

	            if (!window.restService) {
	                throw new Error("'restService' must be assigned to main window for <input-autocomplete/> to work correctly");
	            }

	            window.restService.ajax({
	                url: self.url,
	                method: "GET",
	                data: { search: this.value },
	                success: function success(result) {
	                    self.optionData = result;
	                    self.getDropdownMenu().innerHTML = '';
	                    self.renderData(self.optionData);
	                }
	            });
	        },
	        selectOption: function selectOption(dropdownOption) {
	            if (!dropdownOption) {
	                throw new Error("Not valid option for selection.");
	            }
	            this.hideMenu();
	            this.value = dropdownOption.value;
	            this.getInput().value = this.value;
	            this.getInput().blur();
	            this.validate();
	        }
	    },
	    events: {
	        keyup: function keyup() {
	            this.value = this.getInput().value;
	            this.fetchData();
	        }
	    }
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _accessors;

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var template = function template(data) {
	    return '    \n    <form>\n        <form-ajax-content class="inner-content">\n            ' + data.innerContent + '\n        </form-ajax-content>\n    </form>';
	};

	exports.default = {
	    accessors: (_accessors = {
	        postUrl: {
	            attribute: {},
	            get: function get() {
	                return this.getAttribute('post-url') || '';
	            },
	            set: function set(data) {
	                this.xtag.data.postUrl = data;
	            }
	        },
	        getUrl: {
	            attribute: {},
	            get: function get() {
	                return this.getAttribute('get-url') || '';
	            },
	            set: function set(data) {
	                this.xtag.data.getUrl = data;
	            }
	        },
	        redirectUrl: {
	            attribute: {},
	            get: function get() {
	                return this.getAttribute('redirect-url') || '';
	            },
	            set: function set(data) {
	                this.xtag.data.redirectUrl = data;
	            }
	        },
	        redirectHash: {
	            attribute: {},
	            get: function get() {
	                return this.getAttribute('redirect-hash') || '';
	            },
	            set: function set(data) {
	                this.xtag.data.redirectHash = data;
	            }
	        },
	        redirectToId: {
	            attribute: { boolean: true },
	            get: function get() {
	                return this.hasAttribute('redirect-to-id') || '';
	            },
	            set: function set(data) {
	                this.xtag.data.redirectToId = data;
	            }
	        }
	    }, _defineProperty(_accessors, 'redirectUrl', {
	        attribute: {},
	        get: function get() {
	            return this.getAttribute('redirect-url') || '';
	        },
	        set: function set(data) {
	            this.xtag.data.redirectUrl = data;
	        }
	    }), _defineProperty(_accessors, 'clearOnSuccess', {
	        attribute: { boolean: true },
	        get: function get() {
	            return this.hasAttribute('clear-on-success') || '';
	        },
	        set: function set(data) {
	            this.xtag.data.clearOnSuccess = data;
	        }
	    }), _accessors),
	    lifecycle: {
	        created: function created() {
	            this.innerContent = this.getInnerContent("form-ajax-content").innerHTML;
	            this.render();
	        },
	        inserted: function inserted() {
	            if (false) {
	                // bisogna aspettare che tutto il document sia correttamente caricato
	                this.fetchInitialData();
	            }
	        }
	    },
	    methods: {
	        render: function render() {
	            var data = { innerContent: this.innerContent };
	            this.getRenderingRoot().innerHTML = template(data);
	        },
	        submitForm: function submitForm() {
	            var self = this;

	            if (!self.postUrl) {
	                throw new Error("Post url is not defined");
	            }

	            var formData = self.getData();
	            window.restService.ajax({
	                url: self.postUrl,
	                method: "POST",
	                data: formData,
	                success: function success(result) {
	                    if (result.validationResult.isValid) {
	                        self.clearingProcedure(self);
	                        self.redirectProcedure(self);
	                    } else {
	                        self.bindErrors(result.validationResult.errors);
	                    }
	                }
	            });
	        },
	        fetchInitialData: function fetchInitialData() {
	            var self = this;
	            window.restService.ajax({
	                url: self.getUrl,
	                method: "GET",
	                data: {},
	                success: function success(result) {
	                    self.setData(result);
	                }
	            });
	        },
	        removeErrors: function removeErrors() {
	            var inputElements = this.getInputElements();
	            _.each(inputElements, function (inputElement) {
	                inputElement.error = "";
	            });
	        },
	        bindErrors: function bindErrors(errors) {
	            _.each(errors, function (error) {
	                var field = error.field;
	                var errorMessage = error.message;
	                var inputElement = this.selectInRenderingRoot("[field=" + field + "]");
	                inputElement.error = errorMessage;
	            }, this);
	        },
	        clearingProcedure: function clearingProcedure(self) {
	            if (self.clearOnSuccess) {
	                self.clearForm();
	                return;
	            }
	        },
	        redirectProcedure: function redirectProcedure(self) {
	            if (self.redirectUrl) {
	                var redirectUrl = self.redirectUrl;
	                if (self.redirectToId) {
	                    redirectUrl += "/" + result.resultId;
	                }

	                if (self.redirectHash) {
	                    var newUrl = window.location.origin + "/" + redirectUrl + "/#" + self.redirectHash;
	                    window.location.href = newUrl;
	                } else {
	                    window.location.pathname = redirectUrl;
	                }
	                return;
	            }

	            if (self.redirectHash) {
	                var redirectHash = self.redirectHash;
	                if (self.redirectToId) {
	                    redirectHash += "/" + result.resultId;
	                }
	                window.location.hash = redirectHash;
	                return;
	            }
	        }
	    },
	    events: {
	        submit: function submit(e) {
	            e.preventDefault();
	            var isFormValid = this.validate();
	            if (isFormValid) {
	                this.removeErrors();
	                this.submitForm();
	            }
	        }
	    }
	};

/***/ },
/* 19 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var template = function template(data) {
	    return "\n    <form>\n        <collection-search-form-content>\n            " + data.innerContent + "\n        </collection-search-form-content>\n    </form>";
	};

	exports.default = {
	    lifecycle: {
	        created: function created() {
	            this.innerContent = this.getInnerContent("collection-search-form-content").innerHTML;
	            this.render();
	        }
	    },
	    methods: {
	        render: function render() {
	            var data = {
	                innerContent: this.innerContent
	            };
	            this.innerHTML = template(data);
	        }
	    },
	    events: {
	        submit: function submit(e) {
	            e.preventDefault();
	            var isFormValid = this.validate();
	            if (!isFormValid) {
	                e.stopPropagation();
	                //var formData = this.getData();
	                //alert(JSON.stringify(formData));
	            }
	        }
	    }
	};

/***/ },
/* 20 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var template = '\n    <p id="number-of-result"></p>\n    <collection-elements-content id="inner-container"></collection-elements-content>';

	exports.default = {
	    accessors: {
	        type: {
	            attribute: {},
	            get: function get() {
	                return this.getAttribute('type');
	            },
	            set: function set(value) {
	                this.xtag.data.type = value;
	            }
	        },
	        numberOfResultsMessage: {
	            attribute: {},
	            get: function get() {
	                return this.getAttribute('number-of-results-message');
	            },
	            set: function set(value) {
	                this.xtag.data.numberOfResultsMessage = value;
	            }
	        },
	        numberOfResults: {
	            attribute: {},
	            get: function get() {
	                return this.getAttribute('number-of-results');
	            },
	            set: function set(value) {
	                this.xtag.data.numberOfResults = value;
	            }
	        }
	    },
	    lifecycle: {
	        created: function created() {
	            var firstChild = this.getRenderingRoot().firstElementChild;
	            if (firstChild) {
	                this.listItemTemplate = firstChild.cloneNode(true);
	            }
	            this.getRenderingRoot().innerHTML = template;
	            this.p = this.selectInRenderingRoot('#number-of-result');
	            this.innerContainer = this.selectInRenderingRoot("collection-elements-content");
	            this.render();
	        },
	        attributeChanged: function attributeChanged(attributeName) {
	            this.render();
	        }
	    },
	    methods: {
	        render: function render() {
	            if (this.numberOfResults && this.numberOfResultsMessage) {
	                this.p.textContent = this.numberOfResultsMessage.replace("{0}", this.numberOfResults);
	            }
	        },
	        addResults: function addResults(dataFromServer) {
	            this.numberOfResults = dataFromServer.numberOfResults;
	            this.appendData(dataFromServer.collection);
	        },
	        appendData: function appendData(data) {
	            if (!data) {
	                throw new Error("Data not defined.");
	            }

	            if (!data.length && data.length != 0) {
	                throw new Error("Data must be a collection.");
	            }

	            for (var i = 0; i < data.length; i++) {
	                var elementData = data[i];
	                var domElement = this.getChildElement(elementData);
	                this.innerContainer.appendChild(domElement);
	            }
	        },
	        renderData: function renderData(data) {
	            this.emptyCollection();
	            this.appendData(data);
	        },
	        emptyCollection: function emptyCollection() {
	            this.innerContainer.innerHTML = '';
	        },
	        getChildElement: function getChildElement(elementData) {
	            var domElement;
	            if (this.listItemTemplate) {
	                domElement = this.listItemTemplate.cloneNode(true);
	            } else if (this.type) {
	                domElement = document.createElement(this.type);
	            } else {
	                throw new Error("Neither 'type' property nor inner element defined in <collection-elements/>.");
	            }
	            _.extend(domElement, elementData);
	            return domElement;
	        }
	    }
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var template = function template(data) {
	    return '\n    <collection-container-content id="inner-content"></collection-container-content>\n    <div hidden class="show-more">\n        <button id="show-more-button" class="btn btn-default">Show More</button>\n    </div>\n    <ul hidden class="pager">\n        <li><a id="previous-button">Previous</a></li>\n        <li><a id="next-button">Next</a></li>\n    </ul>';
	};

	exports.default = {
	    accessors: {
	        url: {
	            attribute: {},
	            get: function get() {
	                return this.getAttribute('url');
	            },
	            set: function set(data) {
	                this.xtag.data.url = data;
	            }
	        },
	        infiniteScrolling: {
	            attribute: { boolean: true },
	            get: function get() {
	                return this.hasAttribute('infinite-scrolling');
	            },
	            set: function set(data) {
	                this.xtag.data.infiniteScrolling = data;
	            }
	        },
	        showMoreButton: {
	            attribute: { boolean: true },
	            get: function get() {
	                return this.hasAttribute('show-more-button');
	            },
	            set: function set(data) {
	                this.xtag.data.showMoreButton = data;
	            }
	        },
	        pager: {
	            attribute: { boolean: true },
	            get: function get() {
	                return this.hasAttribute('pager');
	            },
	            set: function set(data) {
	                this.xtag.data.pager = data;
	            }
	        },
	        elementsPerPage: {
	            attribute: {},
	            get: function get() {
	                return this.getAttribute('elements-per-page');
	            },
	            set: function set(data) {
	                this.xtag.data.elementsPerPage = data;
	            }
	        },
	        currentPage: {
	            attribute: {},
	            get: function get() {
	                return this.getAttribute('current-page');
	            },
	            set: function set(data) {
	                this.xtag.data.currentPage = data;
	            }
	        },
	        refreshEvery: {
	            attribute: {},
	            get: function get() {
	                return this.getAttribute('refresh-every');
	            },
	            set: function set(data) {
	                this.xtag.data.refreshEvery = data;
	            }
	        }
	    },
	    lifecycle: {
	        created: function created() {
	            this.innerContent = this.getInnerContent("collection-container-content").innerHTML;
	            this.getRenderingRoot().innerHTML = template({});
	            this.selectInRenderingRoot("#inner-content").innerHTML = this.innerContent;
	            this.collectionElementTag = this.selectInRenderingRoot("collection-elements");
	            this.searchForm = this.selectInRenderingRoot("collection-search-form");
	            this.showMoreButtonTag = this.selectInRenderingRoot("#show-more-button");
	            this.nextButton = this.selectInRenderingRoot("#next-button");
	            this.previousButton = this.selectInRenderingRoot("#previous-button");
	            this.currentPage = this.currentPage || 1;
	        },
	        inserted: function inserted() {
	            this.renderInfiniteScrolling();
	            this.renderShowMoreButton();
	            this.renderPager();
	            this.fetchData();
	            this.activateRefreshing();
	        },
	        attributeChanged: function attributeChanged(attributeName) {
	            this.activateRefreshing();
	        }
	    },
	    methods: {
	        fetchData: function fetchData() {
	            var self = this;

	            if (!self.url) {
	                throw new Error("Url is not defined");
	            }

	            if (!self.collectionElementTag) {
	                throw new Error("No <collection-elements/> found as inner contet of <collection-container/>.");
	            }

	            if (!window.restService) {
	                throw new Error("'restService' must be assigned to main window for <collection-container/> to work correctly");
	            }

	            var formData = {};
	            if (self.searchForm) {
	                var isFormValid = self.searchForm.validate();
	                if (!isFormValid) {
	                    return;
	                }
	                formData = self.searchForm.getData();
	            }
	            formData.page = this.currentPage;
	            formData.elementsPerPage = this.elementsPerPage;

	            window.restService.ajax({
	                url: self.url,
	                method: "GET",
	                data: formData,
	                success: function success(result) {
	                    self.collectionElementTag.addResults(result);
	                }
	            });
	        },
	        appendNextPageData: function appendNextPageData() {
	            this.currentPage++;
	            this.fetchData();
	        },
	        fetchNextPageData: function fetchNextPageData() {
	            this.collectionElementTag.emptyCollection();
	            this.currentPage++;
	            this.fetchData();
	        },
	        fetchPreviousPageData: function fetchPreviousPageData() {
	            if (this.currentPage == 1) {
	                return;
	            }
	            this.collectionElementTag.emptyCollection();
	            this.currentPage--;
	            this.fetchData();
	        },
	        renderShowMoreButton: function renderShowMoreButton() {
	            var self = this;
	            if (self.showMoreButton) {
	                self.selectInRenderingRoot(".show-more").hidden = false;
	                self.showMoreButtonTag.onclick = function () {
	                    self.appendNextPageData();
	                };
	            }
	        },
	        renderPager: function renderPager() {
	            var self = this;
	            if (self.pager) {
	                self.selectInRenderingRoot(".pager").hidden = false;
	                self.nextButton.onclick = function () {
	                    self.fetchNextPageData();
	                };
	                self.previousButton.onclick = function () {
	                    self.fetchPreviousPageData();
	                };
	            }
	        },
	        renderInfiniteScrolling: function renderInfiniteScrolling() {
	            var self = this;
	            if (self.infiniteScrolling) {
	                window.addEventListener("scroll", function () {
	                    var positionOffset = window.innerHeight + window.scrollY - thatDoc.body.offsetHeight;
	                    if (positionOffset >= 0) {
	                        self.appendNextPageData();
	                    }
	                }, false);
	            }
	        },
	        activateRefreshing: function activateRefreshing() {
	            var self = this;
	            clearInterval(self.refreshInterval);

	            if (!self.refreshEvery) {
	                return;
	            }

	            if (self.refreshEvery <= 0) {
	                return;
	            }

	            self.refreshInterval = setInterval(function () {
	                self.collectionElementTag.emptyCollection();
	                self.fetchData();
	            }, 1000 * self.refreshEvery);
	        }
	    },
	    events: {
	        submit: function submit(e) {
	            e.preventDefault();
	            this.currentPage = 1;
	            this.fetchData();
	        },
	        tap: function tap() {}
	    }
	};

/***/ }
/******/ ]);