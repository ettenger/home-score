import { TestBed, inject } from '@angular/core/testing';

import { EnergyMetricsService } from './energy-metrics.service';

describe('EnergyMetricsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EnergyMetricsService]
    });
  });

  xit('should be created', inject([EnergyMetricsService], (service: EnergyMetricsService) => {
    expect(service).toBeTruthy();
  }));
});
