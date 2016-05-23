import utils from "./../../utils/utils.js";
import elementBase from "./../../base/element-base.js";

const template = data => `    
	<div class="radio">
      <label>
      	<input 	name="${data.field}"
      			value="${data.value}"
      			type="radio"
      			${data.disabled}
      			${data.checked}/>
      		<span class="radio-label">${data.label}</span>
      	</label>
    </div>`;

var inputRadio = {
    accessors: {
        field: {
            attribute: {},
            get: function() {
                return this.getDataAttribute('field');
            },
            set: function(value) {
                this.xtag.data.field = value;
            }
        },
        value: {
            attribute: {},
            get: function() {
                return this.getDataAttribute('value');
            },
            set: function(data) {
                var old = this.xtag.data.value;
                this.xtag.data.value = data;
                this.raiseAttributeChanged("value", old, data);
            }
        },
        label: {
            attribute: {},
            get: function() {
                return this.getAttribute('label');
            },
            set: function(data) {
                this.xtag.data.label = data;
            }
        },
        checked: {
            attribute: { boolean: true },
            get: function() {
                return this.hasAttribute('checked');
            },
            set: function(data) {
                this.xtag.data.checked = data === true;
            }
        },
        disabled: {
            attribute: { boolean: true },
            get: function() {
                return this.hasAttribute('disabled');
            },
            set: function(data) {
                this.xtag.data.disabled = data === true;
            }
        }
    },
    lifecycle: {
        created: function() {
            this.render();
        },
        attributeChanged: function(attributeName) {
            this.changeCallback(attributeName);
        }
    },
    methods: {
        changeCallback: function () {
            this.render();
        },
        render: function () {
        	var data = {
        		field: this.field,
        		value: this.value,
        		label: this.label,
        		disabled: this.disabled ? 'disabled' : '',
        		checked: this.checked ? 'checked' : ''
        	};
            this.getRenderingRoot().innerHTML = template(data);
        },
        isChecked: function () {
            var input = this.selectInRenderingRoot("input");
            var manuallyChecked = input.checked;
            var input = this.selectInRenderingRoot("input[checked]");
            var defaultCheck = input ? input.checked : false;
            return manuallyChecked || defaultCheck;
        }
    }
};

export default utils
    .extend(inputRadio)
    .from(elementBase);