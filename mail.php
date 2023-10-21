<?php

    $name = $_POST['name'];
    $email = $_POST['email'];
    $tel = $_POST['tel'];
    $message = $_POST['message'];

    $mailheader = "From:".$name."<".$email.">\r\n";

    $recipient = "info@horizonsolutionsarl.com";

    $mail_sent = mail($recipient, $tel, $message, $mailheader);

    if ($mail_sent) {
        // If the mail was sent successfully, redirect to thankyou.html
        header("Location: index.html");
        
    } else {
        // If there was an error sending the mail, display an error message
        die("Error sending the message");
    }
?>