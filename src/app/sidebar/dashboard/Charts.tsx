"use client"
import { Bar, Line } from 'react-chartjs-2';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const Charts = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Employees',
        data: [50, 60, 70, 180, 190, 230, 240],
        backgroundColor: 'white',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const data1 = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Employees',
        data: [50, 60, 120, 180, 150, 210, 240],
        backgroundColor: 'white',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className='flex justify-center items-center'>
      <Card className="mt-6 bg-slate-950 mx-12 transform transition duration-300 hover:scale-105 hover:shadow-lg">
        <CardHeader>
          <CardTitle className='text-white'>Employee Growth Chart</CardTitle>
        </CardHeader>
        <CardContent>
          <Line data={data1} />
        </CardContent>
      </Card>

      <Card className="mt-6 bg-slate-950 mx-12 transform transition duration-300 hover:scale-105 hover:shadow-lg">
        <CardHeader>
          <CardTitle className='text-white'>Employee Growth Chart</CardTitle>
        </CardHeader>
        <CardContent>
          <Bar data={data} />
        </CardContent>
      </Card>
    </div>
  );
};

export default Charts;
