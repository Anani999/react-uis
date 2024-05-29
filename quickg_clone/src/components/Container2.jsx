import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/Container2.css';
import { faHeart, faInbox, faLink, faMailReply, faMessage, faPersonRifle, faRobot } from '@fortawesome/free-solid-svg-icons';
import { width } from '@fortawesome/free-solid-svg-icons/fa0';

const Container2 = () => {
    return(
        <div className="container-2">
            <div className="con2-text">
                <h1>What is <span>Quickg</span></h1> 
                <p>Build a stunning bio site tailored to your unique style, where you can searmlessly integrate social media, share affiliate links, and showcase your remarkable skills and portfolio control of your online persona with Quickg</p>
            </div>
            <div className="con2-tiles-list">
                <div className="tile">
                    <div className="tile-icon">
                        <FontAwesomeIcon icon={faLink} style={{height:'22px'}}/>
                    </div>
                    <h2>1 link , Infinite Possibilities</h2>
                    <p>Consolidate all your important links in one place for easy audience access.</p>
                </div>
                <div className="tile">
                    <div className="tile-icon">
                        <FontAwesomeIcon icon={faPersonRifle} style={{height:'22px'}}/>
                    </div>
                    <h2>1 link , Infinite Possibilities</h2>
                    <p>Consolidate all your important links in one place for easy audience access.</p>
                </div>
                <div className="tile">
                    <div className="tile-icon">
                        <FontAwesomeIcon icon={faInbox} style={{height:'22px'}} />
                    </div>
                    <h2>1 link , Infinite Possibilities</h2>
                    <p>Consolidate all your important links in one place for easy audience access.</p>
                </div>
                <div className="tile">
                    <div className="tile-icon">
                        <FontAwesomeIcon icon={faHeart} style={{height:'22px'}} />
                    </div>
                    <h2>1 link , Infinite Possibilities</h2>
                    <p>Consolidate all your important links in one place for easy audience access.</p>
                </div>
                <div className="tile">
                    <div className="tile-icon">
                        <FontAwesomeIcon icon={faRobot} style={{height:'22px'}}/>
                    </div>
                    <h2>1 link , Infinite Possibilities</h2>
                    <p>Consolidate all your important links in one place for easy audience access.</p>
                </div>
            </div>
        </div>
        
    );
    
}

export default Container2;