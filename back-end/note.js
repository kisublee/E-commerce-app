\c cta_dev;

INSERT INTO cars(name, maker, vin, mpg_cty, mpg_hwy, engine, body_style, drive_type_awd, fuel_type, transmission_automatic, car_image, description, price, rating, year, mileage, exterior_color, interior_color, accidents, owners, posting_date, current_location, featured) VALUES ('Sonata', 'Hyundai', '123456789abcdefgh', 27, 34, '3.0L Inline-4 Gas Turbocharged', 'Sedan', FALSE, 'Gas', TRUE, 'https://s7d1.scene7.com/is/image/hyundai/2022-sonata-n-line-night-edition-0277:1-1?wid=900&hei=900&qlt=85,0', 'It is a great looking car. I only drove it for 3 months', 25000, 5, 2022, 1300, 'Black', 'Black', 'Never had', 1, '2022-02-18 12:00:00', 'Secacus, NJ', TRUE
),
('RS5', 'Audi', '0123456789abcdefg', 20, 27, '3.0L Inline-6 Gas Turbocharged', 'Hatchback', TRUE, 'Gas', TRUE, 'https://i.ytimg.com/vi/nWUu037D3sg/maxresdefault.jpg', 'Fast', 60000, 4, 2020, 23000, 'Nardo Grey', 'Black', 'Minor crash', 2, '2022-02-18 14:00:00', 'Long Island City, NY', TRUE
),
('Telluride', 'Kia', '0123456789abcdef1', 23, 31, '3.0L Inline-6 Gas Turbocharged', 'SUV', TRUE, 'Gas', TRUE, 'https://www.kia.com/us/content/dam/kia/us/en/vehicles/telluride/2022/gallery/exterior/gallery_kia_telluride_2022_exterior_16.png/_jcr_content/renditions/cq5dam.thumbnail.626.417.png', 'Fast', 30000, 5, 2021, 23000, 'Nardo Grey', 'Black', 'Never had', 1, '2022-02-18 14:00:00', 'Neck Road, NY', TRUE
),
('X', 'Tesla', '0123456789abcdef1', 200, 250, 'Awesome bettery', 'SUV', TRUE, 'Electricity', TRUE, 'https://tesla-cdn.thron.com/delivery/public/image/tesla/da705069-91b5-41cb-86f3-86a585c6fdf3/bvlatuR/std/2880x1800/MX-Hero-Desktop', 'Expensive at first, but will save you money later', 92050, 5, 2021, 50000, 'White', 'Black and Grey', 'Never had', 1, '2022-02-18 15:38:00', 'Albany, NY', TRUE
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
    drive_type_awd BOOLEAN DEFAULT FALSE,
    fuel_type TEXT NOT NULL,
    transmission_automatic BOOLEAN DEFAULT FALSE,
    car_image VARCHAR NOT NULL,
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

