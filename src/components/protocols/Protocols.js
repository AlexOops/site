import React from 'react';
import {Link, useParams} from "react-router-dom";
import ResponsivePlayer from "../video/ResponsivePlayer";
import {useSelector} from "react-redux";
import {protocolsSelector} from "../../redux/reducers/protocolsReducer/protocolsSelector";

const Protocols = () => {
    const protocolList = useSelector(protocolsSelector);

    const {id} = useParams();

    let protocol = protocolList.filter((item) => {
        if (!id) return true
        return item.id === Number(id)
    })

    return (
        <div className="protocols">
            <div className="protocols__content">
                <h1 className="protocols__title">Протоколы</h1>
                <ul className="protocols__list">
                    <li className="protocols__item">
                        <Link className="protocols__item__link" to={"/protocols/1"}>Вас остновил инспектор</Link>
                        <p className="protocols__item__subtitle">Данные об остановке</p>
                    </li>
                    <li className="protocols__item">
                        <Link className="protocols__item__link" to={"/protocols/2"}>До дачи пояснений инспектору</Link>
                        <p className="protocols__item__subtitle">Ходатайство об ознакомлении с материалами</p>
                    </li>
                    <li className="protocols__item">
                        <Link className="protocols__item__link" to={"/protocols/3"}>До дачи пояснений инспектору</Link>
                        <p className="protocols__item__subtitle">Ходатайство о рассмотрении материалов по месту
                            жительства</p>
                    </li>
                    <li className="protocols__item">
                        <Link className="protocols__item__link" to={"/protocols/4"}>До дачи пояснений инспектору</Link>
                        <p className="protocols__item__subtitle">Ходатайство о вызове защитника</p>
                    </li>
                    <li className="protocols__item">
                        <Link className="protocols__item__link" to={"/protocols/5"}>На стадии пояснений</Link>
                        <p className="protocols__item__subtitle">Объяснения</p>
                    </li>
                    <li className="protocols__item">
                        <Link className="protocols__item__link" to={"/protocols/6"}>На стадии пояснений</Link>
                        <p className="protocols__item__subtitle">Ходатайство об опросе свидетеля</p>
                    </li>
                    <li className="protocols__item">
                        <Link className="protocols__item__link" to={"/protocols/7"}>На стадии пояснений</Link>
                        <p className="protocols__item__subtitle">Ходатайство о признании деяния
                            малозначительным</p>
                    </li>
                    <li className="protocols__item">
                        <Link className="protocols__item__link" to={"/protocols/8"}>На стадии пояснений</Link>
                        <p className="protocols__item__subtitle">Заявление об отводе должностному лицу</p>
                    </li>
                    <li className="protocols__item">
                        <Link className="protocols__item__link" to={"/protocols/9"}>При ознакомлении с протоколом</Link>
                        <p className="protocols__item__subtitle">Проверяем содержание</p>
                    </li>
                    <li className="protocols__item">
                        <Link className="protocols__item__link" to={"/protocols/10"}>В суд или должностному лицу</Link>
                        <p className="protocols__item__subtitle">Жалоба</p>
                    </li>
                </ul>
            </div>

            {
                protocol.map((item) => {
                        return <div className="protocols__video" key={item.id}>
                            <ResponsivePlayer className={"player-protocol"} url={`${item.video}`}/>
                            <div className="description">
                                <h1 className="description__title">{item.title}</h1>
                                <p className="description__subtitle">{item.subtitle}</p>
                                <div className="description__text">
                                    {
                                        item.description.map((item) => {
                                            return (
                                                    <p >{item}</p>
                                            )
                                        })
                                    }
                                    <p className="description__note">{item.note}</p>
                                </div>
                            </div>
                        </div>
                    }
                )}
        </div>
    );
};

export default Protocols;