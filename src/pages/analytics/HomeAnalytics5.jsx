import "./HomeAnalytics2.css";
import Chart from "react-apexcharts";
import React from "react";


      var _seed = 42;
      Math.random = function() {
        _seed = _seed * 16807 % 2147483647;
        return (_seed - 1) / 2147483646;
      };
   

export default class HomeAnalytics5 extends React.Component {
        constructor(props) {
          super(props);

          this.state = {
          
            series: [89, 95, 73, 33],
            options: {
              labels: ['zone1', 'zone2','zone3','Zone4'],

              title:{
                text: 'Usage by Zones per Week',
                align: 'center'
              },
              chart: {
                width: 380,
                type: 'donut',
                background:'#f7f596e5',
              },
              dataLabels: {
                  
                enabled: false
              },
              responsive: [{
                breakpoint: 480,
                options: {
                  chart: {
                    width: 200
                  },
                  legend: {
                    show: true,
                    names: [['zone1'], ['zone2'],['zone3'],['zone4']],
                  }
                }
              }],
              legend: {
                position: 'right',
                offsetY: 0,
                height: 230,
                names: [['zone1'], ['zone2'],['zone3'],['zone4']],
                labels: [['zone1'], ['zone2'],['zone3'],['Zone4']],
              }
            },
            
          
          };
        }

      
        appendData() {
          var arr = this.state.series.slice()
          arr.push(Math.floor(Math.random() * (100 - 1 + 1)) + 1)
        
          this.setState({
            series: arr
          })
        }
        
        removeData() {
          if(this.state.series.length === 1) return
          
          var arr = this.state.series.slice()
          arr.pop()
        
          this.setState({
            series: arr
          })
        }
        
        /*randomize() {
          this.setState({
            series: this.state.series.map(function() {
              return Math.floor(Math.random() * (100 - 1 + 1)) + 1
            })
          })
        }
          <button
                      
                      onClick={() => this.randomize()}
                      >
                    RANDOMIZE
                  </button>
                  &nbsp;        
        */
        
        reset() {
          this.setState({
            series: [89, 95, 73, 33]
          })
        }
      

        render() {
          return (
            
              <div>
                <div class="chart-wrap">
                  <div id="chart5">
                    <Chart options={this.state.options} series={this.state.series} type="donut" width={380} />
                  </div>
                </div>
              
                <div class="actions">
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;

                   <button
                      
                      onClick={() => this.appendData()}
                      >
                    + ADD
                   </button>
                  &nbsp;
                  <button
                      
                      onClick={() => this.removeData()}
                      >
                    - REMOVE
                  </button>
                  &nbsp;
                
                  <button
                      
                      onClick={() => this.reset()}
                      >
                    RESET
                  </button>
                </div>
              </div>
             
            
          );
        }
      }

    
