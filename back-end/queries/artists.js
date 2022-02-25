// Import database
const db = require("../db/dbConfig")

// Get every artist
const getAllArtists = async () => {
  try {

    const allArtists = await db.any("SELECT * FROM artists");
    return allArtists;

  } catch (err) {
    return err;
  }
};

const sortArtists = async () => {
  try{

    const sortedArtists = await db.any("SELECT * FROM artists ORDER BY price DESC")
    return sortedArtists
  } catch (err) {
    return err
  }
}
// Get artists based on keyword

const searchArtists = async (search) => {

    try{

      const searchedArtists = await db.any('SELECT * FROM artists WHERE art_type=$1', search)
      return searchedArtists
    }catch (err) {
      return err
    }
}

// Get id
const getOneArtist = async (id) => {
  try{
      const oneArtist = await db.one('SELECT * FROM artists WHERE id=$1', id)
      return oneArtist
  }catch (err) {
      return err
  }
}

// Create a new artist post
const createArtist = async (artist) => {
  const {name, art_type, price, rating, current_location, can_travel, services, service_images, description, featured} = artist

  try {
      const newArtist = await db.one("INSERT INTO artists (name, art_type, price, rating, current_location, can_travel, services, service_images, description, featured) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *", [name, art_type, price, rating, current_location, can_travel, services, service_images, description, featured])

      return newArtist

  } catch(err) {
    return err
  }
}

// Delete an existing artist post 
const deleteArtist = async (id) => {

  try {

    const removedArtist = await db.one("DELETE FROM artists WHERE id=$1 RETURNING *", id)
    return removedArtist
  }catch (err) {
    return err
  }

}

// Update an existing artist post
const updateArtist = async (id, artist) => {

    const {name, art_type, price, rating, current_location, can_travel, services, service_images, description, featured} = artist


  try{

    const editedArtist = await db.one("UPDATE artists SET name=$1, art_type=$2, price=$3, rating=$4, current_location=$5, can_travel=$6, services=$7, service_images=$8, description=$9, featured=$10 WHERE id=$11 RETURNING *", [name, art_type, price, rating, current_location, can_travel, services, service_images, description, featured, id])


    return editedArtist;
    
  }catch(err) {
    return err;
  }
}

module.exports = {
  getAllArtists,
  sortArtists,
  getOneArtist,
  createArtist,
  deleteArtist,
  updateArtist,
  searchArtists 
};
