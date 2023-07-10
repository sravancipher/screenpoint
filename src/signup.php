<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "contact";
// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name=$_POST['name'];
  $mail=$_POST['email'];
  $pswd=$_POST['pswd'];
}
$sql="select * from user_cmnts"
$result=mysqli_query($conn, $sql)
if ($result){
  while(mysqli_fetch_assoc($result)){
    $name=$_POST['name'];
    $mail1=$_POST['mail'];
    $pswd1=$_POST['comment'];
    if($mail1==$mail){
      if($pswd==$pswd1){
        echo "user with this email already exists"
      }
    }
  }
 else{
  $sql = "INSERT INTO user_data (name,email,password)
  VALUES ('$name','$mail','$pswd')";
  if (mysqli_query($conn, $sql)) {
    echo "<h1>Welcome to screenpoint</h1>";
  } else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
  }
  
 }

mysqli_close($conn);
?>