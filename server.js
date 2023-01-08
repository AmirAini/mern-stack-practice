const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const items = require("./routes/api/items");

const app = express();

//Bodyparser Middleware
app.use(bodyParser.json());

// DB config (get specific)
const db = require("./config/key").mongoURI;

// Connect to Mongo (promise)
mongoose
  .connect(db)
  .then(() => console.log("Mongodb connected"))
  .catch(() => console.log("error"));

app.use("/api/items", items);
//run the server
const port = process.env.port || 5000;

//app to listen to port
app.listen(port, () => console.log(`connected to port ${port}`));
