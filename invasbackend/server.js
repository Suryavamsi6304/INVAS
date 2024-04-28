//server.js
const express = require("express");
const mongoose = require("mongoose");

const items = require("./models/MenueModels");
const user = require("./models/UserModels");
const cors = require("cors");

const PORT = 3000;

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/getitems", async (req, res) => {
  try {
    const disitems = await items.find({});
    res.status(200).json(disitems);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

app.get("/getuserdetails", async (req, res) => {
  try {
    const userdetails = await user.find({});
    res.status(200).json(userdetails);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

app.post("/addmenueitem", async (req, res) => {
  try {
    const item = await items.create(req.body);
    res.status(200).json(item);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});
app.post("/registrenewuser", async (req, res) => {
  try {
    const userdetails = await user.create(req.body);
    res.status(200).json(userdetails);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

mongoose
  .connect("mongodb://0.0.0.0:27017/invas")
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
