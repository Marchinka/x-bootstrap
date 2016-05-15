export default class Extender {
	constructor (elementToExtend) {
		this.elementToExtend = elementToExtend;
	}

	from (baseElement) {
		var target =_.clone(this.elementToExtend);
		var source =_.clone(baseElement);
		var lifecycle = _(target.lifecycle || {}).extend(source.lifecycle || {});
		var accessors = _(target.accessors || {}).extend(source.accessors || {});
		var methods = _(target.methods || {}).extend(source.methods || {});
		var events = _(target.events || {}).extend(source.events || {});
		var result = {
			lifecycle: lifecycle,
			accessors: accessors,
			methods: methods,
			events: events
		};
		return result;
		return xtag.merge(source, this.target);;
	}
}