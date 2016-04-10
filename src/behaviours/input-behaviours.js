(function(window, document) {

    var elementBase = {
        methods: {
            _getRenderingRoot: function () {
                // Could be used for shadow dom
                return this;
            },
            _selectInRenderingRoot: function (selector) {
                return this._getRenderingRoot().querySelector(selector);
            }
        }
    };

    var inputElementBase = xtag.merge({
        accessors: {
            field: {
                attribute: {},
                get: function() {
                    return this.getAttribute('field');
                },
                set: function(value) {
                    this.xtag.data.field = value;
                }
            },
            label: {
                attribute: {},
                get: function() {
                    return this.getAttribute('label');
                },
                set: function(value) {
                    this.xtag.data.label = value;
                }
            },
            error: {
                attribute: {},
                get: function() {
                    return this.getAttribute('error') || '';
                },
                set: function(value) {
                    this.xtag.data.error = value;
                }
            },
            value: {
                attribute: {},
                get: function() {
                    return this.getAttribute('value') || '';
                },
                set: function(data) {
                    this.xtag.data.value = data;
                }
            },
            disabled: {
                attribute: {},
                get: function() {
                    return this.hasAttribute('disabled');
                },
                set: function(data) {
                    this.xtag.data.disabled = data;
                }
            }
        },
        methods: {
            getData: function () {
                if (!this.field) {
                    throw new Error("Attribute 'field' must be defined");
                }
                var data = {};
                data[this.field] = this.value;
                return data;
            }
        }
    }, elementBase);

    var inputTextElementBase = {
        accessors: {
            placeholder: {
                attribute: {},
                get: function() {
                    return this.getAttribute('placeholder') || '';
                },
                set: function(value) {
                    this.xtag.data.placeholder = value;
                }
            },
            required: {
                attribute: { boolean: true },
                get: function() {
                    return this.hasAttribute('required');
                },
                set: function(data) {
                    this.xtag.data.required = data;
                }
            },
            requiredMessage: {
                attribute: {},
                get: function() {
                    return this.getAttribute('required-message') || '';
                },
                set: function(data) {
                    this.xtag.data.requiredMessage = data;
                }
            }
        },
        methods: {
            validate: function () {
                if (!this.required) {
                    this.error = '';
                    return true;
                }
                if (!this.input.value) {
                    this.error = this.requiredMessage;
                    return false;
                }
                if (!this.input.value.trim()) {
                    this.error = this.requiredMessage;
                    return false;
                }
                this.error = ''
                return true;
            }
        },
        events: {
            keyup: function (e) {
                this.value = this.input.value;
                this.validate();
            }
        }
    };

    var dropdownInputElementBase = {
        accessors: {
            url: {
                attribute: { },
                get: function() {
                    return this.getAttribute('url');
                },
                set: function(data) {
                    this.xtag.data.url = data;
                }
            }      
        },
        methods: {
            renderData: function (data) {
                if (!data) {
                    throw new Error("Data not defined.");
                }
                if (!data.length && data.length != 0) {
                    throw new Error("Data must be a collection.");   
                }

                for (var i = 0; i < data.length; i++) {
                    var optionData = data[i];
                    var dropdownOption = this._createDropdownOption(optionData);
                    this.dropdownMenu.appendChild(dropdownOption);
                }
            },
            _createDropdownOption: function (optionData) {
                var dropdownOption = document.createElement("dropdown-option");
                dropdownOption.key = optionData.key;
                dropdownOption.value = optionData.value;
                return dropdownOption;
            },
            _showMenu: function () {
                if (this.disabled) {
                    this._hideMenu();
                } else {
                    this.dropdown.className = "dropdown open";
                }
            },
            _hideMenu: function () {
                this.dropdown.className = "dropdown";
            } 
        },
        events: {
            focus: function () {
                this._showMenu();
            },
            blur: function () {
                this._hideMenu();
            },
            mousedown: function (e) {
                if (e.target.parentElement.parentElement.nodeName === "DROPDOWN-OPTION") {
                    var dropdownOption = e.target.parentElement.parentElement;
                    this._selectOption(dropdownOption);
                }
            } 
        }
    };

    var formElementBase = xtag.merge({
        methods: {
            getInputElements: function () {
                var inputElements = this._getRenderingRoot()
                    .querySelector("form")
                    .querySelectorAll("input-text,input-textarea,input-select,input-autocomplete,input-checkbox,input-datetime,input-radio-group,additional-info");
                return inputElements;
            },
            getEditableElements: function () {
                var inputElements = this._getRenderingRoot()
                    .querySelector("form")
                    .querySelectorAll("input-text,input-textarea,input-select,input-autocomplete,input-checkbox,input-datetime,input-radio-group,additional-info");
                return inputElements;
            },            
            getData: function () {
                var inputElements = this.getInputElements();
                if (inputElements.length === 0) {
                    return null;
                }

                var data = {};
                for (var i = 0; i < inputElements.length; i++) {
                    var currentInput = inputElements[i];
                    var inputData = currentInput.getData();
                    for (var attrname in inputData) { 
                        data[attrname] = inputData[attrname];
                    }
                }
                return data;
            },
            setData: function (object) {
                for (var attributeName in object) { 
                    var innerInput = this._selectInRenderingRoot("[field=" + attributeName +"]");
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
            clearForm: function () {
                var inputElements = this.getEditableElements();
                for (var i = 0; i < inputElements.length; i++) {
                    var inputElement = inputElements[i];
                    if (inputElement.nodeName === "INPUT-CHECKBOX") {
                        inputElement.checked = false;
                    } else {
                        inputElement.value = "";
                    }
                };
            },            
            validate: function () {
                var inputElements = this.getEditableElements();
                var isFormValid = true;
                for (var i = 0; i < inputElements.length; i++) {
                    var currentInput = inputElements[i];
                    if (typeof currentInput.validate == 'function') {
                        var isInputValid = currentInput.validate();
                        isFormValid = isFormValid && isInputValid;
                    }
                }
                return isFormValid;
            }              
        }
    }, elementBase);

    inputTextElementBase = xtag.merge(inputTextElementBase, inputElementBase);
    dropdownInputElementBase = xtag.merge(dropdownInputElementBase, inputElementBase);
    var dropdownTextInputElementBase = xtag.merge(dropdownInputElementBase, inputTextElementBase);

    window.FormBehaviours = {
        elementBase: elementBase,
        inputElementBase : inputElementBase,
        inputTextElementBase : inputTextElementBase,
        dropdownInputElementBase : dropdownInputElementBase,
        dropdownTextInputElementBase : dropdownTextInputElementBase,
        formElementBase: formElementBase
    };

})(window, document);
