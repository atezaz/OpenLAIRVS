import {
  Component,
  OnInit,
  ViewChild,
  QueryList,
  ViewChildren,
  ElementRef,
  TemplateRef,
  Pipe,
  PipeTransform,
} from "@angular/core";
import { DataService } from "../../data.service";
import { Router } from "@angular/router";
import { data } from "../../data.model";
import { MatSnackBar } from "@angular/material";
import { MatDialog } from "@angular/material/dialog";
import { NgModel } from "@angular/forms";
import { BrowserModule, DomSanitizer } from "@angular/platform-browser";
import { $, element } from "protractor";
import { ChartHelperService } from "src/app/chart-helper.service";

@Component({
  selector: "app-display",
  templateUrl: "./display.component.html",
  styleUrls: ["./display.component.css"],
})

// @Pipe({
//   name: 'highlight'
// })
export class DisplayComponent implements OnInit {
  @ViewChild("secondDialog", { static: true }) secondDialog: any;
  dropdownList = [];
  selectedItems = [];
  name = [];
  dropdownSettings: any;
  data: any;
  options = [];
  mat: any;
  Events: string;
  learningEvents = [];
  learningAct = [];
  Activities: string;
  isLoaded: boolean = false;
  LearningActivities: any;
  selectedevent: any;
  matarray: any;
  selected = [];
  selectionModel: NgModel;
  sp: any[];
  ind: any;
  id: any;
  ind_list = [];
  met: any;
  mat_list = [];
  element = document.getElementById("header");
  btn = document.getElementById("back-to-top");

  constructor(
    private dataService: DataService,
    private chartHelperService: ChartHelperService,
    private router: Router,
    private snackbar: MatSnackBar,
    public dialog: MatDialog,
    private sanitizer: DomSanitizer
  ) {}
  loadScript() {
    let node = document.createElement("script"); // creates the script tag
    node.src = "assets/js/tooltipJS.js"; // sets the source (insert url in between quotes)
    node.type = "text/javascript"; // set the script type
    node.async = true; // makes script run asynchronously
    node.charset = "utf-8";
    // append to head of document
    document.getElementsByTagName("head")[0].appendChild(node);
  }

  ngOnInit() {
    this.fetchdata();
    this.loadScript();

    // if (localStorage.getItem("checked")) {
    //   this.selectedIndicator = JSON.parse(localStorage.getItem("checked"));
    //   console.log(this.selectedIndicator);
    // }
    this.dropdownSettings = {
      singleSelection: false,
      idField: "item_id",
      textField: "item_text",
      selectAllText: "Select All",
      unSelectAllText: "UnSelect All",
      itemsShowLimit: 3,
      allowSearchFilter: true,
    };
  }

  /////////////// function for learning activities selection /////////////

  onItemSelect(item: any) {
    let p = this.selectedevent;
    this.dataService.getdata().subscribe((data: data[]) => {
      this.data = data;

      this.isLoaded = true;
      let event = this.data.filter(function (obj) {
        return p.includes(obj.LearningEvents);
      });

      this.setLearningActivities(event);

      if ((p! = "")) {
        this.data = event;
      }
      let newArray = this.selectedItems;
      this.data.filter(function (obj) {
        obj.LearningActivities = obj.LearningActivities.filter(function (obj2) {
          return newArray.includes(obj2.Name);
        });
      });
    });
  }
  onSelectAll(items: any) {
    this.learningValueChange(this.selectedevent);
  }

  // function of fetching data from database
  fetchdata() {
    this.dataService.getdata().subscribe((data: data[]) => {
      /*
      for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i]["LearningActivities"].length; j++) {
          //  console.log(data[i]["LearningActivities"][j]["indicator"]);
          for (
            let k = 0;
            k < data[i]["LearningActivities"][j]["indicator"].length;
            k++
          ) {
            data[i]["LearningActivities"][j]["indicator"][k].checked = false;
            //console.log(data[i]["LearningActivities"][j]["indicator"][k]);
          }
        }
      }*/

      this.data = data; /// complete data present in database

      this.isLoaded = true;
      if (localStorage.getItem("check")) {
        this.data = JSON.parse(localStorage.getItem("check"));
        for (let i = 0; i < this.data.length; i++) {
          for (let j = 0; j < this.data[i]["LearningActivities"].length; j++) {
            //  console.log(data[i]["LearningActivities"][j]["indicator"]);
            for (
              let k = 0;
              k < this.data[i]["LearningActivities"][j]["indicator"].length;
              k++
            ) {
              if (
                this.data[i]["LearningActivities"][j]["indicator"][k].checked
              ) {
                this.ind_list.push(
                  this.data[i]["LearningActivities"][j]["indicator"][k][
                    "indicatorName"
                  ]
                );
                this.mat_list.push(
                  this.data[i]["LearningActivities"][j]["indicator"][k]
                );
              }
            }
          }
        }
      }

      for (var val of this.data) {
        this.options.push(val["LearningEvents"]);
      }
      this.selected.push(this.options);
      this.learningValueChange("Select All");
      this.setLearningActivities(this.data);
    });
  }
  ////////////////pop up by click Indicator to show meterics ///////////
  getMeterics(indic: any) {
    this.mat = indic.metrics;
    let res = this.mat;
    this.sp = res.split(",");
    this.dialog.open(this.secondDialog);
  }

  learningValueChange(p) {
    this.selectedevent = p;
    this.dataService.getdata().subscribe((data: data[]) => {
      this.data = data;
      if (localStorage.getItem("check")) {
        this.data = JSON.parse(localStorage.getItem("check"));
      }
      this.isLoaded = true;
      if (p == "Select All") {
      } else {
        let event = this.data.filter(function (obj) {
          return p.includes(obj.LearningEvents);
        });
        this.setLearningActivities(event);

        if (p != "") {
          this.data = event;
        }
      }
    });
  }

  /////////////// display learning activities ////////////////////
  setLearningActivities(events: any) {
    this.dropdownList = [];
    this.name = [];
    for (let learningEvents of events) {
      for (let entry of learningEvents.LearningActivities) {
        this.dropdownList.push(entry.Name);
        for (let ind1 of entry.indicator) {
          this.name.push(ind1.metrics);
        }
      }
    }
  }

  ///////////////////   search by metrics ///////////////

  learningEventsChangeOnSearch(search: any) {
    if (search) {
      this.dataService.getsearchresult(search).subscribe((data: data[]) => {
        this.data = data;
      });
    } else {
      this.fetchdata();
    }
  }
  ///////////////////   search by indicator ///////////////
  searchIndicator(search: any) {
    if (search) {
      this.dataService.getsearchind(search).subscribe((data: data[]) => {
        this.data = data;
      });
    } else {
      this.fetchdata();
    }
  }

  /////////////

  // transform(value: any, args: any): any {
  //   if (!args) {
  //     return value;
  //   }
  //   // Match in a case insensitive maneer
  //   const re = new RegExp(args, 'gi');
  //   const match = value.match(re);

  //   // If there's no match, just return the original value.
  //   if (!match) {
  //     return value;
  //   }

  //   const replacedValue = value.replace(re, "<mark>" + match[0] + "</mark>")
  //   return this.sanitizer.bypassSecurityTrustHtml(replacedValue)
  // }

  // searchTerm: string;
  // updateSearch(e) {
  //   this.searchTerm = e.target.value
  // }

  checkvalue(event: any) {
    if (this.selectedItems.length == 0) {
      this.learningValueChange(this.selectedevent);
    } else {
      let index = this.selectedItems.length;
      if (index !== -1) {
        this.selectedItems.splice(index, 1);
        this.onItemSelect(this.selectedItems);
      }
    }
  }

  ////////////////// function for checkbox to select indicator indicator  //////////////////

  Checkbox(event: any, selectInd: any) {
    this.ind = selectInd.indicatorName;
    this.met = selectInd;

    if (event.target.checked) {
      selectInd.checked = true;
      localStorage.setItem("check", JSON.stringify(this.data));
      this.ind_list.push(this.ind);
      this.mat_list.push(this.met);
    } else {
      let index = this.ind_list.indexOf(this.ind);
      selectInd.checked = false;
      localStorage.setItem("check", JSON.stringify(this.data));
      let index1 = this.mat_list.indexOf(this.met);

      if (index !== -1) {
        this.ind_list.splice(index, 1);
        this.mat_list.splice(index1, 1);
      }
    }
  }

  getSelectedind = (x) => {
    let data = x;

    // Convert the text to BLOB.

    let textToBLOB = new Blob([JSON.stringify(data)], {
      type: "application/json",
    });

    let sFileName = "indicator.json"; // The file to save the data.

    let newLink = document.createElement("a");
    newLink.download = sFileName;
    if (textToBLOB.size == 2) {
      window.alert("No indicator is selected");
    } else if ((window as any).webkitURL != null) {
      newLink.href = (window as any).webkitURL.createObjectURL(textToBLOB);
    } else {
      newLink.href = window.URL.createObjectURL(textToBLOB);
      newLink.style.display = "none";
      // document.body.appendChild(newLink);
    }

    newLink.click();
  };

  reset() {
    this.ind_list = [];
    this.mat_list = [];
    for (let i = 0; i < this.data.length; i++) {
      for (let j = 0; j < this.data[i]["LearningActivities"].length; j++) {
        //  console.log(data[i]["LearningActivities"][j]["indicator"]);
        for (
          let k = 0;
          k < this.data[i]["LearningActivities"][j]["indicator"].length;
          k++
        ) {
          this.data[i]["LearningActivities"][j]["indicator"][k].checked = false;
        }
      }
    }
    localStorage.removeItem("check");
    this.uncheckAll();
  }

  // @ViewChildren("indicatorCheckbox") indicatorCheckboxes: QueryList<ElementRef>;
  // checkIt() {
  //   let checkedElems = [];
  //   this.indicatorCheckboxes.forEach((element) => {
  //     if ((element.nativeElement.checked = true)) checkedElems.push(element);
  //   });
  //   localStorage.setItem("checked", JSON.stringify(checkedElems));
  // }

  @ViewChildren("indicatorCheckbox") indicatorCheckboxs: QueryList<ElementRef>;
  uncheckAll() {
    this.indicatorCheckboxs.forEach((element) => {
      element.nativeElement.checked = false;
    });
  }

  backToTop() {
    this.element.scrollIntoView({ behavior: "smooth" });
  }

  forwardIndicators = (x) => {
    let indicators = [];
    let indicatorReferences = [];
    let regex = /\[[0-9]+\]/;
    for (const ind of this.ind_list) {
      indicatorReferences.push(ind.match(regex)[0]);
      indicators.push(ind);
    }

    this.chartHelperService.setSettings("selectedIndicators", indicators);
    this.chartHelperService.setSettings(
      "referenceNumbers",
      indicatorReferences
    );
    if (indicators.length > 0) {
      localStorage.setItem("check", JSON.stringify(this.data));
      this.router.navigate(["/dashboard"]);
    } else {
      window.alert("No indicator is selected");
    }
  };
}
