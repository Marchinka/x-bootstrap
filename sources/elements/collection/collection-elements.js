import utils from "./../../utils/utils.js";
import elementBase from "./../../base/element-base.js";

const template = `
    <collection-elements-content id="inner-container"></collection-elements-content>
    <collection-elements-template style="display: none;"></collection-elements-template>`;

var collectionElements = {
    accessors: {
        type: {
            attribute: {},
            get: function() {
                return this.getDataAttribute('type');
            },
            set: function(value) {
                this.xtag.data.type = value;
            }
        },
    },
    lifecycle: {
        created: function() {
            this.saveTemplate();
            this.render();
            this.saveTemplateInMarkup();            
        }
    },
    methods: {
        getInnerContainer: function () {
            return this.selectInRenderingRoot("collection-elements-content");
        },
        render: function () {
            this.getRenderingRoot().innerHTML = template;
        },
        saveTemplateInMarkup: function () {
            this.templateTagContainer = this.selectInRenderingRoot('collection-elements-template');
            if (this.listItemTemplate) {
                this.templateTagContainer.appendChild(this.listItemTemplate);
            }
        },        
        saveTemplate: function () {
            var firstChild = this.getInnerContent("collection-elements-template").firstElementChild;
            if (firstChild) {
                this.listItemTemplate = firstChild.cloneNode(true);
            }
        },
        appendData: function (data) {
            if (!_(data).isArray()) {
                throw new Error("Result json from server is expected to have a collection property of type array");
            }

            this.addToModel(data);

            _(data).each(function (elementData) {
                var domElement = this.getChildElement(elementData);
                this.getInnerContainer().appendChild(domElement);
            }, this);
        },
        renderData: function (data) {
            this.emptyCollection();
            this.appendData(data);
        },
        emptyCollection: function () {
            if (this.getInnerContainer()) {
                this.getInnerContainer().innerHTML = '';
                this.emptyModel();
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
        },
        addToModel: function (elements) {
            if(!this.model) {
                this.model = [];
            }

            _(elements).each(function (element) {
                this.model.push(element);
            }, this);
        },
        emptyModel: function () {
            this.model = [];
        },
        getModel: function () {
            if(!this.model) {
                this.model = [];
            }

            return this.model;
        }
    }
};

export default utils
    .extend(collectionElements)
    .from(elementBase);