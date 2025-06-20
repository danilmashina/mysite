// Инициализация EmailJS (обязательно вставьте новый public key с префиксом public_)
(function() {
    emailjs.init({
        publicKey: "oxFtwMgg9_c65K65Z", // ← ВСТАВЬТЕ СЮДА ВАШ НОВЫЙ PUBLIC KEY
    });
})();

// Обработка отправки формы
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Получаем значения полей
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Проверяем заполнение всех полей
    if (!name || !email || !subject || !message) {
        alert('Пожалуйста, заполните все поля формы');
        return;
    }

    // Проверяем валидность email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Пожалуйста, введите корректный email адрес');
        return;
    }

    // Показываем индикатор загрузки
    const submitButton = this.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.disabled = true;
    submitButton.textContent = 'Отправка...';

    // Параметры для отправки
    const templateParams = {
        from_name: name,
        from_email: email,
        subject: subject,
        message: message,
        to_email: 'goblen16@mail.ru'
    };

    // Отправляем email
    emailjs.send("service_vr1uoqu", "template_odg9b1k", templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Сообщение успешно отправлено!');
            // Очищаем форму
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('subject').value = '';
            document.getElementById('message').value = '';
        })
        .catch(function(error) {
            console.error('FAILED...', error);
            alert('Произошла ошибка при отправке сообщения. Пожалуйста, попробуйте позже.');
        })
        .finally(function() {
            // Восстанавливаем кнопку
            submitButton.disabled = false;
            submitButton.textContent = originalText;
        });
});
