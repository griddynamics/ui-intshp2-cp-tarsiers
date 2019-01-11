import React from 'react';
import JoinUs from '../JoinUs/JoinUs';
import Promotions from '../Promotions/Promotions';
import WishListContainer from '../WishListContainer/WishListContainer';
import ProductContainer from '../ProductContainer/ProductContainer';
import './_homepage.scss';

const HomePage = () => (
  <div className="slider__wrapper homepage">
    <Promotions />
    <ProductContainer />
    <JoinUs />
    <WishListContainer />
  </div>
);

export default HomePage;
