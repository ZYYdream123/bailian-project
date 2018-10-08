$(function(){
    var input = $("input");
    $("input").on("input",function(){
        // console.log(this)
        // console.log($(this).attr("id"))
        if($(this).attr("id")=="username"){
            // console.log(1)
            var name = $(this).val();
            reg = /^[0-9a-zA-Z]{6,20}$/i;
            if(reg.test(name)){
                // console.log(1)
                $(".text1").text("√").css({
                    color:"green"})
            }else{
                $(".text1").text("用户名只能由字母或字母和数字组合").css({
                    color:"#f00",
                    fontSize:"12px"
                })
            }
        }else if($(this).attr("id")=="psw"){
            var psw = $(this).val();
            var reg = /^[\#\.\-\_a-zA-Z0-9]{6,20}$/i;
            if(reg.test(psw)){
                $(".text2").text("√").css({
                    color:"green"})
            }else{
                 $(".text2").text("用户名只能由字母或字母和数字组合").css({
                    color:"#f00",
                    fontSize:"12px"
                })
            }
        }else if($(this).attr("id")=="pswcon"){
            var pswcon = $(this).val();
            // console.log($("#psw").val())
            if( $(this).val() == $("#psw").val()){
                $(".text3").text("√").css({
                    color:"green"})
            }else{
                $(".text3").text("请输入确认密码").css({
                    color:"#f00",
                    fontSize:"12px"
                })
            }
        }else if($(this).attr("id")=="phone"){
            var phone = $(this).val();
            var reg = /^[0-9]{11}$/;
            if(reg.test(phone)){
                $(".text4").text("√").css({
                    color:"green"})
            }else{
                $(".text4").text("请输入正确的手机号码").css({
                    color:"#f00",
                    fontSize:"12px"
                })
            }
        }else if($(this).attr("id")=="email"){
            var email = $(this).val();
            var reg = /^\w{6,20}@[a-z]{2,6}\.[a-z]{2,3}$/;
            if(reg.test(email)){
                $(".text7").text("√").css({
                    color:"green"})
            }else{
                $(".text7").text("请输入正确邮箱").css({
                    color:"#f00",
                    fontSize:"12px"
                })
            }
        }else{
            if($(this).attr("id")=="rand"){
                var rand = $(this).val();
                if(rand != ""){
                    $(".text5").text("√").css({
                        color:"green"})
                }else{
                    $(".text5").text("验证码失效，请重新获取").css({
                        color:"#f00",
                        fontSize:"12px"
                    })
                }
            }
        }
    })

    // $.ajax({
    //     "type":"post",
    //     "url":""
    // })
    $(".obtn").on("click",function(){
        // console.log(1)
        var username = $("#username").val();
        var password = $("#psw").val();
        $.ajax({
            "type": 'POST',
            "url": "../js/register.php",
            "data": `usr=${username}&pwd=${password}`,
            success:function(res){
                console.log(res)
                if(username!="" && password!=""){
                    location.href=`login?usr=${username}&pwd=${password}`
                }else{
                    alert("不能为空")
                }
            }
        })
    })
})