$(function () {
    $('#tt').tree({
        url: 'Tree.json',
        animate: true, //节点在展开或折叠的时候显示动画效果
        onClick: function (node) { //当用户点击树形结构时，触发点击事件
            var title = node.text;
            //使用content属性，传入html，使用href，传入的是页面路径
            var url = node.attributes.url;
            addTab(title, url);
        },
    });

    //添加选项卡
    function addTab(title,url) {
        //使用exists方法来判断tab是否已经存在，如果存在则激活tab。如果不存在则调用add方法来添加一个新的tab面板
        if($('#tab').tabs('exists',title)){
            $('#tab').tabs('select',title);
        }
        //没有就添加
            /*
            * function addTab（title,url）
            * 里面传进来两个参数，节点的名称和url，url通过
            * content = '<iframe scrolling="auto" frameborder="0"  src="'+url+'" style="width:100%;height:100%;"></iframe>'
            * 得到content，即选项卡里面的内容*/
        else{
            var content = '<iframe scrolling="auto" frameborder="0"  src="'+url+'" style="width:100%;height:100%;"></iframe>';
            $('#tab').tabs('add',{
                title:title,
                content:content,
                closable:true
            });
        }
    }
});