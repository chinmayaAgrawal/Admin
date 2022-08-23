/*import "./HomeAnalytics2.css";
import Chart from "react-apexcharts";
import React from "react";
      
      // Replace Math.random() with a pseudo-random number generator to get reproducible results in e2e tests
      // Based on https://gist.github.com/blixt/f17b47c62508be59987b
      var _seed = 42;
      Math.random = function() {
        _seed = _seed * 16807 % 2147483647;
        return (_seed - 1) / 2147483646;
      };
   
export default class HomeAnalytics2 extends React.Component {
        constructor(props) {
          super(props);

          this.state = {
          
            series: [{
                type: 'bar',
                data: series.monthDataSeries2.prices
            }, {
                type: 'line',
                data: series.monthDataSeries1.prices
            }],
            options: {
              chart: {
                type: 'line',
                id: 'chart',
                sparkline: {
                  //  enabled: true
                }
              },
              annotations: {
                yaxis: [{
                  y: 8200,
                  borderColor: '#FEB019',
                  label: {
                    borderColor: '#333',
                    style: {
                      fontSize: '15px',
                      color: '#333',
                      background: '#FEB019',
                    },
                    text: 'Y-axis annotation',
                  }
                }],
                xaxis: [{
                  x: new Date('23 Nov 2017').getTime(),
                  borderColor: '#00E396',
                  label: {
                    borderColor: '#00E396',
                    style: {
                      fontSize: '15px',
                      color: '#fff',
                      background: '#00E396',
                    },
                    offsetY: -10,
                    text: 'Vertical',
                  }
                }],
                points: [{
                  x: new Date('01 Dec 2017').getTime(),
                  y: 9025,
                  label: {
                    borderColor: '#FF4560',
                    offsetY: 0,
                    style: {
                      fontSize: '15px',
                      color: '#fff',
                      background: '#FF4560',
                    },
                    text: 'All time high',
                  }
                }]
              },
              plotOptions: {
                bar: {
                  columnWidth: '50%'
                }
              },
              markers: {
                size: 0
              },
              dataLabels: {
                enabled: false
              },
              stroke: {
                curve: 'straight'
              },
              legend: {
                show: false,
              },
              labels: series.monthDataSeries1.dates,
              xaxis: {
                type: 'datetime',
              }
            },
          
          
          };
                }

      
        componentDidMount() {
          Chart.exec('chart', 'addYaxisAnnotation', {
            id: 'yaxis-anno',
            y: 9000,
            borderColor: '#FEB019',
            label: {
              borderColor: '#333',
              style: {
                fontSize: '15px',
                color: '#333',
                background: '#FEB019',
              },
              text: 'Y-axis - runtime',
            }
          });
        
          Chart.exec('chart', 'addXaxisAnnotation', {
            id: 'xaxis-anno',
            x: new Date('25 Nov 2017').getTime(),
            borderColor: '#00E396',
            label: {
              orientation: 'vertical',
              borderColor: '#00E396',
              style: {
                fontSize: '15px',
                color: '#fff',
                background: '#00E396',
              },
              offsetY: -10,
              text: 'xaxis - runtime',
            }
          });
        
          Chart.exec('chart', 'addPointAnnotation', {
            id: 'point-anno',
            x: new Date('17 Nov 2017').getTime(),
            y: 9425,
            label: {
              borderColor: '#FF4560',
              offsetY: 0,
              style: {
                fontSize: '15px',
                color: '#fff',
                background: '#FF4560',
              },
              text: 'Point - runtime',
            }
          });
        
          Chart.exec('chart', 'removeAnnotation', 'point-anno');
        }
      

        render() {
          return (
           
              <div id="chart">
                <Chart options={this.state.options} series={this.state.series} type="line" />
              </div>
              
          );
        }
      }*/

   
