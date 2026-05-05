import './App.css';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Carousel from './components/Carousel.tsx'
import Services from './components/Services.tsx';
import Proposal from './components/Proposal.tsx';
import CaseStudies from './components/CaseStudies.tsx';

function App() {
  return (
    <>
    <header id="Header">
      <Navbar />
      <Hero />
      <Carousel />
    </header>

    <Services />

    <Proposal />
    
    <CaseStudies />
    </>
  );
}

export default App;
