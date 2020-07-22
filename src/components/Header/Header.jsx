import React from 'react';
import b from './Header.module.css'
import {NavLink} from "react-router-dom";
import logo from '../../assets/images/logo_orange_discord_icon_134355.svg'
const Header = (props) => {
    return (
        <header className={b.header}>
            <img alt={'logo'} src={logo}/>
                <div className={b.loginBlock}>
                    {props.isAuth
                        ? <div className={b.nickName}>{props.login} - <button className={b.logButtton} onClick={props.logout}>Log out</button></div>
                        :<NavLink to={'/login'}><button className={b.logButtton}>Login</button> </NavLink>}
                </div>
        </header>
    )
};
export default Header;