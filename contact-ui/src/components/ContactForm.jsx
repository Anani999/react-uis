import '../styles/ContactForm.css';
import {useState} from 'react';
import Image from '../assets/contact.png';
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faVoicemail } from '@fortawesome/free-solid-svg-icons';

const ContactForm = () => {

    const [name , setName ] = useState('');
    const [email , setEmail ] = useState('');
    const [message , setMessage ] = useState('');

    const Submit = (e) => {
        e.preventDefault();

        alert(`Name : ${name}\nEmail: ${email}\n Message: ${message}`);

    }

    return (
        <div className='form-div'>
            <div className='left-div'>
                <div className='buttons'>
                    <button> <FontAwesomeIcon icon={faMessage} /> VIA SUPPORT CHAT</button>
                    <button> <FontAwesomeIcon icon={faPhone}/> VIA CALL </button>
                </div>
                <button><FontAwesomeIcon icon={faMessage} /> VIA EMAIL FROM</button>
                <form>
                    <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' />
                    <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Message'></textarea>
                    <button className='submit' type='submit' onClick={Submit}> Submit</button>
                </form>
            </div>
            <img src={Image} alt='My SVG' />
        </div>
    );
}

export default ContactForm;
