import HeroImage from '../assets/images/hero.svg'

function Hero() {
    return (
        <>
        <div id="Hero">
            <div id="HeroText">
                <h1 className="HeroHead">Navigating the digital landscape for success</h1>
                <h2 className="HeroSub">Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</h2>
                <a href="#" className="consultationBtn">Book a consultation</a>
            </div>

            <img src={HeroImage} alt="" />
        </div>
        </>
    )
}

export default Hero;