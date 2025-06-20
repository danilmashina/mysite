// Инициализация EmailJS
(function() {
    const emailjsPublicKey = "KcMoRmKpH4vkVR1NR"; // Убедитесь, что это ваш текущий публичный ключ из EmailJS
    console.log("EmailJS Public Key being used:", emailjsPublicKey);
    emailjs.init({
        publicKey: emailjsPublicKey,
        limitRate: true
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
    emailjs.send('service_jw65785', 'template_vkxop08', templateParams)
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