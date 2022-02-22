// Dependencies
const express = require("express");
const { as } = require("pg-promise");

// Middleware 
const carsRoute = express.Router();

// Queries
const {getAllCars, getOneCar, createCar, deleteCar, updateCar} = require("../queries/cars")

// Get all cars
carsRoute.get("/", async (_, res) => {

const allCars = await getAllCars();

allCars.length !== 0 ? res.status(200).json({
    success:true,
    payload: allCars
}) : res.status(404).json({error: "Database you are trying to access is empty"})

})


// Get a specific car by id
carsRoute.get("/:id", async (req, res) => {
    const { id } = req.params;
    const car = await getOneCar(id);
  
    if (car.id) {
      res.status(200).json({
        success: true,
        payload: car,
      });
    } else {
      res.status(500).json({
        success: false,
        payload: "not found",
      });
    }
  });

// Create a new car post  
carsRoute.post("/", async (req, res) => {
    const car = req.body;
    const newCar = await createCar(car)

    res.status(200).json({
        success: true,
        payload: newCar,
    })
})

// Delete an existing car post
carsRoute.delete("/:id", async (req, res) => {
  const {id} = req.params;

  const removedCar = await deleteCar(id)
  
  res.status(200).json({
    success: true,
    payload: removedCar,
  })

})

// Update an existing car post 
carsRoute.put("/:id", async (req, res) => {
  const {id} = req.params;
  const car = req.body;

  const updatedCar = await updateCar(id, car)

  res.status(200).json(updatedCar)

})


module.exports = carsRoute;