// DEPENDENCIES
const cors = require("cors");
const express = require("express");
// const fileUpload = require("express-fileupload")
const carsRoute = require("./controller/carController")
const artistsRoute = require("./controller/artsitController")
// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json()); // Parse incoming JSON
// app.use(fileUpload())

// ROUTES
app.get("/", (req, res) => {
  res.send("Hello, world!");
});



// Cars
app.use("/cars", carsRoute)
app.use("/artists", artistsRoute )

app.get("*", (req, res) => {
  console.log("Error Found");
  res.status(404).json({ error: "Page not found" });
});

// EXPORT
module.exports = app;
