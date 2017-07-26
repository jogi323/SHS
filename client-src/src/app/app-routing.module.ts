import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  {path:'',loadChildren:'./home/home.module#HomeModule'},
  {path:'admin',loadChildren:'./admin/admin.module#AdminModule'}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);