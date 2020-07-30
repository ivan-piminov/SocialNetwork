import React from 'react';
import b from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={b.nav}>
            <div className={b.item}>
                <NavLink to='/profile' activeClassName={b.activeLink}>Profile</NavLink>
            </div>
            <div className={b.item}>
                <NavLink to='/users' activeClassName={b.activeLink}>Users</NavLink>
            </div>
            <div className={b.item}>
                <NavLink to='/dialogs' activeClassName={b.activeLink}> Messages</NavLink>
            </div>
            <div className={b.item}>
                <NavLink to='/news' activeClassName={b.activeLink}>News</NavLink>
            </div>
            <div className={b.item}>
                <NavLink to='/music' activeClassName={b.activeLink}>Music</NavLink>
            </div>
            <div className={`${b.item} ${b.settings}`}>
                <NavLink to='/settings' activeClassName={b.activeLink}>Settings</NavLink>
            </div>
        </nav>
    )
};
export default Navbar;