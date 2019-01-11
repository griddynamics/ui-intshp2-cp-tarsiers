import React from 'react';
import JoinUs from '../JoinUs/JoinUs';
import Promotions from '../Promotions/Promotions';
import WishListContainer from '../WishListContainer/WishListContainer';
import ProductContainer from '../ProductContainer/ProductContainer';

const HomePage = () => (
  <>
    <Promotions />
    <ProductContainer />
    <JoinUs />
    <WishListContainer />
  </>
);

export default HomePage;
