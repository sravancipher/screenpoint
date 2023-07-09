<?php
  $servername="localhost";
  $username="root"
  $password=""
  $db="contact"
  $conn=mysqli_connect($servername,$username,$password,$db);
  if(!$conn){
    die ("connection failed")
  }
?>