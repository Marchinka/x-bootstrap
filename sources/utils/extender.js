export default class Extender {
	constructor (elementToExtend) {
		this.elementToExtend = elementToExtend;
	}

	from (baseElement) {
		var source =_.clone(baseElement);
		var target =_.clone(this.elementToExtend);
		var lifecycle = _(source.lifecycle || {}).extend(target.lifecycle || {});
		var accessors = _(source.accessors || {}).extend(target.accessors || {});
		var methods = _(source.methods || {}).extend(target.methods || {});
		var events = _(source.events || {}).extend(target.events || {});
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