import './App.css'
import {Routes, Route} from "react-router";
import Home from "./Pages/Home/Home.jsx";
import About from "./Pages/About/About.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Work from "./Pages/Work/Work.jsx";
import Contact from "./Pages/Contact/Contact.jsx";

function App() {

  return (
    <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="work" element={<Work />} />
            <Route path="contact" element={<Contact />} />
        </Routes>
        <Footer />
    </>
  );
}

export default App
