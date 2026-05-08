import LinkedIn from '../assets/images/icons/team-linkedin.svg';
import JohnSmith from '../assets/images/John Smith.png'
import JaneDoe from '../assets/images/Jane Doe.png'
import MichaelBrown from '../assets/images/Michael Brown.png'
import EmilyJohnson from '../assets/images/Emily Johnson.png'
import BrianWilliams from '../assets/images/Brian Williams.png'
import SarahKim from '../assets/images/Sarah Kim.png'

function Team() {

    let TeamCards = [
        {
            TeamName: "John Smith",
            TeamPosition: "Founder & CEO",
            TeamDesc: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
            TeamPic: JohnSmith
        },
        {
            TeamName: "Jane Doe",
            TeamPosition: "Director of Operations",
            TeamDesc: "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
            TeamPic: JaneDoe
        },
        {
            TeamName: "Michael Brown",
            TeamPosition: "Senior SEO Specialist",
            TeamDesc: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
            TeamPic: MichaelBrown
        },
        {
            TeamName: "Emily Johnson",
            TeamPosition: "PPC Manager",
            TeamDesc: "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
            TeamPic: EmilyJohnson
        },
        {
            TeamName: "Brian Williams",
            TeamPosition: "Social Media Specialist",
            TeamDesc: "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
            TeamPic: BrianWilliams
        },
        {
            TeamName: "Sarah Kim",
            TeamPosition: "Content Creator",
            TeamDesc: "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries",
            TeamPic: SarahKim
        },
    ]

    return (
        <>
            <div id="Team" className="Section">
                <div className="SectionTextCon">
                    <div className="SectionText">
                        <h1 className="SectionHead">Team</h1>
                        <p className="SectionSub">Meet the skilled and experienced team behind our successful digital marketing strategies</p>
                    </div>
                    <span className="empty"></span>
                </div>

                <div className="TeamCards">
                    {TeamCards.map((TeamCard, index) => (
                        <div className="TeamCard" key={index}>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <img src={LinkedIn} alt="LinkedIn" className='TeamSocial' />
                            </a>

                            <div className="TeamInfo">
                                <img src={TeamCard.TeamPic} alt={TeamCard.TeamName} className="TeamPic" />

                                <div className="TeamInfoText">
                                    <h2 className="TeamName">{TeamCard.TeamName}</h2>
                                    <p className="TeamPosition">{TeamCard.TeamPosition}</p>
                                </div>
                            </div>

                             <p className="TeamDesc">{TeamCard.TeamDesc}</p>
                        </div>
                    ))}
                </div>

                <a href="#" className="TeamBtn">See all team</a>

            </div>
        </>
    )
}

export default Team;