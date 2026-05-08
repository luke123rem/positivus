import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Logo from '../assets/images/icons/logo.svg'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <BrowserRouter>
    <nav id="Navbar">
        <div id="Logo">
            <img src={Logo} alt="Logo" />
        </div>

        <div id="NavLinks" className={isMenuOpen ? 'active' : ''}>
            <Link to="">About us</Link>
            <a href="#">Services</a>
            <a href="#">Use Cases</a>
            <a href="#">Pricing</a>
            <a href="#">Blog</a>
            <a href="#" className="rq">Request a quote</a>
        </div>

         <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
      </div>
    </nav>

    <Routes>
            
    </Routes>

    </ BrowserRouter>
  );
}

export default Navbar;
