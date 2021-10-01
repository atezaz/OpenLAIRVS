import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class DataService {
  public selectedIndicators: any;

  private storageName: string = "values2";


  uri='http://localhost:3001/openlair';
  //uri = 'https://programmingzen.org/openlair'
  //uri='http://localhost:3001';
  //uri = "https://csspreparation.academy/openlair";
  //uri2 = 'http://localhost:3001/openlair';
  //68.65.123.130

  constructor(private http: HttpClient) {}

  getdata() {
    return this.http.get(`${this.uri}/display/data`);
  }

  getsearchresult(search: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "text/plain",
      }),
    };
    return this.http.post(`${this.uri}/getsearchmetrics`, {
      search,
      httpOptions,
    });
  }

  getsearchind(search: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "text/plain",
      }),
    };
    return this.http.post(`${this.uri}/getsearchindicator`, {
      search,
      httpOptions,
    });
  }

  addData(LearningEvents, LearningActivities, indicator, metrics) {
    const data1 = {
      LearningEvents: LearningEvents,
      LearningActivities: {
        Name: LearningActivities,
        indicator: {
          indicatorName: indicator,
          metrics: metrics,
        },
      },
    };
    return this.http.post(`${this.uri}/add/data`, data1);
  }
}
