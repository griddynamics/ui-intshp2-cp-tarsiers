import React from 'react';
import initialImg from '../../../../assets/slideshow-imgs/initial-img.png';

const Slide = props => {
  const { index, activeIndex } = props;

  return (
    <li className={index === activeIndex ? 'slider__slide slider__slide--active' : 'slider__slide'}>
      <img src={initialImg} alt="slideImg" />
    </li>
  );
};

export default Slide;
