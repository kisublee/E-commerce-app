DROP DATABASE IF EXISTS cta_dev;
CREATE DATABASE cta_dev;

\c cta_dev;

DROP TABLE IF EXISTS test;

CREATE TABLE test (
    id SERIAL PRIMARY KEY, 
    name TEXT
);

DROP TABLE IF EXISTS cars CASCADE;

CREATE TABLE cars (
    id SERIAL PRIMARY KEY,
    name VARCHAR (100) NOT NULL,
    maker TEXT NOT NULL,
    vin VARCHAR (17) NOT NULL,
    mpg_cty numeric NOT NULL,
    mpg_hwy numeric NOT NULL,
    engine TEXT NOT NULL,
    body_style TEXT NOT NULL,
    drive_type TEXT NOT NULL,
    fuel_type TEXT NOT NULL,
    transmission_automatic BOOLEAN DEFAULT FALSE,
    car_image VARCHAR[],
    description TEXT,
    price numeric DEFAULT 1,
    rating INTEGER CHECK ( rating BETWEEN 0 AND 5),
    year INTEGER NOT NULL,
    mileage INTEGER NOT NULL,
    exterior_color TEXT NOT NULL,
    interior_color TEXT NOT NULL,
    accidents TEXT NOT NULL,
    owners INTEGER DEFAULT 1,
    posting_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    current_location TEXT NOT NULL,
    featured BOOLEAN DEFAULT FALSE
);

DROP TABLE IF EXISTS artists CASCADE;

CREATE TABLE artists (
    id SERIAL PRIMARY KEY,
    name VARCHAR (150) NOT NULL,
    art_type TEXT NOT NULL,
    price numeric DEFAULT 0,
    rating INTEGER CHECK ( rating BETWEEN 0 AND 5),
    current_location TEXT NOT NULL,
    can_travel BOOLEAN DEFAULT FALSE,
    services TEXT NOT NULL,
    service_images VARCHAR[],
    description TEXT,
    featured BOOLEAN DEFAULT FALSE
)