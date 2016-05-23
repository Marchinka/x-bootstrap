const template = `
    <p id="number-of-result"></p>
    <collection-elements-content id="inner-container"></collection-elements-content>`;

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
            var firstChild = this.getRenderingRoot().firstElementChild;
            if (firstChild) {
                this.listItemTemplate = firstChild.cloneNode(true);    
            }
            this.getRenderingRoot().innerHTML = template;
            this.p = this.selectInRenderingRoot('#number-of-result');
            this.innerContainer = this.selectInRenderingRoot("collection-elements-content");
            this.render();
        },
        attributeChanged: function(attributeName) {
            this.render();
        }
    },
    methods: {
        render: function () {
            if (this.numberOfResults && this.numberOfResultsMessage) {
                this.p.textContent = this.numberOfResultsMessage.replace("{0}", this.numberOfResults);
            }
        },
        addResults: function (dataFromServer) {
            this.numberOfResults = dataFromServer.numberOfResults;
            this.appendData(dataFromServer.collection);
        },
        appendData: function (data) {
            if (!data) {
                throw new Error("Data not defined.");
            }

            if (!data.length && data.length != 0) {
                throw new Error("Data must be a collection.");   
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
            this.innerContainer.innerHTML = '';
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