# 树插件
+ [API文档](http://www.treejs.cn/v3/api.php)
+ 基本操作
    + 初始化
    ```js
    var treeNodes;
    var treeId="treeId";
    var setting = {check: {enable:true, autoCheckTrigger:true, chkStyle:"checkbox"}};
    $.fn.zTree.init($("#"+treeId),setting, treeNodes);
    ```
    + 获取树对象
    ```js
    treeObj = $.fn.zTree.getZTreeObj(treeId);//树对象
    ```
    + 获取节点
    ```js
    var paramId=1;
    var nodes = preinstallReviewersTree.getNodesByParam("param",paramId, null);//通过节点参数获取节点

    var nodesChecked = treeObj.getCheckedNodes(true);//获取选中的节点
    var nodesUnChecked = treeObj.getCheckedNodes(false);//获取未选中的节点
    var allRootNodes = treeObj.getNodes();//获取所有根节点
    var allNodes = treeObj.transformToArray(treeObj.getNodes());//获取所有节点
    ```
    + 选中节点
    ```js
    for (var i = 0; i < nodes.length; i++) {
        treeObj.checkNode(nodes[i], true, true); // 选中节点
    }
    ```
    + 节点的显示与隐藏
    ```js
    $.fn.zTree.init($("#treeId"),setting, zNodes);
    treeObj = $.fn.zTree.getZTreeObj("treeId");
    hideNode(treeObj);
    showNode(treeObj);

    /** 隐藏节点 */
    function hideNode(treeObj) {
        var nodes = treeObj.transformToArray(treeObj.getNodes())
        for (var i = 0; i < nodes.length; i++) {
            if(nodes[i].typeId == 2){
                treeObj.hideNode(nodes[i])
            }
        }
    }

    /** 显示节点 */
    function showNode(treeObj) {
        var nodes = treeObj.getNodeByParam("isHidden", true);
        if (nodes) {
            treeObj.showNode(nodes);
        }
    }
    ```
    + 移除节点
    ```js
       /** 移除选中节点 */
    function removeNodes(treeObj) {
        var nodes = treeObj.getCheckedNodes(true);
        for (var i=0,l=nodes.length;i<l;i++) {
            treeObj.removeNode(nodes[i]);
        }
    }
    ```
