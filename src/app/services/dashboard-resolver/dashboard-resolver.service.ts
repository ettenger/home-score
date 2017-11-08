import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { EnergyMetricsService } from '../energy-metrics';
import { UserService } from '../user/user.service';

@Injectable()
export class DashboardResolverService implements Resolve<any> {

  constructor(
    private router: Router,
    private energyMetricsService: EnergyMetricsService,
    private userService: UserService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    if (this.userService.isLoggedIn()) {
      return Observable.forkJoin(
        this.energyMetricsService.getSummary(),
        this.energyMetricsService.getDailyUsage()
      );
    } else {
      this.router.navigate(['/login']);
      return null;
    }
  }

}
