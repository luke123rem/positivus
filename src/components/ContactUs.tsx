import ContactImg from '../assets/images/contact-img.svg';

function ContactUs() {
    return (
        <>
            <div id="ContactUs" className="Section">
                <div className="SectionTextCon">
                    <div className="SectionText">
                        <h1 className="SectionHead">Contact Us</h1>
                        <p className="SectionSub">Connect with Us: Let's Discuss Your Digital Marketing Needs</p>
                    </div>
                    <span className="empty"></span>
                </div>

                <div className="ContactUsCon">
                    <div className="ContactUsDetails">
                    <div className="ContactRadios">
                        <input type="radio" name="ContactRadio" id="ContactSayHi" className="ContactRadio" checked />
                        <label htmlFor="ContactSayHi">Say Hi</label>

                        <input type="radio" name="ContactRadio" id="ContactQuote" className="ContactRadio" />
                        <label htmlFor="ContactQuote">Get a Quote</label>


                    </div>

                    <form action="#" className="ContactForm">
                        <div className="ContactInputBox">
                        <label htmlFor="ContactName">Name*</label>
                        <input type="text" id="ContactName" placeholder="Name" className="ContactInput" required />
                        </div>

                        <div className="ContactInputBox">
                            <label htmlFor="ContactEmail">Email*</label>
                            <input type="email" id="ContactEmail" placeholder="Email" className="ContactInput" required />
                        </div>

                        <div className="ContactInputBox">
                            <label htmlFor="ContactMessage">Message*</label>
                            <textarea id="ContactMessage" placeholder="Message" className="ContactInput" required></textarea>
                        </div>
                    </form>

                    <a href="https://google.com" className="ContactSendBtn" target="_blank" rel="noopener noreferrer">Send Message</a>
                </div>

                <img src={ContactImg} alt="" className="ContactImg" />
                </div>
            </div>
        </>
    )
}

export default ContactUs;