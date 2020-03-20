<?php
$conn= new mysqli("localhost","zahidul_email","zahid22932044","zahidul_emailiinfo");
$conn->set_cahrset('uft8');
if (isset($_POST['submit'])){
$name = $_POST['contactName'];
$email = $_POST['email'];
$message = $_POST['comments'];

$select="INSERT INTO `contact_forminfo` VALUES('NULL','$name','$email','$message')";
$selectQuery=$conn->query($select);
if($selctQuery->affect_rows>0){
    echo "message sent";}
    else{
        echo "message not sent";
    
}


}
$conn->close();
?>