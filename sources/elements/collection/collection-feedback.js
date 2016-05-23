import utils from "./../../utils/utils.js";
import elementBase from "./../../base/element-base.js";

const template = data => `    
    <collection-feedback-content>
        ${data.innerContent}
    </collection-feedback-content>`;

var collectionFeedback = {
    lifecycle: {
        created: function () {
        	this.innerContent = this.getInnerContent("collection-feedback-content").innerHTML;
        	var data = {
        		innerContent: this.innerContent
        	};
        	var html = template(data);
        	this.insertHtmlInRenderingRoot(html);
        }
    },
    methods: {
        renderFrom: function(object) {
            if (!object) {
                throw new Error("Falsy object in renderFrom of <collection-feedback/>");
            }

            var tokens = this
            	.getRenderingRoot()
            	.querySelectorAll("feedback-token");
            _(tokens).each(function (token) {
            	token.renderFrom(object);
            });
        }
    }
};

export default utils
    .extend(collectionFeedback)
    .from(elementBase);