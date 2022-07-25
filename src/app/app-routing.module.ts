import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Views/home/home.component';
import { UsersDashbaordComponent } from './Views/home/users-dashbaord/users-dashbaord.component';
import { HostProfileComponent } from './Views/host-profile/host-profile.component';
import { MarchantComponent } from './Views/marchant/marchant.component';
import { SettingHostComponent } from './Views/setting-host/setting-host.component';



const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: "full" },

  {
    path: "Dashboard",
    component: UsersDashbaordComponent,
    data: { title: "Users" },
  },
  { path: "profilHost", component: HostProfileComponent},
  { path: "setHost", component: SettingHostComponent},

  { path: "marchant", component: MarchantComponent},

  
  // If route does not exist : Home => Not found component
  { path: "**", component: HomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
