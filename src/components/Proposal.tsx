import '../App.css'
import ProposalImg from '../assets/images/proposal-img.svg'

function Proposal() {
    return (
        <>
            <div id="Proposal">
                <div className="ProposalCon">
                    <div className="ProposalText">
                        <h1 className="ProposalHead">Let's make things happen</h1>
                        <h2 className="ProposalSub">Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</h2>
                        <a href="#" className="ProposalBtn">Get your free proposal</a>
                    </div>

                <div className="ProposalImg">
                    <img src={ProposalImg} alt="" />
                </div>
                </div>
            </div>
        </>
    )
}

export default Proposal;