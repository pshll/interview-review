// 1
console.log('main-start')

// 1-A
setTimeout(() => {
	console.log('psh')
}, 1 * 2000)

Promise.resolve()
	.then(function () {
		// 1-a
		console.log('promise1')
	})
	.then(function () {
		// 2-a
		console.log('promise2')
	})

async function foo() {
	await bar()
	// 1-b
	console.log('async1-end')
}
foo()

async function errorFunc() {
	try {
		await Promise.reject('error!!!')
	} catch (e) {
		// 1-c
		console.log(e)
	}
	// 2-1
	console.log('async1')
	return Promise.resolve('async1-success')
}
errorFunc().then(
	// 2-b
	(res) => console.log(res)
)

function bar() {
	// 1-1
	console.log('async2-end')
}

// 1-2
console.log('main-end')

// main-start、async2-end、main-end、promise1、async1-end、error!!!、psh
