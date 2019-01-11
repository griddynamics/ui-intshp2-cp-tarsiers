const products = require('./dummy-data/products.json');
const banner = require('./dummy-data/baner.json');
const promotions = require('./dummy-data/promotions.json');

function getProducts(req, res) {
  res.json(products);
}

function getBanner(req, res) {
  res.json(banner);
}

function getPromotions(req, res) {
  res.json(promotions);
}

function notFound(req, res) {
  res.status(404).send();
}

module.exports = {
  getProducts,
  getBanner,
  getPromotions,
  notFound
};
