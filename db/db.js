const mongoose = require('mongoose');

// connecting to MongoDB
const ConnectDB = (url) => {
  mongoose.connect(url)
    .then(() => console.log('MongoDB Connected...'))
   .catch(() => console.log('Could not connect to MongoDB'));
}

module.exports = ConnectDB;