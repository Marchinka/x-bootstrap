import utils from "./../../utils/utils.js";
import elementBase from "./../../base/element-base.js";

const template = data => `<span>${data.value}</span>`;

var feedbackToken = {
    accessors: {
        key: {
            attribute: { },
            get: function() {
                return this.getAttribute('key') || '';
            },
            set: function(data) {
                this.xtag.data.key = data;
            }
        },
    },
    lifecycle: {
        created: function () {
            var data = { value: null };
            this.getRenderingRoot().textContent = template(data);            
        }
    },
    methods: {
        renderFrom: function(object) {
            if (!object) {
                throw new Error("Falsy object in renderFrom of <feedback-token/>");
            }

            if (!this.key) {
                throw new Error("Falsy key in <feedback-token/>");
            }

            var data = { value: object[this.key] || '' };
            this.getRenderingRoot().innerHTML = template(data);
        }
    }
};

export default utils
    .extend(feedbackToken)
    .from(elementBase);