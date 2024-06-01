import '../styles/section/Footer.css';

import { faDownload, faFlag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
    return(
        <div className="footer">

            {/* Fotter Main Text */}
            <div className="text">
                <h1>YOU CAN'T SCROLL ANYMORE BETTER GO CHAT.</h1>
                <div className="button">
                    <FontAwesomeIcon className="download-icon" icon={faDownload} />
                    <p>Download on Google Play</p>
                </div>
            </div>

            {/* Footer Image */}
            <div className="image">
                <img className="img" src='https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/6658cc069d1eb1caf9426914_Footer-Art_cut-p-1600.webp'/>
            </div>

            {/* Footer section */}
            <div className="footer-section">


                {/* Social icons */}
                <div className="social">

                    <div className="language">
                        <FontAwesomeIcon className='flag' icon={faFlag} />
                        <p>English</p>
                    </div>
                    <div className="icons">
                        <img  src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/65a4fe4237b6a1c4fa714f76_x.svg"/>
                        <img src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/65a4fe42d907d27f3dead7a0_instagram.svg" />
                        <img src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/65a4fe4173c1df8be608c8a2_facebook.svg" />
                        <img src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/65a4fe42d907d27f3dead7ad_youtube.svg" />
                        <img src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/65a4fe4152ae5860036dadf1_tiktok.svg" />
                    </div>

                </div>


                {/* Link Tree */}
                 <div className="link-tree">

                        <div className="tree">
                            <p className="tree-heading">Product</p>
                            <li>Download</li>
                            <li>Nitro</li>
                            <li>Status</li>
                            <li>App Directory</li>
                            <li>New Mobile Experience</li>
                        </div>


                        <div className="tree">
                            <p className="tree-heading">Company</p>
                            <li>About</li>
                            <li>Jobs</li>
                            <li>Brand</li>
                            <li>Newsroom</li>
                        </div>


                        <div className="tree">
                            <p className="tree-heading">Resources</p>
                            <li>College</li>
                            <li>Support</li>
                            <li>Safety</li>
                            <li>Blog</li>
                            <li>Feedback</li>
                            <li>StreamKit</li>
                            <li>Creators</li>
                            <li>Community</li>
                            <li>Developers</li>
                            <li>Gaming</li>
                            <li>Quests</li>
                            <li>Official 3rd Party Merch</li>
                        </div>


                        <div className="tree">
                            <p className="tree-heading">Policies</p>
                            <li>Terms</li>
                            <li>Privacy</li>
                            <li>Cookies Settings</li>
                            <li>Guidelines</li>
                            <li>Acknowledgements</li>
                            <li>Licenses</li>
                            <li>Compnay Information</li>
                        </div>


                    </div>

                    <hr/>

                    {/* Footer Final Touch */}
                    <div className="footer-final">
                        <img src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/6257d23c5fb25be7e0b6e220_Open%20Source%20Projects%20_%20Discord-7.svg" />
                        <button>Download</button>
                    </div>
                </div>
            </div>
    );
}

export default Footer;