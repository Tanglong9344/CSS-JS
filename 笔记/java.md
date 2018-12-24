# Java
+ 文件下载java处理--[文件上传](5.md)
```java
  @RequestMapping("downloadUrl")
    public void downloadUrl(HttpServletRequest request,HttpServletResponse response)throws IOException {
        String fileName = "";
        String filePath = "";
        
        request.setCharacterEncoding("utf-8");
        InputStream  in  = new FileInputStream(filePath);
        response.reset();//清除首部空白行
        // 1. 设置响应类型
        response.setContentType("application/force-download");//应用程序强制下载
        // 2. 设置响应头
        //解决中文乱码问题(根据http协议http header头要求其内容必须为iso8859-1编码)
        fileName = new String(fileName.getBytes("gbk"),"ISO8859-1");
        // 如果Header中没有定义则添加，如果已定义则用新的value覆盖原用value值
        // response.setHeader("Content-Disposition","attachment;filename=" + fileName);
        // 如果Header中没有定义则添加，如果已定义则保持原有value不改变
        response.addHeader("Content-Disposition","attachment;filename=" + fileName);
        // 以流的形式(任意格式)下载文件
        response.setContentType("application/octet-stream");
        response.setContentLength(in.available());
        // 3. 读取文件内容
        OutputStream out = response.getOutputStream();
        byte[] b = new byte[1024];
        int len = 0;
        while((len = in.read(b))!=-1){
            out.write(b,0,len);
        }
        out.flush();
        out.close();
        in.close();
    }
```
+ @ResponseBody
```java
 /*Spring中的"@ResponseBody"等价于一下代码*/
 try {
      response.setCharacterEncoding("utf-8");
      PrintWriter out = response.getWriter();
      out.write(rs);
      out.flush();
      out.close();
     } catch (Exception e) {
        e.printStackTrace();
    }
```
+ 获取服务器文件根路径
```java
    HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder
    				.getRequestAttributes())
    				.getRequest();
    String rootPath = request.getScheme() + "://" 
                      + request.getServerName() 
                      + ":" + request.getServerPort() 
                      + request.getContextPath();
```
+ request.getRealPath("/")的替代方法
```java
request.getSession().getServletContext().getRealPath(File.separator);
```
