import { Component, OnInit } from "@angular/core";
import * as Highcharts from "highcharts";
import HC_exporting from "highcharts/modules/exporting";
@Component({
  selector: "app-passing-rate-prediction",
  templateUrl: "./passing-rate-prediction.component.html",
  styleUrls: ["./passing-rate-prediction.component.css"],
})
export class PassingRatePredictionComponent implements OnInit {
  chartOptions: {};
  chartOptions2: {};
  Highcharts = Highcharts;
  loadChart: boolean = false;
  series_a;
  selectedOption: string;

  constructor() {}

  ngOnInit() {
    this.selectedOption = "Clicks";
    this.series_a = [
      {
        name: "series1",
        data: [22, 20, 18, 3, 4],
      },
      {
        name: "series2",
        data: [10, 30, 10, 13, 14],
      },
      {
        name: "series3",
        data: [12, 10, 10, 9, 2],
      },
    ];

    this.setData();
    this.loadChart = true;
  }

  setData() {
    this.chartOptions = {
      chart: {
        type: "column",
      },
      title: { text: "simple chart" },
      tooltip: {
        shared: true,
      },

      xAxis: [
        {
          title: {
            text: "Average grade so far",
          },
          categories: [
            "5",
            "15",
            "25",
            "35",
            "45",
            "55",
            "65",
            "75",
            "85",
            "95",
          ],
          height: 100,
          max: 9,
          lineWidth: 2,
        },
        {
          title: {
            text: "final grade",
          },
          categories: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
          top: 300,
          max: 9,
          height: 100,
          offset: 0,
          lineWidth: 2,
        },
      ],
      yAxis: [
        {
          title: {
            text: "# students",
          },
          labels: {
            format: "{value}%",
          },
          height: 100,
          max: 25,
          lineWidth: 2,
        },
        {
          title: {
            text: "probability",
          },
          labels: {
            format: "{value}%",
          },
          top: 300,
          max: 100,
          height: 100,
          offset: 0,
          lineWidth: 2,
        },
      ],
      plotOptions: {
        series: {
          cursor: "pointer",
          point: {
            events: {
              click: function () {
                if (this.category == 5) {
                  console.log(this.series);
                }
              },
            },
          },
        },
      },
      series: [
        {
          data: [10, 0, 5, 0, 5, 5, 10, { y: 25, color: "red" }, 20, 15],
          yAxis: 0,
          xAxis: 0,
        },
        {
          type: "spline",
          data: [0, 0, 0, 0, 0, 0, 0, 50, 100, 70],
          yAxis: 1,
          xAxis: 1,
        },
      ],
    };
  }

  updateChart(event: any) {
    var selVal = event.target.value;
    if (selVal == "A" || selVal == "") {
      this.chartOptions["series"] = [
        {
          data: [10, 0, 5, 0, 5, 5, 10, 25, 20, 15],
          yAxis: 0,
          xAxis: 0,
        },
        {
          type: "spline",
          data: [0, 0, 0, 0, 0, 0, 0, 50, 100, 70],
          yAxis: 1,
          xAxis: 1,
        },
      ];
    } else if (selVal == "B") {
      this.chartOptions["series"] = [
        {
          data: [10, 0, 5, 0, 5, 5, 10, 25, 20, 15],
          yAxis: 0,
          xAxis: 0,
        },
        {
          type: "spline",
          data: [0, 0, 0, 0, 0, 0, 0, 50, 100, 70],
          yAxis: 1,
          xAxis: 1,
        },
      ];
    } else if (selVal == "C") {
      this.chartOptions["series"] = [
        { name: "You", data: [31, 22, 33, 32, 11] },
        { name: "Avg. class data", data: [32, 31, 11, 2, 15] },
      ];
    } else if (selVal == "D") {
      this.chartOptions["series"] = [
        { name: "You", data: [54, 33, 44, 12, 32] },
        { name: "Avg. class data", data: [22, 43, 13, 12, 133] },
      ];
    } else {
      this.chartOptions["series"] = [
        { name: "You", data: [24, 13, 14, 32, 22] },
        { name: "Avg. class data", data: [32, 43, 33, 52, 33] },
      ];
    }
    this.selectedOption =
      event.target.options[event.target.options.selectedIndex].text;
    this.chartOptions["xAxis"][0]["title"]["text"] = this.selectedOption;

    this.chartOptions = { ...this.chartOptions };
  }
}
