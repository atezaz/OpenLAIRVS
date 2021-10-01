import { Component, OnInit } from "@angular/core";
import * as Highcharts from "highcharts";
import HC_exporting from "highcharts/modules/exporting";

@Component({
  selector: "app-time-planning",
  templateUrl: "./time-planning.component.html",
  styleUrls: ["./time-planning.component.css"],
})
export class TimePlanningComponent implements OnInit {
  chartOptions: {};
  Highcharts = Highcharts;
  loadChart: boolean = false;

  constructor() {}

  ngOnInit() {
    //Set the chart data after we get the indicator and metrics
    this.setData();
    this.loadChart = true;
  }
  setData() {
    (this.chartOptions = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: "pie",
      },
      title: {
        text: "Time planning",
      },
      tooltip: {
        pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
      },
      accessibility: {
        point: {
          valueSuffix: "%",
        },
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: "pointer",
          dataLabels: {
            enabled: true,
            format: "<b>{point.name}</b>: {point.percentage:.1f} %",
          },
        },
      },
      series: [
        {
          colorByPoint: true,
          data: [
            {
              name: "time spent on reading",
              y: 61.41,
              sliced: true,
              selected: true,
            },
            {
              name: "time spent on planning",
              y: 11.84,
            },
            {
              name: "time spent on discussion forum",
              y: 10.85,
            },
          ],
        },
      ],
    }),
      HC_exporting(Highcharts);
  }
}
