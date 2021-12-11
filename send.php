<?php
if (!empty($_POST['send'])){
	$con = mysqli_connect('127.0.0.1','root','123','comments');
	mysli_query($con,"insert into comments (name,email, text) values ('".$_POST['name']."',".$_POST['email'].",".$_POST['text'].");");
}
?>