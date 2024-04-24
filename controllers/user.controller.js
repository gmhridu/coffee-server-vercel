const User = require("../models/user.model");


// Create a new coffee
const createUser = async (req, res) => {
  try {
    const body = req.body;
    const result = await User.create(body)
    res.status(201).json(result)
  }
  catch (err) {
    res.status(500).json(err)
  }
}

// Get all coffees
const getAllUser = async (req, res) => {
  try {
    const result = await User.find()
    console.log('Coffee data fetched successfully:', result)
    res.status(200).json(result)
  }
  catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = { createUser, getAllUser };