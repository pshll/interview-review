### src和href的区别

src和href都是用来引用外部的资源，它们的区别如下：

- src： 表示对资源的引用，它指向的内容会嵌入到当前标签所在的位置。src会将其指向的资源下载并应⽤到⽂档内，如请求js脚本。当浏览器解析到该元素时，会暂停其他资源的下载和处理，直到将该资源加载、编译、执⾏完毕，所以⼀般js脚本会放在页面底部。
- href： 表示超文本引用，它指向一些网络资源，建立和当前元素或本文档的链接关系。当浏览器识别到它他指向的⽂件时，就会并⾏下载资源，不会停⽌对当前⽂档的处理。 常用在a、link等标签上。

### 对HTML语义化的理解

**语义化是指根据内容的结构化（内容语义化），选择合适的标签（代码语义化）。通俗来讲就是用正确的标签做正确的事情。**

语义化的优点如下：

- 对机器友好，带有语义的文字表现力丰富，更适合搜索引擎的爬虫爬取有效信息，有利于SEO。除此之外，语义类还支持读屏软件，根据文章可以自动生成目录；

- 对开发者友好，使用语义类标签增强了可读性，结构更加清晰，开发者能清晰的看出网页的结构，便于团队的开发与维护。

常见的语义化标签： 
```html
<header></header>  头部

<nav></nav>  导航栏

<section></section>  区块（有语义化的div）

<main></main>  主要区域

<article></article>  主要内容

<aside></aside>  侧边栏

<footer></footer>  底部
```

### DOCTYPE(文档类型)的作用
DOCTYPE是HTML5种一种标准通用标记语言的文档类型声明，它的目的是`告诉浏览器应该以什么样的文档类型定义来解析文档`，不同渲染模式会影响浏览器对CSS代码甚至JavaScript脚本的解析。`它必须声明在HTML文档的第一行`。

浏览器渲染页面的两种模式（可通过`document.compatMode`获取，比如，语雀官网的文档类型是`CSS1Compat`）：
- `CSS1Compat`：`标准模式（Strick mode），默认模式`，浏览器使用W3C的标准解析渲染页面。在标准模式中，浏览器以其支持的最高标准呈现页面。
- `BackCompat`：`怪异模式(混杂模式)(Quick mode)`，浏览器使用自己的怪异模式解析渲染页面。在怪异模式中，页面以一种比较宽松的向后兼容的方式显示。

### `<script>`标签中 defer 和 async 的区别

如果没有 defer 或 async 属性，浏览器会立即加载并执行对应的脚本。它不会等待后续加载的文档元素，读取到`<script>`就会开始加载和执行，这样就阻塞了后续文档的加载。

`defer 和 async 属性都会异步加载外部的JS脚本文件，他们不会阻塞页面的解析`

> 区别如下：
> - **执行顺序：** 带 `async` 属性的标签，不能保证加载顺序；带 `defer` 属性的标签，按照加载顺序执行；
> - **脚本是否并行执行：** `async` 属性，标识后续文档的加载和执行与js脚本的加载是并行执行的，即异步执行；`defer`属性，标识加载后续文档的过程与js脚本的加载(仅加载不执行)是并行的，但js脚本需要等到文档所有元素解析完成后才执行，***DOMContentLoaded***事件触发执行之前


### 常用的***meta***标签有哪些

`meta`标签由`name`和`content`属性定义，**用来表述网页的属性**，比如网页的描述、关键词、作者等，除了HTTP标准固定了一些`name`作为大家使用的共识， 开发者还可以自定义name。

常用的`meta`标签：
- `charset`，用来描述HTML文档的编码类型
```html
<meta charset="UTF-8" />
```
- `keywords`，页面关键词：
```html
<meta name="keywords" content="关键词" />
```
- `description`，页面描述：
```html
<meta name="description" content="页面描述内容" />
```
- `refresh`，页面重定向或刷新
```html
<meta http-equiv="refresh" content="0;url=" />
```
- `viewport`，适配移动端，可以控制视口的大小和比例：
```html
<meta name="viewport" content="width=device-width, inital-scale=1, maximum-scale=1" />

content 参数有以下几种：
    width viewport: 宽度(数值/device-width)
    height viewport: 高度(数值/device-height)
    initial-scale: 初始缩放比例
    maximum-scale: 最大缩放比例
    minimum-scale: 最小缩放比例
    user-scalable: 是否允许用户缩放(yes/no)
```
- `robots`，搜索引擎索引方式：
```html
<meta name="robots" content="index, follow" />

content 参数有以下几种：
    all: 文件将被检索，且页面上的链接可以被查询
    none: 文件将不被检索，且页面上的链接不可以被查询
    index: 文件将被检索
    follow: 页面上的链接可以被查询
    nofollow: 页面上的链接不可以被查询
```

### HTML5有哪些更新

1. 语义化标签
- header
- nav
- footer
- article
- aside
- section

2. 媒体标签
- audio
- video
- source
```html
<!-- 浏览器对视频格式的支持程度不一样，为了能兼容不同浏览器，可以通过 source 标签来执行视频源 -->
<video>
 	<source src='aa.flv' type='video/flv'></source>
 	<source src='aa.mp4' type='video/mp4'></source>
</video>
```

3. 表单

**表单类型：**
```html
<form>
    <input type="?">
</form>
```

- email
- url
- number
- search
- range
- color
- time
- date
- datetime
- datetime-local
- week
- month

**表单属性：**
- placeholder ：提示信息
- autofocus ：自动获取焦点
- autocomplete=“on” 或者 autocomplete=“off” 使用这个属性需要有两个前提：
    - 表单必须提交过
    - 必须有name属性。
- required：要求输入框不能为空，必须有值才能够提交。
- pattern=" " 里面写入想要的正则模式，例如手机号patte="^(+86)?\d{10}$"
- multiple：可以选择多个文件或者多个邮箱
- form=" form表单的ID"

4. 进度条、度量器
- `<progress>`标签：用来表示任务进度(IE、Safari不支持)
- `meter`属性： 用来显示剩余容量或剩余库存(IE、Safari不支持)

5. DOM查询操作
- document.querySelector()
- document.querySelectorAll()

6. Web存储
- localStorage
- sessionStorage

7. 其他
- 拖拽、拖放，
```html
<!-- 设置图片可拖拽 -->
<img draggable="true" />
```
- canvas
- SVG
- 地理定位： Geolocation

### 说一下 web worker

在 HTML 页面中，如果在执行脚本时，页面的状态是不可相应的，直到脚本执行完成后，页面才变成可相应。web worker 是运行在后台的 js，独立于其他脚本，不会影响页面的性能。 并且通过 postMessage 将结果回传到主线程。这样在进行复杂操作的时候，就不会阻塞主线程了。

如何创建 web worker：

1. 检测浏览器对于 web worker 的支持性
2. 创建 web worker 文件（js，回传函数等）
3. 创建 web worker 对象


### iframe 优缺点
优点：

- 用来加载速度较慢的内容（如广告）
- 可以使脚本可以并行下载
- 可以实现跨子域通信

缺点： 
- iframe 会阻塞主页面的 onload 事件
- 无法被一些搜索引擎索识别
- 会产生很多页面，不容易管理