import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => {
  const googleMapsLink = "https://www.google.com/maps/place/PBR+-+Cafe+And+Restro/@23.2514101,77.4379012,14z/data=!4m6!3m5!1s0x397c4301c75b8881:0x17dea8e14f5c963b!8m2!3d23.2514101!4d77.4585006!16s%2Fg%2F11vjgqp48v?entry=ttu";

  return (
    <div className="app__bg app__wrapper section__padding" id="contact">
      <div className="app__wrapper_info">
        <SubHeading title="Contact" />
        <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Find Us</h1>
        <div className="app__wrapper-content">
          <p className="p__opensans">4th Floor, Roof top of Burger King, Plot No A 32, Main Road, Indrapuri, Bhopal, Madhya Pradesh 462021.</p>
          <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Opening Hours</p>
          <p className="p__opensans">Mon - Fri: 11:00 am - 11:00 pm</p>
          <p className="p__opensans">Sat - Sun: 11:00 am - 12:00 am</p>
        </div>
        <a href={googleMapsLink} target="_blank" rel="noopener noreferrer">
          <button type="button" className="custom__button" style={{ marginTop: '2rem' }}>Visit Us</button>
        </a>
      </div>

      <div className="welcome__img">
        <img src={images.welcome2} alt="findus_img" />
      </div>
    </div>
  );
};

export default FindUs;
