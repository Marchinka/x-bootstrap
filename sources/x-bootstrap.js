if (!window.$) {
	throw new Error("JQuery must be loaded as a dependency, as long as Underscore.js, Bootstrap.js and x-tag-core.js.");
}

if (!window._) {
	throw new Error("Underscore.js must be loaded as a dependency, as long as JQuery, Bootstrap.js and x-tag-core.js.");
}

if (!window.xtag) {
	throw new Error("x-tag-core.js must be loaded as a dependency, as long as JQuery, Underscore.js and Bootstrap.js.");
}

import utils from "./utils/utils.js";



import dropdownElement from "./elements/dropdown-option.js";
xtag.register('dropdown-option', utils
	.extend(dropdownElement)
	.from(elementBase));

import additionaInfo from "./elements/additional-info.js";
xtag.register('additional-info', utils
	.extend(additionaInfo)
	.from(elementBase));

import inputRadio from "./elements/input-radio.js";
xtag.register('input-radio', utils
	.extend(inputRadio)
	.from(elementBase));

import TestElement from "./test-element.js";
import Base from "./base.js";
var protoTag = utils.extend(TestElement).from(Base);
import elementBase from "./base/element-base.js";
xtag.register('x-clock', protoTag);
