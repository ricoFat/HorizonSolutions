<?php

    $name = $_POST['name'];
    $email = $_POST['email'];
    $tel = $_POST['tel'];
    $message = $_POST['message'];

    $mailheader = "From:".$name."<".$email.">\r\n";

    $recipient = "info@horizonsolutionsarl.com";

    $mail_sent = mail($recipient, $tel, $message, $mailheader);

    if ($mail_sent) 
    {
        // Si le courriel est envoyé; on retourne à la page d'accueil
        header("Location: index.html");
    } 
    else 
    {
        // Sinon on envoie un message d'erreur et on reste sur la page contact
        die("Error sending the message");
        header("Location: contact.html");
    }
?>