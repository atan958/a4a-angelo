import React from 'react'
import { 
  BrowserRouter as Router, 
  Routes, 
  Route 
} from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar/Navbar'
import Home from './components/Pages/Home';
import Pathways from './components/Pages/Pathways';
import AboutUs from './components/Pages/AboutUs';
import Contacts from './components/Pages/Contacts';


function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/pathways" element={<Pathways/>}/>
          <Route path="/about-us" element={<AboutUs/>}/>
          <Route path="/contacts" element={<Contacts/>}/>
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
