<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Получаем данные из формы
    $name = htmlspecialchars(trim($_POST['name']));
    $phone = htmlspecialchars(trim($_POST['phone']));

    // Задаём email и заголовки
    $to = "youremail@example.com"; // Замените на ваш email
    $subject = "Новая заявка с сайта";
    $message = "Имя: $name\nТелефон: $phone";
    $headers = "From: no-reply@example.com\r\n"; // Замените на ваш email для "От"
    $headers .= "Reply-To: $to\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Отправляем письмо
    if (mail($to, $subject, $message, $headers)) {
        echo "Сообщение успешно отправлено.";
    } else {
        echo "Ошибка при отправке сообщения.";
    }
} else {
    echo "Неверный метод запроса.";
}
?>
