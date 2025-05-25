import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header>
      <Link to="/" className="logo">
        <span>D</span>octors <span>C</span>ares.
      </Link>2

      <div className="menu-toggle" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <nav className={`navbar ${menuOpen ? 'active' : ''}`}>
        <ul>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>home</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>about</Link></li>
          <li><Link to="/doctors" onClick={() => setMenuOpen(false)}>doctor</Link></li>
          <li><Link to="/reviews" onClick={() => setMenuOpen(false)}>review</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>contact</Link></li>
          <li><Link to="/blog" onClick={() => setMenuOpen(false)}>blog</Link></li>
          <li><Link to="/login" onClick={() => setMenuOpen(false)}>Login/SignUp</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
