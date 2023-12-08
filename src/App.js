import React from 'react';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home'; 
import Services from './pages/Services/Services';
import Blogs from './pages/Blogs/Blogs';
import AboutUs from './pages/Aboutus/Aboutus';
import ContactUs from './pages/Contactus/Contactus';

function App() {
  return (
      <Router>    
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/services' element={<Services/>} />
          <Route path='/blogs' element={<Blogs/>} />
          <Route path='/contact-us' element={<ContactUs />} />
        </Routes>
      </Router>    
  );
}

export default App;
