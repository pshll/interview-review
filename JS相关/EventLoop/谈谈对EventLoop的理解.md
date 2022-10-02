<h2> 什么是<code>Event Loop</code>（事件循环）</h2> 

`Event Loop`即事件循环，是指浏览器或`Node`的一种解决`JavaScript`单线程运行时不会阻塞的一种机制，也就是我们经常使用的`异步`的原理

### Event Loop
在`JavaScript`中，任务被分为两种，一种是宏任务(`MacroTask`)也叫`Task`，另一种叫微任务(`MicroTask`)。

### 宏任务（MacroTask）
+ `script`全部代码、`setTimeout`、`setInterval`、`setImmediate`、`I/O`、`UI Rendering`。

### 微任务（MicroTask）
+ `Promise`、`Process.nextTick（node独有）`、`Object.observe（废弃）`、`MutationObserver`

## 浏览器中的Event Loop
`JavaScript`有一个主线程`main thread`和一个调用栈`call-stack`(执行栈)，所有的任务都会被放到调用栈等待主线程执行。

### JS调用栈
JS调用栈采用的是后进先出的规则，当函数执行的时候，会被添加到栈的顶部，当执行栈执行完成后，就会从栈顶移出，直到栈内被清空。

### 同步任务和异步任务
`JavaScript`单线程任务被分为`同步任务`和`异步任务`，同步任务会在调用栈等待主线程依次执行，异步任务会在异步任务结果返回后，将注册的回调函数放入任务队列中等待主线程空闲的时候(即调用栈被清空)，被读取到站内等待主线程执行。

### 事件循环的进程模型
+ 选择当前要执行的任务队列，选择任务队列中最先进入的任务，如果任务队列为空即`null`，则执行跳转到微任务（MicroTask）的执行步骤。
+ 将事件循环中的任务设置为已选择任务。
+ 执行任务。
+ 将事件循环中当前运行任务设置为null。
+ 将已经运行完成的任务从任务队列中删除。
+ microtasks步骤：进入microtask检查点。
+ 更新界面渲染。
+ 返回第一步。

执行栈在执行完同步任务后，查看执行栈是否为空，如果执行栈为空，就会去检查微任务(microTask)队列是否为空，如果为空的话，就执行Task（宏任务），否则就一次性执行完所有微任务。
每次单个宏任务执行完毕后，检查微任务(microTask)队列是否为空，如果不为空的话，会按照先入先出的规则全部执行完微任务(microTask)后，设置微任务(microTask)队列为null，然后再执行宏任务，如此循环。


### `Node`中的`Event Loop`

Node的Event loop一共分为6个阶段，每个细节具体如下：

1. `timers`: 执行setTimeout和setInterval中到期的callback。
2. `pending callback`: 上一轮循环中少数的callback会放在这一阶段执行。
3. `idle, prepare`: 仅在内部使用。
4. `poll`: 最重要的阶段，执行pending callback，在适当的情况下回阻塞在这个阶段。
5. `check`: 执行setImmediate(setImmediate()是将事件插入到事件队列尾部，主线程和事件队列的函数执行完成之后立即执行setImmediate指定的回调函数)的callback。
6. `close callbacks`: 执行close事件的callback，例如socket.on('close'[,fn])或者http.server.on('close, fn)。