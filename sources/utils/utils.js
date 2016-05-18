import Extender from "./extender.js";

export default {
  extend: function (element) {
    return new Extender(element);
  },
  forMoUnsupported: function (action) {
    if(!this.isBrowserSupportingMo()){
      action();
    }
  },
  isBrowserSupportingMo: function () {
    if (!document.all) {
      return true;
    }
    return false;
  },
  register: function(elementName, object) {
    return xtag.register(elementName, object);
  }
};