import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  clickMessage: string = "Clicked";
  visible: boolean = false;

  closeMobileNav() {
    var target = document.getElementById("mobile-menu");

      target.style.visibility = "hidden";
      target.style.opacity = "0";
      target.style.height = "0";
      target.style.zIndex = "-1";
      target.style.transform = "translateY(-2em)";
      target.style.transitionDelay = "0s,0s,0.3s";
      
      this.visible = false;
      console.log(this.visible);
  }
  openMobileNav() {
    var target = document.getElementById("mobile-menu");

      target.style.visibility = "visible";
      target.style.opacity = "1";
      target.style.height = "100vh";
      target.style.zIndex = "1";
      target.style.transform = "translateY(0)";
      target.style.transitionDelay = "0s,0s,0.5s";

      this.visible = true;
      console.log(this.visible);
    }
    
  constructor() { }

  ngOnInit() {
  }

}
