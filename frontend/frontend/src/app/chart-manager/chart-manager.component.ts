import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chart-manager',
  templateUrl: './chart-manager.component.html',
  styleUrls: ['./chart-manager.component.css']
})
export class ChartManagerComponent implements OnInit {
  @Input() component: string;
  dropdownItems: string[];
  constructor() { }

  ngOnInit() {
   // this.component = this.component.replace(/\[\d*\]/g, "").trim();
    console.log(this.component);
      this.dropdownItems = JSON.parse(localStorage.getItem("selectedIndicators"))
  //  console.log(this.component.replace(/\[\d*\]/g, "").trim())
  }

}
