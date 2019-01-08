import React, { Component } from 'react';
import { SliderLeftArrow, SliderRightArrow } from './Arrows';
import SliderIndicator from './Indicators';
import Slide from './Slides';

import '../style/Slider.scss';
import HttpService from '../../../../utils/http.service';

const serverUrl = 'http://localhost:3300/api/products';

export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      isStopped: false,
      products: []
    };
  }

  componentDidMount = () => {
    HttpService.get(serverUrl).then(myJson => {
      this.setState({
        products: myJson.slides
      });
    });
    this.activate();
  };

  componentWillUnmount = () => {
    this.deactivate();
  };

  activate = () => {
    this.interval = setInterval(this.goToNextSlide, 3000);
  };

  deactivate = () => {
    clearInterval(this.interval);
  };

  isStoppedCheck = () => {
    const { isStopped } = this.state;

    if (!isStopped) {
      this.setState({
        isStopped: true
      });
    }
  };

  handleClickIndicator = id => {
    this.goToSlide(id);
    this.isStoppedCheck();
  };

  handleClickLeft = () => {
    this.goToPrevSlide();
    this.isStoppedCheck();
  };

  handleClickRight = () => {
    this.goToNextSlide();
    this.isStoppedCheck();
  };

  goToSlide = index => {
    this.setState({
      activeIndex: index
    });
  };

  goToPrevSlide = e => {
    if (e) {
      e.preventDefault();
    }
    const { activeIndex, products } = this.state;
    let index = activeIndex;
    const slidesLength = products.length;

    if (index < 1) {
      index = slidesLength;
    }

    --index;

    this.setState({
      activeIndex: index
    });
  };

  goToNextSlide = e => {
    if (e) {
      e.preventDefault();
    }
    const { activeIndex, products } = this.state;
    let index = activeIndex;
    const slidesLength = products.length - 1;

    if (index === slidesLength) {
      index = -1;
    }

    ++index;

    this.setState({
      activeIndex: index
    });
  };

  render() {
    const { isStopped, activeIndex, products } = this.state;

    return (
      <div className="slider" onMouseEnter={this.deactivate} onMouseLeave={isStopped ? null : this.activate}>
        <SliderLeftArrow onClick={() => this.handleClickLeft()} />

        <ul className="slider__slides">
          {products.map((slide, id) => (
            <Slide key={slide.id} index={id} activeIndex={activeIndex} slide={slide} />
          ))}
        </ul>

        <SliderRightArrow onClick={() => this.handleClickRight()} />

        <ul className="slider__indicators">
          {products.map((slide, id) => (
            <SliderIndicator
              key={slide.id}
              index={id}
              activeIndex={activeIndex}
              isActive={activeIndex === id}
              onClick={() => this.handleClickIndicator(id)}
            />
          ))}
        </ul>
      </div>
    );
  }
}
