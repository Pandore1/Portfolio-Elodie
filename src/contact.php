<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

$mail = new PHPMailer(true);
$name = htmlspecialchars($_POST['nameInput']);  // Récupère le champ "Nom et prénom"
$email = filter_var($_POST['emailInput'], FILTER_SANITIZE_EMAIL); // Récupère le champ "Email"
$object = htmlspecialchars($_POST['objectInput']);  // Récupère le champ "Téléphone"
$message = htmlspecialchars($_POST['messageInput']);  // Récupère le champ "Message"
try {
    $mail->SMTPDebug = 2;                                // Activer le débogage (désactivez en production)
    $mail->isSMTP();                                     // Utiliser SMTP
    $mail->Host       = 'smtp.gmail.com';                // Serveur SMTP de Gmail
    $mail->SMTPAuth   = true;                            // Activer l'authentification
    $mail->Username   = 'votre_adresse@gmail.com';       // Votre adresse Gmail
    $mail->Password   = 'votre_mot_de_passe_app';        // Mot de passe d'application
    $mail->SMTPSecure = 'tls';                           // Sécurisation TLS
    $mail->Port       = 587;                             // Port TLS

    // Destinataires
    $mail->setFrom('$email', '$name');
    $mail->addAddress('elodiepicard4@gmail.com');        // Email du destinataire

    // Contenu
    $mail->isHTML(true);                                 // Format HTML
    $mail->Subject = '$object';
    $mail->Body    = 
    '        <h1>Nouveau message de contact</h1>
            <p><strong>Nom :</strong> $name</p>
            <p><strong>Email :</strong> $email</p>
            <p><strong>Objet :</strong> $object</p>
            <p><strong>Message :</strong><br>$message</p> ';
    $mail->AltBody = "Nom : $name\nEmail : $email\nTéléphone : $object\nMessage : $message";

    $mail->send();
    echo "L'email a été envoyé avec succès!";
} catch (Exception $e) {
    echo "L'email n'a pas pu être envoyé. Erreur : {$mail->ErrorInfo}";
}

?>