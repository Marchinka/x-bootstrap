import utils from "./../../utils/utils.js";
import inputTextElementBase from "./../../base/input-text-element-base.js";

const template = data => `
    <div class="${data.errorClass}">
        <label for="${data.field}">
            ${data.label}
        </label>
        <input  type="text" 
                class="form-control"
                id="${data.field}"
                name="${data.field}"
                placeholder="${data.placeholder}"
                value="${data.value}"
                ${data.disabled}/>
        <span class="help-block">
            ${data.error}
        </span>
        <input-text-content></input-text-content>
    </div>`;

const templateWithAddOn = data => `
    <div class="${data.errorClass}">
        <label for="${data.field}">
            ${data.label}
        </label>
        <div class='input-group'>
            <input  type="text" 
                    class="form-control"
                    id="${data.field}"
                    name="${data.field}"
                    placeholder="${data.placeholder}"
                    value="${data.value}"
                    ${data.disabled}/>
            <span class="input-group-addon">
                <input-text-content>
                    ${data.innerContent}
                </input-text-content>
            </span>
        </div>                    
        <span class="help-block">
            ${data.error}
        </span>
    </div>`;

var inputText = {
    accessors: {
        jquery: {
            attribute: {},
            get: function() {
                return this.getDataAttribute('jquery') || '';
            },
            set: function(data) {
                this.xtag.data.jquery = data;
            }
        },            
        dateFormat: {
            attribute: {},
            get: function() {
                return this.getDataAttribute('date-format') || '';
            },
            set: function(data) {
                this.xtag.data.dateFormat = data;
            }
        },
        regex: {
            attribute: {},
            get: function() {
                return this.getDataAttribute('regex') || '';
            },
            set: function(data) {
                this.xtag.data.regex = data;
            }
        },
        regexMessage: {
            attribute: {},
            get: function() {
                return this.getDataAttribute('regex-message') || '';
            },
            set: function(data) {
                this.xtag.data.regexMessage = data;
            }
        },            
        maxLength: {
            attribute: {},
            get: function() {
                return this.getDataAttribute('max-length');
            },
            set: function(data) {
                this.xtag.data.maxLength = data;
            }
        },         
        maxLengthMessage: {
            attribute: {},
            get: function() {
                return this.getDataAttribute('max-length-message') || '';
            },
            set: function(data) {
                this.xtag.data.maxLengthMessage = data;
            }
        }
    },        
    lifecycle: {
        created: function() {
            this.innerContent = this.getInnerContent("input-text-content").innerHTML;
            this.render();
        },
        attributeChanged: function(attributeName, oldValue, newValue) {
            this.changeCallback(attributeName, oldValue, newValue);
        }
    },
    methods: {
        changeCallback: function(attributeName, oldValue, newValue) {
            if (attributeName === "error") {
                this.renderError();
            } else if (attributeName === "value" && oldValue != newValue) {
                this.getInput().value = newValue;   
            } else {
                this.render();
            }
        },
        render: function() {
            var data = {
                field: this.field,
                label: this.label,
                error: this.error,
                value: this.value,
                placeholder: this.placeholder,
                errorClass: this.errorClass,
                disabled: this.disabled ? 'disabled' : ''
            };
            if (this.innerContent && this.innerContent.trim()) {
                data.innerContent = this.innerContent;
                this.innerHTML = templateWithAddOn(data);
            } else {
                this.innerHTML = template(data);
            }
            this.renderCalendar();
        },
        validate: function () {
            if (this.regex) {
                var regularExpression = new RegExp(this.regex);
                var isMatching = this.value.match(regularExpression);
                if (!isMatching) {
                    this.error = this.regexMessage;
                    return false;
                }
            }

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

            var input = this.getInput();
            if (!input.value) {
                this.error = this.requiredMessage;
                return false;
            }
            if (!input.value.trim()) {
                this.error = this.requiredMessage;
                return false;
            }

            this.error = ''
            return true;
        },
        renderCalendar: function () {
            var self = this;
            if (self.jquery && self.dateFormat) {
                var $ = window[self.jquery];
                $('#' + self.field).datetimepicker({
                    format: self.dateFormat,
                    showClear: true,
                    showTodayButton: true,
                    showClose: true,
                    keepOpen: false
                });
                $('#' + self.field).on("dp.change", function(e) {
                    var input = self.selectInRenderingRoot("input");
                    self.value = input.value;
                    self.validate();
                });                    
            }
        }
    }
};

export default utils
    .extend(inputText)
    .from(inputTextElementBase);