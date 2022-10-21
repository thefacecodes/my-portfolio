import Home from "./Home";
import Nav from "./Nav";
import Projects from "./Projects";
import {BrowserRouter as Router, Route} from  "react-router-dom"
import { Routes } from "react-router-dom/dist/umd/react-router-dom.development";
import Contact from "./Contact";
import Resume from "./Resume";
import Tools from "./Tools";
import About from "./About";
import Testimonial from "./Testimonial";
import SendTestimonial from "./SendTestimonial";
import { useEffect, useState } from "react";
import theface from "./assets/theface.jpg"

function App() {

  const [loader, setScreen] = useState(true)

  const Preloader = () => {
      useEffect(()=> {
      setTimeout(()=> setScreen(false), 2000)
  }, [])
    return (
    <div className="preloader">
      <img src={theface} alt="" />
    </div>
  )
  }

  

if(loader) {
 return (
  <Preloader />
 )
} else {

  return (
    <Router>
    <div className="App">
    <Nav />
   
    <Routes>
    <Route exact path="/" element={<Home />}/>
    <Route path="/projects" element={<Projects />}/>
    <Route path="/contact" element={<Contact />}/>
    <Route path="/skills" element={<Tools />}/>
    <Route path="/resume" element={<Resume />}/>
    <Route path="/about" element={<About />}/>
    <Route path="/testimonial" element={<Testimonial />}/>
    <Route path="/sendtestimonial" element={<SendTestimonial />}/>
    </Routes>
    </div>
    </Router>
  );
}
}

export default App;
