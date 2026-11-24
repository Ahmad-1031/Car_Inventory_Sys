require('dotenv').config();
const mongoose = require('mongoose');
require('./app_api/models/cars');

const Car = mongoose.model('Car');

const createTestCars = async function() {

    try {
        await mongoose.connect(process.env.MONGODB_URI);

        const organisationOne = new mongoose.Types.ObjectId(
            '6af614e3c87054f28a51c47e'
        );

        const organisationTwo = new mongoose.Types.ObjectId(
            '6b0568291664ad0172fe3d32'
        );

        const cars = [
            // Ahmad's Organisation
            {
                organisationId: organisationOne,
                make: 'Audi',
                model: 'A6 C7',
                engine: '2.0 TDI',
                power: 177,
                year: 2015,
                price: 14500,
                mileage: 177000,
                fuel: 'Diesel',
                transmission: 'Automatic',
                image: 'https://primary.jwwb.nl/public/j/w/n/temp-mdjsksuaqfulgktptwwc/1-high-h4l79t.jpg'
            },
            {
                organisationId: organisationOne,
                make: 'BMW',
                model: '530d',
                engine: '3.0 Diesel',
                power: 265,
                year: 2018,
                price: 26950,
                mileage: 125000,
                fuel: 'Diesel',
                transmission: 'Automatic'
            },
            {
                organisationId: organisationOne,
                make: 'Mercedes-Benz',
                model: 'E220d',
                engine: '2.0 Diesel',
                power: 194,
                year: 2019,
                price: 28950,
                mileage: 98000,
                fuel: 'Diesel',
                transmission: 'Automatic'
            },

            // AutoVault Test User's Organisation
            {
                organisationId: organisationTwo,
                make: 'Volkswagen',
                model: 'Golf GTI',
                engine: '2.0 TSI',
                power: 245,
                year: 2021,
                price: 31950,
                mileage: 52000,
                fuel: 'Petrol',
                transmission: 'Automatic'
            },
            {
                organisationId: organisationTwo,
                make: 'Toyota',
                model: 'Corolla Hybrid',
                engine: '1.8 Hybrid',
                power: 122,
                year: 2022,
                price: 24950,
                mileage: 38000,
                fuel: 'Hybrid',
                transmission: 'Automatic'
            },
            {
                organisationId: organisationTwo,
                make: 'Ford',
                model: 'Focus ST-Line',
                engine: '1.0 EcoBoost',
                power: 125,
                year: 2020,
                price: 17950,
                mileage: 79000,
                fuel: 'Petrol',
                transmission: 'Manual'
            }
        ];

        const result = await Car.insertMany(cars);

        console.log(`${result.length} cars created successfully`);

    } catch (err) {
        console.error('Error creating cars:', err.message);
    } finally {
        await mongoose.disconnect();
    }
};

createTestCars();