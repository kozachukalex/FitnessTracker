import { Component, OnInit } from '@angular/core';
import { WeaponsService } from '../weapons.service';


@Component({
  selector: 'app-gunlocker',
  templateUrl: './gunlocker.component.html',
  styleUrls: ['./gunlocker.component.scss']
})
export class GunlockerComponent implements OnInit {

  constructor(public data: WeaponsService) {
  }

  ngOnInit() {
  }

}
