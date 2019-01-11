import React from 'react';
import ProductItem from '../ProductItem/ProductItem';
import HttpService from '../../../utils/http.service';
import appConfig from '../../../config/appConfig';
import styles from './ProductContainer.module.scss';

class ProductContainer extends React.Component {
  title = 'New Arrivals';

  state = { products: [] };

  componentDidMount() {
    HttpService.get(appConfig.apiResources.products).then(res =>
      this.setState({ products: [...res.products] })
    );
  }

  render() {
    const { products } = this.state;
    const titleArr = this.title.split(' ');
    const productItems = products.map(product => (
      <ProductItem key={product.id} {...product} />
    ));

    return (
      <section className={`${styles.products} container`}>
        <div className={styles.products_heading}>
          <h2>
            <span className="highlighted">{titleArr[0]}</span>
            &nbsp;
            {titleArr[1]}
          </h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </p>
        </div>
        <div className={styles.products_list}>{productItems}</div>
      </section>
    );
  }
}

export default ProductContainer;
