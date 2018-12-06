# 关于前后端交互
+ 多组数据保存
---
  1.前端：
  ```js
  new Array() arr;
  var data = {id1:data1,id2:data2};
  arr.push(data);
  arr:JSON.stringify(arr)
  ```
  2.后端：
  ```java
  String arr = request.getParameter("arr");
  JSONArray jsonArray = JSONArray.fromObject(arr);
  ```
+ request的parameter的显示方式
---
  1.后端
  ```java
  request.setAttribute("str","Something about '<c:out>'");
  ```
  2.前端口
  ```html
  <li>1:${str}</li>
  <li>2:<c:out value="${str}"/></li>
  <li>3:<c:out value="${str}" default="This is a string."/></li>
  <li>4:<c:out value="${str}" default="This is a string." escapeXml="false"/></li>
  <li>5:<c:out value="${str}" default="This is a string." escapeXml="true"/></li>
  <li>6:<%=request.getAttribute("str")%></li>
  ```
  3.结果：
  ---
  ![cOutShow.png](pictures/cOutShow.png)
