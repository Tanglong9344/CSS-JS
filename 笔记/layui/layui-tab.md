# layui 选项卡
+ 一般格式
```html
<div class="layui-tab">
  <ul class="layui-tab-title">
    <li class="layui-this">选项卡1</li>
    <li>选项卡2</li>
    <li>选项卡2</li>
  </ul>
  <div class="layui-tab-content">
    <div class="layui-tab-item layui-show">内容1</div>
    <div class="layui-tab-item">内容2</div>
    <div class="layui-tab-item">内容3</div>
  </div>
</div>
```
```js
<script>
  // 获取当前选项卡id
  function currentTab(){
      return $(".layui-tab-title .layui-this").attr("lay-id");
  }
</script>
```
