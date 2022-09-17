let arr = [99, 44, 55, 77, 33, 22, 1, 88, 0, 66]
console.log('排序前：arr ===>', arr)
// 冒泡排序
// 时间复杂度 O(n^2)
const bubbleSort = (arr) => {
	const len = arr.length
	if (len <= 1) return
	for (let i = 0; i < len - 1; i++) {
		for (let j = 0; j < len - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				const temp = arr[j]
				arr[j] = arr[j + 1]
				arr[j + 1] = temp
			}
		}
	}
	console.log('排序后：arr ===>', arr)
}

bubbleSort(arr)
