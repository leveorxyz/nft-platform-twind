import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
  ChartData,
  ChartOptions,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController
);

const PriceHistory = () => {
  return (
    <div className="border-brand-100 border bg-white p-6 dark:bg-brand-700 dark:border-brand-600">
      <div className="chart-container relative h-80 w-full">
        <Chart type="line" data={data} options={chartOptions} />
      </div>
    </div>
  );
};

export default PriceHistory;

const labels = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const data: ChartData = {
  labels,
  datasets: [
    {
      label: 'Avg. price',
      backgroundColor: '#10B981',
      borderColor: '#10B981',
      data: [54.73, 64, 53, 96, 130, 100, 102.88, 43, 64, 69, 80, 125],
    },
    {
      type: 'bar',
      label: 'Sales',
      backgroundColor: '#ccc',
      data: [25, 20, 40, 130, 75, 48, 12, 56, 87, 24, 79, 150],
    },
  ],
};

const chartOptions: ChartOptions = {
  maintainAspectRatio: false,
  responsive: true,
  interaction: {
    intersect: false,
    mode: 'index',
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      ticks: {
        stepSize: 50,
      },
    },
  },
  plugins: {
    legend: { display: false },
    decimation: {
      enabled: true,
    },
    tooltip: {
      usePointStyle: true,
      position: 'nearest',
      backgroundColor: '#131740',
      titleAlign: 'center',
      bodyAlign: 'center',
      footerAlign: 'center',
      padding: 12,
      displayColors: false,
      yAlign: 'bottom',
    },
  },
  animation: false,
};
