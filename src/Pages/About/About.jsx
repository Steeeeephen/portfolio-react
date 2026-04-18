import './about.css';
import Header from '../../Components/Header/Header.jsx';


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
            <figure className="about-img">
              <img src="/gandalf.jpg" alt="gandalf the grey cat" />
              <figcaption className="img-caption">Not me.</figcaption>
            </figure>

            <p className="about-description">
              I'll be honest, I hate writing descriptions, but I do love
              building things for the web! I've always wondered why so much of
              the internet is difficult to navigate and seemingly built for
              robots. This led me to decide I should start building things
              myself! My core philosophy is to always build for the user.
            </p>
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
      </div>
    </>
  );
};
export default About;
