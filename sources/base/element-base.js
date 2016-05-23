import utils from "./../utils/utils.js";

export default {
	methods: {
		getRenderingRoot: function () {
			// Could be used for shadow dom
			return this;
		},
		selectInRenderingRoot: function (selector) {
			return this.getRenderingRoot().querySelector(selector);
		},
		raiseAttributeChanged: function (attributeName, oldValue, newValue) {
			if (utils.isBrowserSupportingMo()) {
				return;
			} else if (!this.changeCallback) {
				var message = 
					"You should implement a 'changeCallback' for element " +
					this.nodeName + 
					". It's a support for browsers not supporting mutation observers."
				console.log()
			} else {
				if(oldValue != newValue) this.changeCallback(attributeName, oldValue, newValue);
			}
		},
		getInnerContent: function (selector) {
			var content = this.querySelector(selector);
			if (content) {
				return content.innerHTML;
			} else {
				return this.innerHTML;
			}
		}
	}
};