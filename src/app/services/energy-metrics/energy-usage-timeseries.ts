import { DailyUsage } from './daily-usage';

export class EnergyUsageTimeseries {
  constructor(public dailyUsageData: DailyUsage[]) {
  }

  get dates(): string[] {
    return Object.keys(this.dailyUsageData);
  }

  get energyUsages(): number[] {
    return Object.values(this.dailyUsageData);
  }
}
