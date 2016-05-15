import Extender from "./extender.js";

export default {
  extend: function (element) {
    return new Extender(element);
  }
};