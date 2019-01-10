import React from 'react';
import JoinUs from '../JoinUs/JoinUs';
import Promotions from '../Promotions/Promotions';

const HomePage = () => (
  <div className="col-9 slider__wrapper">
    <Promotions />
    <JoinUs />
  </div>
);

export default HomePage;
