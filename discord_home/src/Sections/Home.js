import Nav from "../components/Nav";
import '../styles/section/Home.css';
import Hero from '../components/Hero';

const Home = () => {
    return(
        <div className="home">
            <Nav/>
            <Hero/>
        </div>
    );
}

export default Home;