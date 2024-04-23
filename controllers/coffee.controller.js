const Coffee = require("../models/coffe.model");


// Create a new coffee
const createCoffee = async (req, res) => {
  try {
    const body = req.body;
    const result = await Coffee.create(body)
    res.status(201).json(result)
  }
  catch (err) {
    res.status(500).json(err)
  }
}

// Get all coffees
const getAllCoffees = async (req, res) => {
  try {
    const result = await Coffee.find()
    console.log('Coffee data fetched successfully:', result)
    res.status(200).json(result)
  }
  catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

// Get Single Coffee By ID
const getSingleCoffee = async (req, res) => {
  try {
    const { id } = req.params;

    // Check if the coffee exists
    const coffee = await Coffee.findById({_id: id});

    res.status(201).json({
      message: "Coffee fetched successfully",
      coffee
    })

   
  } catch (err) {
    console.error("Error retrieving coffee:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

// update coffee by ID
const updateCoffee = async (req, res) => {
  try {
    const body = req.body;
    const { id } = req.params;


    try {
      // Check if the coffee exists
      const coffee = await Coffee.findByIdAndUpdate({ _id: id }, body, {new: true, runValidators: true });
      res.status(201).json({
        message: "Coffee updated successfully",
        coffee
      });
    }
    catch (err) {
      console.error("Error updating coffee:", err);
      res.status(500).json({ error: "Internal server error" });
    }
  }
  catch (err) {
    console.error("Error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
}

// Delete a listed coffee by ID
const deleteACoffee = async(req, res) => {
 try {
    const { id } = req.params;
    
    // Check if the user exists
    try {
      // Delete the user
      const result = await Coffee.findByIdAndDelete({_id: id});
        res.status(200).json({ message: "Coffee deleted successfully", result });
      } catch (err) {
        console.error("Error deleting user:", err);
        res.status(500).json({ error: "Internal server error" });
      }
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ error: "Internal server error" });
  }

}


module.exports = { createCoffee, getAllCoffees, deleteACoffee, getSingleCoffee, updateCoffee };