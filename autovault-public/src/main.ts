import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { CarList } from './app/car-list/car-list';

bootstrapApplication(CarList, appConfig)
  .catch((err) => console.error(err));
