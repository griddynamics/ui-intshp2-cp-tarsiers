import React, { Component } from 'react';
import Slider from '../Slideshow/sliderComponents/Slider';
import HttpService from '../../../utils/http.service';
import appConfig from '../../../config/appConfig';

export default class Promotions extends Component {
  constructor(props) {
    super(props);
    this.state = { promotions: [] };
  }

  componentDidMount = () => {
    HttpService.get(appConfig.apiResources.promotions).then(myJson => {
      this.setState({ promotions: myJson.slides });
    });
  };

  render() {
    const { promotions } = this.state;

    return <Slider promotions={promotions} />;
  }
}
