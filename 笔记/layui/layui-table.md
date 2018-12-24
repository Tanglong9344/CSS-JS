# layui table
+ 为表格添加序号
```html
<script type="text/html" id="index">
    {{d.LAY_TABLE_INDEX+1}}
</script>
 ,cols: [[
         {field:'index',title:'序号',templet:'#index',align:'center',fixed:'left'}
        ]]
```
