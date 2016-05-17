const template = data => `    
	<div class="radio">
      <label>
      	<input 	id="${data.field}" 
      			name="${data.field}"
      			type="radio"
      			${data.disabled}
      			${data.checked}/>
      		<span class="radio-label">${data.label}</span>
      	</label>
    </div>`;

export default {
    accessors: {
        field: {
            attribute: {},
            get: function() {
                return this.getAttribute('field');
            },
            set: function(value) {
                this.xtag.data.field = value;
            }
        },
        value: {
            attribute: {},
            get: function() {
                return this.getAttribute('value');
            },
            set: function(data) {
                this.xtag.data.value = data;
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
            this.render();
        }
    },
    methods: {
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
            return this.input.checked;
        }
    }
};