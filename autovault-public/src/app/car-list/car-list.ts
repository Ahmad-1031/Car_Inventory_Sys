import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';

export class Car {
  _id!: string;
  make!: string;
  model!: string;
  engine!: string;
  power!: number;
  year!: number;
  price!: number;
  mileage!: number;
  fuel!: string;
  transmission!: string;
  image!: string;
}

@Component({
  imports: [DecimalPipe],
  selector: 'app-car-list',
  styleUrl: './car-list.css',
  templateUrl: './car-list.html',
})

export class CarList {
cars: Car[] = [
  {
    _id: '1',
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
    _id: '2',
    make: 'Audi',
    model: 'A7',
    engine: '3.0 BiTDI',
    power: 313,
    year: 2018,
    price: 26500,
    mileage: 135000,
    fuel: 'Diesel',
    transmission: 'Automatic',
    image: 'https://f7432d8eadcf865aa9d9-9c672a3a4ecaaacdf2fee3b3e6fd2716.ssl.cf3.rackcdn.com/C3132/U170/IMG_5102-large.jpg'
  }
];
}
