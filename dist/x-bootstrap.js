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

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _utils = __webpack_require__(1);

	var _utils2 = _interopRequireDefault(_utils);

	var _dropdownOption = __webpack_require__(3);

	var _dropdownOption2 = _interopRequireDefault(_dropdownOption);

	var _additionalInfo = __webpack_require__(5);

	var _additionalInfo2 = _interopRequireDefault(_additionalInfo);

	var _inputRadio = __webpack_require__(6);

	var _inputRadio2 = _interopRequireDefault(_inputRadio);

	var _inputRadioGroup = __webpack_require__(7);

	var _inputRadioGroup2 = _interopRequireDefault(_inputRadioGroup);

	var _inputCheckbox = __webpack_require__(9);

	var _inputCheckbox2 = _interopRequireDefault(_inputCheckbox);

	var _inputText = __webpack_require__(10);

	var _inputText2 = _interopRequireDefault(_inputText);

	var _inputTextarea = __webpack_require__(12);

	var _inputTextarea2 = _interopRequireDefault(_inputTextarea);

	var _inputSelect = __webpack_require__(13);

	var _inputSelect2 = _interopRequireDefault(_inputSelect);

	var _inputAutocomplete = __webpack_require__(15);

	var _inputAutocomplete2 = _interopRequireDefault(_inputAutocomplete);

	var _formAjax = __webpack_require__(17);

	var _formAjax2 = _interopRequireDefault(_formAjax);

	var _collectionSearchForm = __webpack_require__(19);

	var _collectionSearchForm2 = _interopRequireDefault(_collectionSearchForm);

	var _collectionElements = __webpack_require__(20);

	var _collectionElements2 = _interopRequireDefault(_collectionElements);

	var _collectionContainer = __webpack_require__(21);

	var _collectionContainer2 = _interopRequireDefault(_collectionContainer);

	var _collectionFeedback = __webpack_require__(22);

	var _collectionFeedback2 = _interopRequireDefault(_collectionFeedback);

	var _feedbackToken = __webpack_require__(23);

	var _feedbackToken2 = _interopRequireDefault(_feedbackToken);

	var _tableColumn = __webpack_require__(24);

	var _tableColumn2 = _interopRequireDefault(_tableColumn);

	var _collectionTable = __webpack_require__(25);

	var _collectionTable2 = _interopRequireDefault(_collectionTable);

	var _partialAjax = __webpack_require__(26);

	var _partialAjax2 = _interopRequireDefault(_partialAjax);

	var _confirmationModal = __webpack_require__(27);

	var _confirmationModal2 = _interopRequireDefault(_confirmationModal);

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

	(function (document) {
		if (!_typeof(window.CustomEvent) === "function") {
			var CustomEvent = function CustomEvent(event, params) {
				params = params || { bubbles: false, cancelable: false, detail: undefined };
				var evt = document.createEvent('CustomEvent');
				evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
				return evt;
			};

			CustomEvent.prototype = window.Event.prototype;

			window.CustomEvent = CustomEvent;
		}

		if (!('remove' in Element.prototype)) {
			Element.prototype.remove = function () {
				if (this.parentNode) {
					this.parentNode.removeChild(this);
				}
			};
		}

		var baseElements = {
			form: {
				dropdownElement: _dropdownOption2.default,
				additionalInfo: _additionalInfo2.default,
				radioInput: _inputRadio2.default,
				inputRadioGroup: _inputRadioGroup2.default,
				inputCheckbox: _inputCheckbox2.default,
				inputText: _inputText2.default,
				inputTextarea: _inputTextarea2.default,
				inputSelect: _inputSelect2.default,
				inputAutocomplete: _inputAutocomplete2.default,
				formAjax: _formAjax2.default
			},
			collection: {
				collectionSearchForm: _collectionSearchForm2.default,
				collectionElements: _collectionElements2.default,
				collectionContainer: _collectionContainer2.default,
				feedbackToken: _feedbackToken2.default,
				collectionFeedback: _collectionFeedback2.default,
				tableColumn: _tableColumn2.default,
				collectionTable: _collectionTable2.default
			},
			misc: {
				partialAjax: _partialAjax2.default,
				confirmationModal: _confirmationModal2.default
			}
		};

		// Form Elements
		_utils2.default.register({ tagName: 'dropdown-option', proto: _dropdownOption2.default });
		_utils2.default.register({ tagName: 'additional-info', proto: _additionalInfo2.default });
		_utils2.default.register({ tagName: 'input-radio', proto: _inputRadio2.default, ensureStateChanges: true });
		_utils2.default.register({ tagName: 'input-radio-group', proto: _inputRadioGroup2.default, ensureStateChanges: true });
		_utils2.default.register({ tagName: 'input-checkbox', proto: _inputCheckbox2.default, ensureStateChanges: true });
		_utils2.default.register({ tagName: 'input-text', proto: _inputText2.default, ensureStateChanges: true });
		_utils2.default.register({ tagName: 'input-textarea', proto: _inputTextarea2.default, ensureStateChanges: true });
		_utils2.default.register({ tagName: 'input-select', proto: _inputSelect2.default, ensureStateChanges: true });
		_utils2.default.register({ tagName: 'input-autocomplete', proto: _inputAutocomplete2.default, ensureStateChanges: true });
		_utils2.default.register({ tagName: 'form-ajax', proto: _formAjax2.default });

		// Collection Elements
		_utils2.default.register({ tagName: 'collection-search-form', proto: _collectionSearchForm2.default });
		_utils2.default.register({ tagName: 'collection-elements', proto: _collectionElements2.default });
		_utils2.default.register({ tagName: 'collection-container', proto: _collectionContainer2.default });
		_utils2.default.register({ tagName: 'collection-feedback', proto: _collectionFeedback2.default });
		_utils2.default.register({ tagName: 'feedback-token', proto: _feedbackToken2.default });
		_utils2.default.register({ tagName: 'table-column', proto: _tableColumn2.default });
		_utils2.default.register({ tagName: 'collection-table', proto: _collectionTable2.default });

		// Misc
		_utils2.default.register({ tagName: 'partial-ajax', proto: _partialAjax2.default });
		_utils2.default.register({ tagName: 'confirmation-modal', proto: _confirmationModal2.default, ensureStateChanges: true });

		window.xBootstrap = _utils2.default;
		window.xBootstrap.baseElements = baseElements;
	})(document);

	(function () {})();

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
	  getInternetExplorerVersion: function getInternetExplorerVersion()
	  // Returns the version of Internet Explorer or a -1
	  // (indicating the use of another browser).
	  {
	    var rv = -1; // Return value assumes failure.
	    if (navigator.appName == 'Microsoft Internet Explorer') {
	      var ua = navigator.userAgent;
	      var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
	      if (re.exec(ua) != null) {
	        rv = parseFloat(RegExp.$1);
	      }
	    }
	    return rv;
	  },
	  isBrowserSupportingMo: function isBrowserSupportingMo() {
	    if (this.getInternetExplorerVersion() === -1) {
	      return true;
	    }
	    return false;
	  },
	  register: function register(data) {
	    var elementName = data.tagName;
	    var object = data.proto;
	    var ensureMoPolyfill = data.ensureStateChanges;
	    if (this.isBrowserSupportingMo()) {
	      return xtag.register(elementName, object);
	    }

	    if (!ensureMoPolyfill) {
	      return xtag.register(elementName, object);
	    }

	    object.methods.do_attributeChanged = object.lifecycle.attributeChanged;

	    for (var attribute in object.accessors) {
	      object.accessors[attribute].set = function (newValue) {
	        var attributeName = attribute;
	        var originalSet = object.accessors[attributeName].set;
	        return function (newData) {
	          var oldValue = this.xtag.data[attributeName];
	          if (newData != oldValue) this.raiseAttributeChanged.call(this, attributeName, oldValue, newData);
	          originalSet.call(this, oldValue);
	        };
	      }();
	    };

	    return xtag.register(elementName, object);
	  },
	  createElement: function createElement(tagName, object) {
	    var element = document.createElement(tagName);
	    for (var attrname in object) {
	      element[attrname] = object[attrname];
	    }
	    return element;
	  },
	  hideElement: function hideElement(element) {
	    if (!element) {
	      return;
	    }
	    console.log("hide");
	    this.addClassToElement('hidden', element);
	  },
	  showElement: function showElement(element) {
	    if (!element) {
	      return;
	    }
	    this.removeClassFromElement('hidden', element);
	  },
	  addClassToElement: function addClassToElement(className, el) {
	    if (el.classList) el.classList.add(className);else el.className = (el.className || '') + ' ' + className;
	  },
	  removeClassFromElement: function removeClassFromElement(className, el) {
	    if (el.classList) el.classList.remove(className);else el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
	  },
	  raise: function raise(element, eventName, obj) {
	    var event = new CustomEvent(eventName);
	    _(event).extend(obj);
	    element.dispatchEvent(event);
	  },
	  attachListener: function attachListener(element, eventName, callback) {
	    element.addEventListener(eventName, callback, false);
	  },
	  confirmationWrapper: function confirmationWrapper(options) {
	    var wrapperFunction = function wrapperFunction() {
	      var modal = document.createElement("confirmation-modal");
	      modal.title = options.title;
	      modal.message = options.message;
	      modal.yes = options.yes;
	      modal.no = options.no;
	      modal.onConfirmation = options.onConfirmation;
	      modal.onDecline = options.onDecline;
	      modal.jQuery = "$";
	      document.body.appendChild(modal);
	      modal.open();
	    };
	    return wrapperFunction;
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

	var _elementBase = __webpack_require__(4);

	var _elementBase2 = _interopRequireDefault(_elementBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var template = function template(data) {
	    return "<li><a class=\"selectable\">" + data.value + "</a></li>";
	};

	var dropdownElement = {
	    accessors: {
	        key: {
	            attribute: {},
	            get: function get() {
	                return this.getDataAttribute('key') || '';
	            },
	            set: function set(data) {
	                this.xtag.data.key = data;
	            }
	        },
	        value: {
	            attribute: {},
	            get: function get() {
	                return this.getDataAttribute('value') || '';
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

	exports.default = _utils2.default.extend(dropdownElement).from(_elementBase2.default);

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _utils = __webpack_require__(1);

	var _utils2 = _interopRequireDefault(_utils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
		accessors: {
			restService: {
				attribute: {},
				get: function get() {
					return this.getDataAttribute('rest-service') || "";
				},
				set: function set(data) {
					this.xtag.data.restService = data;
				}
			}
		},
		methods: {
			getRenderingRoot: function getRenderingRoot() {
				// Could be used for shadow dom
				return this;
			},
			selectInRenderingRoot: function selectInRenderingRoot(selector) {
				return this.getRenderingRoot().querySelector(selector);
			},
			insertHtmlInRenderingRoot: function insertHtmlInRenderingRoot(html) {
				this.getRenderingRoot().innerHTML = html;
			},
			getDataAttribute: function getDataAttribute(attributeName) {
				return this.getAttribute(attributeName) || this.getAttribute("data-" + attributeName);
			},
			hasDataAttribute: function hasDataAttribute(attributeName) {
				return this.hasAttribute(attributeName) || this.hasAttribute("data-" + attributeName);
			},
			appendHtmlInRenderingRoot: function appendHtmlInRenderingRoot(html) {
				var div = document.createElement('div');
				div.innerHTML = html ? html.trim() : '';
				var elements = div.childNodes;
				_(elements).each(function (element) {
					this.getRenderingRoot().appendChild(element);
				}, this);
			},
			raiseAttributeChanged: function raiseAttributeChanged(attributeName, oldValue, newValue) {
				if (_utils2.default.isBrowserSupportingMo()) {
					return;
				} else {
					var changeInfo = {
						attributeName: attributeName,
						oldValue: oldValue,
						newValue: newValue
					};
					if (_(this.do_attributeChanged).isFunction()) this.do_attributeChanged(attributeName, oldValue, newValue);
				}
			},
			getInnerContent: function getInnerContent(selector) {
				var content = this.querySelector(selector);
				if (content) {
					return content;
				} else {
					return this;
				}
			},
			onComponentsReady: function onComponentsReady(func) {
				setTimeout(function () {
					func();
				}, 200);
			},
			getRestService: function getRestService() {
				var restServiceKey = this.restService || "$";
				var restServiceObject = window[restServiceKey];
				if (!restServiceObject) {
					var message = "A rest service with an ajax method must be assigned to window." + restServiceKey;
					throw new Error(message);
				}
				return restServiceObject;
			}
		}
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _utils = __webpack_require__(1);

	var _utils2 = _interopRequireDefault(_utils);

	var _elementBase = __webpack_require__(4);

	var _elementBase2 = _interopRequireDefault(_elementBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var additionalInfo = {
	    accessors: {
	        field: {
	            attribute: {},
	            get: function get() {
	                return this.getDataAttribute('field');
	            },
	            set: function set(value) {
	                this.xtag.data.field = value;
	            }
	        },
	        value: {
	            attribute: {},
	            get: function get() {
	                return this.getDataAttribute('value');
	            },
	            set: function set(data) {
	                this.xtag.data.value = data;
	            }
	        },
	        valueOf: {
	            attribute: {},
	            get: function get() {
	                return this.getDataAttribute('value-of');
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

	exports.default = _utils2.default.extend(additionalInfo).from(_elementBase2.default);

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _utils = __webpack_require__(1);

	var _utils2 = _interopRequireDefault(_utils);

	var _elementBase = __webpack_require__(4);

	var _elementBase2 = _interopRequireDefault(_elementBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var template = function template(data) {
	    return "    \n\t<div class=\"radio\">\n      <label>\n      \t<input \tname=\"" + data.field + "\"\n      \t\t\tvalue=\"" + data.value + "\"\n      \t\t\ttype=\"radio\"\n      \t\t\t" + data.disabled + "\n      \t\t\t" + data.checked + "/>\n      \t\t<span class=\"radio-label\">" + data.label + "</span>\n      \t</label>\n    </div>";
	};

	var inputRadio = {
	    accessors: {
	        field: {
	            attribute: {},
	            get: function get() {
	                return this.getDataAttribute('field');
	            },
	            set: function set(value) {
	                this.xtag.data.field = value;
	            }
	        },
	        value: {
	            attribute: {},
	            get: function get() {
	                return this.getDataAttribute('value');
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

	exports.default = _utils2.default.extend(inputRadio).from(_elementBase2.default);

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _utils = __webpack_require__(1);

	var _utils2 = _interopRequireDefault(_utils);

	var _inputElementBase = __webpack_require__(8);

	var _inputElementBase2 = _interopRequireDefault(_inputElementBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var template = function template(data) {
	    return "    \n\t<div class=\"" + data.errorClass + "\">\n        <label>" + data.label + "</label>\n        <radio-group-content class=\"inner-content\">\n            " + data.innerContent + "\n        </radio-group-content>\n        </div>\n        <span class=\"help-block\">\n        \t" + data.error + "\n        </span>\n    </div>";
	};

	var inputRadioGroup = {
	    accessors: {
	        required: {
	            attribute: { boolean: true },
	            get: function get() {
	                return this.hasDataAttribute('required');
	            },
	            set: function set(data) {
	                this.xtag.data.required = data;
	            }
	        },
	        requiredMessage: {
	            attribute: {},
	            get: function get() {
	                return this.getDataAttribute('required-message') || '';
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
	            if (attributeName === "error") {
	                this.selectInRenderingRoot(".form-group").className = this.errorClass;
	                this.selectInRenderingRoot(".help-block").textContent = this.error;
	                return;
	            }
	            this.render();
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

	exports.default = _utils2.default.extend(inputRadioGroup).from(_inputElementBase2.default);

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _utils = __webpack_require__(1);

	var _utils2 = _interopRequireDefault(_utils);

	var _elementBase = __webpack_require__(4);

	var _elementBase2 = _interopRequireDefault(_elementBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var inputElementBase = {
	    accessors: {
	        field: {
	            attribute: {},
	            get: function get() {
	                return this.getDataAttribute('field');
	            },
	            set: function set(value) {
	                this.xtag.data.field = value;
	            }
	        },
	        label: {
	            attribute: {},
	            get: function get() {
	                return this.getDataAttribute('label');
	            },
	            set: function set(value) {
	                this.xtag.data.label = value;
	            }
	        },
	        error: {
	            attribute: {},
	            get: function get() {
	                return this.getDataAttribute('error') || '';
	            },
	            set: function set(value) {
	                this.xtag.data.error = value;
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
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _utils = __webpack_require__(1);

	var _utils2 = _interopRequireDefault(_utils);

	var _inputElementBase = __webpack_require__(8);

	var _inputElementBase2 = _interopRequireDefault(_inputElementBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var template = function template(data) {
	    return "\n    <div class=\"" + data.errorClass + " checkbox\">\n        <label for=\"" + data.field + "\">\n            <input  type=\"checkbox\"\n                    id=\"" + data.field + "\"\n                    name=\"" + data.field + "\"\n                    " + data.checked + "\n                    " + data.disabled + "/>\n            <span class=\"label-text\">" + data.label + "</span>\n        </label>            \n        <span class=\"help-block\">" + data.error + "</span>\n    </div>";
	};

	var inputCheckbox = {
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
	            if (attributeName === "checked" && oldValue != newValue) {
	                this.input.checked = newValue === true;
	            }
	            this.render();
	        }
	    },
	    methods: {
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

	exports.default = _utils2.default.extend(inputCheckbox).from(_inputElementBase2.default);

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _utils = __webpack_require__(1);

	var _utils2 = _interopRequireDefault(_utils);

	var _inputTextElementBase = __webpack_require__(11);

	var _inputTextElementBase2 = _interopRequireDefault(_inputTextElementBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var template = function template(data) {
	    return "\n    <div class=\"" + data.errorClass + "\">\n        <label for=\"" + data.field + "\">\n            " + data.label + "\n        </label>\n        <input  type=\"text\" \n                class=\"form-control\"\n                id=\"" + data.field + "\"\n                name=\"" + data.field + "\"\n                placeholder=\"" + data.placeholder + "\"\n                value=\"" + data.value + "\"\n                " + data.disabled + "/>\n        <span class=\"help-block\">\n            " + data.error + "\n        </span>\n        <input-text-content></input-text-content>\n    </div>";
	};

	var templateWithAddOn = function templateWithAddOn(data) {
	    return "\n    <div class=\"" + data.errorClass + "\">\n        <label for=\"" + data.field + "\">\n            " + data.label + "\n        </label>\n        <div class='input-group'>\n            <input  type=\"text\" \n                    class=\"form-control\"\n                    id=\"" + data.field + "\"\n                    name=\"" + data.field + "\"\n                    placeholder=\"" + data.placeholder + "\"\n                    value=\"" + data.value + "\"\n                    " + data.disabled + "/>\n            <span class=\"input-group-addon\">\n                <input-text-content>\n                    " + data.innerContent + "\n                </input-text-content>\n            </span>\n        </div>                    \n        <span class=\"help-block\">\n            " + data.error + "\n        </span>\n    </div>";
	};

	var inputText = {
	    accessors: {
	        jquery: {
	            attribute: {},
	            get: function get() {
	                return this.getDataAttribute('jquery') || '';
	            },
	            set: function set(data) {
	                this.xtag.data.jquery = data;
	            }
	        },
	        dateFormat: {
	            attribute: {},
	            get: function get() {
	                return this.getDataAttribute('date-format') || '';
	            },
	            set: function set(data) {
	                this.xtag.data.dateFormat = data;
	            }
	        },
	        regex: {
	            attribute: {},
	            get: function get() {
	                return this.getDataAttribute('regex') || '';
	            },
	            set: function set(data) {
	                this.xtag.data.regex = data;
	            }
	        },
	        regexMessage: {
	            attribute: {},
	            get: function get() {
	                return this.getDataAttribute('regex-message') || '';
	            },
	            set: function set(data) {
	                this.xtag.data.regexMessage = data;
	            }
	        },
	        maxLength: {
	            attribute: {},
	            get: function get() {
	                return this.getDataAttribute('max-length');
	            },
	            set: function set(data) {
	                this.xtag.data.maxLength = data;
	            }
	        },
	        maxLengthMessage: {
	            attribute: {},
	            get: function get() {
	                return this.getDataAttribute('max-length-message') || '';
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
	            if (attributeName === "error") {
	                this.renderError();
	            } else if (attributeName === "value" && oldValue != newValue) {
	                this.getInput().value = newValue;
	            } else {
	                this.render();
	            }
	        }
	    },
	    methods: {
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

	exports.default = _utils2.default.extend(inputText).from(_inputTextElementBase2.default);

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _utils = __webpack_require__(1);

	var _utils2 = _interopRequireDefault(_utils);

	var _inputElementBase = __webpack_require__(8);

	var _inputElementBase2 = _interopRequireDefault(_inputElementBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var inputTextElementBase = {
	    accessors: {
	        placeholder: {
	            attribute: {},
	            get: function get() {
	                return this.getDataAttribute('placeholder') || '';
	            },
	            set: function set(value) {
	                this.xtag.data.placeholder = value;
	            }
	        },
	        required: {
	            attribute: { boolean: true },
	            get: function get() {
	                return this.hasDataAttribute('required');
	            },
	            set: function set(data) {
	                this.xtag.data.required = data;
	            }
	        },
	        requiredMessage: {
	            attribute: {},
	            get: function get() {
	                return this.getDataAttribute('required-message') || '';
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
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _utils = __webpack_require__(1);

	var _utils2 = _interopRequireDefault(_utils);

	var _inputTextElementBase = __webpack_require__(11);

	var _inputTextElementBase2 = _interopRequireDefault(_inputTextElementBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var template = function template(data) {
	    return "\n    <div class=\"" + data.errorClass + "\">\n        <label for=\"" + data.field + "\">\n            " + data.label + "\n        </label>\n        <textarea   class=\"form-control\"\n                    id=\"" + data.field + "\"\n                    name=\"" + data.field + "\"\n                    placeholder=\"" + data.placeholder + "\"\n                    value=\"" + data.value + "\"\n                    rows=\"" + data.rows + "\"\n                    " + data.disabled + ">" + data.value + "</textarea>\n        <span class=\"help-block\">\n            " + data.error + "\n        </span>\n    </div>";
	};

	var inputTextarea = {
	    accessors: {
	        rows: {
	            attribute: {},
	            get: function get() {
	                return this.getDataAttribute('rows');
	            },
	            set: function set(data) {
	                this.xtag.data.rows = data;
	            }
	        },
	        maxLength: {
	            attribute: {},
	            get: function get() {
	                return this.getDataAttribute('max-length');
	            },
	            set: function set(data) {
	                this.xtag.data.maxLength = data;
	            }
	        },
	        maxLengthMessage: {
	            attribute: {},
	            get: function get() {
	                return this.getDataAttribute('max-length-message') || '';
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
	            if (attributeName === "error") {
	                this.renderError();
	            } else if (attributeName === "value" && oldValue != newValue) {
	                this.selectInRenderingRoot("textarea").value = newValue;
	            } else {
	                this.render();
	            }
	        }
	    },
	    methods: {
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

	exports.default = _utils2.default.extend(inputTextarea).from(_inputTextElementBase2.default);

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _utils = __webpack_require__(1);

	var _utils2 = _interopRequireDefault(_utils);

	var _dropdownInputElementBase = __webpack_require__(14);

	var _dropdownInputElementBase2 = _interopRequireDefault(_dropdownInputElementBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var template = function template(data) {
	    return "    \n\t<div class=\"" + data.errorClass + "\">\n        <div class=\"dropdown\">\n            <label for=\"" + data.field + "\">" + data.label + "</label>\n            <button class=\"" + data.buttonClass + "\" id=\"" + data.field + "\" type=\"button\">\n                <span class=\"pull-left\">" + data.buttonContent + "</span>\n                <span class=\"pull-right\">\n                    <span class=\"caret\"></span>\n                </span>\n            </button>\n            <ul class=\"dropdown-menu\" style=\"width: 100%\">\n                <input-select-content>\n                    " + data.innerContent + "\n                </input-select-content>\n            </ul>\n        </div>\n        <span class=\"help-block\">" + data.error + "</span>\n    </div>";
	};

	var inputSelect = {
	    accessors: {
	        placeholder: {
	            attribute: {},
	            get: function get() {
	                return this.getDataAttribute('placeholder') || '';
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
	            if (attributeName === "value") {
	                this.selectedValue = "";
	            }
	            this.render();
	        }
	    },
	    methods: {
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

	            var restService = this.getRestService();
	            restService.ajax({
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

	exports.default = _utils2.default.extend(inputSelect).from(_dropdownInputElementBase2.default);

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _utils = __webpack_require__(1);

	var _utils2 = _interopRequireDefault(_utils);

	var _inputElementBase = __webpack_require__(8);

	var _inputElementBase2 = _interopRequireDefault(_inputElementBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var dropdownInputElementBase = {
	    accessors: {
	        url: {
	            attribute: {},
	            get: function get() {
	                return this.getDataAttribute('url');
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
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _utils = __webpack_require__(1);

	var _utils2 = _interopRequireDefault(_utils);

	var _dropdownInputTextElementBase = __webpack_require__(16);

	var _dropdownInputTextElementBase2 = _interopRequireDefault(_dropdownInputTextElementBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var template = function template(data) {
	    return "    \n\t<div class=\"" + data.errorClass + "\">\n\t\t<div class=\"dropdown\">\n\t\t\t<label for=\"" + data.field + "\">" + data.label + "</label>\n\t\t\t<input class=\"form-control\" type=\"text\"\n\t\t\t\tid=\"" + data.field + "\" \n                name=\"" + data.field + "\" \n                value=\"" + data.value + "\"\n                placeholder=\"" + data.placeholder + "\"\n                " + data.disabled + "/>\n            <ul class=\"dropdown-menu\" style=\"width: 100%\"></ul>\n        </div>\n        <span class=\"help-block\">" + data.error + "</span>\n    </div>";
	};

	var inputAutocomplete = {
	    lifecycle: {
	        created: function created() {
	            this.render();
	        },
	        inserted: function inserted() {
	            this.fetchData();
	        },
	        attributeChanged: function attributeChanged(attributeName, oldValue, newValue) {
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
	        fetchData: function fetchData() {
	            var self = this;
	            if (!self.url) {
	                return;
	            }

	            var restService = this.getRestService();
	            restService.ajax({
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

	exports.default = _utils2.default.extend(inputAutocomplete).from(_dropdownInputTextElementBase2.default);

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _utils = __webpack_require__(1);

	var _utils2 = _interopRequireDefault(_utils);

	var _dropdownInputElementBase = __webpack_require__(14);

	var _dropdownInputElementBase2 = _interopRequireDefault(_dropdownInputElementBase);

	var _inputTextElementBase = __webpack_require__(11);

	var _inputTextElementBase2 = _interopRequireDefault(_inputTextElementBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _utils2.default.extend(_dropdownInputElementBase2.default).from(_inputTextElementBase2.default);

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _accessors;

	var _utils = __webpack_require__(1);

	var _utils2 = _interopRequireDefault(_utils);

	var _formElementBase = __webpack_require__(18);

	var _formElementBase2 = _interopRequireDefault(_formElementBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var template = function template(data) {
	    return "    \n    <form>\n        <form-ajax-content class=\"inner-content\">\n            " + data.innerContent + "\n        </form-ajax-content>\n    </form>";
	};

	var formAjax = {
	    accessors: (_accessors = {
	        postUrl: {
	            attribute: {},
	            get: function get() {
	                return this.getDataAttribute('post-url') || '';
	            },
	            set: function set(data) {
	                this.xtag.data.postUrl = data;
	            }
	        },
	        getUrl: {
	            attribute: {},
	            get: function get() {
	                return this.getDataAttribute('get-url') || '';
	            },
	            set: function set(data) {
	                this.xtag.data.getUrl = data;
	            }
	        },
	        redirectUrl: {
	            attribute: {},
	            get: function get() {
	                return this.getDataAttribute('redirect-url') || '';
	            },
	            set: function set(data) {
	                this.xtag.data.redirectUrl = data;
	            }
	        },
	        redirectHash: {
	            attribute: {},
	            get: function get() {
	                return this.getDataAttribute('redirect-hash') || '';
	            },
	            set: function set(data) {
	                this.xtag.data.redirectHash = data;
	            }
	        },
	        redirectToId: {
	            attribute: { boolean: true },
	            get: function get() {
	                return this.hasDataAttribute('redirect-to-id') || '';
	            },
	            set: function set(data) {
	                this.xtag.data.redirectToId = data;
	            }
	        }
	    }, _defineProperty(_accessors, "redirectUrl", {
	        attribute: {},
	        get: function get() {
	            return this.getDataAttribute('redirect-url') || '';
	        },
	        set: function set(data) {
	            this.xtag.data.redirectUrl = data;
	        }
	    }), _defineProperty(_accessors, "clearOnSuccess", {
	        attribute: { boolean: true },
	        get: function get() {
	            return this.hasDataAttribute('clear-on-success') || '';
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
	            var restService = self.getRestService();
	            restService.ajax({
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

	exports.default = _utils2.default.extend(formAjax).from(_formElementBase2.default);

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _utils = __webpack_require__(1);

	var _utils2 = _interopRequireDefault(_utils);

	var _elementBase = __webpack_require__(4);

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
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _utils = __webpack_require__(1);

	var _utils2 = _interopRequireDefault(_utils);

	var _formElementBase = __webpack_require__(18);

	var _formElementBase2 = _interopRequireDefault(_formElementBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var template = function template(data) {
	    return "\n    <form>\n        <collection-search-form-content>\n            " + data.innerContent + "\n        </collection-search-form-content>\n    </form>";
	};

	var collectionSearchForm = {
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
	        // submit: function (e) {
	        //     e.preventDefault();
	        //     var isFormValid = this.validate();
	        //     if (!isFormValid) {
	        //         e.stopPropagation();
	        //         //var formData = this.getData();
	        //         //alert(JSON.stringify(formData));
	        //     }
	        // }
	    }
	};

	exports.default = _utils2.default.extend(collectionSearchForm).from(_formElementBase2.default);

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _utils = __webpack_require__(1);

	var _utils2 = _interopRequireDefault(_utils);

	var _elementBase = __webpack_require__(4);

	var _elementBase2 = _interopRequireDefault(_elementBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var template = "\n    <collection-elements-content id=\"inner-container\"></collection-elements-content>\n    <collection-elements-template style=\"display: none;\"></collection-elements-template>";

	var collectionElements = {
	    accessors: {
	        type: {
	            attribute: {},
	            get: function get() {
	                return this.getDataAttribute('type');
	            },
	            set: function set(value) {
	                this.xtag.data.type = value;
	            }
	        }
	    },
	    lifecycle: {
	        created: function created() {
	            this.saveTemplate();
	            this.render();
	            this.saveTemplateInMarkup();
	        }
	    },
	    methods: {
	        getInnerContainer: function getInnerContainer() {
	            return this.selectInRenderingRoot("collection-elements-content");
	        },
	        render: function render() {
	            this.getRenderingRoot().innerHTML = template;
	        },
	        saveTemplateInMarkup: function saveTemplateInMarkup() {
	            this.templateTagContainer = this.selectInRenderingRoot('collection-elements-template');
	            if (this.listItemTemplate) {
	                this.templateTagContainer.appendChild(this.listItemTemplate);
	            }
	        },
	        saveTemplate: function saveTemplate() {
	            var firstChild = this.getInnerContent("collection-elements-template").firstElementChild;
	            if (firstChild) {
	                this.listItemTemplate = firstChild.cloneNode(true);
	            }
	        },
	        appendData: function appendData(data) {
	            if (!_(data).isArray()) {
	                throw new Error("Result json from server is expected to have a collection property of type array");
	            }

	            this.addToModel(data);

	            _(data).each(function (elementData) {
	                var domElement = this.getChildElement(elementData);
	                this.getInnerContainer().appendChild(domElement);
	            }, this);
	        },
	        renderData: function renderData(data) {
	            this.emptyCollection();
	            this.appendData(data);
	        },
	        emptyCollection: function emptyCollection() {
	            if (this.getInnerContainer()) {
	                this.getInnerContainer().innerHTML = '';
	                this.emptyModel();
	            }
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
	        },
	        addToModel: function addToModel(elements) {
	            if (!this.model) {
	                this.model = [];
	            }

	            _(elements).each(function (element) {
	                this.model.push(element);
	            }, this);
	        },
	        emptyModel: function emptyModel() {
	            this.model = [];
	        },
	        getModel: function getModel() {
	            if (!this.model) {
	                this.model = [];
	            }

	            return this.model;
	        }
	    }
	};

	exports.default = _utils2.default.extend(collectionElements).from(_elementBase2.default);

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _utils = __webpack_require__(1);

	var _utils2 = _interopRequireDefault(_utils);

	var _elementBase = __webpack_require__(4);

	var _elementBase2 = _interopRequireDefault(_elementBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var template = "\n    <collection-container-content \n        id=\"inner-content\">\n    </collection-container-content>";

	var pagerHtml = "\n    <ul class=\"pager\">\n        <li><a id=\"previous-button\">Previous</a></li>\n        <li><a id=\"next-button\">Next</a></li>\n    </ul>";

	var showMoreButtonHtml = "\n    <button id=\"show-more-button\" class=\"btn btn-default\">Show More</button>";

	var collectionContainer = {
	    accessors: {
	        url: {
	            attribute: {},
	            get: function get() {
	                return this.getDataAttribute('url');
	            },
	            set: function set(data) {
	                this.xtag.data.url = data;
	            }
	        },
	        infiniteScrolling: {
	            attribute: { boolean: true },
	            get: function get() {
	                return this.hasDataAttribute('infinite-scrolling');
	            },
	            set: function set(data) {
	                this.xtag.data.infiniteScrolling = data;
	            }
	        },
	        showMoreButton: {
	            attribute: { boolean: true },
	            get: function get() {
	                return this.hasDataAttribute('show-more-button');
	            },
	            set: function set(data) {
	                this.xtag.data.showMoreButton = data;
	            }
	        },
	        pager: {
	            attribute: { boolean: true },
	            get: function get() {
	                return this.hasDataAttribute('pager');
	            },
	            set: function set(data) {
	                this.xtag.data.pager = data;
	            }
	        },
	        elementsPerPage: {
	            attribute: {},
	            get: function get() {
	                return this.getDataAttribute('elements-per-page');
	            },
	            set: function set(data) {
	                this.xtag.data.elementsPerPage = data;
	            }
	        },
	        currentPage: {
	            attribute: {},
	            get: function get() {
	                return this.getDataAttribute('current-page');
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
	            this.getRenderingRoot().innerHTML = template;
	            this.selectInRenderingRoot("#inner-content").innerHTML = this.innerContent;
	            this.initializeComponents();
	        },
	        inserted: function inserted() {
	            var self = this;
	            self.onComponentsReady(function () {
	                self.fetchData();
	                self.activateRefreshing();
	                self.activateInfiniteScrolling();
	                self.renderShowMoreButton();
	                self.renderPager();
	            });
	            this.activateRefreshing();
	        }
	    },
	    methods: {
	        initializeComponents: function initializeComponents() {
	            this.collectionElementTag = this.selectInRenderingRoot("collection-elements,collection-table,[collection-elements],[collection-table],[data-collection-elements],[data-collection-table]");
	            this.searchForm = this.selectInRenderingRoot("collection-search-form,[collection-search-form],[data-collection-search-form]");
	            this.currentPage = this.currentPage || 1;
	        },
	        fetchData: function fetchData() {
	            var self = this;

	            if (!self.url) {
	                throw new Error("Url is not defined");
	            }

	            if (!self.collectionElementTag) {
	                throw new Error("No <collection-elements/> found as inner contet of <collection-container/>.");
	            }

	            var formData = {};
	            if (self.searchForm) {
	                var isFormValid = self.searchForm.validate();
	                if (!isFormValid) {
	                    return;
	                }
	                formData = self.searchForm.getData();
	            }

	            var dataMatcher = _.matcher(self.lastData || {});
	            var hasFormChanged = !dataMatcher(formData);
	            self.lastData = _(formData).clone();
	            if (hasFormChanged) {
	                self.currentPage = 1;
	                self.collectionElementTag.emptyCollection();
	            }
	            formData.page = self.currentPage;
	            formData.elementsPerPage = self.elementsPerPage;

	            var restService = self.getRestService();
	            restService.ajax({
	                url: self.url,
	                method: "GET",
	                data: formData,
	                success: function success(result) {
	                    self.checkDataFormat(result);
	                    self.handleDataRendering(result);
	                }
	            });
	        },
	        checkDataFormat: function checkDataFormat(dataFromServer) {
	            if (!_(dataFromServer.numberOfResults).isNumber()) {
	                throw new Error("Result json from server is expected to have a numberOfResults property of type number");
	            }

	            if (!_(dataFromServer.collection).isArray()) {
	                throw new Error("Result json from server is expected to have a collection property of type array");
	            }
	        },
	        handleDataRendering: function handleDataRendering(result) {
	            if (this.showMoreButton) {
	                this.resultCounter = (this.resultCounter || 0) + result.numberOfResults;
	            } else if (this.infiniteScrolling) {
	                this.resultCounter = (this.resultCounter || 0) + result.numberOfResults;
	            } else if (this.pager) {
	                this.resultCounter = result.numberOfResults;
	                this.collectionElementTag.emptyCollection();
	            } else {
	                var message = "Neither show-more-button, infinite-scrolling or pager are defined. " + "Showing the top " + this.elementsPerPage + " elements of collection.";
	                console.log(message);
	                this.resultCounter = result.numberOfResults;
	                this.collectionElementTag.emptyCollection();
	            }
	            this.collectionElementTag.appendData(result.collection);
	            this.renderFeedbacks(result);
	            this.toggleShowButtons();
	        },
	        toggleShowButtons: function toggleShowButtons() {
	            var modelList = this.collectionElementTag.getModel();
	            var button = this.selectInRenderingRoot("#show-more-button");
	            var pager = this.selectInRenderingRoot(".pager");
	            if (_(modelList).isEmpty()) {
	                _utils2.default.hideElement(button);
	                _utils2.default.hideElement(pager);
	            } else {
	                _utils2.default.showElement(button);
	                _utils2.default.showElement(pager);
	            }
	        },
	        renderFeedbacks: function renderFeedbacks(result) {
	            var feedbacks = this.getRenderingRoot().querySelectorAll("collection-feedback");

	            _(feedbacks).each(function (feedback) {
	                if (_(feedback.renderFrom).isFunction()) feedback.renderFrom(result);
	            });
	        },
	        appendNextPageData: function appendNextPageData() {
	            this.currentPage++;
	            this.fetchData();
	        },
	        fetchNextPageData: function fetchNextPageData() {
	            this.currentPage++;
	            this.fetchData();
	        },
	        fetchPreviousPageData: function fetchPreviousPageData() {
	            if (this.currentPage == 1) {
	                return;
	            }
	            this.currentPage--;
	            this.fetchData();
	        },
	        renderShowMoreButton: function renderShowMoreButton() {
	            var self = this;
	            if (!self.showMoreButton) {
	                return;
	            }
	            self.appendHtmlInRenderingRoot(showMoreButtonHtml);
	            var showMoreButton = this.selectInRenderingRoot("#show-more-button");
	            showMoreButton.onclick = function () {
	                self.appendNextPageData();
	            };
	        },
	        renderPager: function renderPager() {
	            var self = this;
	            if (!self.pager) {
	                return;
	            }
	            self.appendHtmlInRenderingRoot(pagerHtml);
	            var nextButton = this.selectInRenderingRoot("#next-button");
	            var previousButton = this.selectInRenderingRoot("#previous-button");
	            nextButton.onclick = function () {
	                self.fetchNextPageData();
	            };
	            previousButton.onclick = function () {
	                self.fetchPreviousPageData();
	            };
	        },
	        activateInfiniteScrolling: function activateInfiniteScrolling() {
	            var self = this;
	            if (!self.infiniteScrolling) {
	                return;
	            }
	            var scrollCallback = function scrollCallback() {
	                var positionOffset = window.outerHeight + (window.scrollY || pageYOffset) - document.body.offsetHeight;
	                //console.log(positionOffset);
	                if (positionOffset >= 0) {
	                    self.appendNextPageData();
	                }
	            };
	            var throttledFunction = _.throttle(scrollCallback, 300);
	            window.addEventListener("scroll", throttledFunction, false);
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
	            this.resultCounter = 0;
	            this.collectionElementTag.emptyCollection();
	            this.fetchData();
	        }
	    }
	};

	exports.default = _utils2.default.extend(collectionContainer).from(_elementBase2.default);

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _utils = __webpack_require__(1);

	var _utils2 = _interopRequireDefault(_utils);

	var _elementBase = __webpack_require__(4);

	var _elementBase2 = _interopRequireDefault(_elementBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var template = function template(data) {
	    return "    \n    <collection-feedback-content>\n        " + data.innerContent + "\n    </collection-feedback-content>";
	};

	var collectionFeedback = {
	    lifecycle: {
	        created: function created() {
	            this.innerContent = this.getInnerContent("collection-feedback-content").innerHTML;
	            var data = {
	                innerContent: this.innerContent
	            };
	            var html = template(data);
	            this.insertHtmlInRenderingRoot(html);
	        }
	    },
	    methods: {
	        renderFrom: function renderFrom(object) {
	            if (!object) {
	                throw new Error("Falsy object in renderFrom of <collection-feedback/>");
	            }

	            var tokens = this.getRenderingRoot().querySelectorAll("feedback-token");
	            _(tokens).each(function (token) {
	                token.renderFrom(object);
	            });
	        }
	    }
	};

	exports.default = _utils2.default.extend(collectionFeedback).from(_elementBase2.default);

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _utils = __webpack_require__(1);

	var _utils2 = _interopRequireDefault(_utils);

	var _elementBase = __webpack_require__(4);

	var _elementBase2 = _interopRequireDefault(_elementBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var template = function template(data) {
	    return "<span>" + data.value + "</span>";
	};

	var feedbackToken = {
	    accessors: {
	        key: {
	            attribute: {},
	            get: function get() {
	                return this.getDataAttribute('key') || '';
	            },
	            set: function set(data) {
	                this.xtag.data.key = data;
	            }
	        },
	        default: {
	            attribute: {},
	            get: function get() {
	                return this.getDataAttribute('default') || '';
	            },
	            set: function set(data) {
	                this.xtag.data.default = data;
	            }
	        }
	    },
	    lifecycle: {
	        created: function created() {
	            var data = { value: this.default };
	            this.getRenderingRoot().innerHTML = template(data);
	        }
	    },
	    methods: {
	        renderFrom: function renderFrom(object) {
	            if (!object) {
	                throw new Error("Falsy object in renderFrom of <feedback-token/>");
	            }

	            if (!this.key) {
	                throw new Error("Falsy key in <feedback-token/>");
	            }

	            var data = { value: object[this.key] || this.default };
	            this.getRenderingRoot().innerHTML = template(data);
	        }
	    }
	};

	exports.default = _utils2.default.extend(feedbackToken).from(_elementBase2.default);

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _utils = __webpack_require__(1);

	var _utils2 = _interopRequireDefault(_utils);

	var _elementBase = __webpack_require__(4);

	var _elementBase2 = _interopRequireDefault(_elementBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var tableColumn = {
	    accessors: {
	        label: {
	            attribute: {},
	            get: function get() {
	                return this.getDataAttribute('label') || '';
	            },
	            set: function set(data) {
	                this.xtag.data.label = data;
	            }
	        },
	        field: {
	            attribute: {},
	            get: function get() {
	                return this.getDataAttribute('field') || '';
	            },
	            set: function set(data) {
	                this.xtag.data.field = data;
	            }
	        },
	        default: {
	            attribute: {},
	            get: function get() {
	                return this.getDataAttribute('default') || '';
	            },
	            set: function set(data) {
	                this.xtag.data.default = data;
	            }
	        }
	    },
	    methods: {
	        renderCell: function renderCell(object) {
	            if (!object) {
	                throw new Error("Falsy object in renderCell of <table-column/>");
	            }

	            if (!this.field) {
	                throw new Error("Falsy field in <table-column/>");
	            }

	            var element = document.createElement("span");
	            element.textContent = object[this.field] || this.default;
	            return element;
	        }
	    }
	};

	exports.default = _utils2.default.extend(tableColumn).from(_elementBase2.default);

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _utils = __webpack_require__(1);

	var _utils2 = _interopRequireDefault(_utils);

	var _collectionElements = __webpack_require__(20);

	var _collectionElements2 = _interopRequireDefault(_collectionElements);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var template = "\n    <table class=\"table\">\n        <thead>\n        </thead>\n        <tbody>\n        </tbody>\n    </table>\n    <collection-table-template style=\"display: none;\"></collection-table-template>";

	var collectionTable = {
	    lifecycle: {
	        created: function created() {
	            this.saveTemplate();
	            this.renderBaseTemplate();
	            this.saveTemplateInMarkup();
	            this.appendHeader();
	        }
	    },
	    methods: {
	        getInnerContainer: function getInnerContainer() {
	            return this.selectInRenderingRoot("tbody");
	        },
	        saveTemplate: function saveTemplate() {
	            this.innerContent = this.getInnerContent("collection-table-template").innerHTML;
	        },
	        renderBaseTemplate: function renderBaseTemplate() {
	            this.getRenderingRoot().innerHTML = template;
	            this.table = this.selectInRenderingRoot("table");
	            this.header = this.selectInRenderingRoot("thead");
	            this.body = this.selectInRenderingRoot("tbody");
	            this.hideTable();
	        },
	        showTable: function showTable() {
	            this.table.className = "table";
	        },
	        hideTable: function hideTable() {
	            this.table.className = "hidden table";
	        },
	        appendHeader: function appendHeader() {
	            var row = document.createElement("tr");
	            var columns = this.getInnerContent("collection-table-template").querySelectorAll("table-column");

	            _(columns).each(function (column) {
	                var headerCell = document.createElement("th");
	                headerCell.textContent = column.label || column.field;
	                row.appendChild(headerCell);
	            }, this);

	            this.header.appendChild(row);
	        },
	        saveTemplateInMarkup: function saveTemplateInMarkup() {
	            this.templateTagContainer = this.selectInRenderingRoot('collection-table-template');
	            this.templateTagContainer.innerHTML = this.innerContent;
	        },
	        emptyCollection: function emptyCollection() {
	            this.body.innerHTML = '';
	            this.emptyModel();
	        },
	        appendData: function appendData(data) {
	            if (!_(data).isArray()) {
	                throw new Error("Result json from server is expected to have a collection property of type array");
	            }

	            this.addToModel(data);

	            _(data).each(function (elementData) {
	                var domElement = this.getChildElement(elementData);
	                this.getInnerContainer().appendChild(domElement);
	            }, this);

	            var rows = this.getRenderingRoot().querySelectorAll("tr");
	            if (rows.length <= 1) {
	                this.hideTable();
	            } else {
	                this.showTable();
	            }
	        },
	        getChildElement: function getChildElement(elementData) {
	            var row = document.createElement("tr");
	            var columns = this.getInnerContent("collection-table-template").querySelectorAll("table-column");

	            _(columns).each(function (column) {
	                var td = document.createElement("td");
	                var cellContent = column.renderCell(elementData);
	                td.appendChild(cellContent);
	                row.appendChild(td);
	            }, this);
	            return row;
	        }
	    }
	};

	exports.default = _utils2.default.extend(collectionTable).from(_collectionElements2.default);

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _utils = __webpack_require__(1);

	var _utils2 = _interopRequireDefault(_utils);

	var _elementBase = __webpack_require__(4);

	var _elementBase2 = _interopRequireDefault(_elementBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var partialAjax = {
	    accessors: {
	        url: {
	            attribute: {},
	            get: function get() {
	                return this.getDataAttribute('url');
	            },
	            set: function set(value) {
	                this.xtag.data.url = value;
	            }
	        },
	        loaderTag: {
	            attribute: {},
	            get: function get() {
	                return this.getDataAttribute('loaderTag');
	            },
	            set: function set(data) {
	                this.xtag.data.loaderTag = data;
	            }
	        },
	        errorTag: {
	            attribute: {},
	            get: function get() {
	                return this.getDataAttribute('errorTag');
	            },
	            set: function set(data) {
	                this.xtag.data.errorTag = data;
	            }
	        }
	    },
	    lifecycle: {
	        inserted: function inserted() {
	            var self = this;
	            self.innerHTML = '';
	            self.renderLoader();
	            var restService = self.getRestService();
	            $.ajax({
	                url: self.url,
	                method: 'GET',
	                success: function success(result) {
	                    self.getRenderingRoot().innerHTML = result;
	                },
	                error: function error() {
	                    self.renderError();
	                }
	            });
	        }
	    },
	    methods: {
	        getLoaderElement: function getLoaderElement() {
	            if (!this.loaderTag) {
	                var loaderTag = document.createElement("span");
	                loaderTag.textContent = "Loading...";
	                return loaderTag;
	            } else {
	                var loaderTag = document.createElement(this.loaderTag);
	                return loaderTag;
	            }
	        },
	        getErrorElement: function getErrorElement() {
	            if (!this.loaderTag) {
	                var errorElement = document.createElement("span");
	                errorElement.textContent = "Can't load content";
	                return errorElement;
	            } else {
	                var errorElement = document.createElement(this.errorTag);
	                return errorElement;
	            }
	        },
	        renderError: function renderError() {
	            var errorElement = this.getErrorElement();
	            this.getRenderingRoot().innerHTML = '';
	            this.getRenderingRoot().appendChild(errorElement);
	        },
	        renderLoader: function renderLoader() {
	            var loaderTag = this.getLoaderElement();
	            this.getRenderingRoot().innerHTML = '';
	            this.getRenderingRoot().appendChild(loaderTag);
	        }
	    }
	};

	exports.default = _utils2.default.extend(partialAjax).from(_elementBase2.default);

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _utils = __webpack_require__(1);

	var _utils2 = _interopRequireDefault(_utils);

	var _elementBase = __webpack_require__(4);

	var _elementBase2 = _interopRequireDefault(_elementBase);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var template = function template(data) {
	    return "\n  <div class=\"modal fade custom-modal\">\n    <div class=\"modal-dialog\">\n    \n      <!-- Modal content-->\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n\n          <!-- Modal Title -->\n          <h4 class=\"modal-title\">" + data.title + "</h4>\n\n        </div>\n\n        <!-- Modal Body -->\n        <div class=\"modal-body\">\n          <p>" + data.message + "</p>\n        </div>\n\n        <!-- Modal Footer With Buttons -->\n        <div class=\"modal-footer\">\n          <button id=\"no-button\" type=\"button\" class=\"btn btn-default\">" + data.no + "</button>\n          <button id=\"yes-button\" type=\"button\" class=\"btn btn-default\">" + data.yes + "</button>\n        </div>\n      </div>\n      \n    </div>\n  </div>";
	};

	var dropdownElement = {
	    accessors: {
	        title: {
	            attribute: {},
	            get: function get() {
	                return this.getDataAttribute('title') || '';
	            },
	            set: function set(data) {
	                this.xtag.data.title = data;
	            }
	        },
	        message: {
	            attribute: {},
	            get: function get() {
	                return this.getDataAttribute('message') || '';
	            },
	            set: function set(data) {
	                this.xtag.data.message = data;
	            }
	        },
	        yes: {
	            attribute: {},
	            get: function get() {
	                return this.getDataAttribute('yes') || '';
	            },
	            set: function set(data) {
	                this.xtag.data.yes = data;
	            }
	        },
	        no: {
	            attribute: {},
	            get: function get() {
	                return this.getDataAttribute('no') || '';
	            },
	            set: function set(data) {
	                this.xtag.data.no = data;
	            }
	        }
	    },
	    lifecycle: {
	        created: function created() {
	            this.render();
	        },
	        attributeChanged: function attributeChanged() {
	            this.render();
	        }
	    },
	    methods: {
	        render: function render() {
	            var self = this;

	            var data = {
	                title: self.title,
	                message: self.message,
	                no: self.no,
	                yes: self.yes
	            };

	            self.getRenderingRoot().innerHTML = template(data);

	            self.selectInRenderingRoot("#no-button").onclick = function () {
	                self.noCallback();
	            };

	            self.selectInRenderingRoot("#yes-button").onclick = function () {
	                self.yesCallback();
	            };

	            var $ = self.getJquery();
	            $(this).children(".modal.custom-modal").on('hidden.bs.modal', function () {
	                try {
	                    self.declineCallback();
	                } catch (e) {
	                    console.log(e);
	                } finally {
	                    self.destroy();
	                }
	            });
	        },
	        destroy: function destroy() {
	            this.remove();
	        },
	        open: function open() {
	            var $ = this.getJquery();
	            var modal = $(".modal.custom-modal");
	            modal.modal("show");
	        },
	        close: function close() {
	            var $ = this.getJquery();
	            var modal = $(".modal.custom-modal");
	            modal.modal("hide");
	        },
	        yesCallback: function yesCallback() {
	            this.close();
	            this.confirmationCallback();
	        },
	        noCallback: function noCallback() {
	            this.close();
	        },
	        confirmationCallback: function confirmationCallback() {
	            this.isConfirmed = true;
	            if (this.onConfirmation) {
	                this.onConfirmation();
	            }
	        },
	        declineCallback: function declineCallback() {
	            if (this.onDecline && !this.isConfirmed) {
	                this.onDecline();
	            }
	            this.isConfirmed = false;
	        },
	        getJquery: function getJquery() {
	            return window.$;
	        }
	    }
	};

	exports.default = _utils2.default.extend(dropdownElement).from(_elementBase2.default);

/***/ }
/******/ ]);