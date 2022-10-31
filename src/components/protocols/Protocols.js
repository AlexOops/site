import React from 'react';
import {Link} from "react-router-dom";
import ResponsivePlayer from "../video/ResponsivePlayer";

const Protocols = () => {
    return (
        <div className="protocols">
            <div className="protocols__content">
                <h1 className="protocols__title">Протоколы</h1>
                <ul className="protocols__list">
                    <li className="protocols__item">
                        <Link className="protocols__item__link" to={"#"}>Вас остновил инспектор</Link>
                        <p className="protocols__item__subtitle">Данные об остановке</p>
                    </li>
                    <li className="protocols__item">
                        <Link className="protocols__item__link" to={"#"}>До дачи пояснений инспектору</Link>
                        <p className="protocols__item__subtitle">Ходатайство об ознакомлении с материалами</p>
                    </li>
                    <li className="protocols__item">
                        <Link className="protocols__item__link" to={"#"}>До дачи пояснений инспектору</Link>
                        <p className="protocols__item__subtitle">Ходатайство о рассмотрении материалов по месту
                            жительства</p>
                    </li>
                    <li className="protocols__item">
                        <Link className="protocols__item__link" to={"#"}>До дачи пояснений инспектору</Link>
                        <p className="protocols__item__subtitle">Ходатайство о вызове защитника</p>
                    </li>
                    <li className="protocols__item">
                        <Link className="protocols__item__link" to={"#"}>На стадии пояснений</Link>
                        <p className="protocols__item__subtitle">Объяснения</p>
                    </li>
                    <li className="protocols__item">
                        <Link className="protocols__item__link" to={"#"}>На стадии пояснений</Link>
                        <p className="protocols__item__subtitle">Ходатайство об опросе свидетеля</p>
                    </li>
                    <li className="protocols__item">
                        <Link className="protocols__item__link" to={"#"}>На стадии пояснений</Link>
                        <p className="protocols__item__subtitle">Ходатайство о признании деяния малозначительным</p>
                    </li>
                    <li className="protocols__item">
                        <Link className="protocols__item__link" to={"#"}>На стадии пояснений</Link>
                        <p className="protocols__item__subtitle">Заявление об отводе должностному лицу</p>
                    </li>
                    <li className="protocols__item">
                        <Link className="protocols__item__link" to={"#"}>При ознакомлении с протоколом</Link>
                        <p className="protocols__item__subtitle">Проверяем содержание</p>
                    </li>
                    <li className="protocols__item">
                        <Link className="protocols__item__link" to={"#"}>В суд или должностному лицу</Link>
                        <p className="protocols__item__subtitle">Жалоба</p>
                    </li>
                </ul>
            </div>

            <div className="protocols__video">
                <ResponsivePlayer className={"player-protocol"} url="https://www.youtube.com/embed/D4MdHQOILdw"/>
                <div className="description">
                    <h1 className="description__title">Вас остновил инспектор ?</h1>
                    <ol className="description__list">
                        <p>Запишите:</p>
                        <li className="description__item">Должность, звание и ФИО инспектора</li>
                        <li className="description__item">Номер нагрудного знака</li>
                        <li className="description__item">Точное место остановки</li>
                        <li className="description__item">Дата и время остановки</li>
                        <li className="description__item">Номер удостоверения инспектора</li>
                        <li className="description__item">Видеозапись велась водителем/инспектором</li>
                        <li className="description__item">Причина и цель остановки</li>
                        <li className="description__item">Какое нарушение, статья ПДД/КоАП</li>
                        <li className="description__item">Свидетели/понятые и их контакты</li>
                        <p className="description__note"> При вручении Постановления заявляем: «оспариваю наличие события административного
                            правонарушения и назначенное мне административное наказание, составьте протокол».</p>
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default Protocols;