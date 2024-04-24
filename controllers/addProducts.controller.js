const DataProduct = require("../models/addProduct.model");




// Create a new product
const newProduct = async (req, res) => {
  try {
    const body = req.body;
    const result = await DataProduct.create(body)
    res.status(201).json(result)
  }
  catch (err) {
    res.status(500).json(err)
  }
}

// Get all products

const getAllProducts = async (req, res) => {
  try {
    const result = await DataProduct.find()
    console.log('Product data fetched successfully:', result)
    res.status(200).json(result)
  }
  catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

// Get Single Product By ID

const getSingleProduct = async (req, res) => {
  try {
    const result = await DataProduct.findById(req.params.id)
    console.log('Product data fetched successfully:', result)
    res.status(200).json(result)
  }
  catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

// update product by id

const updateProduct = async (req, res) => {
  try {
    const body = req.body;
    const { id } = req.params;
    const result = await DataProduct.findByIdAndUpdate({_id: id}, body, {new: true, runValidators: true })
    console.log('Product data updated successfully:', result)
    res.status(200).json(result)
  }
  catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

// delete product by id

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await DataProduct.findByIdAndDelete({_id: id})
    console.log('Product data deleted successfully:', result)
    res.status(200).json(result)
  }
  catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
}


module.exports = { newProduct, getAllProducts, getSingleProduct, updateProduct, deleteProduct };

