// 深拷贝方法

const obj = {
	field1: 1,
	field2: undefined,
	field3: 'ConardLi',
	field4: {
		child: 'child',
		child2: {
			child2: 'child2'
		}
	},
	field5: () => {
		console.log('昨天基金全是绿的，只有我的眼睛是红的')
	}
}

// 常见
// 有坑，undefined和function会消失、时间类型会无法使用对应方法
const deepClone1 = (target) => {
	return JSON.parse(JSON.stringify(target))
}

const newObj1 = deepClone1(obj)
console.log(newObj1)
newObj1.field1 = 100
newObj1.field4.child2.child2 = '更改'
console.log('obj ===>', obj)
console.log('newObj1 ===>', newObj1)
// console.log('newObj1 Function ===>', newObj1.field5())

// 递归
const deepClone2 = (target) => {
	let newObj = null
	if (typeof target === 'object' && target !== null) {
		newObj = target instanceof Array ? [] : {}
		for (let i in target) {
			newObj[i] = deepClone2(target[i])
		}
	} else {
		newObj = target
	}
	return newObj
}

const newObj2 = deepClone2(obj)
console.log(newObj2)
newObj2.field1 = 100
newObj2.field4.child2.child2 = '更改'
console.log('obj ===>', obj)
console.log('newObj2 ===>', newObj2)
newObj2.field5()

// 优化
const isObj = (val) => {
	return typeof val === 'object' && val !== null
}
const deepClone3 = (target, hash = new WeakMap()) => {
	if (!isObj(target)) return target
	if (hash.has(target)) {
		return hash.get(target)
	}
	let result = Array.isArray(target) ? [] : {}
	hash.set(target, result)
	Reflect.ownKeys(target).forEach((item) => {
		if (isObj(item)) {
			result[item] = deepClone3(target[item], hash)
		} else {
			result[item] = target[item]
		}
	})
	return result
}

function deepClone4(obj, hash = new WeakMap()) {
	// 处理 null或者undefined
	if (obj === null) return obj
	// 处理 日期
	if (obj instanceof Date) return new Date(obj)
	// 处理 正则
	if (obj instanceof RegExp) return new RegExp(obj)
	// 处理 基础类型或者函数
	if (typeof obj !== 'object') return obj

	// 对象进行深拷贝
	if (hash.has(obj)) return hash.get(obj)
	let cloneObj = new obj.constructor()
	hash.set(obj, cloneObj)
	for (const key in hash) {
		if (obj.hasOwnProperty(key)) {
			cloneObj[key] = deepClone4(obj[key], hash)
		}
	}
	return cloneObj
}
