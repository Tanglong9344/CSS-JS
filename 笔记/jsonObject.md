# JSONObject
+ net.sf.json.JSONObject&org.json.JSONObject
```java
// 创建对象
String jsonStr = "{'name':'tanglong','height':'30m'}"; 
net.sf.json.JSONObject jsonObject1 = net.sf.json.JSONObject.fromObject(jsonStr);
org.json.JSONObject    jsonObject2 = new org.json.JSONObject(jsonStr);
```
