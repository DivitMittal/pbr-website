import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import './Navbar.css';
import images from '../../constants/images';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  const handleBookTableClick = () => {
    window.location.href = 'tel:+919118641864';
    setToggleMenu(false);
  };

  const handleSmallScreenLinkClick = () => {
    setToggleMenu(false);
  };

  const body = document.body;
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    console.log(currentScroll);
    if(currentScroll <= 0){
      body.classList.remove('scroll-down');
    }

    if(currentScroll > lastScroll && !body.classList.contains('scroll-down')) {
      body.classList.add('scroll-down')
    }

    if(currentScroll < lastScroll) {
      body.classList.remove('scroll-down');
    }

    lastScroll = currentScroll;
  })

  return (
    <nav className='app_navbar'>
      <div className='app_navbar-logo'>
        <img src={images.navlogo} alt="app logo" />
      </div>
      <ul className='app_navbar-links'>
        <li className='p_opensans'><a href="#home" onClick={handleSmallScreenLinkClick}>HOME</a></li>
        <li className='p_opensans'><a href="#about" onClick={handleSmallScreenLinkClick}>ABOUT</a></li>
        <li className='p_opensans'><a href="#menu" onClick={handleSmallScreenLinkClick}>MENU</a></li>
        <li className='p_opensans'><a href="#contact" onClick={handleSmallScreenLinkClick}>CONTACT US</a></li>
      </ul>
      <div className='app_navbar-login'>
        <a href="#login" className='p_opensans' onClick={handleBookTableClick}>BOOK A TABLE</a>
        <div />
      </div>
      <div className="app_navbar-smallscreen">
        <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className='app_navbar-smallscreen_overlay flex_center slide-bottom'>
            <MdOutlineRestaurantMenu fontSize={27} className='overlay_close' onClick={() => setToggleMenu(false)} />
            <ul className='app_navbar-smallscreen_links'>
              <li className='p_opensans'><a href="#home" onClick={handleSmallScreenLinkClick}>HOME</a></li>
              <li className='p_opensans'><a href="#about" onClick={handleSmallScreenLinkClick}>ABOUT</a></li>
              <li className='p_opensans'><a href="#menu" onClick={handleSmallScreenLinkClick}>MENU</a></li>
              <li className='p_opensans'><a href="#contact" onClick={handleSmallScreenLinkClick}>CONTACT US</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
