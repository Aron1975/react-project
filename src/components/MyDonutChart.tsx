import {
    Chart as ChartJS,
    ArcElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Doughnut } from 'react-chartjs-2';
  import zoomPlugin from "chartjs-plugin-zoom";
import { useEffect, useState } from 'react';

  
  ChartJS.register(
    ArcElement,
    Title,
    Tooltip,
    Legend,
    zoomPlugin
  );

  interface Props {
    percentage: number
  }
  
  export const MyDonutChart = (props: Props) => {

    const {percentage} = props;
    //const [centerTextPlugin, setCenterTextPlugin] = useState();


    const centerTextPlugin = {
        id: 'centerTextPlugin',
        beforeDraw: (chart: any) => {
            const { width } = chart;
            const { height } = chart;
            const ctx = chart.ctx;

            console.log("width , height ", width, height);
            ctx.save();
            
            //const fontSize = 60; // Adjust font size as needed
            const fontSize = Math.round(width / 8);
            console.log("fontSize: ", fontSize);
            if(percentage <= 50){
                ctx.fillStyle = 'red';
                console.log("RED");
            }
            else if(percentage <= 75){
                ctx.fillStyle = 'yellow';
                console.log("YELLOW");
            }
            else{
                ctx.fillStyle = 'green';
                console.log("GREEN");
            }
            
            ctx.font = `${fontSize}px Arial`;
            //ctx.fillStyle = 'rgba(214, 214, 228, 0.9)';
            ctx.textBaseline = "middle";

            const text = percentage + "%"; // Your custom text
            const textX = Math.round((width - ctx.measureText(text).width) / 2);
            const textY = height / 1.5;

            ctx.fillText(text, textX, textY);
            
            ctx.restore();
            //ctx.save();
        }
    };

    const options = {
        responsive: true, // Enable responsiveness
        maintainAspectRatio: true, // Allow the chart to stretch dynamically
        rotation: -90,
        circumference: 180,
        legend: {
            display: false
        },
        cutout: '80%',
        plugins: {
            tooltip: {
                enabled: false,
            },
            legend: {
                display: false,
            }
        }
    };
      
    const labels = ['Danger', 'Warning', 'Good'];

    const data = {
        labels,
        datasets: [{
            label: '',
            data: [50, 25, 25],
            backgroundColor: [
                'rgba(34, 49, 166, 0.9)',
                'rgba(43, 89, 216, 0.9)',
                'rgba(118, 136, 225, 0.9)'
            ],
            borderColor: [
                'rgba(255, 255, 255, 0)',
                'rgba(255, 255, 255, 0)',
                'rgba(255, 255, 255, 0)'
            ],
            borderWidth: 2
        },
            {
                data: [percentage-1, 1,100-percentage-1], // how much space each bar should take
                backgroundColor: [
                    "rgba(0,50,0,0)", // bar 1: opacity 0
                    "rgba(255,255,255,1)", // bar 2 is white
                    "rgba(0,50,0,0)", // bar 3: opacity 0
                ],
                borderColor: [
                    'rgba(0, 0, 0 ,0)',// bar 1 border opacity 0
                    'rgb(107, 174, 208)',  // bar 2 border is purple
                    'rgba(0, 0, 0 ,0)'// bar 3 border opacity 0
                ],
                borderWidth: 3
            }],
      };

     /* const donutLabel = {
        id: 'donutLabel',
        beforeDatasetsDraw(chart, args, plugin) {
            const { ctx, data} = chart;
        }
      }*/

   

    return (
      <div>
        <Doughnut options={options} data={data} plugins={[centerTextPlugin]} />
      </div>
    )
  }