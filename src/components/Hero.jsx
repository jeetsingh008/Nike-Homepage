import flipkartlogo from '../assets/images/flipkart.png';
import amazonlogo from '../assets/images/amazon.png';
import shoeImage from '../assets/images/shoe_image.png';

const Hero = () => {
  return (
    <main className='hero container'>
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>YOUR FEET DESERVE THE BEST AND HERE TO HELP YOU WITH OUR SHOES.</p>

        <div className="hero-button">
            <button>Shop Now</button>
            <button className='secondary-btn'>Category</button>
        </div>

        <div className="shopping">
            <p>Also Available On</p>
            <div className="brand-icons">
                <img src={flipkartlogo} alt="amazon-icon" />
                <img src={amazonlogo} alt="amazon-icon" />
            </div>
        </div>
      </div>
      <div className="hero-image">
        <img src={shoeImage} alt="hero-image" />
      </div>
    </main>
  );
};

export default Hero;
