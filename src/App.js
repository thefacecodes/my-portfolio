import Home from "./Home";
import Nav from "./Nav";
import Projects from "./Projects";
import {BrowserRouter as Router, Route} from  "react-router-dom"
import { Routes } from "react-router-dom/dist/umd/react-router-dom.development";
import Contact from "./Contact";
import Resume from "./Resume";
import Tools from "./Tools";
import About from "./About";

function App() {
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
    </Routes>
    </div>
    </Router>
  );
}

export default App;
