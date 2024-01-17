import React from 'react';
import './Loading.css';
import { images } from '../../constants';

const Loading = () => (
  <div className="loading-overlay">
    <img src={images.logo} alt="loading" className="loading-image" />
  </div>
);

export default Loading;
