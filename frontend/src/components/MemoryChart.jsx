import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const MemoryChart = ({ memoryUsage }) => {
  const chartData = {
    labels: ['Memory Used', 'Memory Free'],
    datasets: [
      {
        data: [memoryUsage, 100 - memoryUsage],
        backgroundColor: [
          memoryUsage > 80 ? '#e74c3c' : memoryUsage > 50 ? '#f39c12' : '#2ecc71',
          '#ecf0f1'
        ],
        borderWidth: 1,
      }
    ]
  };

  return (
    <>
      <Doughnut data={chartData} />
      <div className="metric-value">{memoryUsage}% Memory</div>
    </>
  );
};

export default MemoryChart;