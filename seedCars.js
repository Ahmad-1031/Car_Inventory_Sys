require('dotenv').config();

const mongoose = require('mongoose');

require('./app_api/models/organisation');
require('./app_api/models/cars');

const Organisation = mongoose.model('Organisation');
const Car = mongoose.model('Car');

async function seedCars() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);

        // Find AutoVault Tralee
        const organisation = await Organisation.findOne({
            name: 'AutoVault Tralee'
        });

        if (!organisation) {
            throw new Error('AutoVault Tralee organisation not found');
        }

        // Cars to insert
        const cars = [
            {
                organisation: organisation._id,
                make: 'Audi',
                model: 'A6 C7',
                engine: '2.0 Tdi',
                power: 177,
                year: 2015,
                price: 14500,
                mileage: 177000,
                fuel: 'Diesel',
                transmission: 'Automatic',
                image: 'https://primary.jwwb.nl/public/j/w/n/temp-mdjsksuaqfulgktptwwc/1-high-h4l79t.jpg'
            },
            {
                organisation: organisation._id,
                make: 'Audi',
                model: 'A7',
                engine: '3.0 BiTdi',
                power: 313,
                year: 2018,
                price: 26500,
                mileage: 135000,
                fuel: 'Diesel',
                transmission: 'Automatic',
                image: 'https://f7432d8eadcf865aa9d9-9c672a3a4ecaaacdf2fee3b3e6fd2716.ssl.cf3.rackcdn.com/C3132/U170/IMG_5102-large.jpg'
            },
            {
                organisation: organisation._id,
                make: 'Audi',
                model: 'A8',
                engine: '4.2 Tdi',
                power: 381,
                year: 2017,
                price: 32500,
                mileage: 118000,
                fuel: 'Diesel',
                transmission: 'Automatic',
                image: 'https://canautoperformance.com/cdn/shop/collections/D4_S8.jpg?v=1694187536&width=2048'
            },
            {
                organisation: organisation._id,
                make: 'Audi',
                model: 'A6 C8',
                engine: '40 TFSI',
                power: 204,
                year: 2020,
                price: 64500,
                mileage: 78000,
                fuel: 'Petrol',
                transmission: 'Automatic',
                image: 'https://images.clickdealer.co.uk/vehicles/8002/8002988/large2/195955768.jpg'
            }
        ];

        await Car.insertMany(cars);

        console.log('Four Audi cars added successfully!');

    } catch (err) {
        console.error('Error seeding cars:', err);
    } finally {
        await mongoose.disconnect();
    }
}

seedCars();