import { EnergyUsageTimeseries } from './energy-usage-timeseries';

describe('EnergyUsageTimeseries', () => {
  const sampleData = [
    {'1/1/11': 11},
    {'2/2/22': 22}
  ];
  const energyUsageTimeseries = new EnergyUsageTimeseries(sampleData);

  it('should return the dates in an array', () => {
    expect(energyUsageTimeseries.dates).toEqual(['1/1/11', '2/2/22']);
  });

  it('should return the energyUsages in an array', () => {
    expect(energyUsageTimeseries.energyUsages).toEqual([11, 22]);
  });

});
