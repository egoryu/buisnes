import React, { useState } from 'react';

export function MainPage() {
    const [title, setTitle] = useState('');
    const [review, setReview] = useState('');

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleReviewChange = (event) => {
        setReview(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Ваша логика для отправки отзыва
        console.log('Title:', title);
        console.log('Review:', review);
        // Сброс формы после отправки
        setTitle('');
        setReview('');
    };

    return (
        <div className={"mainPage"}>
            <h2>Информация о сайте</h2>

            <p>Добро пожаловать на наш сайт! Сайт был создан благодаря Никитину Егору и Кузьмину Илье. Оставьте отзыв, чтобы мы могли улучшить наш сервис.</p>
            <form onSubmit={handleSubmit}>
                <div className={"input"}>
                    <label htmlFor="title">Заголовок:</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={handleTitleChange}
                    />
                </div>
                <div className={"input"}>
                    <label htmlFor="review">Отзыв:</label>
                    <textarea
                        id="review"
                        value={review}
                        onChange={handleReviewChange}
                    />
                </div>
                <button type="submit">Отправить</button>
            </form>
        </div>
    );
}
