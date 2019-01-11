const products = require('./dummy-data/products.json');
const promotions = require('./dummy-data/promotions.json');

function getProducts(req, res) {
  res.json(products);
}

function getPromotions(req, res) {
  res.json(promotions);
}

function notFound(req, res) {
  res.status(404).send();
}

module.exports = { getProducts, getPromotions, notFound };
