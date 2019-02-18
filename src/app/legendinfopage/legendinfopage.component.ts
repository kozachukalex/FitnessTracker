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
  currentWindowWidth = window.screen.availWidth;

  currentHeaderImage;

  smallestRes = 320;
  smallRes = 767;
  mediumRes = 1023;
  largeRes = 1455;
  largestRes = 1456;

  constructor(public data: LegendService) {
    this.changeWidth();

  }

  
  changeWidth(){
    console.log(this.currentWindowWidth);
    this.currentWindowWidth = window.screen.availWidth;
    console.log(this.currentWindowWidth);
    if (this.currentWindowWidth <= this.smallestRes){
      this.currentHeaderImage = this.data.respawnPictures[this.data.legendLocation].smallest;
    }
    if (this.currentWindowWidth >= this.smallestRes && this.currentWindowWidth < this.mediumRes){
      this.currentHeaderImage = this.data.respawnPictures[this.data.legendLocation].small;
    }
    if (this.currentWindowWidth >= this.mediumRes && this.currentWindowWidth < this.largeRes){
      this.currentHeaderImage = this.data.respawnPictures[this.data.legendLocation].medium;
    }
    if (this.currentWindowWidth >= this.largeRes && this.currentWindowWidth < this.largeRes){
      this.currentHeaderImage = this.data.respawnPictures[this.data.legendLocation].large;
    }
    if (this.currentWindowWidth >= this.largestRes){
      this.currentHeaderImage = this.data.respawnPictures[this.data.legendLocation].largest;
    }
  }

  ngOnInit() {
    console.log(this.currentWindowWidth);
    window.addEventListener('resize', this.changeWidth)
  }

  changeLegend(name: string){
    this.data.changeLegend(name);
    console.log(this.data.currentLegend)
    this.changeWidth();
  };


}
