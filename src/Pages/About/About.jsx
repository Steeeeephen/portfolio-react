import './about.css';
import Header from '../../Components/Header/Header.jsx';
import ContactForm from "../../Components/ContactForm/ContactForm.jsx";
import React from "react";


const About = () => {
  let skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node.js',
    'PHP',
    'Laravel',
    'MySQL',
  ];

  return (
    <>
      <Header />
      <div className="about-container container">





          <section className="about-section">

              <h1 className="about-title">About</h1>




            <div className="about-section__content">


              <div className="about-description">
                <figure className="about-img">
                  <img src="/gandalf.jpg" alt="gandalf the grey cat" />
                  <figcaption className="img-caption"><em>Not me.</em></figcaption>
                </figure>

                <p >
                  Hi! I'm a full stack developer focused on building web apps with the user in mind. After working with several content management systems that often felt like they were designed for aliens, I decided to start building things myself.
                </p>
              </div>


              <br/>

              <p>When I'm not coding, I'm probably reading, cooking something new, or just being a nerd in general. My cat Gandalf often supervises my work but rarely offers constructive feedback.</p>

              <br/>

              <p>I'm looking for a team where I can keep growing as a developer; somewhere interested in giving their software a more human touch. I love solving problems and will always put emphasis on understanding how and why things work.</p>
            </div>
          </section>



          <section className="skill-section">
            <h2 className="skill-title">My Skills</h2>
            <div className="skill-grid">
              {skills.map((skill) => (
                  <span className="skill-grid__item">{skill}</span>
              ))}
            </div>
          </section>


          <section className="education-section">
            <h2>Education</h2>

            <div className="education-item">
              <p className="education-degree">Associate of Applied Science, Web Development</p>
              <p className="education-school">Harrisburg Area Community College</p>
              <p className="education-meta">May 2025 &nbsp;·&nbsp; 3.82 GPA &nbsp;·&nbsp; High Honors</p>
            </div>
          </section>

        </div>



    </>
  );
};
export default About;
