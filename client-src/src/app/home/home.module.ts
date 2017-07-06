import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NewsComponent } from './components/news/news.component';
import { EmploymentComponent } from './components/employment/employment.component';
import { AcademicsComponent } from './components/academics/academics.component';
import { FeestructureComponent } from './components/feestructure/feestructure.component';
import { AdmissionsComponent } from './components/admissions/admissions.component';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [HomeComponent, DashboardComponent, AboutusComponent, ContactusComponent, NavbarComponent, NewsComponent, EmploymentComponent, AcademicsComponent, FeestructureComponent, AdmissionsComponent, LoginComponent]
})
export class HomeModule { }
