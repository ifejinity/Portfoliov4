<?php
     use PHPMailer\PHPMailer\PHPMailer;
     use PHPMailer\PHPMailer\Exception;
     require './PHPMailer/src/Exception.php';
     require './PHPMailer/src/PHPMailer.php';
     require './PHPMailer/src/SMTP.php';

    $name = $_POST["fname"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    $mail = new PHPMailer(true);
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'mrlonzanida08@gmail.com';
    $mail->Password = '';
    $mail->Port = 465;
    $mail->SMTPSecure = 'ssl';
    $mail->isHTML(true);
    $mail->setFrom($email);
    $mail->addAddress("mrlonzanida08@gmail.com", "Jeffrey Lonzanida");
    $mail->Subject = ($name . " " . "sent you a message!");
    $mail->Body = 
    "
        <div style=''>
            <p>Email: $email</p>
            <p>Message: $message</p>
        </div>
    ";
    $mail->send();
?>
