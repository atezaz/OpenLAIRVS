import { Component, OnInit } from "@angular/core";
import * as Highcharts from "highcharts";
import HC_exporting from "highcharts/modules/exporting";

@Component({
  selector: "app-clustering",
  templateUrl: "./clustering.component.html",
  styleUrls: ["./clustering.component.css"],
})
export class ClusteringComponent implements OnInit {
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
        type: "packedbubble",
        height: "50%",
      },
      title: {
        text: "Clustering",
      },
      tooltip: {
        useHTML: true,
        pointFormat:
          "<b>{point.name}:</b><br> {point.timetheory}:{point.value} hours<br>{point.timetasks}:{point:value} hours<br>{point.timeforums}:{point.value} minutes<br>{point.timesubmit}:{point.value} days<br>{point.forumwords}:{point.value}",
      },
      plotOptions: {
        packedbubble: {
          minSize: "20%",
          maxSize: "100%",
          zMin: 0,
          zMax: 1000,
          layoutAlgorithm: {
            gravitationalConstant: 0.05,
            splitSeries: true,
            seriesInteraction: false,
            dragBetweenSeries: true,
            parentNodeLimit: true,
          },
          dataLabels: {
            enabled: true,
            format: "{point.name}",
            filter: {
              property: "y",
              operator: ">",
              value: 15,
            },
            style: {
              color: "black",
              textOutline: "none",
              fontWeight: "normal",
            },
          },
        },
      },
      series: [
        {
          name: "Cluster 1",
          data: [
            {
              name: "User 1",
              value: Math.floor(Math.random() * 30),
              timetheory: "Time spent on theoretical contents",
              timetasks: "Time spent on practical tasks",
              timeforums: "Time spent on forum",
              timesubmit: "Time until task is submitted",
              forumwords: "# words in forum ",
            },
            {
              name: "User 2",
              value: Math.floor(Math.random() * 30),
              timetheory: "Time spent on theoretical contents",
              timetasks: "Time spent on practical tasks",
              timeforums: "Time spent on forum",
              timesubmit: "Time until task is submitted",
              forumwords: "# words in forum ",
            },
            {
              name: "User 3",
              value: Math.floor(Math.random() * 30),
              timetheory: "Time spent on theoretical contents",
              timetasks: "Time spent on practical tasks",
              timeforums: "Time spent on forum",
              timesubmit: "Time until task is submitted",
              forumwords: "# words in forum ",
            },
            {
              name: "User 4",
              value: Math.floor(Math.random() * 30),
              timetheory: "Time spent on theoretical contents",
              timetasks: "Time spent on practical tasks",
              timeforums: "Time spent on forum",
              timesubmit: "Time until task is submitted",
              forumwords: "# words in forum ",
            },
            {
              name: "User 5",
              value: Math.floor(Math.random() * 30),
              timetheory: "Time spent on theoretical contents",
              timetasks: "Time spent on practical tasks",
              timeforums: "Time spent on forum",
              timesubmit: "Time until task is submitted",
              forumwords: "# words in forum ",
            },
            {
              name: "User 6",
              value: Math.floor(Math.random() * 30),
              timetheory: "Time spent on theoretical contents",
              timetasks: "Time spent on practical tasks",
              timeforums: "Time spent on forum",
              timesubmit: "Time until task is submitted",
              forumwords: "# words in forum ",
            },
            {
              name: "User 7",
              value: Math.floor(Math.random() * 30),
              timetheory: "Time spent on theoretical contents",
              timetasks: "Time spent on practical tasks",
              timeforums: "Time spent on forum",
              timesubmit: "Time until task is submitted",
              forumwords: "# words in forum ",
            },
            {
              name: "User 8",
              value: Math.floor(Math.random() * 30),
              timetheory: "Time spent on theoretical contents",
              timetasks: "Time spent on practical tasks",
              timeforums: "Time spent on forum",
              timesubmit: "Time until task is submitted",
              forumwords: "# words in forum ",
            },
            {
              name: "User 9",
              value: Math.floor(Math.random() * 30),
              timetheory: "Time spent on theoretical contents",
              timetasks: "Time spent on practical tasks",
              timeforums: "Time spent on forum",
              timesubmit: "Time until task is submitted",
              forumwords: "# words in forum ",
            },
            {
              name: "User 10",
              value: Math.floor(Math.random() * 30),
              timetheory: "Time spent on theoretical contents",
              timetasks: "Time spent on practical tasks",
              timeforums: "Time spent on forum",
              timesubmit: "Time until task is submitted",
              forumwords: "# words in forum ",
            },
            {
              name: "User 11",
              value: Math.floor(Math.random() * 30),
              timetheory: "Time spent on theoretical contents",
              timetasks: "Time spent on practical tasks",
              timeforums: "Time spent on forum",
              timesubmit: "Time until task is submitted",
              forumwords: "# words in forum ",
            },
            {
              name: "User 12",
              value: Math.floor(Math.random() * 30),
              timetheory: "Time spent on theoretical contents",
              timetasks: "Time spent on practical tasks",
              timeforums: "Time spent on forum",
              timesubmit: "Time until task is submitted",
              forumwords: "# words in forum ",
            },
          ],
        },
        {
          name: "Cluster 2",
          data: [
            {
              name: "User 13",
              value: Math.floor(Math.random() * 30),
              timetheory: "Time spent on theoretical contents",
              timetasks: "Time spent on practical tasks",
              timeforums: "Time spent on forum",
              timesubmit: "Time until task is submitted",
              forumwords: "# words in forum ",
            },
            {
              name: "User 14",
              value: Math.floor(Math.random() * 30),
              timetheory: "Time spent on theoretical contents",
              timetasks: "Time spent on practical tasks",
              timeforums: "Time spent on forum",
              timesubmit: "Time until task is submitted",
              forumwords: "# words in forum ",
            },
            {
              name: "User 15",
              value: Math.floor(Math.random() * 30),
              timetheory: "Time spent on theoretical contents",
              timetasks: "Time spent on practical tasks",
              timeforums: "Time spent on forum",
              timesubmit: "Time until task is submitted",
              forumwords: "# words in forum ",
            },
            {
              name: "User 16",
              value: Math.floor(Math.random() * 30),
              timetheory: "Time spent on theoretical contents",
              timetasks: "Time spent on practical tasks",
              timeforums: "Time spent on forum",
              timesubmit: "Time until task is submitted",
              forumwords: "# words in forum ",
            },
            {
              name: "User 17",
              value: Math.floor(Math.random() * 30),
              timetheory: "Time spent on theoretical contents",
              timetasks: "Time spent on practical tasks",
              timeforums: "Time spent on forum",
              timesubmit: "Time until task is submitted",
              forumwords: "# words in forum ",
            },
            {
              name: "User 18",
              value: Math.floor(Math.random() * 30),
              timetheory: "Time spent on theoretical contents",
              timetasks: "Time spent on practical tasks",
              timeforums: "Time spent on forum",
              timesubmit: "Time until task is submitted",
              forumwords: "# words in forum ",
            },
            {
              name: "User 19",
              value: Math.floor(Math.random() * 30),
              timetheory: "Time spent on theoretical contents",
              timetasks: "Time spent on practical tasks",
              timeforums: "Time spent on forum",
              timesubmit: "Time until task is submitted",
              forumwords: "# words in forum ",
            },
            {
              name: "User 20",
              value: Math.floor(Math.random() * 30),
              timetheory: "Time spent on theoretical contents",
              timetasks: "Time spent on practical tasks",
              timeforums: "Time spent on forum",
              timesubmit: "Time until task is submitted",
              forumwords: "# words in forum ",
            },
            {
              name: "User 21",
              value: Math.floor(Math.random() * 30),
              timetheory: "Time spent on theoretical contents",
              timetasks: "Time spent on practical tasks",
              timeforums: "Time spent on forum",
              timesubmit: "Time until task is submitted",
              forumwords: "# words in forum ",
            },
            {
              name: "User 22",
              value: Math.floor(Math.random() * 30),
              timetheory: "Time spent on theoretical contents",
              timetasks: "Time spent on practical tasks",
              timeforums: "Time spent on forum",
              timesubmit: "Time until task is submitted",
              forumwords: "# words in forum ",
            },
          ],
        },
        {
          name: "Cluster 3",
          data: [
            {
              name: "User 23",
              value: Math.floor(Math.random() * 30),
              timetheory: "Time spent on theoretical contents",
              timetasks: "Time spent on practical tasks",
              timeforums: "Time spent on forum",
              timesubmit: "Time until task is submitted",
              forumwords: "# words in forum ",
            },
            {
              name: "User 24",
              value: Math.floor(Math.random() * 30),
              timetheory: "Time spent on theoretical contents",
              timetasks: "Time spent on practical tasks",
              timeforums: "Time spent on forum",
              timesubmit: "Time until task is submitted",
              forumwords: "# words in forum ",
            },
            {
              name: "User 25",
              value: Math.floor(Math.random() * 30),
              timetheory: "Time spent on theoretical contents",
              timetasks: "Time spent on practical tasks",
              timeforums: "Time spent on forum",
              timesubmit: "Time until task is submitted",
              forumwords: "# words in forum ",
            },
          ],
        },
      ],
    }),
      HC_exporting(Highcharts);
  }
}
