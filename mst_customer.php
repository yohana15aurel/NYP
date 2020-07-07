<?php
//Filename   : mst_customer.php
//Date       : 2020-Jan-29
//Developer  : Seseorang yang mengagumi-Mu


$vusername = $_POST['p1'];
$vpassword = $_POST['p2'];

//configuration
$host = "localhost";
$db   = "db_mit";
$user = "root"; //SESUAIKAN DENGAN KONFIGURASI PADA LAPTOP MASING-MASING
$pwd  = "";     //SESUAIKAN DENGAN KONFIGURASI PADA LAPTOP MASING-MASING

//connection string
$conn = new mysqli($host,$user,$pwd,$db) or die ("Connection failed");

//queries
$sql  = "SELECT * ";
$sql .= "FROM mst_customer ";



$sql3 = "SELECT * ";
$sql3 .= "FROM mst_customer ";
$sql3 .= "WHERE username = '$vusername' ";
$sql3 .= " AND password = '$vpassword' ";

//query execution
$result = $conn->query($sql3) or die ($sql3);

//process result set
if ($result->num_rows > 0) {
   while($row = $result->fetch_assoc()) 
   {
     echo $row['namecustomer'] ." ". $row['address'] ."<br>" ;                               
   }
} 

?>