// 实现进度条效果
// 开启
NProgress.start()
// 关闭（模拟延时）
setTimeout(function(){
    NProgress.done()
},500)

//项目中，当第一个AJAX发送时开启进度条，当所有AJAX请求完成时关闭
// $(document).ajaxStart(function(){
//     //开启
//     NProgress.start()
// })
// $(document).ajaxStop(function(){
//     //关闭
//     NProgress.done()
// })


//公共的效果
$(function(){
    //1.二级菜单栏的切换
    $(".lt_aside .catagory").click(function(){
        $(".lt_aside .level").stop().slideToggle()
    })
    //2.左侧菜单栏的切换
    $(".icon-menu").click(function(){
        $(".lt_aside").toggleClass("hidemenu")
        $(".lt_topbar").toggleClass("hidemenu")
        $(".lt_main").toggleClass("hidemenu")
    })
    //3.点击右侧退出按钮，显示模态框
    $(".icon-logout").click(function(){
        $("#logoutModal").modal("show")
    })
    //4.点击退出按钮，退到login页面
    $("#logoutBtn").click(function(){
        location.href="login.html"
        //项目中，要发送AJAX请求
        $.ajax({
            type:"get",
            url:"/employee/employeeLogout",
            dataType:"json",
            success(info){
                if(info.success){
                    // 退出成功，跳转到登录页
                    location.href="login.html"
                }
            }
        })
    })





})
