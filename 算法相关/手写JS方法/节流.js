function throttle(fn, delay = 500) {
	let flag = true
	return function () {
		if (!flag) return
		flag = false
		const args = arguments
		setTimeout(() => {
			fn.apply(this, args)
		}, delay)
	}
}
