import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css'
const Chart = (props: { label: string; value: number }[]) => {
  const dataPointValues = Object.values(props).map(
    (dataPoint: { label: string; value: number }) => dataPoint.value,
  );
  const totalMaximum = Math.max(0, ...dataPointValues);
  console.log(totalMaximum);
  return (
    <div className="chart">
      {Object.values(props).map((dataPoint: { label: string; value: number }) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};
export default Chart;
