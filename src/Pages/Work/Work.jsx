import React from 'react'
import Header from "../../Components/Header/Header.jsx";
import './work.css';

const Work = () => {
    return (
        <>
            <Header />
            <div className="work-container container">

                <h1>Work</h1>

                <section className="works">
                    <div className="work-card">
                        <div className="project-image-wrapper">
                            <img className="project-image" src="/Screenshot%202026-04-14%20at%206.16.15%E2%80%AFPM.png" alt=""/>
                        </div>

                        <h4 className="work-title">Workout Mood Tracker</h4>

                        <p>Workout Mood Tracker allows users to track notes about their mood in the context of their workout schedule. Rather than tracking specific statistics regarding the workouts themselves, the focus is placed on logging how you feel.</p>

                        <div className="tech-stack">
                            <span className="tech-stack__item">Node.js</span>
                            <span className="tech-stack__item">React</span>
                            <span className="tech-stack__item">PostgreSQL</span>
                            <span className="tech-stack__item">Prisma</span>
                            <span className="tech-stack__item">Tailwind CSS</span>
                        </div>
                    </div>

                </section>
            </div>
        </>
    )
}
export default Work
