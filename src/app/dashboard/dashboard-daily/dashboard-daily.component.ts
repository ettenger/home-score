import { Component, OnInit } from '@angular/core';
import * as c3 from 'c3';
import { EnergyMetricsService, EnergyUsageTimeseries} from '../../services';

@Component({
  selector: 'app-dashboard-daily',
  templateUrl: './dashboard-daily.component.html',
  styleUrls: ['./dashboard-daily.component.css']
})
export class DashboardDailyComponent implements OnInit {

  constructor(private energyMetricsService: EnergyMetricsService) { }

  ngOnInit() {
    const energyUsageTimeseries = this.energyMetricsService.energyUsageTimeseries;
    const avgDailyUsage = this.energyMetricsService.energySummary.avgDailyUsage;

    const chart = c3.generate({
      bindto: '#chart',
      data: {
        x: 'x',
        xFormat: '%m/%d/%Y',
        columns: [
          ['x', ...energyUsageTimeseries.dates],
          ['Energy Usage', ...energyUsageTimeseries.energyUsages]
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
      },
      grid: {
        y: {
          lines: [
            { value: avgDailyUsage, text: 'Average', class: 'avg-line' }
          ]
        }
      }
    });
  }

}
