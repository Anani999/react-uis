import '../styles/Footer.css'
import Instagram from '../assets/instagram.jpeg';
import Twitter from '../assets/twitter.webp';
import Facebook from '../assets/facebook.png';
import LinnkedIn from '../assets/linkedin.webp';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-header">
                <img src="https://www.quickg.eu/icons/logo_white.svg"/>
                <div className="footer-links">
                    <li>Contact Us!</li>
                    <li>GDPR!</li>
                    <li>Privacy</li>
                    <li>Terms</li>
                    <li>Unsubscribe</li>
                    <li>Pricing</li>
                    <li>Blog</li>
                </div>
                <div className="footer-social">
                    <li><img src={Instagram} alt="instagram" /></li>
                    <li><img src={LinnkedIn} alt="linkedin" /></li>
                    <li><img src={Facebook} alt="facebook" /></li>
                    <li><img src={Twitter} alt="twitter" /></li>
                </div>
            </div>
           
            <div className="footer-message">
                <p>Copyright C 2024. All rights reserved Designed & developed with love by Quickg</p>
            </div>
        </div>
    );
}

export default Footer;