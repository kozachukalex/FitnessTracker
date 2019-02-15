import { Component, OnInit } from '@angular/core';
import { LegendService } from "../legend.service";

@Component({
  selector: 'app-legendinfopage',
  templateUrl: './legendinfopage.component.html',
  styleUrls: ['./legendinfopage.component.scss']
})
export class LegendinfopageComponent implements OnInit {

  constructor(private data: LegendService) { }

  ngOnInit() {
  }

  currentLegend: string = this.data.currentLegend;
  legendLocation: number = this.data.legendList.indexOf(this.currentLegend);
  
  currentPortrait: string = this.data.legendDetails[this.legendLocation].portrait;
  currentPassive: string = this.data.legendDetails[this.legendLocation].passive;
  currentPassiveDescription: string = this.data.legendDetails[this.legendLocation].passiveDescription;
  currentTactical: string = this.data.legendDetails[this.legendLocation].tactical;
  currentTacticalDescription: string = this.data.legendDetails[this.legendLocation].tacticalDescription;
  currentUltimate: string = this.data.legendDetails[this.legendLocation].ultimate;
  currentUltimateDescription: string = this.data.legendDetails[this.legendLocation].ultimateDescription;


}
