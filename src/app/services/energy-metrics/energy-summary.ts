export class EnergySummary {
  public score: number;
  public text: string;
  public avgDailyUsage: number;
  public avgDailyTemp: number;

  constructor(res: {}) {
    this.score = res['score'];
    this.text = res['score_text'];
    this.avgDailyUsage = res['average_daily_energy_usage'];
    this.avgDailyTemp = res['average_daily_temp'];
  }
}
