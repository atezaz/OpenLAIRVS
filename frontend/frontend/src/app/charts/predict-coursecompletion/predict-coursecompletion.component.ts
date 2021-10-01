import { Component, OnInit } from "@angular/core";
import * as Highcharts from "highcharts";
import HC_exporting from "highcharts/modules/exporting";
@Component({
  selector: "app-predict-coursecompletion",
  templateUrl: "./predict-coursecompletion.component.html",
  styleUrls: ["./predict-coursecompletion.component.css"],
})
export class PredictCoursecompletionComponent implements OnInit {
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
        type: "area",
      },
      accessibility: {
        description:
          "Image description: An area chart compares the nuclear stockpiles of the USA and the USSR/Russia between 1945 and 2017. The number of nuclear weapons is plotted on the Y-axis and the years on the X-axis. The chart is interactive, and the year-on-year stockpile levels can be traced for each country. The US has a stockpile of 6 nuclear weapons at the dawn of the nuclear age in 1945. This number has gradually increased to 369 by 1950 when the USSR enters the arms race with 6 weapons. At this point, the US starts to rapidly build its stockpile culminating in 32,040 warheads by 1966 compared to the USSR’s 7,089. From this peak in 1966, the US stockpile gradually decreases as the USSR’s stockpile expands. By 1978 the USSR has closed the nuclear gap at 25,393. The USSR stockpile continues to grow until it reaches a peak of 45,000 in 1986 compared to the US arsenal of 24,401. From 1986, the nuclear stockpiles of both countries start to fall. By 2000, the numbers have fallen to 10,577 and 21,000 for the US and Russia, respectively. The decreases continue until 2017 at which point the US holds 4,018 weapons compared to Russia’s 4,500.",
      },
      title: {
        text: "Predict course succesful completion",
      },

      xAxis: {
        allowDecimals: false,
        title: {
          text: "Activities and Units",
        },
        labels: {
          formatter: function () {
            return this.value; // clean, unformatted number for year
          },
        },
        accessibility: {
          rangeDescription: "Range: 0 to 43.",
        },
      },
      yAxis: {
        title: {
          text: "Passing Rate",
        },
      },

      tooltip: {
        pointFormat: "{series.name}  <b>{point.y:,.0f}</b><br/>  {point.x}",
      },
      plotOptions: {
        area: {
          pointStart: 0,
          marker: {
            enabled: false,
            symbol: "circle",
            radius: 2,
            states: {
              hover: {
                enabled: true,
              },
            },
          },
        },
      },
      series: [
        {
          name: "Forum activities",
          data: [null, 1, 2, 7, 13, 18, 45, 48, 34, 43],
        },
        {
          name: "Passing Rate",
          data: [3, 4, 10, 19, 22, 33, 65, 63, 50, 50],
        },
      ],
    }),
      HC_exporting(Highcharts);
  }
}
