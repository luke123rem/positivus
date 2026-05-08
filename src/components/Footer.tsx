import FooterLogo from '../assets/images/icons/logo-light.svg'
import LinkedIn from '../assets/images/icons/linkedin.svg'
import Facebook from '../assets/images/icons/facebook.svg'
import Twiter from '../assets/images/icons/twitter.svg'

function Footer() {
    return (
        <>
            <footer id="Footer">
                <div id="FooterCon">
                    <div className="FooterNav">
                    <img src={FooterLogo} alt="Footer Logo" className="FooterLogo" />

                    <div className="FooterLinks">
                        <a href="#">About us</a>
                        <a href="#">Services</a>
                        <a href="#">Use Cases</a>
                        <a href="#">Pricing</a>
                        <a href="#">Blog</a>
                    </div>

                    <div className="FooterSocials">
                        <img src={LinkedIn} alt="" />
                        <img src={Facebook} alt="" />
                        <img src={Twiter} alt="" />
                    </div>
                </div>

                <div className="FooterContact">
                    <div className="FooterContactDetails">
                        <h2 className="FooterContactHead">Contact us:</h2>
                        <p className="FooterContactEmail">Email: info@positivus.com</p>
                        <p className="FooterContactP">Phone: 555-567-8901</p>
                        <p className="FooterContactAddress">Address: 1234 Main St, Moonstone City, Stardust State 12345</p>
                    </div>

                    <div className="FooterContactSubscribe">
                        <input type="email" name="Email" id="" placeholder=" Email" className="FooterContactSubEmail" />
                        <button className="FooterContactSubBtn" type="submit">Subscribe to news</button>
                    </div>
                </div>

                <div className="FooterCopyright">
                    <p className="FooterCopyrightText">© 2023 Positivus. All Rights Reserved.</p>
                    <a href="#" className="FooterCopyrightPP">Privacy Policy</a>
                </div>

                </div>
            </footer>
        </>
    )
}

export default Footer;