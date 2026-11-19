import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { CarData, Car } from '../car-data';


@Component({
  imports: [DecimalPipe],
  providers: [CarData],
  selector: 'app-car-list',
  styleUrl: './car-list.css',
  templateUrl: './car-list.html',
})

export class CarList implements OnInit {
  private carData = inject(CarData);
  private cdr = inject(ChangeDetectorRef);

  cars: Car[] = [];

  features: string[] = [
    '7 speed Automatic',
    'Diesel',
    '177 hp'
  ];

  private async getCars(): Promise<void>{
    try {

      this.cars = await this.carData.getCars();
      console.log('Fetched cars:',this.cars);
      this.cdr.detectChanges();

    } catch (error){
      console.error('Error fetching cars:', error);
    }


  }

  ngOnInit(): void {
    this.getCars();
  }
}
