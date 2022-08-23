import "./HomeAnalytics2.css";
import React from "react";
import Chart from "react-apexcharts";


      var _seed = 42;
      Math.random = function() {
        _seed = _seed * 16807 % 2147483647;
        return (_seed - 1) / 2147483646;
      };


export default class HomeAnalytics7 extends React.Component {
        constructor(props) {
          super(props);

          this.state = {
          
            series: [{
              name: 'ZONE 1',
              data: [44, 55, 41, 67, 22, 43, 30]
            }, {
              name: 'ZONE 2',
              data: [13, 23, 20, 8, 13, 27, 20]
            }, {
              name: 'ZONE 3',
              data: [11, 17, 15, 15, 21, 14, 11]
            }, {
              name: 'ZONE 4',
              data: [21, 7, 25, 13, 22, 8, 15]
            }],
            options: {
              title:{
                text:'Zone Occupancy Analysis',
                align:'center',
              },
              chart: {
                type: 'bar',
                height: 350,
                stacked: true,
                color:'#000000',
                toolbar: {
                  show: true
                },
                zoom: {
                  enabled: true
                }
              },
              responsive: [{
                breakpoint: 480,
                options: {
                  legend: {
                    position: 'bottom',
                    offsetX: -10,
                    offsetY: 0
                  }
                }
              }],
              plotOptions: {
                bar: {
                  horizontal: false,
                  borderRadius: 10
                },
              },
              xaxis: {
                type: 'datetime',
                categories: ['01/02/2021 IST', '01/03/2021 IST', '01/04/2021 IST', '01/05/2021 IST',
                  '01/06/2021 IST', '01/07/2021 IST'
                ],
              },
              legend: {
                position: 'right',
                offsetY: 40
              },
              fill: {
                opacity: 1
              }
            },
          
          
          };
        }
        render() {
          return (
           
              <div id="chart2">
                <Chart options={this.state.options} series={this.state.series} type="bar" height={350} width={500}/>
              </div>
            
          )
      }
    }