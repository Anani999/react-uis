import '../styles/Navbar.css';

const Navbar = () => {
    return (
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
        </nav>
    );
}


export default Navbar;