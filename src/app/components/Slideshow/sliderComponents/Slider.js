import React, { Component } from 'react';
import { SliderLeftArrow, SliderRightArrow } from './Arrows';
import SliderIndicator from './Indicators';
import Slide from './Slides';

import '../style/Slider.scss';

export const slidesData = [
  {
    id: 0,
    content: 'http://www.cool-cities.com/mobile/bmw-portrait/munich/img/2_3.jpg'
  },
  {
    id: 1,
    content: 'https://latteluxurynews.com/wp-content/uploads/2018/11/iStock-471758019-NEW-MALTA-IMAGE.jpg'
  },
  {
    id: 2,
    content: 'https://cdn.dvidshub.net/media/thumbs/photos/1808/4690044/1000w_q95.jpg'
  },
  {
    id: 3,
    content: 'https://guncarrier.com/wp-content/uploads/2015/08/remington-1100-ft-image.jpg'
  }
];

export default class Slider extends Component {
  constructor(props) {
    super(props);

    this.goToSlide = this.goToSlide.bind(this);
    this.goToPrevSlide = this.goToPrevSlide.bind(this);
    this.goToNextSlide = this.goToNextSlide.bind(this);

    this.state = {
      activeIndex: 0
    };
  }

  componentDidMount() {
    setInterval(this.goToNextSlide, 2000);
  }

  goToSlide(index) {
    this.setState({
      activeIndex: index
    });
  }

  goToPrevSlide(e) {
    if (e) {
      e.preventDefault();
    }
    const { activeIndex } = this.state;
    let index = activeIndex;
    const { slides } = this.props;
    const slidesLength = slides.length;

    if (index < 1) {
      index = slidesLength;
    }

    --index;

    this.setState({
      activeIndex: index
    });
  }

  goToNextSlide(e) {
    if (e) {
      e.preventDefault();
    }
    const { activeIndex } = this.state;
    let index = activeIndex;
    const { slides } = this.props;
    const slidesLength = slides.length - 1;

    if (index === slidesLength) {
      index = -1;
    }

    ++index;

    this.setState({
      activeIndex: index
    });
  }

  render() {
    const { slides } = this.props;
    const { activeIndex } = this.state;
    return (
      <div className="slider">
        <SliderLeftArrow onClick={e => this.goToPrevSlide(e)} />

        <ul className="slider__slides">
          {slides.map((slide, id) => (
            <Slide key={slide.id} index={id} activeIndex={activeIndex} slide={slide} />
          ))}
        </ul>

        <SliderRightArrow onClick={e => this.goToNextSlide(e)} />

        <ul className="slider__indicators">
          {slides.map((slide, id) => (
            <SliderIndicator
              key={slide.id}
              index={id}
              activeIndex={activeIndex}
              isActive={activeIndex === id}
              onClick={() => this.goToSlide(id)}
            />
          ))}
        </ul>
      </div>
    );
  }
}
