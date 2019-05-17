$(function(){
     var currentPage=1;  //当前页
     var  pageSize=5;    //每页的条数
     var currentId;
    //1.一进入页面发送ajax请求，模板引擎渲染数据
     Rander()
    function Rander(){
        // $.ajax({
        //     type:'get',
        //     url:"/user/queryUser",
        //     data:{
        //         page:currentPage,
        //         pageSize:pageSize
        //     },
        //     dataType:"json",
        //     success(info){
        //         // 模板引擎 template(模板id，对象数据)
        //         var htmlStr=template("tpl",info)
        //         // 引擎的数据,渲染tbody
        //         $("tbody").html(htmlStr)
        //             //分页初始化
        //             $("#paginator").bootstrapPaginator({
        //                 bootstrapMajorVersion:3,
        //                 currentPage:info.page,//当前页
        //                 totalPages:Math.ceil(info.count/info.size),//总页数
        //                 onPageClicked:function(event, originalEvent, type,page){
        //                     //为按钮绑定点击事件 page:当前点击的按钮值
        //                     console.log(page)
        //                     currentPage=page;
        //                     Rander();
        //                 }
        //             })
        //     }
        // })
        // 模板引擎 template(模板id，对象数据)
        var info={
            page:1,
            size:5,
            data:
                [  {
                    id: 1,
                    username: 'klt',
                    password: '456',
                    mobile: '13902060052',
                    isDelete: 1 },
                    {
                        id: 2,
                        username: 'zhoushugang',
                        password: '4QrcOUm6Wau+VuBX8g+IPg==',
                        mobile: '15102324243',
                        isDelete: 0 },
                    {
                        id: 3,
                        username: 'zhoushugang12',
                        password: '4QrcOUm6Wau+VuBX8g+IPg==',
                        mobile: '15102334243',
                        isDelete: 0 },
                    {
                        id: 4,
                        username: '阿锴',
                        password: '123456',
                        mobile: '15850208623',
                        isDelete: 1 },
                    {
                        id: 5,
                        username: 'aaa',
                        password: '456',
                        mobile: '13902060052',
                        isDelete: 1 },
                    {
                        id: 6,
                        username: 'www',
                        password: '4QrcOUm6Wau+VuBX8g+IPg==',
                        mobile: '15102324243',
                        isDelete: 0 },
                    {
                        id: 7,
                        username: 'cvsf',
                        password: '4QrcOUm6Wau+VuBX8g+IPg==',
                        mobile: '15102334243',
                        isDelete: 0 },
                    {
                        id: 8,
                        username: 'dfsfsfs',
                        password: '123456',
                        mobile: '15850208623',
                        isDelete: 1 },
                    {
                        id: 9,
                        username: 'klt',
                        password: '456',
                        mobile: '13902060052',
                        isDelete: 1 },
                    {
                        id: 10,
                        username: 'zhoushugang',
                        password: '4QrcOUm6Wau+VuBX8g+IPg==',
                        mobile: '15102324243',
                        isDelete: 0 },
                    {
                        id: 11,
                        username: 'zhoushugang12',
                        password: '4QrcOUm6Wau+VuBX8g+IPg==',
                        mobile: '15102334243',
                        isDelete: 0 },
                    {
                        id: 12,
                        username: '阿锴',
                        password: '123456',
                        mobile: '15850208623',
                        isDelete: 1 },
                    {
                        id: 13,
                        username: 'aaa',
                        password: '456',
                        mobile: '13902060052',
                        isDelete: 1 },
                    {
                        id: 14,
                        username: 'www',
                        password: '4QrcOUm6Wau+VuBX8g+IPg==',
                        mobile: '15102324243',
                        isDelete: 0 },
                    {
                        id: 15,
                        username: 'cvsf',
                        password: '4QrcOUm6Wau+VuBX8g+IPg==',
                        mobile: '15102334243',
                        isDelete: 0 },
                    {
                        id: 16,
                        username: 'dfsfsfs',
                        password: '123456',
                        mobile: '15850208623',
                        isDelete: 1 }],
            count: 16 }
        var htmlStr=template("tpl",info)
        // 引擎的数据,渲染tbody
        $("tbody").html(htmlStr)
        // 分页初始化
        $("#paginator").bootstrapPaginator({
            bootstrapMajorVersion:3,
            currentPage:info.page,//当前页
            totalPages:Math.ceil(info.count/info.size),//总页数
            onPageClicked:function(event, originalEvent, type,page){
                //为按钮绑定点击事件 page:当前点击的按钮值
                console.log(page)
                currentPage=page;
                Rander();
            }
        })
    }

    //2.点击启用和禁用按钮，显示模态框
    $("tbody").on("click",".btn",function(){
        $("#userModal").modal("show")
        //获取的id的值
        c=$(this).parent().data("id")
        console.log(currentId)
        //点击禁用按钮，将用户改为禁用状态,isDelete:0
        isDelete=$(this).hasClass("btn-danger")?0:1;
    })
    //点击确定按钮，发送ajax请求
    $("#submitBtn").on("click",function(){

        $.ajax({
            type:"post",
            url:"/user/updateUser",
            data:{
                id:currentId,
                isDelete:isDelete
            },
            dataType:"json",
            succcess(info){
                if(info.success){
                    //关闭模态框
                    $("#userModal").modal("hide")
                    Rander()
                }
            }
        })
    })

})