# mybatis笔记
1. ```<![CDATA[]]>```
```xml
<![CDATA[]]>标记避免Sql中与xml规范相冲突的字符对xml映射文件的合法性造成影响
如:
  where age<18||age>8
可以写成
<![CDATA[
  age<18||age>8
]]>
```
2.mybatis 多表查询
+ association 一对一
```xml
<association property="当前表字段" column="{para11=para21,para12=para22} select="对应apper.xml的select方法"/>
```
+ collection 一对多(也包括一对一)
```xml
<collection property="当前表字段" column="{para11=para21,para12=para22} select="对Mapper.xml的select方法"/>
```
3.表插入数据后返回id，通过entity获取id
```xml
<selectKey keyProperty="id" resultType="long">select @@identity</selectKey>
```
