<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$email = $_POST['email'];



if ($name || $phone || $message) {
  

// Формирование самого письма
$title = "Новое обращение в Best Tour plan";
$body = "
<h2>Новое письмо</h2>
<b>Name:</b> $name<br>
<b>Phone:</b> $phone<br><br>
<b>Message:</b><br>$message
";


// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
  //  $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.mail.ru'; // SMTP сервера вашей почты
    $mail->Username   = 'killer240190@mail.ru'; // Логин на почте
    $mail->Password   = 'rostislove2014'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('killer240190@mail.ru', 'Юра Алдуненко'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('nastya-borodina-93@mail.ru');  
  
// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата

header('Location:thankyou.html');

}

if ($email) {
    $title = "Новое обращение Best Tour Plan";
$body = "
<h2>Новое обращение</h2>
<b>Mail:</b> $email<br>
";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    //$mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

   // Настройки вашей почты
    $mail->Host       = 'smtp.mailru'; // SMTP сервера вашей почты
    $mail->Username   = 'yuri-aldunenko.ru@yuri-aldunenko.ru'; // Логин на почте
    $mail->Password   = 'rostislove2014'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('yuri-aldunenko.ru@yuri-aldunenko.ru', 'Юра Алдуненко'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('killer240190@mail.ru');  

    // Отправка сообщения
    $mail->isHTML(true);
    $mail->Subject = $title;
    $mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
header('Location: thankyouemail.html');
}

