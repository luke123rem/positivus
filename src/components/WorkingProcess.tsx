import { useState } from 'react'
import Minimize from '../assets/images/icons/minimize.svg'
import Maximize from '../assets/images/icons/maximize.svg'

function WorkingProcess() {   

    const [selected, setSelected] = useState(null);

    const click = (index) => {
        selected === index ? setSelected(null) : setSelected(index);
    }

    let WorkingProcessCards = [
        {
            id: "01",
            WorkingProcessHead: "Consultation",
            WorkingProcessSub: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
        },
        {
            id: "02",
            WorkingProcessHead: "Research",
            WorkingProcessSub: "After the consultation, we will conduct thorough research to identify your target audience, competitors, and industry trends. This will help us develop a comprehensive strategy to achieve your business goals."
        },
        {
            id: "03",
            WorkingProcessHead: "Implementation",
            WorkingProcessSub: "Once the research is complete, we will begin implementing the strategy. This may include optimizing your website, creating content, and launching marketing campaigns. Our team will work diligently to ensure that all tasks are completed on time and within budget."
        },
        {
            id: "04",
            WorkingProcessHead: "Optimization",
            WorkingProcessSub: "After the initial implementation, we will continuously monitor and optimize your marketing efforts to ensure maximum results. This may involve adjusting ad campaigns, refining content, and analyzing data to identify areas for improvement."
        },
        {
            id: "05",
            WorkingProcessHead: "Reporting",
            WorkingProcessSub: "Throughout the process, we will provide regular reports on the performance of your marketing campaigns. This will allow you to track progress, measure success, and make informed decisions about future strategies."
        },
        {
            id: "06",
            WorkingProcessHead: "Improvement",
            WorkingProcessSub: "Based on the data and insights gathered from the reports, we will make recommendations for further improvement. This may involve refining existing strategies, exploring new opportunities, or adjusting tactics to better align with your business goals."
        },
    ]

    return (
        <>
            <div id="WorkingProcess" className="Section">
                            <div className="SectionTextCon">
                <div className="SectionText">
                        <h1 className="SectionHead">Our Working Process</h1>
                        <p className="SectionSub">Step-by-Step Guide to Achieving Your Business Goals</p>
                </div>
            
                <span className="empty"></span>
            </div>

            <div id="WorkingProcessCards">
                {WorkingProcessCards.map((WorkingProcessCard, index) => {
                    return (
                        <div className={selected === index ? "WorkingProcessCard open" : "WorkingProcessCard close"} key={index} onClick={()=> click(index)}>
                            <div className="WorkingProcessCardDetails">
                                <div className="WorkingProcessCardText">
                                    <h1 className="WorkingProcessCardNo">{WorkingProcessCard.id}</h1>
                                    <p className="WorkingProcessCardHead">{WorkingProcessCard.WorkingProcessHead}</p>
                                </div>
                                
                                <div className="WorkingProcessCardIcon">
                                    <img src={selected === index ? Minimize : Maximize} className="MinimizeIcon" />
                                </div>
                            </div>

                            <div className={selected === index ? "WorkingProcessCardHidden" : "WorkingProcessCardHidden hidden"}>

                                <span className="WorkingProcessCardDivider"></span>

                                <h2 className="WorkingProcessCardSub">{WorkingProcessCard.WorkingProcessSub}</h2>

                            </div>
                     
                        </div>


                    )                })}
            </div>

            </div>
        </>
    )
}

export default WorkingProcess;