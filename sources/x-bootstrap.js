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
import partialAjax from "./elements/misc/partial-ajax.js";

(function(document) {
	if ( !typeof window.CustomEvent === "function" ) 
	{
		function CustomEvent ( event, params ) {
			params = params || { bubbles: false, cancelable: false, detail: undefined };
			var evt = document.createEvent( 'CustomEvent' );
			evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
			return evt;
		}

		CustomEvent.prototype = window.Event.prototype;

		window.CustomEvent = CustomEvent;
	}

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
		},
		misc: {
			partialAjax: partialAjax
		}
	};

	// Form Elements
	utils.register({ tagName: 'dropdown-option', proto:  dropdownElement });
	utils.register({ tagName: 'additional-info', proto:  additionalInfo });
	utils.register({ tagName: 'input-radio', proto:  radioInput, ensureStateChanges: true });
	utils.register({ tagName: 'input-radio-group', proto:  inputRadioGroup, ensureStateChanges: true });
	utils.register({ tagName: 'input-checkbox', proto:  inputCheckbox, ensureStateChanges: true });
	utils.register({ tagName: 'input-text', proto:  inputText, ensureStateChanges: true });
	utils.register({ tagName: 'input-textarea', proto:  inputTextarea, ensureStateChanges: true });
	utils.register({ tagName: 'input-select', proto:  inputSelect, ensureStateChanges: true });
	utils.register({ tagName: 'input-autocomplete', proto:  inputAutocomplete, ensureStateChanges: true });
	utils.register({ tagName: 'form-ajax', proto:  formAjax });

	// Collection Elements
	utils.register({ tagName: 'collection-search-form', proto:  collectionSearchForm });
	utils.register({ tagName: 'collection-elements', proto:  collectionElements });
	utils.register({ tagName: 'collection-container', proto:  collectionContainer });
	utils.register({ tagName: 'collection-feedback', proto:  collectionFeedback });
	utils.register({ tagName: 'feedback-token', proto:  feedbackToken });
	utils.register({ tagName: 'table-column', proto:  tableColumn });
	utils.register({ tagName: 'collection-table', proto:  collectionTable });

	// Utilities
	utils.register({ tagName: 'partial-ajax', proto: partialAjax });

	window.xBootstrap = utils;
	window.xBootstrap.baseElements = baseElements;
})(document);

(function () {


})();