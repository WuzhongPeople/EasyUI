$(function () {
    //编辑器
    var editor; //初始化编辑器
    KindEditor.ready(function (K) {
        editor = K.create('textarea[name="content"]', { //创建编辑器
            allowFileManager: true,
            resizeType: 1, //固定大小，2可以拖动改变宽度和高度，1只能改变高度，0不能拖动不能改变高度
            allowPreviewEmoticons: false,
            items: [ //创建工具栏显示的功能
                'fontname', 'fontsize', '|', 'forecolor', 'hilitecolor', 'bold', 'italic', 'underline',
                'removeformat', '|', 'justifyleft', 'justifycenter', 'justifyright', 'insertorderedlist',
                'insertunorderedlist', '|', 'emoticons', 'image', 'link']
        });
    });
});