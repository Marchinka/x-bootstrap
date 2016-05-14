if (!window.$) {
	throw new Error("JQuery must be loaded as a dependency, as long as Underscore.js, Bootstrap.js and x-tag-core.js.");
}

if (!window.$) {
	throw new Error("Underscore.js must be loaded as a dependency, as long as JQuery, Bootstrap.js and x-tag-core.js.");
}

if (!window.$) {
	throw new Error("Bootstrap.js must be loaded as a dependency, as long as JQuery, Underscore.js and x-tag-core.js.");
}

if (!window.$) {
	throw new Error("x-tag-core.js must be loaded as a dependency, as long as JQuery, Underscore.js and Bootstrap.js.");
}

import TestElement from "./test-element.js";

var element = document.registerElement("test-element", TestElement);