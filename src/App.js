import React from 'react'
import { 
  BrowserRouter as Router, 
  Routes, 
  Route 
} from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar/Navbar'
import Home from './components/Pages/Home';

function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/" element={<Home/>}/>
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
