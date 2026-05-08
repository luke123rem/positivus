import LearnMoreBtn from '../assets/images/icons/learn-more-btn.svg'
import SEO from '../assets/images/SEO.svg'
import PPCA from '../assets/images/PPCA.svg'
import SMM from '../assets/images/SMM.svg'
import  EM from '../assets/images/EM.svg'
import CC from '../assets/images/CC.svg'
import AT from '../assets/images/AT.svg'

function Services() {

    let ServicesCards = [
        {
            ServiceHead: "Search engine optimization",
            ServiceImg: SEO,
            SpecialName: "SEO"
        },
        {
            ServiceHead: "Pay-per-click Advertising",
            ServiceImg: PPCA,
            SpecialName: "PPCA"
        },
        {
            ServiceHead: "Social Media Marketing",
            ServiceImg: SMM,
            SpecialName: "SMM"
        },
        {
            ServiceHead: "Email Marketing",
            ServiceImg: EM,
            SpecialName: "EM"
        },
        {
            ServiceHead: "Content Creation",
            ServiceImg: CC,
            SpecialName: "CC"
        },
        {
            ServiceHead: "Analytics and Tracking",
            ServiceImg: AT,
            SpecialName: "AT"
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
                            <img src={LearnMoreBtn} alt="" />
                        </div>

                        <img src={ServiceCard.ServiceImg} alt="" />
                        </div>
                ))
                }
            </div>
            </div>
        </>
    )
}

export default Services;