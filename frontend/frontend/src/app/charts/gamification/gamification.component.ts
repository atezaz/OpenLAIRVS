import { Component, OnInit } from '@angular/core';
import * as Highcharts from "highcharts";
import HC_exporting from "highcharts/modules/exporting";
@Component({
  selector: 'app-gamification',
  templateUrl: './gamification.component.html',
  styleUrls: ['./gamification.component.css']
})
export class GamificationComponent implements OnInit {
  chartOptions: {};
  Highcharts = Highcharts;
  loadChart: boolean = false;
  constructor() { }

  ngOnInit() {
    this.setData();
    this.loadChart = true;
  }

  setData() {
    this.chartOptions = {
      title: {
        text: 'Gamification'
    },
    xAxis: {
        categories: ['Quiz 1', 'Quiz 2', 'Quiz 3', 'Quiz 4', 'Quiz 5', 'Quiz 6', 'Quiz 7']
    },
    yAxis: {
      title: {
        text: 'Points'
      }
    },

    series: [{
        type: 'area',
        name: 'Achieved points',
        data: [93, 72, 100, 64, 78, 90]
    }, 
{
        name: 'Maximum possible points',
        type: 'spline',
        data: [100, 100, 100, 100, 100, 100],
        marker: {
            enabled: false
        },
        dashStyle: 'shortdot',
       
    }]
    },
    HC_exporting(Highcharts);
  }

}
