import { useState } from 'react';
import Logo from '../assets/images/icons/logo.svg';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [quote, setQuote] = useState<any>(null);
  const [loading, setLoading] = useState(false);


const getQuote = async () => {
  console.log("CLICKED");

  try {
    const res = await fetch("https://api.quotable.io/random");

    console.log("RESPONSE RECEIVED");

    const data = await res.json();

    console.log("DATA:", data);

    setQuote({
      content: data.content,
      author: data.author
    });

  } catch (error) {
    console.log("ERROR:", error);
  }
};
  return (
    <>
      {/* NAVBAR */}
      <nav id="Navbar">
        <img src={Logo} alt="Logo" id="Logo" />

        <div id="NavLinks" className={isMenuOpen ? 'active' : ''}>
          <a href="#">About us</a>
          <a href="#">Services</a>
          <a href="#">Use Cases</a>
          <a href="#">Pricing</a>
          <a href="#">Blog</a>

          <button className="rq" onClick={getQuote}>
            Get a quote
          </button>
        </div>

        <div
          className={`hamburger ${isMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>

      {/* QUOTE DISPLAY */}
      <div className="QuoteBox">
        {loading && <p>Loading...</p>}

        {quote && !loading && (
          <div>
            <h3>"{quote.content}"</h3>
            <p>- {quote.author}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;