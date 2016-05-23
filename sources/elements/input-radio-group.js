const template = data => `    
	<div class="${data.errorClass}">
        <label>${data.label}</label>
        <radio-group-content class="inner-content">
            ${data.innerContent}
        </radio-group-content>
        </div>
        <span class="help-block">
        	${data.error}
        </span>
    </div>`;

export default {
    accessors: {
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
        	this.innerContent = this.getInnerContent("radio-group-content");
            this.render();
        },
        attributeChanged: function(attributeName) {
        	this.changeCallback(attributeName);
        }
    },
    methods: {
        render: function () {
        	var data = {
        		label: this.label,
        		error: this.error,
        		errorClass: this.errorClass,
        		innerContent: this.innerContent
        	};
        	this.getRenderingRoot().innerHTML = template(data);
        	this.innerRadios = this.getRenderingRoot().querySelectorAll("input-radio");
        	this.assignFieldAndDisabledToRadios();
			this.checkRadioValue(this.value);
			this.fixMultipleChecks();
        },
        assignFieldAndDisabledToRadios: function () {
            _.each(this.innerRadios, function (radioButton) {
                radioButton.field = this.field;
                radioButton.disabled = radioButton.disabled || this.disabled;
            }, this);
        },
        fixMultipleChecks: function () {
            var checkedRadios = this.getRenderingRoot().querySelectorAll("input-radio[checked]");
            if (checkedRadios.length < 2) {
                return;
            }

            _.each(checkedRadios, function (radio) {
                radio.checked = false;
            });

            _.last(checkedRadios).checked = true;
        },
        uncheckAllRadios: function () {
            _.each(this.innerRadios, function (radioButton) {
                radioButton.checked = false;
            }, this);
        },
        checkRadioValue: function (radioValue) {
            if (!radioValue) {
                return;
            }
            _.each(this.innerRadios, function (radioButton) {
                radioButton.checked = radioButton.value == radioValue;
            }, this);
        },
        renderErrorTag: function () {
            if (this.error) {
                this.errorSpan.textContent = this.error;
                this.formGroup.className = "form-group has-error";
            } else {
                this.errorSpan.textContent = undefined;
                this.formGroup.className = "form-group";
            }
        },   
        validate: function () {
            if (!this.required) {
                this.error = '';
                return true;
            }
            var data = this.getData();
            if (!data[this.field]) {
                this.error = this.requiredMessage;
                return false;
            }
            this.error = ''
            return true;
        },
        getData: function () {
            if (!this.field) {
                throw new Error("Attribute 'field' must be defined");
            }

            var data = {};
            _.each(this.innerRadios, function (radio) {
                if (radio.isChecked()) {
                    radio.checked = true;
                    data[this.field] = radio.value;
                } else {
                    radio.checked = false;
                }
            }, this);
            
            return data;
        },
        changeCallback: function (attributeName) {
            if (attributeName === "error") {
                this.selectInRenderingRoot(".form-group").className = this.errorClass;
                this.selectInRenderingRoot(".help-block").textContent = this.error;
                return;
            }
            this.render();
        }
    },
    events: {
        tap: function (e) {
            if (e.target.nodeName === "INPUT-RADIO" ||
                e.target.nodeName === "INPUT" || 
                e.target.className === "radio-label") {
                this.error = '';
            }
        }
    }        
};