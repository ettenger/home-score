import { Component, OnInit } from '@angular/core';
import { EnergyMetricsService, EnergySummary} from '../../services';

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
  }

}
