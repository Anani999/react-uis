import Logo from '../assets/images/logo.png'
const Nav = () => {
    return(
        <nav>
            <div className="logo">
                <img src={Logo} />
            </div>
            <div className='nav-items'>
                <ul>
                    <li>MENU</li>
                    <li>LOCATION</li>
                    <li>ABOUT</li>
                    <li>CONTACT</li>
                </ul>
            </div>
            <div className='nav-login'>
                <button>Login</button>
            </div>
        </nav>
    );
}

export default Nav;