// import React from 'react';
import './home.css';
// import {NavLink} from "react-router";
import Navbar from "../../Components/Navbar/Navbar.jsx";

const Home = () => {
    return (
        <div className="home-container">
            <div className="home-container__title">
                <h1>Stephen Zalalas</h1>
                <h4>Full Stack Web Developer</h4>
            </div>

        <Navbar />
        </div>
    )
}
export default Home
