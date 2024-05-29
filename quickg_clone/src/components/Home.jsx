import HomeLogo from '../assets/home_logo.svg';
import '../styles/Home.css'
const Home = () => {
    return (
        <div className="home-main-div">
            <div className="img-div">
                <img src={HomeLogo} alt="" />
            </div>
            <div className="text-div">
                <div className='text-div2'>
                <img src="https://www.quickg.eu/static/media/quickg-logo.e4af0851b7c517d226a00c454018f9a5.svg" alt="Quickg"/>
                <h1>Create a bio site and monetize your online presence.</h1>
                <p>Access payment , tract analytics , share affiliate links and showcase you skills easily. All-in-one social media solution !</p>
                <p>Ready to jumpstart your online potential ?</p>
                <button>Lets Start Now </button>
                </div>
               
            </div>
        </div>
    );
}

export default Home;