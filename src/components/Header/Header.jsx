import React from 'react';
import b from './Header.module.css'
import {NavLink} from "react-router-dom";
const Header = (props) => {
    return (
        <header className={b.header}>
            <img
                src='https://i.pinimg.com/736x/b5/8b/15/b58b15a4c3743b2ba76af65bca4df9b0--pumpkin-template-logo-sport.jpg'/>
                <div className={b.loginBlock}>
                    {props.isAuth ? props.login :
                    <NavLink to={'/login'}>

                    </NavLink>}
                </div>
        </header>
    )
};
export default Header;