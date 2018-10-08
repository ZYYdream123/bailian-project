<?php
    $usr = @$_POST["usr"];
    $pwd = @$_POST["pwd"];
    if(!$usr||!$pwd){
        die("用户名不能为空");
    }
    $conn = new mysqli("localhost","root","","bal");
    while($conn -> connect_error){
        die(connect_error);
    }
    echo "连接成功";
    $ress = "SELECT username FROM blist WHERE username  = '$usr'";
    $resa = $conn->query($ress);
    if(!$resa){
        die("数据库错误");
    }
    if($resa->num_rows>=1){
        die("用户名不能重复");
    }
    $sql = "INSERT INTO blist (username ,psw) VALUES ('$usr', '$pwd')";
    $sqlq = $conn->query($sql);
    if(!$sqlq){
        die("数据错误");
    }
    $resmsg = array("msg"=>"success","stateCode"=>"1");
    echo json_encode($resmsg);
?>