Function.prototype.bind = function (context, ...args) {
	if (!context || context === null) {
		context = window
	}
	let fn = Symbol()
	context[fn] = this
	let _this = this
	const result = function (...innerArgs) {
		// 通过new使用
		if (this instanceof _this === true) {
			this[fn] = this
			this[fn](...[...args, ...innerArgs])
		} else {
			context[fn](...[...args, ...innerArgs])
		}
	}
	// 如果绑定构造函数，则集成构造函数原型属性和方法
	result.prototype = Object.create(this.prototype)
	return result
}
