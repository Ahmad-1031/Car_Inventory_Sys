import { TestBed } from '@angular/core/testing';
import { CarData } from './car-data';

describe('CarData', () => {
  let service: CarData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
