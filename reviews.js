document.addEventListener('DOMContentLoaded', function() {
    const reviewForm = document.getElementById('reviewForm');
    
    if (reviewForm) {
        reviewForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Получаем данные формы
            const formData = new FormData(reviewForm);
            const reviewData = {
                name: formData.get('name'),
                rating: formData.get('rating'),
                review: formData.get('review'),
                date: new Date().toLocaleDateString()
            };
            
            // Создаем новую карточку отзыва
            const reviewCard = createReviewCard(reviewData);
            
            // Добавляем карточку в начало списка отзывов
            const reviewsList = document.querySelector('.reviews-list');
            reviewsList.insertBefore(reviewCard, reviewsList.querySelector('h2').nextSibling);
            
            // Очищаем форму
            reviewForm.reset();
            
            // Показываем сообщение об успехе
            alert('Спасибо за ваш отзыв!');
        });
    }
});

function createReviewCard(data) {
    const card = document.createElement('div');
    card.className = 'review-card';
    
    const stars = '★'.repeat(data.rating) + '☆'.repeat(5 - data.rating);
    
    card.innerHTML = `
        <div class="review-header">
            <h3>${data.name}</h3>
            <div class="stars">${stars}</div>
            <span class="review-date">${data.date}</span>
        </div>
        <p>${data.review}</p>
    `;
    
    return card;
} 