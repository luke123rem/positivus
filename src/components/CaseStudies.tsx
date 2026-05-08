function CaseStudies() {

    let CaseStudies = [
        {
            CaseStudy: "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales."
        },
        {
            CaseStudy: "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic."
        },
        {
            CaseStudy: "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales."
        }
    ]

    return (
        <>
        <div id="CaseStudies" className="Section">
            <div className="SectionTextCon">
                <div className="SectionText">
                        <h1 className="SectionHead">Case Studies</h1>
                        <p className="SectionSub">Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies</p>
                </div>
            
                <span className="empty"></span>
            </div>

            <div className="CaseStudiesCon">
                {CaseStudies.map((CaseStudy, i) => (
                    <div className='CaseStudy' key={i}>
                        <h2 className="CaseStudyText">{CaseStudy.CaseStudy}</h2>
                        <a href="#" className="CaseStudyLM">
                            Learn More

                            <svg  xmlns="http://www.w3.org/2000/svg" viewBox={"0 0 24 24"}><path d="M17 16V7H8v2h5.59l-6.3 6.29 1.42 1.42 6.29-6.3V16z"></path></svg>
                        </a>
                    </div>
                ))}
            </div>
            </div>
            
        </>
    )
}

export default CaseStudies;