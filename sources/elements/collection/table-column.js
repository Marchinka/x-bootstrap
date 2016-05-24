import utils from "./../../utils/utils.js";
import elementBase from "./../../base/element-base.js";

var tableColumn = {
    accessors: {
        label: {
            attribute: { },
            get: function() {
                return this.getDataAttribute('label') || '';
            },
            set: function(data) {
                this.xtag.data.label = data;
            }
        },
        field: {
            attribute: { },
            get: function() {
                return this.getDataAttribute('field') || '';
            },
            set: function(data) {
                this.xtag.data.field = data;
            }
        },
        default: {
            attribute: { },
            get: function() {
                return this.getDataAttribute('default') || '';
            },
            set: function(data) {
                this.xtag.data.default = data;
            }
        }
    },
    methods: {
        renderCell: function(object) {
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

export default utils
    .extend(tableColumn)
    .from(elementBase);