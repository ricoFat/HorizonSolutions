<?php

    $name = $_POST['name'];
    $email = $_POST['email'];
    $tel = $_POST['tel'];
    $message = $_POST['message'];

    $mailheader = "From:".$name."<".$email.">\r\n";

    $recipient = "accram2005@hotmail.com";

    mail($recipient,$tel , $message, $mailheader)
    or die("error");

    echo"message sent ";

?>