import React from 'react';

const SliderLeftArrow = props => {
  const { onClick } = props;

  return (
    <button
      className="slider__arrow slider__arrow--left"
      onClick={onClick}
      type="button"
    >
      <span className="fa fa-2x fa-angle-left" />
    </button>
  );
};

const SliderRightArrow = props => {
  const { onClick } = props;

  return (
    <button
      className="slider__arrow slider__arrow--right"
      onClick={onClick}
      type="button"
    >
      <span className="fa fa-2x fa-angle-right" />
    </button>
  );
};

export { SliderLeftArrow, SliderRightArrow };
