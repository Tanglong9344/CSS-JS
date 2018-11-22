# fmt标签
+ 导入标签库：<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>)
+ [详细介绍](http://www.runoob.com/jsp/jstl-format-formatdate-tag.html)
+ formatDate
```
1.格式
<fmt:formatDate value="${date_to_show}" pattern="yyyy-MM-dd HH:mm:ss">
</fmt:formatDate>
2.格式
<fmt:formatDate value="${date_to_show}" type="" dateStyle="">
</fmt:formatDate>
2.1示例
<fmt:formatDate value="${date_to_show}" type="date" dateStyle="long">
</fmt:formatDate>
```
