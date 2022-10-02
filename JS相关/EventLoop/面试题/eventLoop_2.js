// 1
console.log('1')

// 宏1
setTimeout(() => {
	console.log('2')
	Promise.resolve().then(() => {
		// 宏1-微1
		console.log('3')
	})
	new Promise((resolve) => {
		console.log('4')
		resolve()
	}).then(() => {
		// 宏1-微2
		console.log('5')
	})
})

Promise.reject().then(
	() => {
		console.log('13')
	},
	// 微1
	() => {
		console.log('12')
	}
)

new Promise((resolve) => {
	// 2
	console.log('7')
	resolve()
}).then(() => {
	// 微2
	console.log('8')
})

// 宏2
setTimeout(() => {
	console.log('9')
	Promise.resolve().then(() => {
		// 宏2-微1
		console.log('10')
	})
	new Promise((resolve) => {
		console.log('11')
		resolve()
	}).then(() => {
		// 宏2-微2
		console.log('12')
	})
})

// 1 7 12 8 2 4 3 5 9 11 10 12
