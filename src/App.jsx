import './App.css'
import {Routes, Route} from "react-router";
import Home from "./Pages/Home/Home.jsx";
import About from "./Pages/About/About.jsx";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
          <Route path="about" element={<About />}/>
      </Routes>
    </>
  )
}

export default App
