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
 /*Spring中的"@ResponseBody"等价于以下代码*/
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
+ Java编解码
```java
public class EncoderDecoder {
    public static void main(String[] args) {
        String str = "I am 唐龙";
        try{
            //编码
            String afterEncoder = java.net.URLEncoder.encode(str,"utf-8");
            System.out.println("afterEncoder:" + afterEncoder);

            //解码
            String afterDecoder = java.net.URLDecoder.decode(afterEncoder,"utf-8");
            System.out.println("afterDecoder:" + afterDecoder);
        } catch (Exception e){
            e.printStackTrace();
        }
    }
}
```
+ Excel导入
```java
public String goodsImport(MultipartHttpServletRequest multipartRequest) throws IOException{
        CommonsMultipartFile file = (CommonsMultipartFile) multipartRequest.getFile("file");
        System.out.println("fileName:"+file.getOriginalFilename());
        HSSFWorkbook wb;
        InputStream is=null;
        try {
            is = file.getInputStream();
            POIFSFileSystem pSystem=new POIFSFileSystem(is);
            wb=new HSSFWorkbook(pSystem);
            if (wb != null) {
                Sheet sheet = wb.getSheetAt(0);
                for (int i=sheet.getFirstRowNum();i <=sheet.getLastRowNum();i++) {
                    Row row = sheet.getRow(i);
                    if(row==null)continue;
                    for (int j=row.getFirstCellNum();j<row.getLastCellNum();j++) {
                        String cellValue = row.getCell(j).getStringCellValue();
                        System.out.println("value:"+cellValue);
                    }
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if(is!=null){
                is.close();
            }
        }
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("msg", "导入");
        return jsonObject.toJSONString();
    }
```
+ springMVC 定时器
  + 配置SpringMVC配置文件
    + 头部添加
    ```xml
    xmlns:task="http://www.springframework.org/schema/task"
    ```
    + xsi:schemaLocation里添加
    ```xml
    http://www.springframework.org/schema/task
    http://www.springframework.org/schema/task/spring-task.xsd
    ```
    + 启动定时任务
    ```xml
    <task:annotation-driven/>
    ```
  + 创建定时任务类
  ```java
  import org.springframework.scheduling.annotation.Scheduled;
  import org.springframework.stereotype.Component;
  /** 定时任务类 */
  @Component
  public class TaskAction {
    @Scheduled(cron = "0 45 21 * * ? ")
    /** 每天21:45:00执行 */
    public void task(){
        System.out.println("this is a schedule task");
    }
  }
  ```
+ 获取昨天的日期
```java
Calendar c = Calendar.getInstance();
int date = c.get(Calendar.DATE);
c.set(Calendar.DATE, date-1);
Date yesterday = c.getTime();
```
+ PostConstruct注解
```
@PostConstruct 用于在依赖关系注入完成之后需要执行的方法上，以执行任何初始化(项目启动执行此方法)
```
+ Java get请求(urlStr=url+params)
```java
/** GET请求 */
    public static String httpRequestGet(String urlStr){
        StringBuilder sb = new StringBuilder();
        HttpURLConnection connection = null;
        BufferedReader reader = null;
        try{
            URL url = new URL(urlStr);
            connection = (HttpURLConnection)url.openConnection();
            connection.connect();
            reader = new BufferedReader(new InputStreamReader(connection.getInputStream(),"utf-8"));
            String lines;
            while((lines =reader.readLine())!=null){
                sb.append(lines);
            }
            System.out.println("result:"+sb.toString());
        } catch (IOException e){
            e.printStackTrace();
        } finally {
            if (connection !=null){connection.disconnect();}
            if (reader != null){
                try{
                    reader.close();
                } catch (IOException e){
                    e.printStackTrace();
                }
            }
        }
        return sb.toString();
    }
```
+ java post请求(参数格式:?a=1&b=2)
```java
 /** POST请求 */
    public static String httpRequestPOST(String urlStr,String params) {
        StringBuilder sb = new StringBuilder();
        HttpURLConnection connection = null;
        BufferedReader reader = null;
        DataOutputStream dataout = null;
        try {
            URL url = new URL(urlStr);
            // 1.将url以open方法返回的urlConnection
            connection = (HttpURLConnection) url.openConnection();
            // 2.设置连接输出流为true,默认false (post请求是以流的方式隐式的传递参数)
            connection.setDoOutput(true);
            // 3.设置连接输入流为true
            connection.setDoInput(true);
            // 4.设置请求方式为post
            connection.setRequestMethod("POST");
            // 5.post请求缓存设为false
            connection.setUseCaches(false);
            //6.设置请求头里面的各个属性,application/x-www-form-urlencoded
            // application/json:json对象
            connection.setRequestProperty("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
            //7.建立连接
            connection.connect();
            //8.输入输出流
            dataout = new DataOutputStream(connection.getOutputStream());
            //9.参数：json格式
            dataout.write(params.getBytes());
            dataout.flush();
            //10.返回结果
            reader = new BufferedReader(new InputStreamReader(connection.getInputStream(),"UTF-8"));
            String lines;
            while ((lines = reader.readLine()) != null) {
                sb.append(lines);
            }
            System.out.println("result:"+sb.toString());
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if (connection !=null){connection.disconnect();}
            try{
                if(dataout != null)dataout.close();
                if(reader != null)reader.close();
            } catch (IOException e){
                e.printStackTrace();
            }
        }
        return sb.toString();
    }
```
