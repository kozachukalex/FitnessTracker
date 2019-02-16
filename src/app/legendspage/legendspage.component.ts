import { Component, OnInit } from '@angular/core';
import { LegendService } from '../legend.service';

@Component({
  selector: 'app-legendspage',
  templateUrl: './legendspage.component.html',
  styleUrls: ['./legendspage.component.scss']
})
export class LegendspageComponent implements OnInit {

  constructor(private data: LegendService) { }

  ngOnInit() {
  }
  
  legendList = this.data.legendList;
  legendDetails = this.data.legendDetails;

  changeLegend(name: string){
    this.data.changeLegend(name);
  };

}
