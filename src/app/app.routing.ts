import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SplashComponent } from './splash/splash.component';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';


const appRoutes:Routes=[
  {
    path:"",
    component:SplashComponent
  }, {
    path:"about",
    component:AboutComponent
  }, {
    path:"admin",
    component:AdminComponent
  }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
