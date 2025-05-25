import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Doctors from './components/Doctors';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Footer from './components/Footer';
import Review from './components/Review';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />

        {/* Optional Navigation for Login/Signup */}
        <nav className="">
          <Link to="/login" className="">Login</Link>
          <Link to="/signup">Signup</Link>
        </nav>

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
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
  