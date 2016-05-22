const template = data => `
    <div class="${data.errorClass}">
        <label for="${data.field}">
            ${data.label}
        </label>
        <textarea   class="form-control"
                    id="${data.field}"
                    name="${data.field}"
                    placeholder="${data.placeholder}"
                    value="${data.value}"
                    rows="${data.rows}"
                    ${data.disabled}>${data.value}</textarea>
        <span class="help-block">
            ${data.error}
        </span>
    </div>`;


export default {
    accessors: {               
        rows: {
            attribute: {},
            get: function() {
                return this.getAttribute('rows');
            },
            set: function(data) {
                this.xtag.data.rows = data;
            }
        }, 
        maxLength: {
            attribute: {},
            get: function() {
                return this.getAttribute('max-length');
            },
            set: function(data) {
                this.xtag.data.maxLength = data;
            }
        },         
        maxLengthMessage: {
            attribute: {},
            get: function() {
                return this.getAttribute('max-length-message') || '';
            },
            set: function(data) {
                this.xtag.data.maxLengthMessage = data;
            }
        }
    },        
    lifecycle: {
        created: function() {
            this.render();
        },
        attributeChanged: function(attributeName) {
            if (attributeName === "error") {
                this.renderError();
            } else if (attributeName !== "value") {
                this.render();                
            }
        }
    },
    methods: {
        render: function() {
            var data = {
                field: this.field,
                label: this.label,
                error: this.error,
                errorClass: this.errorClass,
                value: this.value,
                rows: this.rows,
                placeholder: this.placeholder,
                disabled: this.disabled ? 'disabled' : ''
            };
            this.innerHTML = template(data);
        },
        validate: function () {
            if (this.value && this.maxLength) {
                if (this.value.trim().length > this.maxLength) {
                    this.error = this.maxLengthMessage;
                    return false;
                }
            }

            if (!this.required) {
                this.error = '';
                return true;
            }
            var textarea = this.selectInRenderingRoot("textarea");
            if (!textarea.value) {
                this.error = this.requiredMessage;
                return false;
            }
            if (!textarea.value.trim()) {
                this.error = this.requiredMessage;
                return false;
            }

            this.error = ''
            return true;
        }
    },
    events: {
        keyup: function (e) {
            var textarea = this.selectInRenderingRoot("textarea");
            this.value = textarea.value;
            this.validate();               
        }
    }
};