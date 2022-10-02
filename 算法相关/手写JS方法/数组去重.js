/**
 * 两种方法： 一种是Map记录，另一种是Set去重
 */

function quchongMap(arr) {
	const newArr = []
	arr.reduce((pre, next) => {
		if (!pre.has(next)) {
			pre.set(next, 1)
			newArr.push(next)
		}
	}, new Map())
	return newArr
}

function quchongSet(arr) {
	return [...new Set(arr)]
}
