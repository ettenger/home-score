import { Component, OnInit } from '@angular/core';
import { EnergyMetricsService, EnergyUsageTimeseries} from '../../services';

@Component({
  selector: 'app-dashboard-daily',
  templateUrl: './dashboard-daily.component.html',
  styleUrls: ['./dashboard-daily.component.css']
})
export class DashboardDailyComponent implements OnInit {
  public energyUsageTimeseries: EnergyUsageTimeseries;

  constructor(private energyMetricsService: EnergyMetricsService) { }

  ngOnInit() {
    this.energyUsageTimeseries = this.energyMetricsService.energyUsageTimeseries;
  }

}
