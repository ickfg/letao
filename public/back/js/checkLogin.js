// 设置登录拦截，判断管理员是否登录
//    如果当前用户没登录，需要拦截到登录页
$.ajax({
    type:"get",
    url:"/employee/checkRootLogin",
    dataType:"json",
    succcess(info){
        if(info.error===400){
            // 未登录，拦截到登录页
            location.href="login.html"
        }
        if(info.success){
           console.log("用户已经登录")
        }
    }
})