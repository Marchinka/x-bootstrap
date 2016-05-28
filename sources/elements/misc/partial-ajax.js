import utils from "./../../utils/utils.js";
import elementBase from "./../../base/element-base.js";

var partialAjax = {
    accessors: {
        url: {
            attribute: {},
            get: function() {
                return this.getDataAttribute('url');
            },
            set: function(value) {
                this.xtag.data.url = value;
            }
        },
        loaderTag: {
            attribute: {},
            get: function() {
                return this.getDataAttribute('loaderTag');
            },
            set: function(data) {
                this.xtag.data.loaderTag = data;
            }
        },
        errorTag: {
            attribute: {},
            get: function() {
                return this.getDataAttribute('errorTag');
            },
            set: function(data) {
                this.xtag.data.errorTag = data;
            }
        }
    },
    lifecycle: {
        inserted: function () {
            var self = this;
            self.innerHTML = '';
            self.renderLoader();
            var restService = self.getRestService();
            $.ajax({
              url: self.url,
              method: 'GET',
              success: function (result) {
                self.getRenderingRoot().innerHTML = result;
              },
              error: function () {
                self.renderError();
              }
            });
        }
    },
    methods: {
        getLoaderElement: function () {
            if (!this.loaderTag) {
                var loaderTag = document.createElement("span");
                loaderTag.textContent = "Loading...";
                return loaderTag;
            } else {
                var loaderTag = document.createElement(this.loaderTag);
                return loaderTag;
            }
        },
        getErrorElement: function () {
            if (!this.loaderTag) {
                var errorElement = document.createElement("span");
                errorElement.textContent = "Can't load content";
                return errorElement;
            } else {
                var errorElement = document.createElement(this.errorTag);
                return errorElement;
            }
        },        
        renderError: function () {
            var errorElement = this.getErrorElement();
            this.getRenderingRoot().innerHTML = '';
            this.getRenderingRoot().appendChild(errorElement);
        },
        renderLoader: function () {
            var loaderTag = this.getLoaderElement();
            this.getRenderingRoot().innerHTML = '';
            this.getRenderingRoot().appendChild(loaderTag);
        }
    }
};

export default utils
    .extend(partialAjax)
    .from(elementBase);