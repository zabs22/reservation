<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Method:POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-type,
Access-Control-Allow-Headers, Authorization, X-Requested-With");

$data = json_decode(file_get_contents("php://input"));

$Username = $data->Username;
$Email = $data->Email;
$Country = $data->Country;
$Img = $data->Img;
$Phone = $data->Phone;
$Password = $data->Password;
$isAdmin = $data->isAdmin;

// include 'DbConnect.php';
// $objDb = new DbConnect;
// $conn = $objDb->connect();

$con = mysqli_connect("localhost","root","");
mysqli_select_db($con,"reserve");

if($Username && $Email && $Phone && $Password){
$sql = "insert into user (
    Username,
    Email,
    Counrty,
    Img,
    City,
    Phone,
    Password,
    IsAdmin
    ) 
    Value (
    '$Username',
    '$Email',
    '$Counrty',
    '$Img',
    '$City',
    '$Phone',
    '$Password',
    '$IsAdmin'
    )";

    $result = mysqli_query($con,$sql);

    if($result){
        $response['data']=array(
            'status' => 'valid'
        );
        echo json_encode($response);
    }
    else{
        $response['data']=array(
            'status'=>'invalid'
        );
        echo json_encode($response);
    }
}
?>