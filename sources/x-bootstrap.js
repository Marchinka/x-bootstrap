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
import elementBase from "./base/element-base.js";
import inputElementBase from "./base/input-element-base.js";

import dropdownElement from "./elements/dropdown-option.js";
utils.register('dropdown-option', utils
	.extend(dropdownElement)
	.from(elementBase));

import additionaInfo from "./elements/additional-info.js";
utils.register('additional-info', utils
	.extend(additionaInfo)
	.from(elementBase));

import inputRadio from "./elements/input-radio.js";
utils.register('input-radio', utils
	.extend(inputRadio)
	.from(elementBase));

import inputRadioGroup from "./elements/input-radio-group.js";
utils.register('input-radio-group', utils
	.extend(inputRadioGroup)
	.from(inputElementBase));

import inputCheckbox from "./elements/input-checkbox.js";
utils.register('input-checkbox', utils
	.extend(inputCheckbox)
	.from(inputElementBase));

import TestElement from "./test-element.js";
import Base from "./base.js";
var protoTag = utils.extend(TestElement).from(Base);
xtag.register('x-clock', protoTag);
