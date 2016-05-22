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
  },
  createElement: function (tagName, object) {
    var element = document.createElement(tagName);
    for (var attrname in object) { 
      element[attrname] = object[attrname];
    }
    return element;
  }
};