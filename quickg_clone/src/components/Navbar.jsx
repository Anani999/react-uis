import { faBars, faHamburger, faHamsa, faMarsAndVenus, faX } from '@fortawesome/free-solid-svg-icons';
import '../styles/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

const Navbar = () => {
    const [display , setDisplay] = useState('none');


    const TogleMenu = () => {   
        setDisplay(display === 'none' ? 'block' : 'none')
    };

    return (
        <>
        <nav>
            <div className="nav-left-div">
                <div className="nav-left-logo">
                    <img src="https://www.quickg.eu/static/media/quickg-logo.e4af0851b7c517d226a00c454018f9a5.svg" alt="Quickg" />
                </div>
                <div className="options">
                    <li>Home</li>
                    <li>Pricing</li>
                    <li>Discover</li>
                    <li>Blog</li>
                </div>
            </div>
            <div className='nav-right-div'>
                <li>Sign In</li>
                <li>Sign Up</li>
            </div>

            {/* Hamburger */}
            <div className='hamburger'>
                <FontAwesomeIcon icon={faBars} style={{height:'30px'}} onClick={TogleMenu}/>
            </div>
        </nav>

        <div className='popMenu' style={{display:display}}>
            <li>Home</li>
            <li>Pricing</li>
            <li>Discover</li>
            <li>SignUp</li>
            <li>Login</li>
            <FontAwesomeIcon icon={faX} className='into' onClick={TogleMenu}/>
        </div>

     </>
    );
}


export default Navbar;