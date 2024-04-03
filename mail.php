<?php

if (isset($_POST['email']) && !empty($_POST['email'])) 
{
    $email = $_POST['email'];

    if (filter_var($email, FILTER_VALIDATE_EMAIL)) 
    {
        $name = $_POST['name'];
        $tel = $_POST['tel'];
        $message = $_POST['message'];

        $mailheader = "From: " . $name . " <" . $email . ">\r\n";
        $recipient = "info@horizonsolutionsarl.com";

        $subject = "Nouveau message de Horizon Solution "; // Sujeht du courriel

        $mail_sent = mail($recipient, $subject, $message, $mailheader);

        if ($mail_sent) 
        {
            // Si le courriel est envoyé avec succès, on retourne à la page d'accueil
            header("Location: index.html");
            exit; // Important pour empêcher toute exécution supplémentaire du script
        } 
        else 
        {
            // En cas d'erreur lors de l'envoi du courriel, on affiche un message d'erreur
            die("Erreur d'envoi du message");
            header("Location: contact.html");
        }
    } 
    else 
    {
        // Si l'adresse e-mail n'est pas valide, afficher un message d'erreur et rester sur la page de contact
        die("Invalid email address");
        header("Location: contact.html");
    }
}
?>