<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // CAPTCHA
    $captcha = $_POST['g-recaptcha-response'];

    if (!$captcha) {
        echo "Veuillez réaliser le captcha.";
        exit;
    }

    $secretKey = "";
    $response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$secretKey&response=$captcha");
    $responseKeys = json_decode($response, true);

    if (intval($responseKeys["success"]) !== 1) {
        echo "Échec de la vérification du captcha.";
        exit;
    }

    // Envoi MAIL
    $mail = new PHPMailer(true);
    $name = htmlspecialchars($_POST['nameInput']);  // Récupère le champ "Nom et prénom"
    $email = filter_var($_POST['emailInput'], FILTER_SANITIZE_EMAIL); // Récupère le champ "Email"
    $object = htmlspecialchars($_POST['objectInput']);  // Récupère le champ "Téléphone"
    $message = htmlspecialchars($_POST['messageInput']);  // Récupère le champ "Message"

    $to = 'elodiepicard4@gmail.com';
    $subject = 'Nouveau message de ' . $name;
    $body = "Nom: $name\n";
    $body .= "Email: $email\n";
    $body .= "Sujet: $object\n";
    $body .= "Demande:\n$message";

    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               'X-Mailer: PHP/' . phpversion();

    if (mail($to, $object, $body, $headers)) {
        echo "Youppi";
    } else {
        echo "Fuck you";
    }
}

?>