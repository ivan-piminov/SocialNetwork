import React from 'react';
import b from './Navbar.module.css'
import {NavLink} from "react-router-dom";
const Navbar = () => {
    return (
        <nav className={b.nav}>
            <div className={b.item}>
                <NavLink to='/Profile' activeClassName={b.activeLink}>Profile</NavLink>
            </div>
            <div className={b.item}>
                <NavLink to='/Users' activeClassName={b.activeLink}>Users</NavLink>
            </div>
            <div className={b.item}>
                <NavLink to='/Dialogs' activeClassName={b.activeLink}> Messages</NavLink>
            </div>
            <div className={b.item}>
                <NavLink to="/News"activeClassName={b.activeLink}>News</NavLink>
            </div>
            <div className={b.item}>
                <NavLink to='/Music' activeClassName={b.activeLink}>Music</NavLink>
            </div>
            <div className={b.item}>
                <NavLink to='/Settings' activeClassName={b.activeLink}>Settings</NavLink>
            </div>
        </nav>
    )
}
export default Navbar;