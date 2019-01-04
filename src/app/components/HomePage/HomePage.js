import React from 'react';
import Slider, { slidesData } from '../Slideshow/sliderComponents/Slider';

const HomePage = () => (
  <div>
    <Slider slides={slidesData} />
  </div>
);

export default HomePage;
