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
  import zoomPlugin from "chartjs-plugin-zoom";
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    zoomPlugin
  );

  interface Props {
    yValues1: number[],
    yValues2: number[],
  }
  
const MyBarChart = (props:Props) => {

    const { yValues1, yValues2 } = props;

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top' as const,
          },
          title: {
            display: true,
            text: 'Chart.js Bar Chart',
          },
          zoom: {
            pan: {
              enabled: true,
              mode: 'x' as const,
            },
            zoom: {
              wheel: {
                enabled: true
              },
              pinch: {
                enabled: true
              },
              //mode: "x"
            }
          }
        },
    };

      
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    const data = {
        labels,
        datasets: [
          {
            label: 'Dataset 1',
            //data: [13, 45, 57, 34, 56, 24, 11],
            data: yValues1,
            backgroundColor: 'rgba(243, 14, 64, 0.5)',
            borderColor: 'rgba(103, 37, 50, 0.7)',
            borderWidth: 1,
          },
          {
            label: 'Dataset 2',
            //data: [23, 35, 50, 31, 5, 22, 29],
            data: yValues2,
            backgroundColor: 'rgba(54, 48, 222, 0.5)',
            borderColor: 'rgba(7, 6, 37, 0.5)',
            borderWidth: 1,
          },
        ],
      };

  return (
        <Bar options={options} data={data} />
  )
}

export default MyBarChart