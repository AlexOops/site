import React from 'react';

const Feedback = () => {
    return (
        <div className="feedback">
            <h1 className="feedback__title">Связаться со мной</h1>
            <p className="feedback__text">Life is 10% what happens to you and 90% how you react to it. It does not
                matter how slowly you go as long as you do not stop. Confucius.</p>
            <form action="" className="feedback__form">
                <input type="text" placeholder="Имя" className="feedback__form__name"/>
                <input type="email" placeholder="Почта" className="feedback__form__email"/>
                <input type="text" className="feedback__form__text"/>
                <button type="submit" className="feedback__form__button button">отправить</button>
            </form>
        </div>
    );
};

export default Feedback;