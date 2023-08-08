<?php
$db = new PDO('mysql:host=localhost;dbname=texts','root', '');
if(isset($_POST['submit'])){
  $text = $_POST['textarea'];
  $connection = mysqli_connect("localhost", "root", "", "texts");
  $query = "INSERT INTO records (recorded) VALUES ('$text')";
  $result = mysqli_query($connection, $query);
}
?>
























