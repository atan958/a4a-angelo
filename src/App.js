import React from 'react'
import { 
  BrowserRouter as Router, 
  Routes, 
  Route 
} from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar/Navbar'
import AboutUs from './components/Pages/AboutUs';
import Home from './components/Pages/Home';
import Pathways from './components/Pages/Pathways';

function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/pathways" element={<Pathways/>}/>
          <Route path="/about-us" element={<AboutUs/>}/>
        </Routes>
      </Router>  
  );
}

/*
        <Hero />
        <div className="to-be-deleted">
          <Slider/>
        </div>
        <div className="to-be-deleted">
        </div>
*/

export default App;
