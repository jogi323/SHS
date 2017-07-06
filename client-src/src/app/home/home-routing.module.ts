import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { NewsComponent } from './components/news/news.component';
import { EmploymentComponent } from './components/employment/employment.component';
import { AcademicsComponent } from './components/academics/academics.component';
import { FeestructureComponent } from './components/feestructure/feestructure.component';
import { AdmissionsComponent } from './components/admissions/admissions.component';
import { LoginComponent } from './components/login/login.component';
import { HistoryComponent } from './components/history/history.component';

const routes: Routes = [
  {path:'',component:HomeComponent,
    children:[
      {path:'',component:DashboardComponent},
      {path:'dashboard',component:DashboardComponent},
      {path:'contactus',component:ContactusComponent},
      {path:'aboutus',component:AboutusComponent},
      {path:'news',component:NewsComponent},
      {path:'employment',component:EmploymentComponent},
      {path:'academics',component:AcademicsComponent},
      {path:'feedetails',component:FeestructureComponent},
      {path:'admissions',component:AdmissionsComponent},
      {path:'login',component:LoginComponent},
      {path:'history',component:HistoryComponent},                       
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
