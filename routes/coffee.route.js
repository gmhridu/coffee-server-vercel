const express = require('express');
const Coffee = require('../models/coffe.model');
const { createCoffee, getAllCoffees, deleteACoffee, getSingleCoffee, updateCoffee } = require('../controllers/coffee.controller');
const router = express.Router()


// create coffee

router.post('/', createCoffee);

// get all coffees
router.get('/', getAllCoffees);

// get single coffee by id
router.get('/:id', getSingleCoffee);

// update coffee by id
router.put('/:id', updateCoffee);

// delete a coffee
router.delete("/:id", deleteACoffee);


module.exports = router;