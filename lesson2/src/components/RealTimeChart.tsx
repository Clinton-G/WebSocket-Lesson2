import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

interface RealTimeChartProps {
  data: number[];
}

const RealTimeChart: React.FC<RealTimeChartProps> = ({ data }) => {
  const [chartData, setChartData] = useState<any>([]);

  useEffect(() => {
    setChartData(data.map((value) => ({ x: new Date(), y: value })));
  }, [data]);

  const chartOptions = {
    datasets: [
      {
        label: 'Real-Time Data',
        data: chartData,
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        fill: false,
      },
    ],
  };

  return <Line data={chartOptions} />;
};

export default RealTimeChart;
