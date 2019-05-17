$(function(){
    var currentPage=1;  //当前页
    var pageSize=5;     //每页多少条

    // rander();
    // var rander=function(){
    //     $.ajax({
    //         type:"get",
    //         url:"/category/queryTopCategoryPaging",
    //         data:{
    //             page:currentPage,
    //             pageSize:pageSize
    //         },
    //         dataType:"json",
    //         success(info){
    //             console.log(info)
    //             //模板引擎渲染数据info
    //             var htmlStr=template("tpl",info)
    //             //分页
    //             $("#paginator").bootstrapPaginator({
    //                 //版本号
    //                 bootstrapMajorVersion:3,
    //                 //当前页
    //                 currentPage:info.Page,
    //                 //总页数
    //                 totalPages:Math.ceil(info,total/info.size),
    //                 //给页码添加点击事件
    //                 // event 插件包装过的对象
    //                 // originalEvent  是原始的事件对象
    //                 // type  指代当前的页码类型  page是普通页码,first,last,next,prev
    //                 // page   指代当前点击按钮对应的页码
    //                 onPageClicked:function(event, originalEvent, type,page){
    //                     //更新当前页
    //                     currentPage=page;
    //                     //重新加载页面
    //                     rander();
    //                 }
    //
    //             })
    //         }
    //     })
    // }

    //2.点击添加分类按钮，显示添加模态框
    $("#addBtn").click(function(){
        $("#addModal").modal("show")
    })
    //3.通过表单验证插件，实现表单的校验
    $("#form").bootstrapValidator({
        //表单校验图标
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',            //校验成功
            invalid: 'glyphicon glyphicon-remove',     //校验失败
            validating: 'glyphicon glyphicon-refresh' //校验中
        },
        //表单字段校验
        fields:{
            categoryName:{
                validators:{
                    //非空
                    notEmpty:{
                        message:"请输入一级分类名称"
                    }
                }
            }
        }
    })
    //4.注册表单验证成功事假，阻止检验成功时的默认提交，通过AJAX提交
    $("#form").on("success.form.bv",function(e){
         e.preventDefault();
         $.ajax({
             type:"post",
             url:"/category/addTopCategory",
             data:$("#form").serialize(),
             dataType:"json",
             success(info){
                 //退出模态框
                 $("#addModal").modal("hide")
                 //重新渲染页面
                 currentPage=1;
                 rander();
                 //重置表单中的数据和校验规则
                 $("#form").data("bootstapValidator").resetForm(true);
             }
         })
    })
})