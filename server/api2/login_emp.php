<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Method:POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-type,
Access-Control-Allow-Headers, Authorization, X-Requested-With");

$con = mysqli_connect("localhost","root","");
mysqli_select_db($con,"reserve");

$data = json_decode(file_get_contents("php://input"));

$Email = $data->Email;
$Password = $data->Password;

$result = mysqli_query($con,"SELECT * from employee where Email='".$Email."'
 AND Password='".$Password."'");

 $nums = mysqli_num_rows($result);
 $rs=mysqli_fetch_array($result);

 if($nums>=1){
    http_response_code(200);
    $outp = "";

      $outp .='{"Email":' . $rs["Email"] . '",';
      $outp .='"FirstName":' . $rs["FirstName"] . '",';
      $outp .='"LastName":' . $rs["LastName"] . '",';
      $outp .='"Status":"200"}';

      echo $outp;
 }
 else{
    http_response_code(202);
 }
?>