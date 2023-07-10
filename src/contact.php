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
  $mail=$_POST['mail'];
  $cmnt=$_POST['comment'];
}
$sql = "INSERT INTO user_cmnts (flname, mail, comment)
VALUES ('$name','$mail','$cmnt')";
if (mysqli_query($conn, $sql)) {
  echo "<h3>username: ".$name."</h3>";
  echo "<h3>email: ".$mail."</h3>";
  echo "<h3>comment: ".$cmnt."</h3>";
} else {
  echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);
?>