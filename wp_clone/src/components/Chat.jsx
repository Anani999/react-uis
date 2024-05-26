
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Profile from '../assets/profile-image.jpg';
import '../styles/Chat.css';
import { faFaceAngry, faMedkit, faMicrophone, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';

const Chat = () =>{
    return (
        <div className='chats-div'>
            <div className='nav'>
                <div className='profile-info'>
                    <img src={Profile}/>
                    <div className='profile-info-2'>
                        <h1>My Name</h1>
                        <p>click here for more info</p>
                    </div>
                    
                </div>
                <div className='buttons'>
                    <FontAwesomeIcon icon={faSearch} style={{cursor:'pointer'}}/>
                    <FontAwesomeIcon icon={faMedkit} style={{cursor:'pointer'}}/>
                </div>
            </div>
            <div className='chat-container-div'>

            </div>
            <div className='message-options-div'>
                <FontAwesomeIcon icon={faFaceAngry} style={{height:'20px',cursor:'pointer'}}/>
                <FontAwesomeIcon icon={faPlus} style={{height:'20px',cursor:'pointer'}}/>
                <input placeholder='Type a message'/>
                <FontAwesomeIcon icon={faMicrophone} style={{height:'20px',cursor:'pointer'}}/>
            </div>
        </div>
    );
}

export default Chat;