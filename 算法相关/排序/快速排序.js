let arr = [99, 44, 55, 77, 33, 22, 1, 88, 0, 66]
console.log('排序前：arr ===>', arr)
// 快速排序
// 快速，常用。但是需要另外声明两个数组，浪费了内存空间
// 时间复杂度 O(nlogn)
const quickSort = (arr) => {
	const len = arr.length
	if (len <= 1) return arr
	// 取基准点
	const mid = arr[Math.floor(len / 2)]
	// 存放比基准点小的数组
	const left = []
	// 存放比基准点大的数组
	const right = []

	for (let i = 0; i < len - 1; i++) {
		if (arr[i] < mid) {
			left.push(arr[i])
		} else {
			right.push(arr[i])
		}
	}
	// return [...quickSort(left), ...quickSort(right)]
	return quickSort(left).concat(quickSort(right));
}

console.log('排序后：arr ===>', quickSort(arr))
