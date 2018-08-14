# c标签
+ 导入标签库：<%@taglib prefix="c" uri="http://java.sun.com//jstl/core" %>
+ foreach
```
<c:forEach var="data" items="${dataList}">
	...
</c:forEach>
```

+ set: 如何使foreach满足某个条件时结束循环
```
<c:set var="status" value="0"></c:set>
<c:forEach var="${datas}" items="data">
	<c:if test="${status eq 0}">
		...满足某个条件...
		<c:set var="status" value="1"></c:set>
	</c:if>
</c:foreach>
```
+ if
```
<c:if test="${true or false}"></c:if>
```
+ choose(类似switch...case...)
```
<c:choose>
	<c:when test="${true or false}"></c:when>
	<c:when test="${true or false}"></c:when>
	...
	<c:otherwise></c:otherwise>
</c:choose>
```
