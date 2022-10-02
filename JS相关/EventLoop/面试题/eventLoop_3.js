new Promise((resolve, reject) => {
	// 1
	console.log(1)
	resolve()
})
	// micro-1
	.then(() => {
		console.log(2)
		new Promise((resolve, reject) => {
			console.log(3)
			// micro-1.1
			setTimeout(() => {
				reject()
			}, 3 * 1000)
			resolve()
		})
			// micro-1.2
			.then(() => {
				console.log(4)
				new Promise((resolve, reject) => {
					console.log(5)
					resolve()
				})
					// micro-1.4
					.then(() => {
						console.log(7)
					})
					// micro-1.6
					.then(() => {
						console.log(9)
					})
			})
			// micro-1.5
			.then(() => {
				console.log(8)
			})
	})
	// micro-1.3
	.then(() => {
		console.log(6)
	})
