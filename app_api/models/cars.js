const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  make: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  engine: String,
  power: {
    type: Number,
    min: 0
  },
  year: {
    type: Number,
    min: 1900,
    max: 2100
  },
  price: {
    type: Number,
    min: 0
  },
  mileage: {
    type: Number,
    min: 0,
    default: 0
  },
  fuel: {
    type: String,
    enum: ['Petrol', 'Diesel', 'Electric', 'Hybrid', 'Other']
  },
  transmission: {
    type: String,
    enum: ['Manual', 'Automatic']
  },
  image: String
});

mongoose.model('Car', carSchema);

