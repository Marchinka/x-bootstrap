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
  },
  hideElement: function (element) {
    if(!element) {
      return;
    }
    console.log("hide");
    this.addClassToElement('hidden', element);
  },
  showElement: function (element) {
    if(!element) {
      return;
    }
    this.removeClassFromElement('hidden', element);
  },
  addClassToElement: function (className, el) {
    if (el.classList)
      el.classList.add(className);
    else
      el.className = (el.className || '') + ' ' + className;
  },
  removeClassFromElement: function (className, el) {
    if (el.classList)
      el.classList.remove(className);
    else
      el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');    
  }
};