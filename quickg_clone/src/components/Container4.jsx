import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/Container4.css'
import { faArrowAltCircleDown, faArrowCircleDown, faArrowDown, faArrowDown19, faArrowDownShortWide, faArrowDownUpAcrossLine, faArrowTrendDown, faArrowTurnDown, faCartArrowDown } from '@fortawesome/free-solid-svg-icons';

const Container4 = () => {
    return(
        <div className="plan-div">
            <h1>Plan Selection</h1>

            <div className='select-div'>
                <p className='selected'>Montly</p>
                <p>Yearly</p>
            </div>

            <div className='plans-3'>
                <div className='plan-item'>
                    <div className='item-header'>
                        <h2>Free</h2>
                        <h2>0$</h2>
                        <p>0$ / Month</p>
                    </div>
                    <div className='item-body'>
                        <h3>Great fo starting  creators or small companies !</h3>
                        <p>Monetization , unlimited links , limited email subscription , and sending Customizable Quickg profile to take control ove your online image .</p>
                        <button>Sign up for free</button>
                        <div className='item-footer'>
                            <h3> More Information </h3>
                            <div className='footer-more'>
                                <FontAwesomeIcon icon={faArrowDown}/>
                            </div>
                        </div>
                    </div>
                   
                </div>
                <div className='plan-item'>
                    <div className='item-header'>
                        <h2>Standard</h2>
                        <h2>3$</h2>
                        <p>3$ / Month</p>
                    </div>
                    <div className='item-body'>
                        <h3>Great for existing creators or medium companies!</h3>
                        <p>Grow faster, reach further. See more metrics and learn about your supporters. Reach more of your subscribers through Quickg.</p>
                        <button>Subscribe</button>
                        <div className='item-footer'>
                            <h3> More Information </h3>
                            <div className='footer-more'>
                            <FontAwesomeIcon icon={faArrowDown}/>
                            </div>
                        </div>
                    </div>
                   
                </div>
                <div className='plan-item'>
                    <div className='item-header'>
                        <h2>Proffessional</h2>
                        <h2>12$</h2>
                        <p>12$ / Month</p>
                    </div>
                    <div className='item-body'>
                        <h3>Great for existing creators or medium companies!</h3>
                        <p>Monetization, unlimited links, limited email subscription, and sending. Customizable Quickg profile to take control over your online image.</p>
                        <button>Subscribe</button>
                        <div className='item-footer'>
                            <h3> More Information </h3>
                            <div className='footer-more'>
                            <FontAwesomeIcon icon={faArrowDown}/>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
            <br />
        </div>
    );
}

export default Container4;