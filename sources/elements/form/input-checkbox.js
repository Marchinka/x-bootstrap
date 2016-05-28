import utils from "./../../utils/utils.js";
import inputElementBase from "./../../base/input-element-base.js";

const template = data => `
    <div class="${data.errorClass} checkbox">
        <label for="${data.field}">
            <input  type="checkbox"
                    id="${data.field}"
                    name="${data.field}"
                    ${data.checked}
                    ${data.disabled}/>
            <span class="label-text">${data.label}</span>
        </label>            
        <span class="help-block">${data.error}</span>
    </div>`;

var inputCheckbox = {
    accessors: {
        checked: {
            attribute: { boolean: true },
            get: function() {
                if (this.input) {
                    return this.input.checked;
                }
                return false;
            },
            set: function(data) {
                if (this.input) {
                    this.input.checked = data === true;
                }
            }
        }
    },
    lifecycle: {
        created: function() {
            this.render();
            this.input = this.selectInRenderingRoot("input");
        },
        inserted: function() {
            this.render();
            this.input = this.selectInRenderingRoot("input");
        },        
        attributeChanged: function(attributeName, oldValue, newValue) {
            if (attributeName === "checked" && oldValue != newValue) {
                this.input.checked = newValue === true;
            }
            this.render();
        },
    },
    methods: {
        render: function() {
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
        validate: function () {
            this.error = '';
            return true;
        },
        getData: function () {
            if (!this.field) {
                throw new Error("Attribute 'field' must be defined");
            }
            var data = {};
            data[this.field] = this.checked;
            return data;
        }
    }
};

export default utils
    .extend(inputCheckbox)
    .from(inputElementBase);