import { Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';


export class Car{
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

@Service()
export class CarData{
    private http = inject(HttpClient);

    private apiBaseURL = '/api';

    public async getCars(): Promise<Car[]> {
        const url = `${this.apiBaseURL}/content`;

        return firstValueFrom(this.http.get<Car[]>(url));
    }
    
    
}


