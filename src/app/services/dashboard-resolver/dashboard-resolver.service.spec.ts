import { TestBed, inject } from '@angular/core/testing';

import { DashboardResolverService } from './dashboard-resolver.service';

describe('DashboardResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DashboardResolverService]
    });
  });

  xit('should be created', inject([DashboardResolverService], (service: DashboardResolverService) => {
    expect(service).toBeTruthy();
  }));
});
