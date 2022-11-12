import React from 'react';
import ResponsivePlayer from "../video/ResponsivePlayer";
import { HashLink } from 'react-router-hash-link';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <h2 className="header__tittle">Антипротокол</h2>

            <ResponsivePlayer className={"player-header"} url="https://www.youtube.com/embed/D4MdHQOILdw"/>

            <div className="header__btn-wrp">
                <HashLink
                    to={"/#paymentAnchorTag"} className='button'
                     scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'center' })}
                >Купить сейчас</HashLink>
                <Link to={"/forms"}>
                    <button className="button">Бесплатный контент</button>
                </Link>
            </div>
        </div>
    );
};

export default Header;