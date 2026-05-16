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

                    <li className="navbar-link">
                        <a href="https://www.linkedin.com/in/stephen-zalalas/" target="_blank" rel="noopener noreferrer">
                            <img src="/linkedin.svg" alt="linked in"/>
                        </a>
                    </li>

                    <li className="navbar-link">
                        <a href="https://github.com/Steeeeephen" target="_blank" rel="noopener noreferrer">
                            <img src="/github.svg" alt="github"/>
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    )
}
export default Navbar
