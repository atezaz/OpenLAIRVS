import { Component, OnInit } from "@angular/core";
import * as Highcharts from "highcharts";
import HC_exporting from "highcharts/modules/exporting";
import HighchartsMore from "highcharts/highcharts-more.src";
import HighchartsSolidGauge from "highcharts/modules/solid-gauge";

HighchartsMore(Highcharts);
HighchartsSolidGauge(Highcharts);

@Component({
  selector: "app-feedback",
  templateUrl: "./feedback.component.html",
  styleUrls: ["./feedback.component.css"],
})
export class FeedbackComponent implements OnInit {
  Highcharts = Highcharts;
  loadChart: boolean = false;
  chartOptions: {};
  chartOptions2: {};
  chartRpm;
  gaugeOptions;
  chartSpeed;
  constructor() {}

  ngOnInit() {
    this.setData();
    this.loadChart = true;
  }

  setData() {
    this.chartOptions = {
      chart: {
        type: "solidgauge",
      },

      title: {
        text: "You",
      },

      pane: {
        center: ["50%", "85%"],
        size: "140%",
        startAngle: -90,
        endAngle: 90,
        background: {
          backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || "#EEE",
          innerRadius: "60%",
          outerRadius: "100%",
          shape: "arc",
        },
      },

      exporting: {
        enabled: false,
      },

      tooltip: {
        enabled: false,
      },

      // the value axis
      yAxis: {
        stops: [
          [0.1, "#DF5353"], // red
          [0.5, "#DDDF0D"], // yellow
          [0.9, "#55BF3B"], // green
        ],
        lineWidth: 0,
        tickWidth: 0,
        minorTickInterval: null,
        tickAmount: 2,
        title: {
          y: -70,
        },
        labels: {
          y: 16,
        },
        min: 0,
        max: 100,
      },

      plotOptions: {
        solidgauge: {
          dataLabels: {
            y: 5,
            borderWidth: 0,
            useHTML: true,
          },
        },
      },

      credits: {
        enabled: false,
      },

      series: [
        {
          name: "You",
          data: [70],
          dataLabels: {
            format:
              '<div style="text-align:center">' +
              '<span style="font-size:25px">{y}</span><br/>' +
              '<span style="font-size:12px;opacity:0.4">video <br>interactions</span>' +
              "</div>",
          },
        },
      ],
    };
    HC_exporting(Highcharts);

    this.chartOptions2 = {
      chart: {
        type: "solidgauge",
      },

      title: {
        text: "Class",
      },

      pane: {
        center: ["50%", "85%"],
        size: "140%",
        startAngle: -90,
        endAngle: 90,
        background: {
          backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || "#EEE",
          innerRadius: "60%",
          outerRadius: "100%",
          shape: "arc",
        },
      },

      exporting: {
        enabled: false,
      },

      tooltip: {
        enabled: false,
      },

      // the value axis
      yAxis: {
        stops: [
          [0.1, "#DF5353"], // red
          [0.5, "#DDDF0D"], // yellow
          [0.9, "#55BF3B"], // green
        ],
        lineWidth: 0,
        tickWidth: 0,
        minorTickInterval: null,
        tickAmount: 2,
        title: {
          y: -70,
        },
        labels: {
          y: 16,
        },
        min: 0,
        max: 100,
      },

      plotOptions: {
        solidgauge: {
          dataLabels: {
            y: 5,
            borderWidth: 0,
            useHTML: true,
          },
        },
      },

      credits: {
        enabled: false,
      },

      series: [
        {
          name: "Class",
          data: [83],
          dataLabels: {
            format:
              '<div style="text-align:center">' +
              '<span style="font-size:25px">{y}</span><br/>' +
              '<span style="font-size:12px;opacity:0.4">video <br>interactions</span>' +
              "</div>",
          },
        },
      ],
    };
  }
}
