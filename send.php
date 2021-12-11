<?php
if (!empty($_POST['send'])){
	$con = mysqli_connect('127.0.0.1','root','','comms');
	echo $_POST['text'];
}
?>