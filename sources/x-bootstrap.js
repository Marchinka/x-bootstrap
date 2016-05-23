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
import dropdownInputElementBase from "./base/dropdown-input-element-base.js";
import dropdownInputTextElementBase from "./base/dropdown-input-text-element-base.js";
import formElementBase from "./base/form-element-base.js";

import dropdownElement from "./elements/form/dropdown-option.js";
var dropdownProto = utils
	.extend(dropdownElement)
	.from(elementBase);
utils.register('dropdown-option', dropdownProto);

import additionaInfo from "./elements/form/additional-info.js";
var additionaInfoProto = utils
	.extend(additionaInfo)
	.from(elementBase);
utils.register('additional-info', additionaInfoProto);

import inputRadio from "./elements/form/input-radio.js";
var radioProto = utils
	.extend(inputRadio)
	.from(elementBase);
utils.register('input-radio', radioProto);

import inputRadioGroup from "./elements/form/input-radio-group.js";
var inputGroupProto = utils
	.extend(inputRadioGroup)
	.from(inputElementBase);
utils.register('input-radio-group', inputGroupProto);

import inputCheckbox from "./elements/form/input-checkbox.js";
var checkboxProto = utils
	.extend(inputCheckbox)
	.from(inputElementBase);
utils.register('input-checkbox', checkboxProto);

import inputText from "./elements/form/input-text.js";
var textProto = utils
	.extend(inputText)
	.from(inputTextElementBase);
utils.register('input-text', textProto);

import inputTextarea from "./elements/form/input-textarea.js";
var textareaProto = utils
	.extend(inputTextarea)
	.from(inputTextElementBase);
utils.register('input-textarea', textareaProto);

import inputSelect from "./elements/form/input-select.js";
var selectProto = utils
	.extend(inputSelect)
	.from(dropdownInputElementBase);
utils.register('input-select', selectProto);

import inputAutocomplete from "./elements/form/input-autocomplete.js";
var selectProto = utils
	.extend(inputAutocomplete)
	.from(dropdownInputTextElementBase);
utils.register('input-autocomplete', selectProto);

import formAjax from "./elements/form/form-ajax.js";
var formProto = utils
	.extend(formAjax)
	.from(formElementBase);
utils.register('form-ajax', formProto);

import collectionSearchForm from "./elements/collection/collection-search-form.js";
var searchFormProto = utils
	.extend(collectionSearchForm)
	.from(formElementBase);
utils.register('collection-search-form', searchFormProto);

import collectionElements from "./elements/collection/collection-elements.js";
var elementsProto = utils
	.extend(collectionElements)
	.from(elementBase);
utils.register('collection-elements', elementsProto);