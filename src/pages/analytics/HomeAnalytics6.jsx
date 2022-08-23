import "./HomeAnalytics2.css";
import React from "react";
import Chart from "react-apexcharts";

    
      // Replace Math.random() with a pseudo-random number generator to get reproducible results in e2e tests
      // Based on https://gist.github.com/blixt/f17b47c62508be59987b
      var _seed = 42;
      Math.random = function() {
        _seed = _seed * 16807 % 2147483647;
        return (_seed - 1) / 2147483646;
      };
   
    var colors = [
      '#008FFB',
      '#00E396',
      '#FEB019',
      '#FF4560',
      '#775DD0',
      '#546E7A',
      '#26a69a',
      '#D10CE8'
    ]
 
 export default class ApexChart extends React.Component {
        constructor(props) {
          super(props);

          this.state = {
          
            series: [{
              data: [21, 22, 10, 28, 16, 21, 30]
            }],
            options: {
              title:{
                text: 'Usage per Week',
                align: 'center'
              },
              chart: {
                height: 350,
                type: 'bar',
                events: {
                  click: function(chart, w, e) {
                    // console.log(chart, w, e)
                  }
                }
              },
              colors: colors,
              plotOptions: {
                bar: {
                  columnWidth: '45%',
                  distributed: true,
                }
              },
              dataLabels: {
                enabled: false
              },
              legend: {
                show: false
              },
              xaxis: {
                categories: [
                  ['Monday'],
                  ['Tuesday'],
                  ['Wednesday'],
  
                  ['Thursday'],
                  ['Friday'],
                  ['Saturday'],
                  ['Sunday'], 
                ],
                labels: {
                  style: {
                    colors: colors,
                    fontSize: '12px'
                  }
                }
              },
              yaxis: {
                grids:{
                  style:{
                color:'#000000'
              }
            }
            }

            },
          
          
          };
        }

      

        render() {
          return (
            <div>
              <div id="chart5">
                <Chart options={this.state.options} series={this.state.series} type="bar" height={350} />
              </div>
            </div>
          );
        }
      }

 