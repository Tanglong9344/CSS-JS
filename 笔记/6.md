# CSS
+ ie8不支持border-radius解决
  + [下载](http://css3pie.com/download/)PIE.htc文件
  + css
  ```css
    border-radius:50%;
    behavior:url(pieRootPath/PIE.htc);
    /*由于实现方式的原因，需要添加position: relative，一般也需要z-index*/
    position: relative;
    z-index:10;
  ```
  + PIE.htc position:使得IE(6、7、8)浏览器支持CSS3的border-radius、box-shadow、gradient、RGBA等属性
  + A>B
  ```
  css3特有的选择器，A>B 表示选择A元素的所有子B元素。
  与A B的区别在于，A B选择所有后代元素，而A>B只选择第一代。
  ```
 + !important
```css
<!-- 用于覆盖class layui-btn 中的background-color样式-->
.layui-btn{background-color:#bb3129 !important;}
```
