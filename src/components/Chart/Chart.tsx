import React from 'react';
import ChartBar from './ChartBar';
const Chart = (props: any) => {
  const dataPointValues = Array.from(props).map((dataPoint: any) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);
  Array.from(props).map((dataPoint: any) => {
    return (
      <ChartBar
        key={dataPoint.lable}
        value={dataPoint.value}
        maxValue={totalMaximum}
        lable={dataPoint.lable}
      />
    );
  });
  return null;
};
export default Chart;
