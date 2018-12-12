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

$sql2 = "select * from users where password = '{$password}'";

$rem = mysql_query($sql2);
$rom = mysql_fetch_assoc($rem);

if($row && $rom){
	echo '登陆成功';
}
else{
	echo '用户名或密码错误';
}

mysql_close($link);


 ?>