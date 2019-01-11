import React from 'react';

const SliderIndicator = props => {
  const { index, onClick, activeIndex } = props;

  return (
    <li>
      <button
        className={
          index === activeIndex
            ? 'slider__indicator slider__indicator--active'
            : 'slider__indicator'
        }
        onClick={onClick}
        type="button"
      />
    </li>
  );
};

export default SliderIndicator;
