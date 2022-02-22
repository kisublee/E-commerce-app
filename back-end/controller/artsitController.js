// Dependencies
const express = require("express");
const { as } = require("pg-promise");

// Middleware 
const artistRoute = express.Router();

// Queries
const { getAllArtists,
    getOneArtist,
    createArtist,
    deleteArtist,
    updateArtist} = require("../queries/artists")

// Get all cars
artistRoute.get("/", async (_, res) => {

const allArtists = await getAllArtists();

allArtists.length !== 0 ? res.status(200).json({
    success:true,
    payload: allArtists
}) : res.status(404).json({error: "Database you are trying to access is empty"})

})


// Get a specific car by id
artistRoute.get("/:id", async (req, res) => {
    const { id } = req.params;
    const artist = await getOneArtist(id);
  
    if (artist.id) {
      res.status(200).json({
        success: true,
        payload: artist,
      });
    } else {
      res.status(500).json({
        success: false,
        payload: "not found",
      });
    }
  });

// Create a new car post  
artistRoute.post("/", async (req, res) => {
    const artist = req.body;
    const newArtist = await createArtist(artist)

    res.status(200).json({
        success: true,
        payload: newArtist,
    })
})

// Delete an existing car post
artistRoute.delete("/:id", async (req, res) => {
  const {id} = req.params;

  const removedArtist = await deleteArtist(id)
  
  res.status(200).json({
    success: true,
    payload: removedArtist,
  })

})

// Update an existing car post 
artistRoute.put("/:id", async (req, res) => {
  const {id} = req.params;
  const artist = req.body;

  const updatedArtist = await updateArtist(id, artist)

  res.status(200).json(updatedArtist)

})


module.exports = artistRoute;