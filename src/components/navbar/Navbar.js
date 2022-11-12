import React, {useState} from 'react';
import {Link} from "react-router-dom";
import * as svg from "../../images/svg_icons";
// import {NavHashLink} from "react-router-hash-link";
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const changeBackground = () => {
        if(window.scrollY >= 50){
            setNav(true);
        } else {
            setNav(false);
        }
    }
    window.addEventListener('scroll', changeBackground);
    return (
        <nav className={nav ? 'nav nav--active': 'nav'}>
            <div className="menu-first-wrap">
                {/*<Link to={'/'} className='logo'>*/}
                {/*    Logo*/}
                {/*</Link>*/}
                <input type="checkbox" className='menu-btn' id='menu-btn'/>
                <label htmlFor="menu-btn" className={'menu-icon'}>
                    <span className='nav-icon'></span>
                </label>
                <ul className='menu'>
                    <li className='menu__item'><Link to={"#"} className='menu__link menu__link--active'>Обо мне</Link></li>
                    <li className='menu__item'><Link to={"#"} className='menu__link'>Контакты</Link></li>
                    <li className='menu__item'><Link to={"/forms"} className='menu__link'>Бланки</Link></li>
                    <li className='menu__item'><HashLink
                        to={"/#paymentAnchorTag"} className='menu__link'
                        scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'center' })}
                    >Протоколы</HashLink></li>
                </ul>
            </div>
            <div className="social">
                <Link className='social-icons' to={'#'}>{svg.twitterIcon}</Link>
                <Link className='social-icons' to={'#'}>{svg.facebookIcon}</Link>
                <Link className='social-icons' to={'#'}>{svg.instagramIcon}</Link>
            </div>
            <div className="menu-auth-wrap">
                <input type="checkbox" className='menu-auth-btn' id='menu-auth-btn'/>
                <label className='menu-auth-icon' htmlFor='menu-auth-btn'>
                    <span className='nav-icon'>{svg.profileIcon}</span>
                </label>
                <ul className='menu-auth'>
                    <li className='menu-auth-item'><Link className='menu-auth-link' to="#" >Вход</Link></li>
                    <li className='menu-auth-item'><Link className='menu-auth-link' to="#">Регистрация</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;