import { Component, OnInit } from "@angular/core";
import * as Highcharts from "highcharts";
import HC_exporting from "highcharts/modules/exporting";
import more from "highcharts/highcharts-more";
import { ChartHelperService } from "src/app/chart-helper.service";
more(Highcharts);

@Component({
  selector: "app-affective-state",
  templateUrl: "./affective-state.component.html",
  styleUrls: ["./affective-state.component.css"],
})
export class AffectiveStateComponent implements OnInit {
  chartOptions: {};
  Highcharts = Highcharts;
  loadChart: boolean = false;
  constructor() {}

  ngOnInit() {
    this.setData();
    this.loadChart = true;
  }

  setData() {
    (this.chartOptions = {
      chart: {
        polar: true,
      },

      title: {
        text: "Affective state",
      },

      xAxis: {
        categories: [
          "Activity 1",
          "Activity 2",
          "Activity 3",
          "Activity 4",
          "Activity 5",
          "Activity 6",
        ],
      },

      yAxis: {
        min: 0,
      },

      series: [
        {
          type: "column",
          name: "Frustrated",
          data: [1, 4, 2, 1, 5, 6],
        },
        {
          type: "column",
          name: "Confused",
          data: [3, 7, 1, 3, 3, 4],
        },
        {
          type: "column",
          name: "Bored",
          data: [2, 3, 4, 5, 8, 7],
        },
        {
          type: "column",
          name: "Happy",
          data: [1, 8, 2, 7, 3, 6],
        },
        {
          type: "line",
          name: "Class Average",
          data: [4, 3, 6, 2, 5, 3],
        },
        {
          type: "column",
          name: "Motivated",
          data: [5, 6, 8, 9, 4, 2],
        },
      ],
    }),
      HC_exporting(Highcharts);
  }
}
