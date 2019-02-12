# Maven
+ mvn clean install -Dmaven.test.skip=true -o -Psit
```
clean:清除已编译生成的文件，比如target目录下文件，
install表示将源码打包并放到本地仓库（一般为.m2/repository）
-D表示maven的运行参数 maven.test.skip=true意味着跳过单元测试直接打包（maven正常的声明周期是先测试再打包）
-P: P=profile，即打包是可根据不同的profileId打包不同的properties文件 profileId定义在POM.xml文件中的 profiles节点
```
