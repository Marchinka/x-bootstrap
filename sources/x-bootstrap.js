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
import dropdownElement from "./elements/form/dropdown-option.js";
import additionalInfo from "./elements/form/additional-info.js";
import radioInput from "./elements/form/input-radio.js";
import inputRadioGroup from "./elements/form/input-radio-group.js";
import inputCheckbox from "./elements/form/input-checkbox.js";
import inputText from "./elements/form/input-text.js";
import inputTextarea from "./elements/form/input-textarea.js";
import inputSelect from "./elements/form/input-select.js";
import inputAutocomplete from "./elements/form/input-autocomplete.js";
import formAjax from "./elements/form/form-ajax.js";
import collectionSearchForm from "./elements/collection/collection-search-form.js";
import collectionElements from "./elements/collection/collection-elements.js";
import collectionContainer from "./elements/collection/collection-container.js";
import collectionFeedback from "./elements/collection/collection-feedback.js";
import feedbackToken from "./elements/collection/feedback-token.js";
import tableColumn from "./elements/collection/table-column.js";
import collectionTable from "./elements/collection/collection-table.js";

(function(document) {
	var baseElements = {
		form: {
			dropdownElement: dropdownElement,
			additionalInfo: additionalInfo,
			radioInput: radioInput,
			inputRadioGroup: inputRadioGroup,
			inputCheckbox: inputCheckbox,
			inputText: inputText,
			inputTextarea: inputTextarea,
			inputSelect: inputSelect,
			inputAutocomplete: inputAutocomplete,
			formAjax: formAjax
		},
		collection: {
			collectionSearchForm: collectionSearchForm,
			collectionElements: collectionElements,
			collectionContainer: collectionContainer,
			feedbackToken: feedbackToken,
			collectionFeedback: collectionFeedback,
			tableColumn: tableColumn,
			collectionTable: collectionTable
		}
	};

	// Form Elements
	utils.register('dropdown-option', dropdownElement);
	utils.register('additional-info', additionalInfo);
	utils.register('input-radio', radioInput);
	utils.register('input-radio-group', inputRadioGroup);
	utils.register('input-checkbox', inputCheckbox);
	utils.register('input-text', inputText);
	utils.register('input-textarea', inputTextarea);
	utils.register('input-select', inputSelect);
	utils.register('input-autocomplete', inputAutocomplete);
	utils.register('form-ajax', formAjax);

	// Collection Elements
	utils.register('collection-search-form', collectionSearchForm);
	utils.register('collection-elements', collectionElements);
	utils.register('collection-container', collectionContainer);
	utils.register('collection-feedback', collectionFeedback);
	utils.register('feedback-token', feedbackToken);
	utils.register('table-column', tableColumn);
	utils.register('collection-table', collectionTable);
})(document);