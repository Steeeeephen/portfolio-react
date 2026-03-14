import React from 'react'
import Navbar from "../Navbar/Navbar.jsx";
import {NavLink} from "react-router";
import './header.css'

const Header = () => {
    return (
        <header>
            <NavLink to="/"> - Stephen Zalalas - </NavLink>

            <Navbar />
        </header>
    )
}
export default Header
