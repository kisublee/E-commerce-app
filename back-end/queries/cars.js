// Import database
const db = require("../db/dbConfig")



// Get every car
const getAllCars = async () => {
  try {

    const allCars = await db.any("SELECT * FROM cars");
    return allCars;

  } catch (err) {
    return err;
  }
};


// Get id
const getOneCar = async (id) => {
  try{
      const oneCar = await db.one('SELECT * FROM cars WHERE id=$1', id)
      return oneCar
  }catch (err) {
      return err
  }
}

// Create a new car post
const createCar = async (car) => {
  const {name,maker, vin, mpg_cty, mpg_hwy, engine, body_style, drive_type_awd, fuel_type, transmission_automatic, car_image, description, price, rating, year, mileage, exterior_color, interior_color, accidents, owners, posting_date, current_location, featured} = car;

  try {
      const newCar = await db.one("INSERT INTO cars (name, maker, vin, mpg_cty, mpg_hwy, engine, body_style, drive_type_awd, fuel_type, transmission_automatic, car_image, description, price, rating, year, mileage, exterior_color, interior_color, accidents, owners, posting_date, current_location, featured) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23) RETURNING *", [name,maker, vin, mpg_cty, mpg_hwy, engine, body_style, drive_type_awd, fuel_type, transmission_automatic, car_image, description, price, rating, year, mileage, exterior_color, interior_color, accidents, owners, posting_date, current_location, featured])

      return newCar

  } catch(err) {
    return err
  }
}

// Delete an existing car post 
const deleteCar = async (id) => {

  try {

    const removedCar = await db.one("DELETE FROM cars WHERE id=$1 RETURNING *", id)
    return removedCar
  }catch (err) {
    return err
  }

}

// Update an existing car post
const updateCar = async (id, car) => {

  const {name, maker, vin, mpg_cty, mpg_hwy, engine, body_style, drive_type_awd, fuel_type, transmission_automatic, car_image, description, price, rating, year, mileage, exterior_color, interior_color, accidents, owners, posting_date, current_location, featured} = car;
  try{

    const editedCar = await db.one("UPDATE cars SET name=$1, maker=$2, vin=$3, mpg_cty=$4, mpg_hwy=$5, engine=$6, body_style=$7, drive_type_awd=$8, fuel_type=$9, transmission_automatic=$10, car_image=$11, description=$12, price=$13, rating=$14, year=$15, mileage=$16, exterior_color=$17, interior_color=$18, accidents=$19, owners=$20, posting_date=$21, current_location=$22, featured=$23 WHERE id=$24 RETURNING *", [name, maker, vin, mpg_cty, mpg_hwy, engine, body_style, drive_type_awd, fuel_type, transmission_automatic, car_image, description, price, rating, year, mileage, exterior_color, interior_color, accidents, owners, posting_date, current_location, featured, id
    ])

    return editedCar;
    
  }catch(err) {
    return err;
  }
}

module.exports = {
  getAllCars,
  getOneCar,
  createCar,
  deleteCar,
  updateCar
};
