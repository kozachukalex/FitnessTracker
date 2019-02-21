import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { LegendspageComponent } from './legendspage/legendspage.component';
import { LegendinfopageComponent } from "./legendinfopage/legendinfopage.component";
import { GunlockerComponent } from './gunlocker/gunlocker.component';

const routes: Routes = [
  {path: "", component: HomepageComponent},
  {path: "about", component: AboutpageComponent},
  {path: "legends", component: LegendspageComponent},
  {path: "legends/:legend", component: LegendinfopageComponent},
  {path: "gunlocker", component: GunlockerComponent},
  {path: "gunlocker/:equipment", component: GunlockerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
