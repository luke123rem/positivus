import { useState } from 'react';
import Logo from '../assets/images/icons/logo.svg';
import CloseModal from '../assets/images/icons/close.svg'
import CopyLink from '../assets/images/icons/copy-link.svg'
import Twitter from '../assets/images/icons/twitter.svg'
import Facebook from '../assets/images/icons/facebook.svg'
import Instagram from '../assets/images/icons/instagram.svg'
import Tiktok from '../assets/images/icons/tiktok.svg'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [quote, setQuote] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

const getQuote = async () => {
  setLoading(true);
  setShowModal(true);

  document.body.style.overflow = "hidden";

  const res = await fetch("https://dummyjson.com/quotes/random");
  const data = await res.json();

  setQuote({
    content: data.quote,
    author: data.author
  });

  setLoading(false);
};
const shareQuote = (platform: string) => {
  if (!quote) return;

  const text = `"${quote.content}" - ${quote.author}`;

  if (platform === "copy") {
  navigator.clipboard.writeText(
    `"${quote.content}" - ${quote.author}\nhttps://my-positivus.netlify.app`
  );

  alert("Quote copied! ✨");
}

  if (platform === "twitter") {
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=https://my-positivus.netlify.app`
    );
  }

  if (platform === "facebook") {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=https://my-positivus.netlify.app`
    );
  }

  if (platform === "instagram") {
    navigator.clipboard.writeText(text);

    alert("Quote copied! Paste it into Instagram ✨");
  }

if (platform === "tiktok") {
  navigator.clipboard.writeText(text);

  window.open("https://www.tiktok.com");

  alert("Quote copied! Paste it into TikTok ✨");
}};

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

      
{showModal && (
  <div className="QuoteModal">

    <button className="CloseModal" onClick={() => {
      setShowModal(false);
      document.body.style.overflow = "auto"; }}>
      <img src={CloseModal} alt="" />
    </button>

    {loading && <p>Loading...</p>}

    {quote && !loading && (
      <>
        <div className="QuoteContent">
          <h1>"{quote.content}"</h1>
          <p>- {quote.author}</p>
        </div>

        <div className="QuoteShareBtns">
          <div className="QuoteShareBtn">
          <button onClick={() => shareQuote("copy")}>
            <img src={CopyLink} alt="" />
          </button>
          <p>Copy link</p>
          </div>
          
          <div className="QuoteShareBtn">
          <button onClick={() => shareQuote("twitter")}>
            <img src={Twitter} alt="" />
          </button>
          <p>Twitter</p>
        </div>  

        <div className="QuoteShareBtn">
          <button onClick={() => shareQuote("facebook")}>
            <img src={Facebook} alt="" />    
          </button>
        <p>Facebook</p>
        </div>

        <div className="QuoteShareBtn">
          <button onClick={() => shareQuote("instagram")}>
            <img src={Instagram} alt="" />
          </button>
          <p>Instagram</p>
        </div>

        <div className="QuoteShareBtn">
          <button onClick={() => shareQuote("tiktok")}>
            <img src={Tiktok} alt="" />
          </button>
          <p>Tiktok</p>
        </div>
      </div>
      </>
    )}

  </div>
)}    </>
  );
}

export default Navbar;