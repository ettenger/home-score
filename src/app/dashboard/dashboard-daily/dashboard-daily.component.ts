import { Component, OnInit } from '@angular/core';
import * as c3 from 'c3';
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
    const chart = c3.generate({
      bindto: '#chart',
      data: {
        x: 'x',
        xFormat: '%m/%d/%Y',
        columns: [
          ['x', ...this.energyUsageTimeseries.dates],
          ['Energy Usage', ...this.energyUsageTimeseries.energyUsages]
        ]
      },
      axis: {
        x: {
          type: 'timeseries',
          tick: {
            format: '%m/%d/%Y',
            count: 5
          }
        }
      }
    });
  }

}
