import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ChartHelperService {
  private indicatorStorage: string = "indicators";

  constructor() {}
  /*
  findIndicator(array, indicatorName) {
      return array.find(ind => ind.indicatorName = indicatorName)
    }*/

  /*
  populateChart(metricArray): any[] {
      let series = [];
      for(let i = 0;i< metricArray.length;i++){
        series.push({
            name: metricArray[i]["metricName"],
            data: metricArray[i]["value"],
        });
    }
    return series;
  }*/

  setSettings(storageName: string, data: any) {
    localStorage.setItem(storageName, JSON.stringify(data));
  }

  /*
getMetric(metricArray: [], ...metricName) {
  let filteredMetrics = [];
 
  for(let metric of metricName) {

    filteredMetrics.push(...(metricArray.filter(elem => elem["metricName"] === metric)))
  }

  return filteredMetrics
}

 getIndicator(indicatorName: string) {
    let data = JSON.parse(localStorage.getItem(this.indicatorStorage));
    return data.find((ind) => ind.indicatorName === indicatorName);
  }
*/
}
