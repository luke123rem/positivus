import LearnMoreBtn from '../assets/images/icons/learn-more-btn.svg'
import SEO from '../assets/images/SEO.svg'
import PPCA from '../assets/images/PPCA.svg'
import SMM from '../assets/images/SMM.svg'
import  EM from '../assets/images/EM.svg'
import CC from '../assets/images/CC.svg'
import AT from '../assets/images/AT.svg'
import LearnMoreLightArrow from '../assets/images/icons/service-card-lm-light.svg'
import LearnMoreDarkArrow from '../assets/images/icons/service-card-lm-dark.svg'

function Services() {

    let ServicesCards = [
        {
            ServiceHead: "Search engine optimization",
            ServiceImg: SEO,
            SpecialName: "SEO",
            arrowTheme: "dark"
        },
        {
            ServiceHead: "Pay-per-click Advertising",
            ServiceImg: PPCA,
            SpecialName: "PPCA",
            arrowTheme: "dark"
        },
        {
            ServiceHead: "Social Media Marketing",
            ServiceImg: SMM,
            SpecialName: "SMM",
            arrowTheme: "light"
        },
        {
            ServiceHead: "Email Marketing",
            ServiceImg: EM,
            SpecialName: "EM",
            arrowTheme: "dark"
        },
        {
            ServiceHead: "Content Creation",
            ServiceImg: CC,
            SpecialName: "CC",
            arrowTheme: "dark"
        },
        {
            ServiceHead: "Analytics and Tracking",
            ServiceImg: AT,
            SpecialName: "AT",
            arrowTheme: "light"
        },
    ]

    return (
        <>

        <div id="Services" className="Section">

            <div className="SectionTextCon">
                <div className="SectionText">
                <h1 className="SectionHead">Services</h1>
                <p className="SectionSub">At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</p>
                </div>

                <span className="empty"></span>
            </div>

            <div id="ServicesCards">
                {ServicesCards.map((ServiceCard, i) => (
                    <div className='ServiceCard'  id={ServiceCard.SpecialName} key={i}>
                        <div className="ServiceCardText">
                            <h2 className="ServiceCardHead">{ServiceCard.ServiceHead}</h2>
                            <div className="ServiceCardLearnMore">
                            <img src={ServiceCard.arrowTheme === "light" ? LearnMoreLightArrow : LearnMoreDarkArrow} alt="arrow" />

                            <span className={ServiceCard.arrowTheme === "light" ? "ServiceCardLM light" : "ServiceCardLM dark"}>Learn more</span>
                        </div>
                        </div>

                        <img src={ServiceCard.ServiceImg} alt="" className="ServiceImage" />                        
                    </div>
                ))
                }
            </div>
            </div>
        </>
    )
}

export default Services;