import React from 'react';
import {Link} from "react-router-dom";

const Payment = () => {
    return (
        <div className="payment" id="paymentAnchorTag">
            <div className="payment__info">
                <h1 className="payment__info__title">Выбрать план</h1>
                <p className="payment__info__text">There are many reasons to get down and start to get depressed about
                    your situation. Learn how to
                    motivate yourself, yes you can!</p>
                <Link className="payment__info__contact" >связаться со мной</Link>
            </div>
            <div className="payment__plan">
                <img src="./images/standart.png" alt="#" width="100%"
                     />
                <h4 className="payment__plan__title">Стандарт</h4>
                <p className="payment__plan__price">Бесплатно</p>
                <div className="verticalLine"></div>
                <p className="payment__plan__text">Hypnosis Myth Reality Guidelines For Inkjet Cartridge Refill
                    Learn How To Motivate Yourself
                    Motivation In Life Start With A Baseline Yes You Can</p>
                <Link to="/forms">
                    <button className="button">Купить сейчас</button>
                </Link>
            </div>
            <div className="payment__plan">
                <img src="./images/individual.png" alt="#" width="100%"
                     />
                <h4 className="payment__plan__title">Стандарт</h4>
                <p className="payment__plan__price--active">1000 &#8381;</p>
                <div className="verticalLine"></div>
                <p className="payment__plan__text">Hypnosis Myth Reality Guidelines For Inkjet Cartridge Refill
                    Learn How To Motivate Yourself
                    Motivation In Life Start With A Baseline Yes You Can</p>
                <Link to="/protocols/1">
                    <button className="button">Купить сейчас</button>
                </Link>
            </div>
        </div>
    );
};

export default Payment;