import './App.css'
import {Routes, Route} from "react-router";
import Home from "./Pages/Home/Home.jsx";
import About from "./Pages/About/About.jsx";
import Footer from "./Components/Footer/Footer.jsx";

function App() {

  return (
    <>
            <main>
                <Routes>
                      <Route path="/" element={<Home />}/>
                      <Route path="about" element={<About />}/>
                </Routes>
            </main>
            <Footer />
    </>
  )
}

export default App
