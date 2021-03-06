# ajax、ajaxFileUpload
1. Jquery Ajax
	+ 前端
	```js
	$.ajax
    (
        {
            url: url, // 后端action
            data: {data1:data1,data2:data2}, // 数据参数
            dataType: 'json',
            type: 'POST',
            success: function (data,status) {},
            error: function (XMLHttpRequest, textStatus, errorThrown) {}
        }
    );
    /* contentType vs datatype
     contentType: 发送信息至服务器时内容编码类型，简单说告诉服务器请求类型的数据
   	在调试js时候通过chrome的F12或firefox的firebug查看请求参数时，尤其请注意head
	默认值: "application/x-www-form-urlencoded"

     dataType：告诉服务器，我要想什么类型的数据，除了常见的json、XML，还可以指定 html、jsonp、script或者text
    */
    ```
    + 后端(Java SpringMVC
    ```java
   	@RequestMapping(url)
    @ResponseBody
    public String ActionName(HttpServletRequest request) throws Exception {
        String data1 = request.getParameter("data1");
        String data2 = request.getParameter("data2");
        String result = null;
        {...}
        return result; // pay attention to illegal character
    }
    ```
2. Jquery ajaxFileUpload
	+ 前端
	```js
	$.ajaxFileUpload
        (
            {
                url : url,
                fileElementId:'fileId', // 上传的文件的id
                secureuri: false,//安全验证
                type: 'post',
                dataType : 'json',
                success: function(data,status)
                {
                    var c = JSON.parse(data)
		    {... 数据处理 ...}
                },
                error: function(XMLHttpRequest, textStatus, errorThrown)
                {
                    alert("上传失败: " + errorThrown);
                }
            }
        );
	```
	+ SpringMVC框架下的文件上传处理
		+ application.xml配置
		```xml
		    <bean id="multipartResolver" class="org.springframework.web.multipart.commons.CommonsMultipartResolver">
			<!-- 最大文件大小 1024*1024*100 100M 最小1KB -->
			<property name="maxUploadSize" value="104857600"></property>
			<property name="maxInMemorySize" value="40960"></property>
			<property name="defaultEncoding" value="UTF-8"></property>
		    </bean>
		```
		+ java 处理程序
		```java
		@RequestMapping("url")
		    @ResponseBody
		    public void url(MultipartHttpServletRequest multipartRequest, HttpServletResponse response){
			String realSavePath = null;//文件保存地址
			String subDir = null; //文件保存的子存储路径
			String newFileName = null;
			File tempFile = null;
			String rs = null;//返回数据
			// 获取文件
			CommonsMultipartFile file = (CommonsMultipartFile) multipartRequest.getFile("fileName");//上传文件的name
			try {
			    String rootDir = multipartRequest.getRealPath("/"); // 根存储路径
			    subDir = "/resources/";//子存储路径

			    //创建文件夹
			    File fdir = new File(rootDir + relatDir);
			    if (!fdir.exists()) {
				fdir.mkdirs();
			    }
			    fileName = file.getOriginalFilename();//上传的文件名
			    String[] tmp = fileName.split("\\.");
			    int len = tmp.length;
			    fileName = new Date().getTime() + "." + tmp[len-1];//为上传的文件取一个唯一的文件名
			    tempFile = new File(fdir.getPath() + "/" + newFileName);
			    file.transferTo(tempFile);
			    realSavePath = fdir.getPath() + "\\" + newName;
			    realSavePath = realSavePath.replace("\\","\\\\");
			} catch (Exception e) {
			    e.printStackTrace();
			    rs = "{\"success\":\"false\"}";
			}

			if(rs == null){
			    rs = "{\"success\":\"true\","
				    + "\"path\":\"" + realSavePath
				    + "\",\"fileName\":\"" + fileName + "\"}";
			    System.out.print(rs);
			}
			response.setContentType("text/html;charset=utf-8");
			try {
			    response.getWriter().print(rs);
			} catch (IOException e) {
			    e.printStackTrace();
			}
		    }
		```		
