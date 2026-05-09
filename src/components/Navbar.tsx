import { useState } from 'react';
import Logo from '../assets/images/icons/logo.svg'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav id="Navbar">
        <img src={Logo} alt="Logo" id="Logo" />

        <div id="NavLinks" className={isMenuOpen ? 'active' : ''}>
            <a href="#">About us</a>
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
  );
}

export default Navbar;
