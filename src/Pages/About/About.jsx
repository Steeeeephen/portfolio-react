import React from 'react'
import './about.css';
import Navbar from "../../Components/Navbar/Navbar.jsx";
import Header from "../../Components/Header/Header.jsx";

const About = () => {

    let skills = ["HTML", "CSS", "JavaScript", "React", "Node.js", "PHP", "Laravel"];


    return (
        <div className="about-container">

            <Header />

            <h1 className="about-title">About</h1>


            <section className="about-section">
                <figure className="about-img">
                    <img src="/gandalf.jpg" alt="gandalf the grey cat"/>
                    <figcaption className="img-caption">Not me.</figcaption>
                </figure>


                <p className="about-description">
                    I'll be honest, I hate writing descriptions, but I do love building things for the web! I've always wondered why so much of the internet is difficult to navigate and seemingly built for robots. This led me to decide I should start building things myself! My core philosophy is to always build for the user.

                </p>
            </section>


            <section>

                { skills.map((skill)=>(
                    <h2>{skill}</h2>
                )) }

            </section>


        </div>
    )
}
export default About
