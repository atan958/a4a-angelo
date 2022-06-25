import React from 'react'
import { 
  BrowserRouter as Router, 
  Routes, 
  Route 
} from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Carousel from './components/Carousel/Carousel';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Hero />
        <div className="to-be-deleted">
          <Carousel />
        </div>
        <Routes>
          <Route path='/' component={<div>Hello</div>}/>
        </Routes>
      </Router>  
    </>
  );
}

export default App;
