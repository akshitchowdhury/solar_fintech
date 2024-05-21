import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Services from './components/Services/Services';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      

      
      <Router>
    <Navbar/>
      <Routes>
      
      <Route path="/" element= {<Home/>}/>
      <Route path="/about" element= {<About/>}/>
      <Route path="/services" element= {<Services/>}/>
      <Route path="/contact" element= {<Contact/>}/>
      
      </Routes>
      
      </Router>
    </div>
  );
}

export default App;
