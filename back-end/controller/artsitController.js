// Dependencies
const express = require("express");
const { as } = require("pg-promise");

// Middleware 
const artistRoute = express.Router();

// Queries
const { getAllArtists,
    sortArtists,
    getOneArtist,
    createArtist,
    deleteArtist,
    updateArtist,
    searchArtists } = require("../queries/artists")

// Get all artists
artistRoute.get("/", async (req, res) => {

const allArtists = await getAllArtists();

const {type} = req.query

if (type === "painting" || type === "photography" || type === "balloon") {
  const searchedArtists = await searchArtists(type)
  return res.json({
    success:true,
    payload: searchedArtists
  })
} 

allArtists.length !== 0 ? res.status(200).json({
    success:true,
    payload: allArtists
}) : res.status(404).json({error: "Database you are trying to access is empty"})

})

// Sort artists
// I used req.query before. I think it is better to go with it. change this later
artistRoute.get("/desc", async (_, res) => {
  const sortedArtists = await sortArtists()

  sortedArtists.length !== 0 ? res.status(200).json({
    success:true,
    payload: sortedArtists
}) : res.status(404).json({error: "Database you are trying to access is empty"})
})




// Get a specific artists by id
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

// Create a new artist post  
artistRoute.post("/", async (req, res) => {
    const artist = req.body;
    const newArtist = await createArtist(artist)

    res.status(200).json({
        success: true,
        payload: newArtist,
    })
})

// Delete an existing artist post
artistRoute.delete("/:id", async (req, res) => {
  const {id} = req.params;

  const removedArtist = await deleteArtist(id)
  
  res.status(200).json({
    success: true,
    payload: removedArtist,
  })

})

// Update an existing artist post 
artistRoute.put("/:id", async (req, res) => {
  const {id} = req.params;
  const artist = req.body;

  const updatedArtist = await updateArtist(id, artist)

  res.status(200).json(updatedArtist)

})


module.exports = artistRoute;