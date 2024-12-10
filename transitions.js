document.addEventListener('DOMContentLoaded', function() {
    document.body.classList.add('fade-in');
    
    // Обработка всех внутренних ссылок
    document.querySelectorAll('a').forEach(link => {
        // Проверяем, что ссылка ведет на внутреннюю страницу
        if (link.href.includes(window.location.origin)) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const destination = this.href;
                
                // Добавляем анимацию исчезновения
                document.body.classList.add('fade-out');
                
                // Переходим на новую страницу после завершения анимации
                setTimeout(() => {
                    window.location.href = destination;
                }, 500);
            });
        }
    });
}); 