let arr = [99, 44, 55, 77, 33, 22, 1, 88, 0, 66]
console.log('排序前：arr ===>', arr)
// 选择排序
// 时间复杂度 O(n^2)
const selectSort = (arr) => {
	const len = arr.length
	if (len <= 1) return
	for (let i = 0; i < len - 1; i++) {
		let minIndex = i
		for (let j = i + 1; j < len - 1; j++) {
			if (arr[j] < arr[minIndex]) {
				minIndex = j
			}
		}
		const temp = arr[i]
		arr[i] = arr[minIndex]
		arr[minIndex] = temp
	}
	console.log('排序后：arr ===>', arr)
}

selectSort(arr)
