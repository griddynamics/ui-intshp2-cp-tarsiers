import React from 'react';

const Slide = props => {
  const { index, activeIndex, slide } = props;
  return (
    <li className={index === activeIndex ? 'slider__slide slider__slide--active' : 'slider__slide'}>
      <img src={slide.content} alt="slideImg" />
    </li>
  );
};

export default Slide;
