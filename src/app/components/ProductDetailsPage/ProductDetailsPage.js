import React from "react";

const ProductDetailsPage = ({ match }) => {
    return (
      <div>
        <h3>{ match.params.productId }</h3>
      </div>
    )
}

export default ProductDetailsPage;
