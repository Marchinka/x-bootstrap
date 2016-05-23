import utils from "./../utils/utils.js";
import elementBase from "./element-base.js";

var formElementBase = {
    methods: {
        getInputElements: function () {
            var inputElements = this.getRenderingRoot()
                .querySelector("form")
                .querySelectorAll("input-text,input-textarea,input-select,input-autocomplete,input-checkbox,input-datetime,input-radio-group,additional-info");
            return inputElements;
        },
        getEditableElements: function () {
            var inputElements = this.getRenderingRoot()
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
            _.each(inputElements, function (currentInput) {
                var inputData = currentInput.getData();
                _.extend(data, inputData);
            });
            return data;
        },
        setData: function (object) {
            for (var attributeName in object) { 
                var innerInput = this.selectInRenderingRoot("[field=" + attributeName +"]");
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
            _.each(inputElements, function (inputElement) {
                if (inputElement.nodeName === "INPUT-CHECKBOX") {
                    inputElement.checked = false;
                } else {
                    inputElement.value = "";
                }
            });
        },
        validate: function () {
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

var formBase = utils.extend(formElementBase).from(elementBase);
export default formBase;