<?php

if(isset($_POST['name']) && isset($_POST['phone'])){

    $phone = htmlspecialchars($_POST['phone']);
    $name = htmlspecialchars($_POST['name']);

    $to      = 'info@23na8.ru';
    $subject = 'Сообщение с сайта "23 на 8" :: Новый заказ';
    $message = "
        Телефон: $phone \n
        Имя: $name \n
    ";
    $headers = 'From: info@23na8.ru' . "\r\n" .
        'Reply-To: info@23na8.ru' . "\r\n" .
        'X-Mailer: PHP/' . phpversion();

    if(mail($to, $subject, $message, $headers)){
        echo true;
    }
    else {
        echo false;
    }

}

?>