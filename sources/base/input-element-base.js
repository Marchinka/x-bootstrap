import utils from "./../utils/utils.js";
import elementBase from "./element-base.js";

var inputElementBase = {
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
        errorClass: {
            attribute: {},
            get: function() {
                if (this.error) {
                    return "form-group has-error";
                }
                return "form-group";
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
};

export default utils.extend(inputElementBase).from(elementBase);