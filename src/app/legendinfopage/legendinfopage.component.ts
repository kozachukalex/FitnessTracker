import { Component, OnInit } from '@angular/core';
import { LegendService } from "../legend.service";
import { Parser } from '@angular/compiler/src/ml_parser/parser';

@Component({
  selector: 'app-legendinfopage',
  templateUrl: './legendinfopage.component.html',
  styleUrls: ['./legendinfopage.component.scss']
})
export class LegendinfopageComponent implements OnInit {

  currentLegend = this.data.currentLegend;

  constructor(public data: LegendService) {

  }

  ngOnInit() {
  }

  changeLegend(name: string){
    this.data.changeLegend(name);
    console.log(this.data.currentLegend)
  };

}
