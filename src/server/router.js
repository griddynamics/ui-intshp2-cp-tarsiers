const express = require('express');
const controller = require('./controller');

const router = express.Router();

router.get('/api/products', controller.getProducts);
router.get('*', controller.notFound);

module.exports = router;
