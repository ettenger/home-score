import { DailyUsage } from './daily-usage';

export class EnergyUsageTimeseries {
  constructor(public dailyUsageData: DailyUsage[]) {
  }

  get dates(): string[] {
    return this.dailyUsageData.map(d => Object.keys(d)[0]);
  }

  get energyUsages(): number[] {
    return this.dailyUsageData.map(d => Object.values(d)[0]);
  }
}
