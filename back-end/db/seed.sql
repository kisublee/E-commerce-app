\c cta_dev;

INSERT INTO test (name) VALUES
('Monda!!!y'),
('Tuesday'),
('Wednesday'),
('Thursday'),
('Friday'),
('Saturday'),
('Sunday');




INSERT INTO cars(name, maker, vin, mpg_cty, mpg_hwy, engine, body_style, drive_type, fuel_type, transmission_automatic, car_image, description, price, rating, year, mileage, exterior_color, interior_color, accidents, owners, posting_date, current_location, featured) VALUES ('Sonata', 'Hyundai', '123456789abcdefgh', 27, 34, '3.0L Inline-4 Gas Turbocharged', 'Sedan', 'FWD', 'Gas', TRUE, ARRAY['https://s7d1.scene7.com/is/image/hyundai/2022-sonata-n-line-night-edition-0277:1-1?wid=900&hei=900&qlt=85,0'], 'It is a great looking car. I only drove it for 3 months', 25000, 5, 2022, 1300, 'Black', 'Black', 'Never had', 1, '2022-02-18 12:00:00', 'Secacus, NJ', TRUE
),
('RS5', 'Audi', '0123456789abcdefg', 20, 27, '3.0L Inline-6 Gas Turbocharged', 'Hatchback', 'AWD', 'Gas', TRUE, ARRAY ['https://i.ytimg.com/vi/nWUu037D3sg/maxresdefault.jpg','https://s.aolcdn.com/commerce/autodata/images/USD10AUC292A01300.jpg'], 'Fast', 60000, 4, 2020, 23000, 'Nardo Grey', 'Black', 'Minor crash', 2, '2022-02-18 14:00:00', 'Long Island City, NY', TRUE
),
('Telluride', 'Kia', '0123456789abcdef1', 23, 31, '3.0L Inline-6 Gas Turbocharged', 'SUV', 'AWD', 'Gas', TRUE, ARRAY['https://www.kia.com/us/content/dam/kia/us/en/vehicles/telluride/2022/gallery/exterior/gallery_kia_telluride_2022_exterior_16.png/_jcr_content/renditions/cq5dam.thumbnail.626.417.png'], 'Fast', 30000, 5, 2021, 23000, 'Nardo Grey', 'Black', 'Never had', 1, '2022-02-18 14:00:00', 'Neck Road, NY', TRUE
),
('X', 'Tesla', '0123456789abcdef1', 200, 250, 'Awesome bettery', 'SUV', 'AWD', 'Electricity', TRUE, ARRAY['https://tesla-cdn.thron.com/delivery/public/image/tesla/da705069-91b5-41cb-86f3-86a585c6fdf3/bvlatuR/std/2880x1800/MX-Hero-Desktop'], 'Expensive at first, but will save you money later', 92050, 5, 2021, 50000, 'White', 'Black and Grey', 'Never had', 1, '2022-02-18 15:38:00', 'Albany, NY', TRUE
);


INSERT INTO artists (name, art_type, price, rating, current_location, can_travel, services, service_images, description, featured) VALUES 
(
    'Katie', 'painting', 250, 5, 'NYC', TRUE, 'I offer live event fashion illustrations', ARRAY['https://i.pinimg.com/originals/56/59/61/56596165371d1316edec38f397dca766.jpg','https://hips.hearstapps.com/hbz.h-cdn.co/assets/15/38/1442250480-lenaker.png','https://images.squarespace-cdn.com/content/v1/515c5625e4b0bca14d74713f/1440973785550-F29NPS8C43WJMXGMDE37/Elizabeth','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqialWpQUpoGLy9PXlkqftdMM_ahgEHdf1EA&usqp=CAU','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlp02fT7TF82AZteGv-QyJwqDt76btOqnNCg&usqp=CAU','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzuMSAPLWsrvUgpk6KfykYZAZgNUWk4Nld8A&usqp=CAU'], 'I am a fashion illustrator based in NYC. I have worked for high end brands like Chanel, Prada and I can travel', TRUE
),

(
    'Ki Sub', 'painting', 250, 5, 'NYC', TRUE, 'I offer live event painting', ARRAY['https://i.pinimg.com/originals/56/59/61/56596165371d1316edec38f397dca766.jpg','https://images.squarespace-cdn.com/content/v1/515c5625e4b0bca14d74713f/1440973785550-F29NPS8C43WJMXGMDE37/Elizabeth'], 'I am a painter based in NYC. I have worked for high end brands like Chanel, Prada and I can travel', TRUE
),
(
    'Colin', 'balloon', 300, 5, 'Seatle', TRUE, 'I do Balloon art', ARRAY['https://i.pinimg.com/originals/56/59/61/56596165371d1316edec38f397dca766.jpg','https://twistedsifter.com/wp-content/uploads/2014/08/balloon-art-by-jason-secoda-airheads-entertainment-cover.jpg'], 'I am an Balloon art artist based in Seatle. I can travel.', TRUE
),
(
    'Eva', 'photography', 150, 4, 'Sanfrancisco', TRUE, 'I am specialized in archtecure photography and minimalistic portraits', ARRAY['https://i.pinimg.com/originals/56/59/61/56596165371d1316edec38f397dca766.jpg','https://static.dezeen.com/uploads/2015/02/Istanbul-Turkey-photographs-Yener-Torun_dezeen_784_21.jpg'], 'I have 10 years experience. I can travel and I speak spanish', FALSE
),
(
    'Yaya', 'photography', 150, 3, 'Sanfrancisco', TRUE, 'I do a lot of wedding and party portraits.', ARRAY['https://i.pinimg.com/originals/56/59/61/56596165371d1316edec38f397dca766.jpg','https://i.pinimg.com/564x/56/94/e6/5694e67caff4767d9b3573cffee5e808.jpg'], 'I can only travel within Tribeca. My service includes a photo book. You will receive your photos digitally and physically!', FALSE
);