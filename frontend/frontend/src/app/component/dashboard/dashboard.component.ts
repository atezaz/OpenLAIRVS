import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/data.service";
import { FormControl } from "@angular/forms";
import { ChartHelperService } from "src/app/chart-helper.service";
@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  components = [];
  indicators = new FormControl();
  dropdownItems: string[];
  constructor(
    private dataService: DataService,
    private chartHelperService: ChartHelperService
  ) {}

  ngOnInit() {
    this.dropdownItems = JSON.parse(localStorage.getItem("selectedIndicators"));

    this.components = this.dropdownItems;
    console.log(this.components);
  }

  downloadPage() {
    var htmlContent = [document.querySelector("html").innerHTML];
    var excludeStyle = `
    <style>
    .downloadCharts{
      display: none;
    }

    .header {
      display: none;
    }

    .mat-form-field {
      display: none;
    }

    .footer {
      display: block !important;
    }

   
    </style>`;
    htmlContent = [htmlContent[0].concat(excludeStyle)];
    var bl = new Blob(htmlContent, { type: "text/html" });
    var a = document.createElement("a");
    a.href = URL.createObjectURL(bl);
    a.download = "Indicator Visualizations.html";
    a.hidden = true;
    document.body.appendChild(a);
    a.click();
  }
}
