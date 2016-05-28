import utils from "./../utils/utils.js";

export default {
    accessors: {
        restService: {
            attribute: { },
            get: function() {
                return this.getDataAttribute('rest-service') || "";
            },
            set: function(data) {
                this.xtag.data.restService = data;
            }
        }
    },	
	methods: {
		getRenderingRoot: function () {
			// Could be used for shadow dom
			return this;
		},
		selectInRenderingRoot: function (selector) {
			return this.getRenderingRoot().querySelector(selector);
		},
		insertHtmlInRenderingRoot: function (html) {
			this.getRenderingRoot().innerHTML = html;
		},
		getDataAttribute: function (attributeName) {
			return this.getAttribute(attributeName) || this.getAttribute("data-" + attributeName);
		},
		hasDataAttribute: function (attributeName) {
			return this.hasAttribute(attributeName) || this.hasAttribute("data-" + attributeName);
		},		
		appendHtmlInRenderingRoot: function (html) {
			var div = document.createElement('div');
			div.innerHTML = html ? html.trim() : '';
			var elements = div.childNodes;			
			_(elements).each(function (element) {
				this.getRenderingRoot().appendChild(element);
			}, this);
		},
		raiseAttributeChanged: function (attributeName, oldValue, newValue) {
			if (utils.isBrowserSupportingMo()) {
				return;
			} else {
				var changeInfo = { 
					attributeName: attributeName, 
					oldValue: oldValue, 
					newValue: newValue 
				};
				utils.raise(
					this, 
					'attributeChanged',
					changeInfo);
			}
		},
		polyfillAttributeChanged: function () {
			var self = this;
			if (self.changeCallback) {
				utils.attachListener(self, 'attributeChanged', function (e) {
	        		self.changeCallback(e.attributeName, e.oldValue, e.newValue);
				});
			}
		},
		getInnerContent: function (selector) {
			var content = this.querySelector(selector);
			if (content) {
				return content;
			} else {
				return this;
			}
		},
		onComponentsReady: function (func) {
			setTimeout(function () {
				func();
			}, 200);
		},
		getRestService: function () {
			var restServiceKey = this.restService || "$";
			var restServiceObject = window[restServiceKey];
			if (!restServiceObject) {
				var message = 
					"A rest service with an ajax method must be assigned to window." + 
					restServiceKey;
				throw new Error(message);
			}
			return restServiceObject;
		}		
	}
};