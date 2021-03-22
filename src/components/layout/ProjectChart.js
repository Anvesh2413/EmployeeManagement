import React from 'react';
import { Bar } from 'react-chartjs-2';

const state = {
  labels: ['2017', '2018', '2019', '2020', '2021'],
  datasets: [
    {
      label: 'Projects',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [1, 2, 4, 3, 2],

    }
  ]
}

export default class ProjectChart extends React.Component {
  render() {
    return (
      <div>
        <h2>Growth</h2>
        <Bar data={state} 
        
        options={{
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true,
                padding:1,
                stepSize:1
              }
            }]
          }
        }}
        
        />
      </div>
    );
  }
}