export default {
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
        value: {
            attribute: {},
            get: function() {
                return this.getAttribute('value');
            },
            set: function(data) {
                this.xtag.data.value = data;
            }
        },
        valueOf: {
            attribute: {},
            get: function() {
                return this.getAttribute('value-of');
            },
            set: function(data) {
                this.xtag.data.valueOf = data;
            }
        }
    },
    methods: {
        getData: function () {
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
        executeFromWindow: function () {
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