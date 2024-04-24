const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const ConnectDB = require('./db/db');
const router = require('./routes/coffee.route');
const userRouter = require('./routes/user.route');
const addProductRouter = require('./routes/addProduct.route');

const corsConfig = {
  origin: "*",
  credential: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
}

dotenv.config();
const port = process.env.PORT || 3000;
const mongoUri = process.env.MONGODB_URI;

const app = express();
app.options("", cors(corsConfig))
app.use(cors(corsConfig));
app.use(express.json());

ConnectDB(mongoUri);

app.use('/coffees', router);
app.use('/users', userRouter);
app.use('/addProducts', addProductRouter);

app.use('*', (req, res) => {
  res.status(404).json({
    message: 'Page not found'
  });
});

app.listen(port, () => {
  console.log(`SIMPLE CRUD IS RUNNING ON PORT ${port}`);
});

process.on("unhandledRejection", (error, promise) => {
  console.log(`Error: ${error.message}`);
  // Close server & exit process
  server.close(() => process.exit(1));
});
