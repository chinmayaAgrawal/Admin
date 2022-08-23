import "./analytics.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import Chart from 'react-apexcharts';
import React from 'react';


export default class Analytics2 extends React.Component {
  constructor(props) {
    super(props);
    /////pie-monochrome 
this.state = {
          
  series: [42, 47, 52, 58, 65],
  options: {
    chart: {
      width: 380,
      type: 'polarArea'
    },
    title:{
      text:'Time Occupation Analysis',
      align:'center',

    },
    labels: ['Time A', 'Time B', 'Time C', 'Time D', 'Time E'],
    fill: {
      opacity: 1
    },
    stroke: {
      width: 1,
      colors: undefined
    },
    yaxis: {
      show: false
    },
    legend: {
      position: 'bottom'
    },
    plotOptions: {
      polarArea: {
        rings: {
          strokeWidth: 0
        },
        spokes: {
          strokeWidth: 0
        },
      }
    },
    theme: {
      monochrome: {
        enabled: true,
        shadeTo: 'light',
        shadeIntensity: 0.6
      }
    }
  },


};
  }
  render(){
  return(
    
            <div id="chart2">
                <Chart options={this.state.options} series={this.state.series} type="polarArea" height={350} width={380} />
            </div>
          
   
  );
}
}

