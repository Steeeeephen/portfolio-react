import React, {useEffect} from 'react'
import Header from "../../Components/Header/Header.jsx";
import './work.css';

const Work = () => {

    useEffect(() => {
        document.title = "My Work - stephenzalalas.dev"
    }, []);

    return (
        <>
            <Header/>
            <div className="work-container container">

                <h1>Work</h1>

                <section className="works">
                    <div className="work-card">
                        <div className="project-image-wrapper">
                            <img className="project-image" src="/workout-mood-tracker.png"
                                 alt=""/>
                        </div>

                        <h4 className="work-title">Workout Mood Tracker</h4>

                        <div className="project-links">
                            <a href="https://workout-mood-tracker-seven.vercel.app/" target="_blank"
                               rel="noopener noreferrer">Live Site</a>

                            <a href="https://github.com/Steeeeephen/workout-mood-tracker" target="_blank"
                               rel="noopener noreferrer">GitHub Repo</a>
                        </div>


                        <p>Workout Mood Tracker allows users to track notes about their mood in the context of their
                            workout schedule. Rather than tracking specific statistics regarding the workouts
                            themselves, the focus is placed on logging how you feel.</p>

                        <div className="tech-stack">
                            <span className="tech-stack__item">Node.js</span>
                            <span className="tech-stack__item">React</span>
                            <span className="tech-stack__item">PostgreSQL</span>
                            <span className="tech-stack__item">Prisma</span>
                            <span className="tech-stack__item">Tailwind CSS</span>
                        </div>
                    </div>

                    <hr/>


                    {/*    */}
                    <div className="work-card">
                        <div className="project-image-wrapper">
                            <img
                                className="project-image"
                                src="/invoice-customer-management.png"
                                alt=""/>
                        </div>

                        <h4 className="work-title">Invoice and Customer Management</h4>

                        <div className="project-links">
                            <a href="https://invoice-app-production-dfb8.up.railway.app/" target="_blank"
                               rel="noopener noreferrer">Live Site</a>

                            <a href="https://github.com/Steeeeephen/invoice-app" target="_blank"
                               rel="noopener noreferrer">GitHub Repo</a>
                        </div>

                        <p>A full-stack invoice management system built with Laravel and MySQL, featuring role-based
                            access control across admin and super_admin tiers, automated PDF generation via dompdf, and
                            transactional email delivery through Mailgun. Includes a Laravel Task Scheduler job for
                            automatically flagging overdue invoices.</p>

                        <div className="tech-stack">
                            <span className="tech-stack__item">Laravel</span>
                            <span className="tech-stack__item">PHP</span>
                            <span className="tech-stack__item">MySQL</span>
                            <span className="tech-stack__item">Eloquent ORM</span>
                            <span className="tech-stack__item">Tailwind CSS</span>
                            <span className="tech-stack__item">RBAC</span>
                            <span className="tech-stack__item">Mailgun</span>
                            <span className="tech-stack__item">dompdf</span>


                        </div>
                    </div>

                </section>
            </div>
        </>
    )
}
export default Work
