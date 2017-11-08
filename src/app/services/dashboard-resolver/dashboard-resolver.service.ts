import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { EnergyMetricsService } from '../energy-metrics';

@Injectable()
export class DashboardResolverService implements Resolve<any> {

  constructor(
    private energyMetricsService: EnergyMetricsService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return Observable.forkJoin(
      this.energyMetricsService.getSummary(),
      this.energyMetricsService.getDailyUsage()
    );
  }

}
