import "./analytics.css";
import React from "react";
import Chart from "react-apexcharts";


export default class Analytics3 extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [{
          name: 'Series 1',
          data: [80, 50, 30, 40, 100, 20],
        }, {
          name: 'Series 2',
          data: [20, 30, 40, 80, 20, 80],
        }, {
          name: 'Series 3',
          data: [44, 76, 78, 13, 43, 10],
        }],
        options: {
          chart: {
            height: 350,
            type: 'radar',
            dropShadow: {
              enabled: true,
              blur: 1,
              left: 1,
              top: 1
            }
          },
          title: {
            text: 'Module Radar Analysis',
            align:'center',
          },
          stroke: {
            width: 2
          },
          fill: {
            opacity: 0.1
          },
          markers: {
            size: 0
          },
          xaxis: {
            categories: ['2017', '2018', '2019', '2020', '2021', '2022']
          }
        },
      };
    }
    render() {
      return (
      
          <div >
            <Chart options={this.state.options} series={this.state.series} type="radar" height={350} />
          </div>
        
      );
    }
  }