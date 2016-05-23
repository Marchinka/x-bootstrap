import utils from "./../../utils/utils.js";
import elementBase from "./../../base/element-base.js";

const template = data => `<span>${data.value}</span>`;

var feedbackToken = {
    accessors: {
        key: {
            attribute: { },
            get: function() {
                return this.getDataAttribute('key') || '';
            },
            set: function(data) {
                this.xtag.data.key = data;
            }
        },
        default: {
            attribute: { },
            get: function() {
                return this.getDataAttribute('default') || '';
            },
            set: function(data) {
                this.xtag.data.default = data;
            }
        },        
    },
    lifecycle: {
        created: function () {
            var data = { value: this.default };
            this.getRenderingRoot().innerHTML = template(data);
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

            var data = { value: object[this.key] || this.default };
            this.getRenderingRoot().innerHTML = template(data);
        }
    }
};

export default utils
    .extend(feedbackToken)
    .from(elementBase);