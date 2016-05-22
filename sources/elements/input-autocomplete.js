const template = data => `    
	<div class="${data.errorClass}">
		<div class="dropdown">
			<label for="${data.field}">${data.label}</label>
			<input class="form-control" type="text"
				id="${data.field}" 
                name="${data.field}" 
                value="${data.value}"
                placeholder="${data.placeholder}"
                ${data.disabled}/>
            <ul class="dropdown-menu" style="width: 100%"></ul>
        </div>
        <span class="help-block">${data.error}</span>
    </div>`;

export default {
    lifecycle: {
        created: function() {
            this.render();
        },
        inserted: function() {
            this.fetchData();
        },
        attributeChanged: function(attributeName, oldValue, newValue) {
            if (attributeName === "error") {
                this.renderError();
            } else if (attributeName === "value") {
				this.getInput().value = newValue;                
            } else {
            	this.render();
            }

            if (this.optionData) {
                this.renderData(this.optionData);
            }            
        }
    },	
    methods: {
        render: function () {
            var data = {
                placeholder: this.placeholder || '',
                disabled: this.disabled ? 'disabled' : '',
                error: this.error || '',
				errorClass: this.errorClass || '',
                field: this.field || '',
                label: this.label || '',
                value: this.value || '',
            };
            this.getRenderingRoot().innerHTML = template(data);
        },
        fetchData: function () {
            var self = this;
            if (!self.url) {
                return;
            }

            if (!window.restService) {
                throw new Error("'restService' must be assigned to main window for <input-autocomplete/> to work correctly");   
            }

            window.restService.ajax({
                url: self.url,
                method: "GET",
                data: { search: this.value },
                success: function (result) {
                    self.optionData = result;
                    self.getDropdownMenu().innerHTML = '';
                    self.renderData(self.optionData);
                }
            });
        },
        selectOption: function (dropdownOption) {
            if (!dropdownOption) {
                throw new Error("Not valid option for selection.");
            }

            this.value = dropdownOption.value;
            this.getInput().value = this.value;
            this.validate();
        }                        
    },
    events: {
        keyup: function () {
            this.value = this.getInput().value;
            this.fetchData();
        }
    }    
};