$(function(){
    $(".obtn").on("click",function(){
    var username = $("#username").val();
    var password = $("#psw").val();
    $.ajax({
        "type": 'POST',
        "url": "../js/login.php",
        "data": `usr=${username}&pwd=${password}`,
        success: function(res){
            if(res!="密码错误"){
                location.href = "../index.html";
            }else{
                alert("密码错误")
            }
        }
    })
})
})