# 树插件
+ [API文档](http://www.treejs.cn/v3/api.php)
+ 基本操作
```js
var treeNodes;
var treeId="treeId";
$.fn.zTree.init($("#"+treeId),setting, treeNodes);//树的初始化 
usersTree = $.fn.zTree.getZTreeObj(id);//树对象
var nodeId=1;//树节点id
var nodes = preinstallReviewersTree.getNodesByParam("id",nodeId, null);//通过节点id获取节点
for (var i = 0; i < nodes.length; i++) {
    preinstallReviewersTree.checkNode(nodes[i], true, true); // 选中节点
}
```
