import Extender from "./extender.js";

export default {
  extend: function (element) {
    return new Extender(element);
  },
  getInternetExplorerVersion: function()
  // Returns the version of Internet Explorer or a -1
  // (indicating the use of another browser).
  {
    var rv = -1; // Return value assumes failure.
    if (navigator.appName == 'Microsoft Internet Explorer')
    {
      var ua = navigator.userAgent;
      var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
      if (re.exec(ua) != null)
      {
        rv = parseFloat( RegExp.$1 );
      }
    }
    return rv;
  },
  isBrowserSupportingMo: function () {
    if (this.getInternetExplorerVersion() === - 1) {
      return true;
    }
    return false;
  },
  register: function (data) {
    var elementName = data.tagName;
    var object = data.proto;
    var ensureMoPolyfill = data.ensureStateChanges;
    if (this.isBrowserSupportingMo()) {
      return xtag.register(elementName, object);
    }

    if (!ensureMoPolyfill) {
      return xtag.register(elementName, object);
    }

    object.methods.do_attributeChanged = object.lifecycle.attributeChanged;
 
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
  },
  confirmationWrapper: function (options) {
    var wrapperFunction = function () {
      var modal = document.createElement("confirmation-modal");
      modal.title = options.title;
      modal.message = options.message;
      modal.yes = options.yes;
      modal.no = options.no;
      modal.onConfirmation = options.onConfirmation;
      modal.onDecline = options.onDecline;
      modal.jQuery = "$";
      document.body.appendChild(modal);
      modal.open();
    };
    return wrapperFunction;
  }
};