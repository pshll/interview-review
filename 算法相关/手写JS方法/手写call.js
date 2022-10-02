Function.prototype.myCall = function (context, ...args) {
	if (!context || context === null) {
		context = window
	}
	let fn = Symbol()
	context[fn] = this
	return context[fn](...args)
}
