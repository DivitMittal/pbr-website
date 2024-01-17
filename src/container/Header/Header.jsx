

import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => {
  const handleExploreMenuClick = () => {
    const pdfUrl =  "https://drive.usercontent.google.com/u/0/uc?id=1IwDVLIw4R_dG-tOSP-JE13N_Y1WvJm40&export=download"
  
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.target = '_blank';
    link.download = "m.pdf"
    link.click();
  };
  

  return (
    <div className="app__header app__bg2 app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <SubHeading title="Chase the new flavour" />
        <h1 className="app__header-h1">The Key To Fine Dining</h1>
        <p className="p__opensans" style={{ margin: '2rem 0' }}>
          Café by day, Nightclub by night – a versatile destination offering serene
          daytime coffee moments and transforming into a lively, electrifying nightclub
          experience after sunset. Join us for the best of both worlds.
        </p>
        <button type="button" className="custom__button" onClick={handleExploreMenuClick}>
          Explore Menu
        </button>
      </div>

     { <div className="welcome__img">
        <img src={images.welcome3} alt="header_img" />
      </div>}
    </div>
  );
};

export default Header;
