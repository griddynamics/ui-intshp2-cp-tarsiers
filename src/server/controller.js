const products = require('./dummy-data/products.json');

function getProducts(req, res) {
  res.json(products);
}

function notFound(req, res) {
  res.status(404).send();
}

module.exports = {
  getProducts,
  notFound
};
