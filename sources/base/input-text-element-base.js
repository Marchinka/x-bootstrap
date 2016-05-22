import utils from "./../utils/utils.js";
import inputElementBase from "./input-element-base.js";

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
        getInput: function () {
            var input = this.selectInRenderingRoot("input");
            if (!input) {
                throw new Error("A input must be defined inside input text template")
            }
            return input;
        },
        validate: function () {
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
        keyup: function (e) {
            this.value = this.getInput().value;
            this.validate();
        }
    }
};

export default utils.extend(inputTextElementBase).from(inputElementBase);