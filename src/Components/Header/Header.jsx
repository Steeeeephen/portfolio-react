import React, {useState} from 'react'
import Navbar from "../Navbar/Navbar.jsx";
import {NavLink} from "react-router";
import './header.css'

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMobileMenu = () => setIsMenuOpen(prev => !prev);

    return (
        <>
            <div className="header-container">
                <header>
                    <NavLink to="/" className="home-link">Stephen Zalalas</NavLink>

                    <button>
                        <img onClick={handleMobileMenu} src="/burger-menu-svg.svg" className="burger-menu" alt=""/>
                    </button>

                    <Navbar/>
                </header>
            </div>


            <div className={`mobile-menu ${isMenuOpen ? 'open-menu' : ''}`}>
                <div className="mobile-menu__closebtn">
                        <svg onClick={handleMobileMenu}  width="50px" height="50px" viewBox="-0.5 0 25 25" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 21.32L21 3.32001"/>
                            <path d="M3 3.32001L21 21.32"/>
                        </svg>
                </div>

                <div className="mobile-menu__nav">
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/work">Work</NavLink>
                    <NavLink to="/contact">Contact</NavLink>

                    <div className="social-links">
                            <img src="/linkedin-mobile.svg" alt=""/>
                            <img src="/github-mobile.svg" alt=""/>
                    </div>
                </div>
            </div>


        </>
    );
}
export default Header
