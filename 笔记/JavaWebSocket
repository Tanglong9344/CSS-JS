import com.alibaba.fastjson.JSONObject;
import javax.websocket.*;
import javax.websocket.server.ServerEndpoint;
import java.io.IOException;

@ServerEndpoint("/websocket")
public class JavaWebSocket {
    private Session session;

    /** 建立连接 */
    @OnOpen
    public void onOpen(Session session){
        this.session = session;

        System.out.println("Open...");
    }

    /** 断开连接 */
    @OnClose
    public void onClose(){
        System.out.println("Close!");
    }

    /** 接收消息 */
    @OnMessage
    public void onMessage(String message) {
        System.out.println("Message From Client:\n" + message);

        // 发送消息
        JSONObject data = new JSONObject();
        data.put("name","Tanglong");
        data.put("address","Hangzhou China");
        data.put("description","An apple a day,keep the doctor away.");
        data.put("code",0);
        sendMessage(data.toString());
    }

    /** 错误处理 */
    @OnError
    public void onError(Throwable error){
        System.out.println("发生错误");
        error.printStackTrace();
    }

    /** 发送消息 */
    public void sendMessage(String message){
        try{
            session.getBasicRemote().sendText(message);
        } catch (IOException e){
            e.printStackTrace();
        }
    }
}
