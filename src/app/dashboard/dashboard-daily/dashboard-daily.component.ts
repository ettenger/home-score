import { Component, OnInit } from '@angular/core';
import * as c3 from 'c3';
import { EnergyMetricsService } from '../../services';

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
        },
        y: {
          label: {
            text: 'Daily Energy Usage',
            position: 'outer-middle'
          }
        }
      },
      legend: {
        show: false
      },
      grid: {
        y: {
          lines: [
            { value: avgDailyUsage, text: 'Average Daily Usage', position: 'middle', class: 'avg-line' }
          ]
        }
      }
    });
  }

}
