# 关于前后端交互
+ 多组数据保存
```
1.前端：
new Array() arr;
var data = {id1:data1,id2:data2};
arr.push(data);
arr:JSON.stringify(arr)
2.后端：
String arr = request.getParameter("arr");
JSONArray jsonArray = JSONArray.fromObject(arr);
```
