const express = require('express');
const router = express.Router();
const {getProducts, updateProduct, createProduct, deleteProduct} = require('../controllers/productController')

router.get('/products', getProducts);

router.put('/products/:id', updateProduct)

router.post('/products', createProduct)

router.delete("/products/:id", deleteProduct);

module.exports = router;