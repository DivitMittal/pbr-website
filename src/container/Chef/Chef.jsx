import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__wrapper section__padding app__bg">
    <div className="app__wrapper_img test__img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">Behind every great meal is a chef who enjoys what they do. Passion is the best spice.</p>
        </div>
        <p className="p__opensans"> Hey there, I'm Hari, your friendly neighborhood chef! I'm all about making delicious food that brings a smile to your face. I love playing with fresh ingredients and creating dishes that are both comforting and exciting. I aim to make every meal a delightful experience. Join me on this tasty adventure, where good food meets good vibes! </p>
      </div>

      <div className="app__chef-sign">
        <p>Chef Hari</p>
        <p className="p__opensans">Head Chef</p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;
