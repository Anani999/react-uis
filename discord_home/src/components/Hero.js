import '../styles/Hero.css';
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Hero = () => {
    return (
        <div className="Hero">

            <div className='togle'>

                <div className='info'>
                    <h1>GROUP CHAT THAT'S ALL FUN & GAMES</h1>
                    <p>Discord is great for playing games and chilling with friends, or even building a worldwide community. Customize your own space to talk, play, and hang out. </p>
                </div>
                
                <div className='image'>
                    <img src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/664daa37ea162cadf9603500_Art.webp" alt="Screen"/>
                </div>
            </div>
           
           
            <div className="button">

                <div className='download one'>
                    <FontAwesomeIcon className='download-icon' icon={faDownload} />
                    <p>Download from Google Play</p>
                </div>

                <div className='download two'>
                    <FontAwesomeIcon icon={faDownload} />
                    <p>Download from Google Play</p>
                </div>
               
            </div>
        </div>
        
    );
}

export default Hero;