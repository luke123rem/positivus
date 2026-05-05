import '../App.css';
import Logo from '../assets/images/icons/logo.svg'

function Navbar() {
  return (
    <nav id="Navbar">
        <div id="Logo">
            <img src={Logo} alt="Logo" />
        </div>

        <div id="NavLinks">
            <a href="#">About us</a>
            <a href="#">Services</a>
            <a href="#">Use Cases</a>
            <a href="#">Pricing</a>
            <a href="#">Blog</a>
            <a href="#" className="rq">Request a quote</a>
        </div>
    </nav>
  );
}

export default Navbar;
