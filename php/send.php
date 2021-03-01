<?php
$name = $_POST['name'];
$mail = $_POST['email'];
$razon = $_POST['razon'];
$message = $_POST['message'];

$header = 'From: ' . $mail . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$message = "Mensaje enviado por: " . $name . " \r\n";
$message .= "Mail: " . $mail . " \r\n";
$message .= "Razón Social: " . $razon . " \r\n";
$message .= "Mensaje: " . $_POST['message'] . " \r\n\n\n";
$message .= "Enviado el: " . date('d/m/Y', time());

$para = 'soporte@buenbit.com';
$asunto = 'Buenbit Contacto';

mail($para, $asunto, utf8_decode($message), $header);
sleep(7);
header("Location:" . $_SERVER['HTTP_REFERER']);
?>