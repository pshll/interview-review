# 浏览器输入URL之后会发生什么

---
1. DNS解析：将域名解析成IP地址
	+ 本地域名服务器 --> 根域名服务器 --> 顶级域名服务器 --> 权威域名服务器
	+ 本地域名服务器： 浏览器缓存 --> 本地host文件 --> 本地DNS解析器
2. 建立TCP链接
	1. 判断是否是https请求（HTTP + SSL/TLS）
	2. 三次握手
3. 发送HTTP请求，服务器处理请求，返回响应结果
	+ HTTP缓存
		1. 强缓存：再次请求时，无需在向服务器发送请求
			+ HTTP 1.0 ==> Expires：绝对时间
			+ HTTP 2.0 ==> Cache-Control:
				+ max-age
				+ no-cache
		2. 协商缓存：再次请求时，需要向服务器校验新鲜度，如果资源是新鲜的返回304
			+ `Last-Modified`/`If-Modified-Since`：匹配Response Header的`Last-Modified`和Request Header的`If-Modified-Since`是否一致
			+ `ETag`/`If-None-Match`：匹配Response Header的`ETag`和Request Header的`If-None-Match`是否一致
4. 关闭TCP链接（四次挥手）
5. 浏览器渲染
	1. 构建DOM Tree
	2. 构建CSSOM Tree
	3. 布局Render Tree
	4. 绘制、显示