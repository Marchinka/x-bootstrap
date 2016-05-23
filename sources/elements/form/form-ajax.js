const template = data => `    
    <form>
        <form-ajax-content class="inner-content">
            ${data.innerContent}
        </form-ajax-content>
    </form>`;

export default {
    accessors: {
        postUrl: {
            attribute: {},
            get: function() {
                return this.getAttribute('post-url') || '';
            },
            set: function(data) {
                this.xtag.data.postUrl = data;
            }
        },
        getUrl: {
            attribute: {},
            get: function() {
                return this.getAttribute('get-url') || '';
            },
            set: function(data) {
                this.xtag.data.getUrl = data;
            }
        },            
        redirectUrl: {
            attribute: {},
            get: function() {
                return this.getAttribute('redirect-url') || '';
            },
            set: function(data) {
                this.xtag.data.redirectUrl = data;
            }
        },
        redirectHash: {
            attribute: {},
            get: function() {
                return this.getAttribute('redirect-hash') || '';
            },
            set: function(data) {
                this.xtag.data.redirectHash = data;
            }
        },
        redirectToId: {
            attribute: { boolean: true },
            get: function() {
                return this.hasAttribute('redirect-to-id') || '';
            },
            set: function(data) {
                this.xtag.data.redirectToId = data;
            }
        },
        redirectUrl: {
            attribute: {},
            get: function() {
                return this.getAttribute('redirect-url') || '';
            },
            set: function(data) {
                this.xtag.data.redirectUrl = data;
            }
        },
        clearOnSuccess: {
            attribute: { boolean: true },
            get: function() {
                return this.hasAttribute('clear-on-success') || '';
            },
            set: function(data) {
                this.xtag.data.clearOnSuccess = data;
            }
        },
    },    
    lifecycle: {
        created: function() {
            this.innerContent = this.getInnerContent("form-ajax-content").innerHTML;
            this.render();
        },
        inserted: function () {
            if (false) { // bisogna aspettare che tutto il document sia correttamente caricato
                this.fetchInitialData();
            }
        }
    },
    methods: {
        render: function ()
        {
            var data = { innerContent : this.innerContent };
            this.getRenderingRoot().innerHTML = template(data);
        },
        submitForm: function () {
            var self = this;

            if (!self.postUrl) {
                throw new Error("Post url is not defined");
            }

            var formData = self.getData();
            window.restService.ajax({
                url: self.postUrl,
                method: "POST",
                data: formData,
                success: function (result) {
                    if (result.validationResult.isValid) {
                        self.clearingProcedure(self);
                        self.redirectProcedure(self);
                    } else {
                        self.bindErrors(result.validationResult.errors)
                    }
                }
            });                
        },
        fetchInitialData: function () {
            var self = this;
            window.restService.ajax({
                url: self.getUrl,
                method: "GET",
                data: {},
                success: function (result) {
                    self.setData(result);
                }
            });
        },
        removeErrors: function () {
            var inputElements = this.getInputElements();
            _.each(inputElements, function (inputElement) {
                inputElement.error = "";
            });
        },
        bindErrors: function (errors) {
            _.each(errors, function(error) {
                var field = error.field;
                var errorMessage = error.message;
                var inputElement = this.selectInRenderingRoot("[field=" + field + "]");
                inputElement.error = errorMessage;                        
            }, this);
        },
        clearingProcedure: function (self) {
            if (self.clearOnSuccess) {
                self.clearForm();
                return;
            }
        },
        redirectProcedure: function(self) {
            if (self.redirectUrl) {
                var redirectUrl = self.redirectUrl;
                if (self.redirectToId) {
                    redirectUrl += "/" + result.resultId;
                }

                if (self.redirectHash) {
                    var newUrl = window.location.origin + "/" + redirectUrl + "/#" + self.redirectHash;
                    window.location.href = newUrl;
                } else {
                    window.location.pathname = redirectUrl;    
                }
                return;
            }

            if (self.redirectHash) {
                var redirectHash = self.redirectHash;
                if (self.redirectToId) {
                    redirectHash += "/" + result.resultId;
                }
                window.location.hash = redirectHash;
                return;
            }                 
        }        
    },
    events: {
        submit: function (e) {
            e.preventDefault();
            var isFormValid = this.validate();
            if (isFormValid) {
                this.removeErrors();
                this.submitForm();
            }
        }
    }
};