import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LegendService {

  currentLegend: string = "";

  toggleLegend(legend: string){
    this.currentLegend = legend;
    console.log(this.currentLegend);
  }

  constructor() { }
}
