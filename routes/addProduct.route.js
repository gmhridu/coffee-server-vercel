const express = require('express');
const addProductRouter = express.Router();
const { newProduct, getAllProducts, getSingleProduct, updateProduct } = require('../controllers/addProducts.controller');
const { deleteACoffee } = require('../controllers/coffee.controller');



// create a product 
addProductRouter.post('/', newProduct);

// get all products
addProductRouter.get('/', getAllProducts);

// get single product by Id
addProductRouter.get('/:id', getSingleProduct);

// update product by id 
addProductRouter.put('/:id', updateProduct);

// delete a product
addProductRouter.delete("/:id", deleteACoffee);


module.exports = addProductRouter;