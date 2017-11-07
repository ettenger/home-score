import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ApiService } from '../api/api.service';
import { UserService } from '../user/user.service';
import { EnergySummary } from './energy-summary';
import { DailyUsage } from './daily-usage';

@Injectable()
export class EnergyMetricsService {
  constructor(
    private apiService: ApiService,
    private userService: UserService
  ) { }

  getSummary(): Observable<EnergySummary> {
    return this.apiService.get(`${this.userService.userId}/summary`)
      .map(res => new EnergySummary(res));
  }

  getDailyUsage(): Observable<DailyUsage[]> {
    return this.apiService.get(`${this.userService.userId}/energy/usage/daily`)
      .map(res => res['daily_energy_usage']);
  }

}
