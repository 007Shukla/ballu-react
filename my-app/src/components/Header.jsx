
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = ({ onSignupClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  
  const handleSignupClick = (e) => {
    e.preventDefault();
    onSignupClick();
    setMenuOpen(false);
  }

  return (
    <header>
      <Link to="/" className="logo">
        <span>D</span>octors <span>C</span>ares.
      </Link>
      
      <div className="menu-toggle" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
      
      <nav className={`navbar ${menuOpen ? 'active' : ''}`}>
        <ul>
          <li><Link to="/">home</Link></li>
          <li><Link to="/about">about</Link></li>
          <li><Link to="/doctors">doctor</Link></li>
          <li><Link to="/reviews">review</Link></li>
          <li><Link to="/contact">contact</Link></li>
          <li><Link to="/blog">blog</Link></li>
          <li><a href="#" onClick={handleSignupClick}>Login/SignUp</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;