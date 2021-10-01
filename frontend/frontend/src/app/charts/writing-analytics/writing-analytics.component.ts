import { Component, OnInit } from "@angular/core";
import * as Highcharts from "highcharts";
import HC_exporting from "highcharts/modules/exporting";

@Component({
  selector: "app-writing-analytics",
  templateUrl: "./writing-analytics.component.html",
  styleUrls: ["./writing-analytics.component.css"],
})
export class WritingAnalyticsComponent implements OnInit {
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
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: "pie",
      },
      title: {
        text: "Writing analytics",
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
              name: "document revisions",
              sliced: true,
              selected: true,
              y: 51.84,
            },
            {
              name: "student most edits",
              y: 10.85,
            },
            {
              name: "student least edits",
              y: 4.67,
            },
          ],
        },
      ],
    }),
      HC_exporting(Highcharts);
  }
}
