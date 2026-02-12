import { Doughnut } from 'react-chartjs-2';

const CpuChart = ({ cpuLoad }) => {
  const chartData = {
    labels: ['CPU Used', 'CPU Free'],
    datasets: [
      {
        data: [cpuLoad, 100 - cpuLoad],
        backgroundColor: [
          cpuLoad > 80 ? '#e74c3c' : cpuLoad > 50 ? '#f1c40f' : '#2ecc71', 
          '#ecf0f1'
        ],
        borderWidth: 1,
      }
    ]
  };

  return (
    <>
      <Doughnut data={chartData} />
      <div className="metric-value">{cpuLoad}% CPU</div>
    </>
  );
};

export default CpuChart;
