$(function () {
    $('#dg').datagrid({
        width:500,
        url:'content.json', //后台请求地址
        //fitColumns:true,
        columns:[[
           {field:'user',
               title:'User',
               width:100,
               checkbox:true,  //显示复选框
           },
           {field:'email',
               title:'Email',
               width:100
           },
           {field:'data',
               title:'Data',
               width:100,
           }
        ]],
        striped:true, //是否显示斑马线效果
        pagination:true,//分页工具栏
        //pageList:[5,10,20,30], //设置每页记录条数的列表
        //pageSize:10, //每页显示的记录条数，默认是10
        //beforePageText:'第',
        //afterPageText:'共{pages}页',
        //displayMsg:'当前显示{from}到{to},共{total}记录',
        //sortName:'data', //定义哪些列可以进行排序
        //sortOrder:'DESC', //定义列的排序顺序，只能是‘asx’或‘desc’
        //method:'post', //请求类型
        //rownumbers:true, //显示行号

        //selectOnCheck:true, //单机复选框则选择行
    });

    //toolbar的添加，保存，删除，取消功能
    $('#dg').edatagrid({
        //指定url表示获取用户列表信息list
        url: './data/crud/userAction.php?flag=list',
        //saveurl表示新增用户保存动作（支持批量保存）
        saveUrl: './data/crud/userAction.php?flag=add',
        //表示更新保存用户动作
        updateUrl: './data/crud/userAction.php?flag=modify',
        //表示删除用户动作
        destroyUrl: './data/crud/userAction.php?flag=delete'
    });




});