import React from 'react';
import { FiFacebook, FiInstagram } from 'react-icons/fi';

import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding app__bg2" id="login">
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">4th Floor, Roof top of Burger King, Plot No A 32, Main Road, Indrapuri, Bhopal, Madhya Pradesh 462021</p>
        <p className="p__opensans">+919118641864</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.logo} alt="footer_logo" />
        <p className="p__opensans">&quot;A restaurant is a place where you can sit down and relax, and let someone else do the cooking for you.&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <a href="https://www.facebook.com/profile.php?id=61554551410975&mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
            <FiFacebook />
          </a>
          <a href="https://www.instagram.com/pbrcafe_bhopal/" target="_blank" rel="noopener noreferrer">
            <FiInstagram />
          </a>
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">11:00 am - 11:00 pm</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">11:00 am - 12:00 am</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2023 PBR Enterprises. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
