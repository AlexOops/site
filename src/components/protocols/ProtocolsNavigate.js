import React from 'react';
import {Link} from "react-router-dom";

const ProtocolsNavigate = ({protocol}) => {
    return (
        <ul className="protocols__list">
            {protocol.map((item) => <li key={item.id} className="protocols__item">
                <Link className="protocols__item__link" to={"/protocols/" + item.id}>{item.title}</Link>
                <p className="protocols__item__subtitle">{item.subtitle}</p>
            </li>)}
        </ul>
    );
};
export default ProtocolsNavigate;