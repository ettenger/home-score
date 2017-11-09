import { Component, OnInit } from '@angular/core';
import * as c3 from 'c3';
import { EnergyMetricsService, EnergySummary } from '../../services';

@Component({
  selector: 'app-dashboard-summary',
  templateUrl: './dashboard-summary.component.html',
  styleUrls: ['./dashboard-summary.component.css']
})
export class DashboardSummaryComponent implements OnInit {
  public energySummary: EnergySummary;

  constructor(private energyMetricsService: EnergyMetricsService) { }

  ngOnInit() {
    this.energySummary = this.energyMetricsService.energySummary;
    const chart = c3.generate({
      bindto: '#score-gauge',
      data: {
        columns: [
          ['score', this.energySummary.score]
        ],
        type: 'gauge',
      },
      gauge: {
        label: {
          format: function(value, ratio) {
            return value;
          },
          show: false
        },
        units: ' '
      },
      color: {
        pattern: ['#FF0000', '#F97600', '#F6C600', '#60B044'],
        threshold: {
          values: [30, 60, 90, 100]
        }
      },
      size: {
        height: 180
      }
    });
  }

}
