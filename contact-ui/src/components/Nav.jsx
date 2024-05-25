import '../styles/Nav.css'
import Logo from '../assets/logo.png'

const Nav = () => {
    return (
        <nav>
            <img src={Logo} alt="logo"></img>
            <div className="nav-links">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;