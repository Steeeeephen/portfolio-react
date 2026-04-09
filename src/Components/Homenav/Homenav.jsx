import { NavLink } from 'react-router';
import './homenav.css';
const Homenav = () => {
  return (
    <>
      <nav className="home-navbar">
        <ul className="home-navbar__list">
          <li className="home-navbar__link">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="home-navbar__link">
            <NavLink to="/projects">Work</NavLink>
          </li>
          <li className="home-navbar__link">
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};
export default Homenav;
