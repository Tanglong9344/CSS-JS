Struts标签
+ 标签库(<%@ taglib prefix="s" uri="/struts-tags" %>)
+ property
```jsp
<s:property value=""/>
```
+ if
```jsp
<s:if test="%{false}">
  <div>false</div>
</s:if>
<s:elseif test="%{true}">
    <div>true</div>
</s:elseif>
<s:else>
    <div>other</div>
</s:else>
```
+ data
```jsp
<s:date name="currentDate" format="yyyy-MM-dd" />
```
+ set
```jsp
<s:set name="myVal" value="12"/>
<s:property value="myVal"/>
```
+ iterator遍历Collection、Iterator
```jsp
<s:iterator value="iterators">
  <p>element is: <s:property/></p>
</s:iterator>
```
+ generate生成迭代数据
```jsp
<s:generator val="%{'aaa,bbb,ccc'}">
  <s:iterator>
    <s:property/><br/>
  </s:iterator>
</s:generator>
```
+ merge合并多个列表
```jsp
<s:merge var="myMergedList">
   <s:param value="%{myList1}" />
   <s:param value="%{myList2}" />
</s:merge>
<s:iterator value="%{#myMergedList}">
   <s:property />
</s:iterator>
```
+ action
```jsp
 <s:action name="actionName" executeResult="true"></s:action>
```
+ include
```jsp
<s:include value="myIncluded.jsp">
   <s:param name="param1" value="value2" />
   <s:param name="param2" value="value2" />
</s:include>
```
+ bean
```jsp
<s:bean name="org.apache.struts2.util.Counter" var="counter">
   <s:param name="first" value="20"/>
   <s:param name="last" value="25" />
</s:bean>
<ul>
   <s:iterator value="#counter">
      <li><s:property/></li>
   </s:iterator>
</ul>
```
+ text
```jsp
<s:i18n name="actionName">
   <s:text name="name.val1"/><br>
   <s:text name="name.val2">This is a value called val2</s:text><br>
   <s:text name="name.val3.param">
      <s:param >paramName</s:param>
   </s:text>
</s:i18n>
```
+ url生成url
```jsp
<s:url id="generatedUrl" action="generatedUrl" var="myurl">
	<s:param name="user">userNamae</s:param>
</s:url>

<a href='<s:property value="#myurl"/>'><s:property value="#myurl"/></a>
```
+ form表单
```jsp
<s:form action="actionName" method="post" enctype="multipart/form-data">
   <s:hidden name="secret" value="abracadabra"/>
   <s:textfield key="email.from" name="from" />
   <s:password key="email.password" name="password" />
   <s:textfield key="email.to" name="to" />
   <s:textfield key="email.subject" name="subject" />
   <s:textarea key="email.body" name="email.body" />
   <s:label for="attachment" value="Attachment"/>
   <s:file name="attachment" accept="text/html,text/plain" />
   <s:token/>
   <s:submit key="submit"/>
</s:form>
```
+ ajax
  + 自动完成标签
  ```jsp
  <sx:autocompleter name="test" list="{'a','b','cc'}" autoCompleter="true" />
  ```
  + 日期选择标签
  ```jsp
  <sx:datetimepicker name="Obj.date" label="日期选择" displayFormat="yyyy-MM-dd" value="%{'2018-10-01'}"/>
  ```
  + 树形标签
  ```jsp
  <sx:tree>
  ```
  + 分页标签
  ```jsp
  <sx:tabbedpanel id="tabContainer">
    <sx:div label="Tab1">Tab 1</sx:div>
    <sx:div label="Tab2">Tab 2</sx:div>
  </sx:tabbedpanel>
  ```
