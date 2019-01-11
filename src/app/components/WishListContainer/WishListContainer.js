import React from 'react';
import WishListItem from '../WishListItem/WishListItem';

import './WishListContainer.scss';

const products = [
  {
    id: '1',
    name: 'Nike jacket',
    manufacturer: 'nike',
    price: '100',
    img: 'https://chokodesign.com/img/600/600x700_quantum-kid.jpg'
  },
  {
    id: 2,
    name: 'Adidas jacket',
    manufacturer: 'adidas',
    price: '100',
    img: 'https://chokodesign.com/img/600/600x700_quantum-kid.jpg'
  },
  {
    id: 3,
    name: 'The north force',
    manufacturer: 'nforce',
    price: '200',
    img: 'https://chokodesign.com/img/600/600x700_quantum-kid.jpg'
  }
];

localStorage.clear();
localStorage.setItem('products', JSON.stringify(products));

const WishListContainer = () => {
  const wishList = JSON.parse(localStorage.getItem('products'));
  const Items = wishList
    ? wishList.map(item => <WishListItem key={item.id} {...item} />)
    : null;

  return wishList ? (
    <div className="wishlist-container">
      <h2 className="wishlist-title">
        Wish
        <span> List</span>
      </h2>
      <p>Lorem ipsum dolor sit amet here goes important text</p>
      <div className="wishlist-block">{Items}</div>
    </div>
  ) : null;
};

export default WishListContainer;
