
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Doctors from './components/Doctors';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Footer from './components/Footer';
import Review from './components/Review';
import RegistrationModal from './components/RegistrationForm';


function App() {
  const [showRegistration, setShowRegistration] = useState(false);

  const toggleRegistration = () => {
    setShowRegistration(!showRegistration);
  };

  return (
    <Router>
      <div className="app-container">
        <Header onSignupClick={toggleRegistration} />
        {showRegistration && (
          <RegistrationModal onClose={toggleRegistration} />
        )}
        
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <About />
              <Doctors />
              <Contact />
              <Review />
              <Blog />
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reviews" element={<Review />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;