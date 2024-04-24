const mongoose = require('mongoose');

const dataProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  }

})

const DataProduct = mongoose.model('DataProduct', dataProductSchema);

module.exports = DataProduct;