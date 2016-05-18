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

export default {
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
                    this.input.checked = data;
                }
            }
        }
    },
    lifecycle: {
        created: function() {
            this.render();
            this.input = this.selectInRenderingRoot("input");
        },
        attributeChanged: function(attributeName) {
            this.render();
        }
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