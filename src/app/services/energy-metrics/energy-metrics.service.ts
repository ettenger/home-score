import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ApiService } from '../api/api.service';
import { UserService } from '../user/user.service';
import { EnergySummary } from './energy-summary';
import { EnergyUsageTimeseries } from './energy-usage-timeseries';

@Injectable()
export class EnergyMetricsService {
  public energySummary: EnergySummary;
  public energyUsageTimeseries: EnergyUsageTimeseries;

  constructor(
    private apiService: ApiService,
    private userService: UserService
  ) { }

  getSummary(): Observable<EnergySummary> {
    return this.apiService.get(`${this.userService.userId}/summary`)
      .map(res => this.energySummary = new EnergySummary(res));
  }

  getDailyUsage(): Observable<EnergyUsageTimeseries> {
    return this.apiService.get(`${this.userService.userId}/energy/usage/daily`)
      .map(res => this.energyUsageTimeseries = new EnergyUsageTimeseries(res['daily_energy_usage']));
  }

}
