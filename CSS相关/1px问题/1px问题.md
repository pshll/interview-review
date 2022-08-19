### 问题
1px问题指的是：在一些`Retina`屏幕的机型上，移动端页面的`1px`会变得很粗，呈现出不止`1px`的效果
### 原因
原因很简单：`CSS`中的`1px`并不能和当前显示器设备的`1px`划等号。
``window.devicePixelRatio(设备像素比) = 设备的物理像素 / CSS像素``
- 例如：使用chrome浏览器，去控制台输入`devicePixelRatio`的值，在`iPhone 6/7/8`这系列的机型中，输出的结果是2；这以为这设置的`1px`CSS像素，在这些设备上会用2个物理像素单元来进行渲染，所以实际看到的一定会比`1px`粗一些

### 解决方案
1. 直接写0.5px
    - 最简单的一种方法，但是这种方法兼容性很差，需要`IOS 8`以上的版本，安卓系统则直接不兼容
2. 伪元素缩小
    - 在目标元素的后面添加`::after`伪元素，让这个元素`position: absolute`。然后再在`::after`伪元素上设置`transform: scale(0.5)`。
    - 例如设置`1px`的下边框
```css
.scale-1px{
  position: relative;
  border:none;
}

.scale-1px:after{
  content: '';
  position: absolute;
  /*border-bottom*/
  bottom: 0;
  background: #000;
  width: 100%;
  height: 1px;
  /*核心是利用transform缩放边框*/
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
}
```

### 总结
没有提出逻辑像素的概念之前，1px的CSS像素就体现为1物理像素，在该概念出现之后，在移动端设备上，1px的CSS像素体现的物理像素就由逻辑像素比决定。
因此又引申出了1px问题，因为通常我们在设计1px的边框时，我们是想要1px的物理像素。如果我们仅仅根据设备像素比来计算出需要书写的CSS像素时，又会因为不同浏览器的策略而出现许多兼容性问题，针对此问题，我们可以通过伪元素+transform的手段来解决。