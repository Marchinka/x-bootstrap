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
    if (this.isBrowserSupportingMo()) {
      return xtag.register(elementName, object);
    }

    object.lifecycle.created = (function () {
      var original = object.lifecycle.created;
      return function() {
        if(original) original.apply(this);
        this.polyfillAttributeChanged();
      };
    })();

    for (var attribute in object.accessors) {
      object.accessors[attribute].set = (function (newValue) {
        var attributeName = attribute;
        var originalSet = object.accessors[attributeName].set;
        return function(newData) {
          var oldValue = this.xtag.data[attributeName];
          if(newData != oldValue) this.raiseAttributeChanged.call(this, attributeName, oldValue, newData);
          originalSet.call(this, oldValue);
        };
      })();
    };

    if (!_(object.methods.changeCallback).isFunction()) {
        var message = 
          "You should implement a 'changeCallback' method for element " +
          elementName + 
          ". It's a support for browsers not supporting mutation observers.";
        console.warn(message);      
    }
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
  },
  raise: function (element, eventName, obj) {
    var event = new CustomEvent(eventName);
    _(event).extend(obj);
    element.dispatchEvent(event);
  },
  attachListener: function (element, eventName, callback) {
    element.addEventListener(eventName, callback, false);
  }
};