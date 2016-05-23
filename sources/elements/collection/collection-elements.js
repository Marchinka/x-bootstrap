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
                return this.getAttribute('type');
            },
            set: function(value) {
                this.xtag.data.type = value;
            }
        },
    },
    lifecycle: {
        created: function() {
            var firstChild = this.getInnerContent("collection-elements-template").firstElementChild;
            this.getRenderingRoot().innerHTML = template;
            this.templateTagContainer = this.selectInRenderingRoot('collection-elements-template');
            this.innerContainer = this.selectInRenderingRoot("collection-elements-content");
            if (firstChild) {
                this.listItemTemplate = firstChild.cloneNode(true);
                this.templateTagContainer.appendChild(this.listItemTemplate);
            }
        }
    },
    methods: {
        appendData: function (data) {
            if (!_(data).isArray()) {
                throw new Error("Result json from server is expected to have a collection property of type array");
            }

            _(data).each(function (elementData) {
                var domElement = this.getChildElement(elementData);
                this.innerContainer.appendChild(domElement);
            }, this);
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

export default utils
    .extend(collectionElements)
    .from(elementBase);