import "./HomeAnalytics2.css";
import React from "react";
import Chart from "react-apexcharts";
import {productRows} from "../../dummyData"; 

      var _seed = 42;
      Math.random = function() {
        _seed = _seed * 16807 % 2147483647;
        return (_seed - 1) / 2147483646;
      }
export default class HomeAnalytics8 extends React.Component {
        constructor(props) {
          super(props);

          this.state = {
          
            series: [
              {
                name: 'ParkingZone',
                data: [
                  {
                    x: 'Zone1',
                    y: 3,
                    z: [],
                  },
                  {
                    x: 'Zone2',
                    y: 3,
                    z: [4],
                  },
                  {
                    x: 'Zone3',
                    y: 3,
                    z: [8,9],
                  },
                  {
                    x: 'Zone4',
                    y: 1,
                    z: [10],
                  }
                
                ]
              },
              /*{
                name: 'Mobile',
                data: [
                  {
                    x: 'ABCD',
                    y: 1
                  },
                  {
                    x: 'DEFG',
                    y: 2
                  },
                  {
                    x: 'WXYZ',
                    y: 1
                  },
                  {
                    x: 'PQR',
                    y: 2
                  },
                  {
                    x: 'MNO',
                    y: 1
                  },
                  {
                    x: 'CDE',
                    y: 3
                  }
                ]
              }*/
            ],
            options: {
              legend: {
                show: true
              },
              chart: {
                height: 350,
                type: 'treemap'
              },
              title: {
                text: 'Zone Distribution Treemap',
                align: 'center'
              }
            },      
          };
        }

        render() {
          return (          
              <div id="chart">
                <Chart options={this.state.options} series={this.state.series} type="treemap" height={300} />
              </div>
           
          );
        }
      }


