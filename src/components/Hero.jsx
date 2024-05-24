import flipcart_logo from '../assets/images/flipkart.png';
import amazon_logo from '../assets/images/amazon.png';
import show_image from '../assets/images/hero-image.png';

const Hero = () => {
    return(
        <div className='Hero'>
            <div className="left-her">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>YOUR FEET DESERVE THE BEST AND WHERE THERE TO HELP TYOU WITHE OUR SHOESYOUR FEET DESERVE THE BEST AND WHERE THERE TO HELP  </p>
                <div className="shop-div">
                    <button>Show Now</button>
                    <button className='category-button' >Category</button>
                </div>
                <div className="final">
                    <p>Also Available On</p>
                    <div>
                        <img src={flipcart_logo}></img>
                        <img src={amazon_logo}></img>
                    </div>
                </div>
            </div>
            <div className="right-her">
                <img src={show_image}></img>

            </div>
        </div>
    );
}

export default Hero;