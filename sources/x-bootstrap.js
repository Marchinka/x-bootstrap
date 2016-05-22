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
import inputTextElementBase from "./base/input-text-element-base.js";

import dropdownElement from "./elements/dropdown-option.js";
var dropdownProto = utils
	.extend(dropdownElement)
	.from(elementBase);
utils.register('dropdown-option', dropdownProto);

import additionaInfo from "./elements/additional-info.js";
var additionaInfoProto = utils
	.extend(additionaInfo)
	.from(elementBase);
utils.register('additional-info', additionaInfoProto);

import inputRadio from "./elements/input-radio.js";
var radioProto = utils
	.extend(inputRadio)
	.from(elementBase);
utils.register('input-radio', radioProto);

import inputRadioGroup from "./elements/input-radio-group.js";
var inputGroupProto = utils
	.extend(inputRadioGroup)
	.from(inputElementBase);
utils.register('input-radio-group', inputGroupProto);

import inputCheckbox from "./elements/input-checkbox.js";
var checkboxProto = utils
	.extend(inputCheckbox)
	.from(inputElementBase);
utils.register('input-checkbox', checkboxProto);

import inputText from "./elements/input-text.js";
var textProto = utils
	.extend(inputText)
	.from(inputTextElementBase);
utils.register('input-text', textProto);

import inputTextarea from "./elements/input-textarea.js";
var textareaProto = utils
	.extend(inputTextarea)
	.from(inputTextElementBase);
utils.register('input-textarea', textareaProto);

import TestElement from "./test-element.js";
import Base from "./base.js";
var protoTag = utils.extend(TestElement).from(Base);
xtag.register('x-clock', protoTag);
