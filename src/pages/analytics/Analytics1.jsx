import "./analytics.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import Chart from 'react-apexcharts';
import React from 'react';


var _seed = 42;
Math.random = function() {
  _seed = _seed * 16807 % 2147483647;
  return (_seed - 1) / 2147483646;
};

function generateData(count, yrange) {
      var i = 0;
      var series = [];
      while (i < count) {
      var x = 'w' + (i + 1).toString();
      var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push({
        x: x,
        y: y
      });
      i++;
      }
      return series;
}
export default class Analytics1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    
      series: [{
        name: 'Slot1',
        data: generateData(18, {
          min: 0,
          max: 90
        })
      },
      {
        name: 'Slot2',
        data: generateData(18, {
          min: 0,
          max: 90
        })
      },
      {
        name: 'Slot3',
        data: generateData(18, {
          min: 0,
          max: 90
        })
      },
      {
        name: 'Slot4',
        data: generateData(18, {
          min: 0,
          max: 90
        })
      },
      {
        name: 'Slot5',
        data: generateData(18, {
          min: 0,
          max: 90
        })
      },
      {
        name: 'Slot6',
        data: generateData(18, {
          min: 0,
          max: 90
        })
      },
      {
        name: 'Slot7',
        data: generateData(18, {
          min: 0,
          max: 90
        })
      },
      {
        name: 'Slot8',
        data: generateData(18, {
          min: 0,
          max: 90
        })
      },
      {
        name: 'Slot9',
        data: generateData(18, {
          min: 0,
          max: 90
        })
      },
      {
        name: 'Slot10',
        data: generateData(18, {
          min: 0,
          max: 90
        })
      },

      ],
      options: {
        chart: {
          height: 350,
          type: 'heatmap',
        },
        dataLabels: {
          enabled: false
        },
        colors: ["#008FFB"],
        title: {
          text: 'Slot HeatMap Analysis',
          align:'center',
        },
      },
    
    };

   

};
  render(){
  return(
   
            <div id="charts">
              <Chart options={this.state.options} series={this.state.series} type="heatmap" height={350} width={500} />
            </div>
          
   
  );
}

}
