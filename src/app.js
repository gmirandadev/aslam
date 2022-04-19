
const express = require("express");
const bodyParser = require('body-parser');
const applyUserRoute = require('./routes/user');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

const PORT = process.env.PORT || 3339;

app.use(bodyParser.json());
applyUserRoute(app);

app.listen(PORT, (err) => {
  if (err) {
    console.error(`Error when tried to run aslam. Error: ${err.message}. Exiting...`);
  }
  console.log(`Running Aslam: I am the Narnia Creator! I'm in the port ${PORT}`);
});