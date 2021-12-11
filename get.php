<?php
$con = mysqli_connect('127.0.0.1','root','123','comments');
$comments = mysqli_query($con,"select * from comments");
header("Content-Type: application/json");
$json = json_encode($comments);
echo $json;