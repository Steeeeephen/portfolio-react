import React from 'react';
import './home.css';
import {NavLink} from "react-router";

const Home = () => {
    return (
        <div className="home-container">
            <div className="home-container__title">
                <h1>Stephen Zalalas</h1>
                <h4>Full Stack Web Developer</h4>
            </div>

            <nav className="home-container__links">
                <ul className="nav-list">
                    <li className="home-container__link">
                        <NavLink to="about">About</NavLink>
                    </li>
                    <li className="home-container__link">
                        <NavLink to="projects">Work</NavLink>
                    </li>
                    <li className="home-container__link">
                        <NavLink to="contact">Contact</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default Home
