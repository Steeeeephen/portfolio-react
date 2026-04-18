import React from 'react'
import Header from "../../Components/Header/Header.jsx";
import './work.css';

const Work = () => {
    return (
        <>
            <Header />
            <div className="work-container container">

                <h1>My Projects</h1>

                <section className="works">
                    <div className="work-card">
                        <div className="project-image-wrapper">
                            <img className="project-image" src="/Screenshot%202026-04-14%20at%206.16.15%E2%80%AFPM.png" alt=""/>

                        </div>

                        <h4 className="work-title">Work 1</h4>

                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium atque debitis dolore eveniet nostrum ullam veritatis. Aliquam amet beatae ducimus explicabo fugit in, inventore quo, repellendus sequi sunt totam.</p>

                        <div className="tech-stack">
                            <span className="tech-stack__item">Node.js</span>
                            <span className="tech-stack__item">React</span>

                        </div>

                    </div>

                    <div className="work-card">
                        <div className="project-image-wrapper">
                            <img className="project-image" src="/Screenshot%202026-04-14%20at%206.16.15%E2%80%AFPM.png" alt=""/>

                        </div>

                        <h4 className="work-title">Work 1</h4>

                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium atque debitis dolore eveniet nostrum ullam veritatis. Aliquam amet beatae ducimus explicabo fugit in, inventore quo, repellendus sequi sunt totam.</p>

                    </div>
                </section>
            </div>
        </>
    )
}
export default Work
