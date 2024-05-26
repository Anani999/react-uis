import '../styles/ChatList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalculator, faChain, faCircle, faDotCircle, faMessage, faSearch, faStar } from '@fortawesome/free-solid-svg-icons';
import Profile from '../assets/profile-image.jpg'
import { faArchive } from '@fortawesome/free-solid-svg-icons/faArchive';

const ChatList = () => {
    return (
        <div className="chat-div">
            <div className="nav-1">
                <nav>
                <img src={Profile} alt="Profile"/>
                <ul>
                    <li><FontAwesomeIcon icon={faStar} style={{color:'white'}}/></li>
                    <li><FontAwesomeIcon icon={faArchive} style={{color:'white'}} /></li>
                    <li><FontAwesomeIcon icon={faChain} style={{color:'white'}}/></li>
                    <li><FontAwesomeIcon icon={faDotCircle} style={{color:'white'}}/></li>
                </ul>
                </nav>
                <div className='menu-div'>
                    <div className='search'>
                        <FontAwesomeIcon icon={faSearch} style={{color:'white',height:'14px'}}/>
                        <input type="text" placeholder='Search' />
                    </div>
                    <div className='categories'>
                        <button>All</button>
                        <button>Unread</button>
                        <button>Groups</button>
                    </div>
                   
                </div>
                <div className='list-div'>
                    <div className='item'>
                        <img src={Profile} />
                        <div className='item-body'>
                            <h2>Name</h2>
                            <p>message is this </p>
                        </div>
                    </div>
                    <div className='item'>
                        <img src={Profile} />
                        <div className='item-body'>
                            <h2>Name</h2>
                            <p>message is this </p>
                        </div>
                    </div>
                    <div className='item'>
                        <img src={Profile} />
                        <div className='item-body'>
                            <h2>Name</h2>
                            <p>message is this </p>
                        </div>
                    </div>
                    <div className='item'>
                        <img src={Profile} />
                        <div className='item-body'>
                            <h2>Name</h2>
                            <p>message is this </p>
                        </div>
                    </div>
                    <div className='item'>
                        <img src={Profile} />
                        <div className='item-body'>
                            <h2>Name</h2>
                            <p>message is this </p>
                        </div>
                    </div>
                    <div className='item'>
                        <img src={Profile} />
                        <div className='item-body'>
                            <h2>Name</h2>
                            <p>message is this </p>
                        </div>
                    </div>
                    <div className='item'>
                        <img src={Profile} />
                        <div className='item-body'>
                            <h2>Name</h2>
                            <p>message is this </p>
                        </div>
                    </div>
                    <div className='item'>
                        <img src={Profile} />
                        <div className='item-body'>
                            <h2>Name</h2>
                            <p>message is this </p>
                        </div>
                    </div>
                    <div className='item'>
                        <img src={Profile} />
                        <div className='item-body'>
                            <h2>Name</h2>
                            <p>message is this </p>
                        </div>
                    </div>
                    <div className='item'>
                        <img src={Profile} />
                        <div className='item-body'>
                            <h2>Name</h2>
                            <p>message is this </p>
                        </div>
                    </div>
                    <div className='item'>
                        <img src={Profile} />
                        <div className='item-body'>
                            <h2>Name</h2>
                            <p>message is this </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default ChatList;