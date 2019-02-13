import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { ContactpageComponent } from './contactpage/contactpage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { LegendspageComponent } from './legendspage/legendspage.component';

const routes: Routes = [
  {path: "", component: HomepageComponent},
  {path: "about", component: AboutpageComponent},
  {path: "legends", component: LegendspageComponent},
  {path: "contact", component: ContactpageComponent},
  {path: "login", component: LoginpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
