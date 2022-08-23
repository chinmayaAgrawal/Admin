import './HomeAnalytics.css';
import Chart from 'react-apexcharts';
import React from 'react';



// Replace Math.random() with a pseudo-random number generator to get reproducible results in e2e tests
// Based on https://gist.github.com/blixt/f17b47c62508be59987b
var _seed = 42;
Math.random = function() {
  _seed = _seed * 16807 % 2147483647;
  return (_seed - 1) / 2147483646;
};


export default class HomeAnalytics1 extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [71.4],
        options: {
          chart: {
            height: 350,
            type: 'radialBar',
            offsetY: -10
          },
          plotOptions: {
            radialBar: {
              startAngle: -135,
              endAngle: 135,
              dataLabels: {
                name: {
                  fontSize: '16px',
                  color: undefined,
                  offsetY: 120
                },
                value: {
                  offsetY: 76,
                  fontSize: '22px',
                  color: undefined,
                  formatter: function (val) {
                    return val + "%";
                  }
                }
              }
            }
          },
          fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                shadeIntensity: 0.15,
                inverseColors: false,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 50, 65, 91]
            },
          },
          stroke: {
            dashArray: 4
          },
          labels: ["SlotOccupation Ratio"],
        },
      
      
      };
    }
    render() {
      return (
          <div id="homechart">
            <Chart options={this.state.options} series={this.state.series} labels={this.state.labels} type="radialBar" height={350} />
          </div>
      );
    }
  }
