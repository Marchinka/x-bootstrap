import utils from "./../../utils/utils.js";
import elementBase from "./../../base/element-base.js";

const template = data => `<li><a class="selectable">${data.value}</a></li>`;

var dropdownElement = {
    accessors: {
        key: {
            attribute: {},
            get: function() {
                return this.getAttribute('key') || '';
            },
            set: function(data) {
                this.xtag.data.key = data;
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
        }
    },
    lifecycle: {
        created: function() {
            this.render();
        },
        inserted: function() {
            this.render();
        },        
        attributeChanged: function(attributeName) {
            this.changeCallback(attributeName);
        }
    },
    methods: {
        changeCallback: function(attributeName) {
            this.render();
        },
        render: function () {
        	var data = {
        		value: this.value
        	};
            this.getRenderingRoot().innerHTML = template(data);
        }
    }
};

export default utils
    .extend(dropdownElement)
    .from(elementBase);