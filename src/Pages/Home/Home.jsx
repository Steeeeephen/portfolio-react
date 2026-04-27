// import React from 'react';
import './home.css';
// import {NavLink} from "react-router";
import Homenav from '../../Components/Homenav/Homenav.jsx';
import Footer from '../../Components/Footer/Footer.jsx';
import {useEffect} from "react";

const Home = () => {

    useEffect(() => {
        document.title = "stephenzalalas.dev"
    }, []);
    

  return (
    <>
      <div className="home-container">
        <div className="home-container__title">
          <h1>Stephen Zalalas</h1>
          <h2>Full Stack Web Developer</h2>
        </div>
        <Homenav />
      </div>
    </>
  );
};
export default Home;
