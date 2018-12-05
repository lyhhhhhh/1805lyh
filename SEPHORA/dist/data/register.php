<?php 	
header('content-type:text/html;charset="utf-8"');


$username = $_POST['username'];
$password = $_POST["password"];
echo $username;

// var_dump($_POST);
$link = mysql_connect("localhost","root","123456");

if(!$link){
	echo"数据库连接失败";
	exit;
}

mysql_set_charset('utf-8');
mysql_select_db("1805lyh");

$sql = "select * from users where username = '{$username}'";

$res = mysql_query($sql);
$row = mysql_fetch_assoc($res);

if($row){
	echo '用户名存在';
}
else{
	$sql = "insert into users(username,password) values('{$username}','{$password}');";
	$rem = mysql_query($sql);
	if($rem){
		echo "注册成功";
	}else{
		echo '注册失败';
	}
}

mysql_close($link);


 ?>