import nikeLogo from '../assets/images/nike-logo.jpg';

const Navbar = () => {
  return (
      <nav className='container'>
        <div className="logo">
          <img className="logopic" src={nikeLogo} alt="logo" />
        </div>

        <ul>
          <li>Menu</li>
          <li>Location</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        <button>login</button>
      </nav>
  );
};

export default Navbar;
