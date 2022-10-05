import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom' as const,
      border: 'none'
    },
    title: {
      display: false,
      text: 'Chart.js Bar Chart',
    },
  },
  scales: {
    x: {
      grid: {
        display: false
      }
    },
    y: {
      grid: {
        display: false
      }
    }
  }
};

const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sut', 'Sun'];

export const data = {
  labels,
  datasets: [
    {
      label: 'On Target',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 10 })),
      backgroundColor: 'blue',
    },
    {
      label: 'Target',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 30 })),
      backgroundColor: 'black',

    },
    {
      label: 'Off Target',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 10 })),
      backgroundColor: 'orange',
    }
  ],
};




const Barchart = () => {
  return (
    <Bar options={options} data={data} />
  )
}

export default Barchart
