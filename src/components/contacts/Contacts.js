import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPaperPlane, faPhone} from "@fortawesome/free-solid-svg-icons";


const Contacts = () => {
    return (
        <div className="contacts">
            <h1 className="contacts__title">Контакты</h1>
            <ul className="contacts__list">
                <li className="contacts__list__item">
                    <FontAwesomeIcon icon={faPaperPlane} className="font-awesome"/>
                    <a href="tg://resolve?domain=dimacoda">@dimacoda</a>
                </li>
                <li className="contacts__list__item">
                    <FontAwesomeIcon icon={faPhone} className="font-awesome"/>
                    <a href="tel:+79997101782">+7(999)710-17-82</a>
                </li>
                <li className="contacts__list__item">
                    <FontAwesomeIcon icon={faEnvelope} className="font-awesome"/>
                    <a href="mailto:dimadima@mail.ru">dimadima@mil.ru</a>
                </li>
            </ul>
        </div>
    );
};

export default Contacts;