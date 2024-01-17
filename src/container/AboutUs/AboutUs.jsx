import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Discover the perfect synergy of day and night at PBR - Cafe & Restro. Dive into the tranquility of our cozy cafe during the day, savoring artisanal coffees and delightful treats. As the sun sets, embrace the dynamic shift as our space transforms into a lively club, pulsating with beats and vibrant energy. PBR - Cafe & Restro is your destination for diverse experiences – from serene afternoons to lively nights, creating memorable moments at the intersection of relaxation and revelry.</p>
       
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our Vision</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Our vision at PBR - Cafe & Restro is to be a dynamic retreat that seamlessly adapts to the changing rhythms of day and night. We aspire to cultivate an inclusive space where individuals gather to relish serene daytime moments with artisanal coffees and transition seamlessly into vibrant nights filled with pulsating beats. PBR - Cafe & Restro aims to be the heart of diverse experiences, creating lasting memories at the crossroads of relaxation and revelry.</p>
         
      </div>
      </div>
    </div>
  
);

export default AboutUs;