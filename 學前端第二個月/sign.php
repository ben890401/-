<?php

// $servername = "localhost";
// $username = "root";
// $password = "";
// $dbname = "login";

// $conn = new mysqli($servername, $username, $password, $dbname);

// if ($conn->connect_error) {
//     die("連線失敗：" . $conn->connect_error);
// }



// if($_SERVER["REQUEST_METHOD"]== "POST"){
//     $number = $_POST["number"];
//     $password = $_POST["password"];
// }

// $number = $conn->real_escape_string($number);
// $password = $conn->real_escape_string($password);

// $check_sql = "SELECT * FROM team Where number = '$number'";
// $result = $conn -> query($check_sql);


// if($result -> num_rows > 0){
//     echo"帳號已被使用請更換";
// }else{
//     $sql = "INSERT INTO team (number, password, email) VALUES ('$number', '$password')";
// }


// if ($conn->query($sql) === TRUE) {
//     echo "註冊成功";
// } else {
//     echo "錯誤：" . $conn->error;
// }

// $conn->close();
$conn = new mysqli("localhost", "root", "", "userpassword");

if ($conn->connect_error) {
    die("連線失敗：" . $conn->connect_error);
} else {
    echo "資料庫連線成功！";
}
?>