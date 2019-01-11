import React, { Component } from 'react';
import { DisplayFront, DisplayDetails } from './ProductDisplay';
import styles from './ProductItem.module.scss';

class ProductItem extends Component {
  state = { showDetails: false };

  showFront = () => this.setState({ showDetails: false });

  showDetails = () => this.setState({ showDetails: true });

  clickHandle = (e, id) => {
    e.preventDefault();
    console.log(id);
  };

  render() {
    const { showDetails } = this.state;
    const cardView = showDetails ? (
      <DisplayDetails {...this.props} clickHandler={this.clickHandle} />
    ) : (
      <DisplayFront {...this.props} />
    );

    return (
      <div
        className={styles.product_card}
        onMouseEnter={this.showDetails}
        onMouseLeave={this.showFront}
      >
        {cardView}
      </div>
    );
  }
}

export default ProductItem;
