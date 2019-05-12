// 实现进度条效果
// 开启
NProgress.start()
// 关闭（模拟延时）
setTimeout(function(){
    NProgress.done()
},2000)

//项目中，当第一个AJAX发送时开启进度条，当所有AJAX请求完成时关闭
// $(document).ajaxStart(function(){
//     //开启
//     NProgress.start()
// })
// $(document).ajaxStop(function(){
//     //关闭
//     NProgress.done()
// })