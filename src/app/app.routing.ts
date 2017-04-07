import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SplashComponent } from './splash/splash.component';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { MembersListComponent } from './members-list/members-list.component';
import { MemberPageComponent } from './member-page/member-page.component';


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
  }, {
    path:"members",
    component:MembersListComponent
  }, {
    path:"member-page/:id",
    component:MemberPageComponent
  }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
