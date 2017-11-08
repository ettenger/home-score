import { Component, OnInit } from '@angular/core';
import { EnergyMetricsService, DailyUsage} from '../../services';

@Component({
  selector: 'app-dashboard-daily',
  templateUrl: './dashboard-daily.component.html',
  styleUrls: ['./dashboard-daily.component.css']
})
export class DashboardDailyComponent implements OnInit {
  public dailyUsageData: DailyUsage[];

  constructor(private energyMetricsService: EnergyMetricsService) { }

  ngOnInit() {
    this.dailyUsageData = this.energyMetricsService.dailyUsageData;
  }

}
