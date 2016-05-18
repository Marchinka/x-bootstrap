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
				console.log("You should implement a 'changeCallback' for browsers not supporting mutation observers.")
			} else {
				this.changeCallback(attributeName, oldValue, newValue);
			}
		},
	}
};