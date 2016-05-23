const template = `
    <p id="number-of-result"></p>
    <collection-elements-content id="inner-container"></collection-elements-content>
    <collection-elements-template style="display: none;"></collection-elements-template>`;

export default {
    accessors: {
        type: {
            attribute: {},
            get: function() {
                return this.getAttribute('type');
            },
            set: function(value) {
                this.xtag.data.type = value;
            }
        },
        numberOfResultsMessage: {
            attribute: {},
            get: function() {
                return this.getAttribute('number-of-results-message');
            },
            set: function(value) {
                this.xtag.data.numberOfResultsMessage = value;
            }
        },
        numberOfResults: {
            attribute: {},
            get: function() {
                return this.getAttribute('number-of-results');
            },
            set: function(value) {
                this.xtag.data.numberOfResults = value;
            }
        } 
    },
    lifecycle: {
        created: function() {
            var firstChild = this.getInnerContent("collection-elements-template").firstElementChild;
            this.getRenderingRoot().innerHTML = template;
            this.p = this.selectInRenderingRoot('#number-of-result');
            this.templateTagContainer = this.selectInRenderingRoot('collection-elements-template');
            this.innerContainer = this.selectInRenderingRoot("collection-elements-content");
            if (firstChild) {
                this.listItemTemplate = firstChild.cloneNode(true);
                this.templateTagContainer.appendChild(this.listItemTemplate);
            }

            this.render();
        },
        attributeChanged: function(attributeName) {
            this.render();
        }
    },
    methods: {
        render: function () {
            if (!this.numberOfResultsMessage) {
                console.log("number-of-results-message property should be defined in order to visualize the number of results from server");
                return;
            }
            if (this.numberOfResults) {
                this.p.innerHTML = this.numberOfResultsMessage.replace("{0}", this.numberOfResults);
            }
        },
        addResults: function (dataFromServer) {
            this.checkDataFormat(dataFromServer);
            this.numberOfResults = dataFromServer.numberOfResults;
            this.appendData(dataFromServer.collection);
        },
        checkDataFormat: function(dataFromServer) {
            if (!_(dataFromServer.numberOfResults).isNumber()) {
                throw new Error("Result json from server is expected to have a numberOfResults property of type number");
            }

            if (!_(dataFromServer.collection).isArray()) {
                throw new Error("Result json from server is expected to have a collection property of type array");
            }
        },
        appendData: function (data) {
            if (!data) {
                throw new Error("Data not defined.");
            }

            for (var i = 0; i < data.length; i++) {
                var elementData  = data[i];
                var domElement = this.getChildElement(elementData);
                this.innerContainer.appendChild(domElement);
            }                
        },
        renderData: function (data) {
            this.emptyCollection();
            this.appendData(data);
        },
        emptyCollection: function () {
            if (this.innerContainer) {
                this.innerContainer.innerHTML = '';
            }
        },
        getChildElement: function (elementData) {
            var domElement;
            if (this.listItemTemplate) {
                domElement = this.listItemTemplate.cloneNode(true);
            } else if(this.type) {
                domElement = document.createElement(this.type);                    
            } else {
                throw new Error("Neither 'type' property nor inner element defined in <collection-elements/>.");
            }
            _.extend(domElement, elementData);
            return domElement;
        }
    }
};