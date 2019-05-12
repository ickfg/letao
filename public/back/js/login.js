$(function(){
     $("#form").bootstrapValidator({
         //表单校验图标
         feedbackIcons: {
             valid: 'glyphicon glyphicon-ok',            //校验成功
             invalid: 'glyphicon glyphicon-remove',     //校验失败
             validating: 'glyphicon glyphicon-refresh' //校验中
         },
         //实现表单验证功能，表单初始化
         fields:{
             //用户名校验
             username:{
                 validators:{
                     // 非空
                     notEmpty:{
                         message:"用户名不能为空"
                     },
                     // 长度2-6位
                     stringLength:{
                         min:2,
                         max:6,
                         message:"用户名长度2-6位"
                     },
                     callback:{
                         message:"用户名错误"
                     }
                 }
             },
             // 密码校验
             password:{
                 validators:{
                     //非空
                     notEmpty:{
                         message:"密码不能为空"
                     },
                     stringLength:{
                         min:6,
                         max:8,
                         message:"密码长度6-8位"
                     },
                     callback:{
                         message:"密码错误"
                     }
                 }
             }
         }
     })
    /*通过submit按钮提交表单叫，让表单进行校验
         1）校验通过，默认会提交，我们需要阻止默认提交，通过AJAX的方式进行提交
         2）校验失败，validator插件本身会阻止提交
    */
     $("#form").on("success.form.bv",function(e){
         e.preventDefault();
         $.ajax({
             type:"post",
             url:"/employee/employeeLogin",
             data:$("#form").serialize(),
             dataType:"json",
             success(info){
                 if(info.success){
                     //登录成功，跳转到首页
                     location.href="index.html"
                 }
                 if(info.error===1000){
                     $("#form").data("bootstrapValidator").updateStatus("username","INVALID","callback")
                 }
                 if(info.error===1001){
                     $("#form").data("bootstrapValidator").updateStatus("password","INVALID","callback")
                 }
             }
         })
     })
    /*
      解决重置BUG问题
      resetForm(boolean)
       1.true        重置表单内容和验证状态
       2.false       只重置验证状态
    */
    $("[type='reset']").click(function(){
        $("#form").data("bootstrapValidator").resetForm(true)
    })
})