$(function () {
    var index = 0;
    function addPanel(){
        index++;
        $('#tt').tabs('add',{
            title: 'Tab'+index,
            content: '<div style="padding:10px">Content'+index+'</div>',
            closable: true
        });
    }
    function removePanel(){
        var tab = $('#tt').tabs('getSelected');
        if (tab){
            var index = $('#tt').tabs('getTabIndex', tab);
            $('#tt').tabs('close', index);
        }
    }
})