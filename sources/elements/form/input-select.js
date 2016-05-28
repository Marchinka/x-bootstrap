import utils from "./../../utils/utils.js";
import dropdownInputElementBase from "./../../base/dropdown-input-element-base.js";

const template = data => `    
	<div class="${data.errorClass}">
        <div class="dropdown">
            <label for="${data.field}">${data.label}</label>
            <button class="${data.buttonClass}" id="${data.field}" type="button">
                <span class="pull-left">${data.buttonContent}</span>
                <span class="pull-right">
                    <span class="caret"></span>
                </span>
            </button>
            <ul class="dropdown-menu" style="width: 100%">
                <input-select-content>
                    ${data.innerContent}
                </input-select-content>
            </ul>
        </div>
        <span class="help-block">${data.error}</span>
    </div>`;

var inputSelect = {
    accessors: {
        placeholder: {
            attribute: {},
            get: function() {
                return this.getDataAttribute('placeholder') || '';
            },
            set: function(value) {
                this.xtag.data.placeholder = value;
            }
        },
        buttonClass: {
            attribute: {},
            get: function() {
                if (this.disabled) {
                    return "btn btn-default form-control disabled";
                } else {
                    return "btn btn-default form-control";
                }
            }
        },        
        selectedValue: {
            attribute: {},
            get: function() {
                return this.getAttribute('selected-value') || '';
            },
            set: function(value) {
                this.xtag.data.selectedValue = value;
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
    lifecycle: {
        created: function() {
            this.innerContent = this.getInnerContent("input-select-content").innerHTML;
            this.render();
        },
        inserted: function() {
            this.fetchData();                
        },
        attributeChanged: function(attributeName) {
            if (attributeName === "value") {
                this.selectedValue = "";
            }
            this.render();
        },
    },
    methods: {
        render: function() {
            var data = {
                error: this.error,
                errorClass: this.errorClass,
                label: this.label,
                buttonContent: this.selectedValue || this.value || this.placeholder,
                field: this.field,
                buttonClass: this.buttonClass,
                innerContent: this.innerContent
            };
            this.innerHTML = template(data);
        },
        validate: function () {
            if (!this.required) {
                this.error = '';
                return true;
            }
            if (!this.value) {
                this.error = this.requiredMessage;
                return false;
            }
            if (!this.value.trim()) {
                this.error = this.requiredMessage;
                return false;
            }
            this.error = ''
            return true;
        },   
        fetchData: function () {
            var self = this;
            if (!self.url) {
                return;
            }

            var restService = this.getRestService();
            restService.ajax({
                url: self.url,
                method: "GET",
                success: function (result) {
                    self.renderData(result);
                }
            });
        },
        selectOption: function (dropdownOption) {
            if (!dropdownOption) {
                throw new Error("Not valid option for selection.");
            }

            this.value = dropdownOption.key || dropdownOption.value;
            this.selectedValue = dropdownOption.value;
            this.validate();
        }
    },
    events: {
        focus: function () {
            this.showMenu();
        },
        blur: function () {
            this.hideMenu();
        }            
    }
};

export default utils
    .extend(inputSelect)
    .from(dropdownInputElementBase);