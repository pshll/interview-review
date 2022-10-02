/**
 * 观察者模式
 *      定义了一种一对多的关系，让多个观察者对象同事监听某一个主题对象
 *      这个主题对象的状态变化时就会通知所有的观察者对象，使得他们能够自动更新自己。
 * 例如：宗门推出五星任务订阅功能，弟子通过购买获得订阅权限，
 *          当宗门发布五星任务后，会通知拥有订阅权限的弟子。
 *     接受任务通知的弟子们（订阅者）
 *     宗门任务大殿（发布者）
 *          ---> 1.维护拥有订阅权限的弟子列表
 *          ---> 2.提供弟子购买订阅权限的功能
 *          ---> 3.发布对应任务后通知有订阅权限的弟子
 */

/**
 * 发布订阅者模式
 * 		基于一个事件（主题）通道，希望接受通知的对象`Subscriber`通过自定义事件订阅主题，
 * 		被激活事件的对象`Publisher`通过发布主题事件的方式通知各个订阅该主题的`Subscriber`对象。
 * 
 * 和观察者模式相比：发布订阅模式中有三个角色 --> 
 * 		1. 发布者`Publisher`
 * 		2. 事件调度中心`Event Channel`
 * 		3. 订阅者`Subscriber`
 * 
 * 例如：宗门感觉任务订阅放在任务放在任务大殿中有些繁琐，于是决定是任务大殿和弟子中间添加[中介]
 * 			弟子在中介中订阅其需要的任务类型，当任务大殿发布任务后，中介会将任务发布给对应的订阅者
 * 		宗门任务大殿（任务发布者`Publisher`）
 * 		中介功能（事件调度中心`Event Channel`）
 * 		宗门弟子（订阅者`Subscriber`）
 * 
 */

// 发布订阅模式，有 on emit once off 方法
class EventEmitter {
	constructor() {
		// 缓存
		this.cache = {}
	}

	// 订阅
	on(name, fn) {
		const tasks = this.cache[name]
		if (tasks) {
			this.cache[name].push(fn)
		} else {
			this.cache[name] = [fn]
		}
	}

	// 取消订阅
	off(name, fn) {
		const tasks = this.cache[name]
		if (tasks) {
			const index = tasks.findIndex((item) => item === fn)
			if (index >= 0) {
				this.cache[name].splice(index, 1)
			}
		}
	}

	emit(name, ...args) {
		// 复制一份。防止回调里继续on，导致死循环
		const tasks = this.cache[name].slice()
		if (tasks) {
			for (let fn of tasks) {
				fn(...args)
			}
		}
	}

    once(name, cb) {
        function fn(...args) {
            cb(args)
            this.off(name, fn)
        }
        this.on(name, fn)
    }
}
