# html
+ 使用正则表达式限定input的输入内容(只允许输入数字)
```html
<!-- 只允许输入小数或整数(将非数字替换为空) -->
<input type="text" onkeyup="value=value.replace(/[^\d{1,}\.\d{1,}|\d{1,}]/g,'')">
```
+ 关于disabled属性
  ```html
  <input id="test" name="test" value="Hello Disabled!">
  <!-- input使用disabled属性后数据无法传到后台 -->
  ```
  提交前需要先去除disabled属性
  ```js
  function removeDisabled(){
              var ts = $("input[name='test']");
              ts.each(function(){
                  $(this).attr("disabled",false);
              })
          }
  ```
+ type="submit"
```html
<form action="test.action" method="post">
  <button type="submit" onclick="">提交</button>
</form>
<!-- submit将表单提交(form.submit())作为其onclick后的默认事件,使用submit时onclick可以不需要 -->
```
+ 在iframe内部获取iframe
```js
var frame = window.parent.document.getElementById("iframeId");
fullscreen(frame);//全屏

/** 默认按ESC退出全屏 */
function fullscreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();//w3c
    } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();//firefox
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();//ie
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullScreen();//google
    }
}
```
+ [localStorage](http://www.w3school.com.cn/html5/html_5_webstorage.asp)
