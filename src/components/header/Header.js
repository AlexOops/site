import React from 'react';
import ResponsivePlayer from "../video/ResponsivePlayer";

const Header = () => {
    return (
        <div className="header">
            <h2 className="header__tittle">Антипротокол</h2>
            <div className="header__btn-wrp">
                <button className="header__btn-buy button">Купить сейчас</button>
                <button className="header__btn-content button">Бесплатный контент</button>
            </div>
            <ResponsivePlayer className={"player-header"} url="https://www.youtube.com/embed/D4MdHQOILdw"/>
        </div>
    );
};

export default Header;