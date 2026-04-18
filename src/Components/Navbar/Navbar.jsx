import React from 'react'
import {NavLink} from "react-router";
import './navbar.css';
const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <ul className="nav-list">
                    <li className="navbar-link">
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li className="navbar-link">
                        <NavLink to="/work">Work</NavLink>
                    </li>
                    <li className="navbar-link">
                        <NavLink to="/contact">Contact</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}
export default Navbar
