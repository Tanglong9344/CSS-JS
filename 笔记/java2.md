# Java
### 1.ApplicationContext
  + 代码
  ```java
  import org.springframework.beans.BeansException;
  import org.springframework.context.ApplicationContext;
  import org.springframework.context.ApplicationContextAware;
  import org.springframework.stereotype.Component;

  /** 获取ApplicationContext */
  @Component
  public class ApplicationContextHelper implements ApplicationContextAware {
      private static ApplicationContext appCtx;

      @Override
      public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
          appCtx = applicationContext;
      }

      public static Object getBean(String beanName) {
          return appCtx.getBean(beanName);
      }
  }
  ```
  + 用法
  ```java
  ObjectName objectName = (ObjectName)ApplicationContextHelper.getBean("beanName");
  ```
### 2. Mybatis TransactionManager
  + 代码
  ```java
  import org.springframework.jdbc.datasource.DataSourceTransactionManager;
  import org.springframework.transaction.TransactionDefinition;
  import org.springframework.transaction.TransactionStatus;
  import org.springframework.transaction.support.DefaultTransactionDefinition;

  /** 事务管理 */
  public class TransactionManager {
      private static DataSourceTransactionManager transactionManager;

      //初始化
      static {initTransactionManager();}

      /** 获取事务管理器DataSourceTransactionManager(上下文获取) */
      private static void initTransactionManager(){
          transactionManager = (DataSourceTransactionManager)ApplicationContextHelper.getBean("beanName");
      }

      /** 获取事务状态 */
      public static TransactionStatus getTransactionStatus(){
          DefaultTransactionDefinition def = new DefaultTransactionDefinition();
          def.setPropagationBehavior(TransactionDefinition.PROPAGATION_REQUIRED); //默认事物隔离级别
          TransactionStatus status = transactionManager.getTransaction(def); //获得事务状态
          return status ;
      }

      /** 事务提交 */
      public static void commit(TransactionStatus status) {
          transactionManager.commit(status);
      }

      /** 事务回滚 */
      public static void rollback(TransactionStatus status) {
          transactionManager.rollback(status);
      }
  1}
  ```
  + 用法
  ```java
  //事务开启
  TransactionStatus ts = TransactionManager.getTransactionStatus();
  try {
      ...
      do something
      ...
      //事务提交
      TransactionManager.commit(ts);
  } catch (Exception e){
      //事务回滚TransactionManager.rollback(ts);
  }
  ```
