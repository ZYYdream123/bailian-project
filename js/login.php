<?php
    $usr=@$_POST["usr"];
    $pwd=@$_POST["pwd"];
    $conn = new mysqli("localhost","root","","bal");
    if($conn->connect_error){
        die("数据错误");
    }
    // echo "连接成功";
    $res = "SELECT username,psw FROM blist WHERE username='$usr'";
    $ress = $conn->query($res);
    if($ress->num_rows==0){
        die("此用户不存在");
    }
    while($rel = $ress->fetch_assoc()){
        if($rel["psw"]==$pwd){
            setcookie("tocken",time(),time() + 36000,"/");
            die(json_encode($rel));
        }
    }
    echo "密码错误";
   
?>