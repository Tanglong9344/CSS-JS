# JSONObject
+ net.sf.json.JSONObject&org.json.JSONObject
  + 创建对象
  ```java
  String jsonStr = "{'name':'tanglong','height':'30m'}"; 
  net.sf.json.JSONObject jsonObject1 = net.sf.json.JSONObject.fromObject(jsonStr);
  org.json.JSONObject    jsonObject2 = new org.json.JSONObject(jsonStr);
  ```
  + key的顺序
  ```
  net.sf.json.JSONObject.fromObject();// key与原来保持一致
  new org.json.JSONObject(); // key会重新排序
  ```
