export default class Extender {
	constructor (elementToExtend) {
		this.elementToExtend = elementToExtend;
	}

	from (baseElement) {
		var source =_.clone(baseElement);
		var target =_.clone(this.elementToExtend);
		var lifecycle = _
			(_(source.lifecycle).clone() || {})
			.extend
			(_(target.lifecycle).clone() || {});

		var accessors = _
			(_(source.accessors).clone() || {})
			.extend
			(_(target.accessors).clone() || {});

		var methods = _
			(_(source.methods).clone() || {})
			.extend
			(_(target.methods).clone() || {});

		var events = _
			(_(source.events).clone() || {})
			.extend
			(_(target.events).clone() || {});

		var result = {
			lifecycle: lifecycle,
			accessors: accessors,
			methods: methods,
			events: events
		};
		return result;
	}
}