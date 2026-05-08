import './App.css';

import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Carousel from './components/Carousel.tsx'
import Services from './components/Services.tsx';
import Proposal from './components/Proposal.tsx';
import CaseStudies from './components/CaseStudies.tsx';
import WorkingProcess from './components/WorkingProcess.tsx';
import Team from './components/Team.tsx';
import ContactUs from './components/ContactUs.tsx';
import Footer from './components/Footer.tsx';


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

    <WorkingProcess />

    <Team />

    <ContactUs />

    <Footer />
    </>
  );
}

export default App;
