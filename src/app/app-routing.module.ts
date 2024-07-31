import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './register/login.component';
import { HomeComponent } from './home/home.component';
import { LogComponent } from './log/log.component';
import { AlbumComponent } from './album/album.component';
import { ShopparentComponent } from './shopparent/shopparent.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path:'',component:HomeComponent,pathMatch:'full'},
  {path:"login",component:LoginComponent},
  {path:"home",component:HomeComponent},
  {path:"log",component:LogComponent},
  {path:"album",component:AlbumComponent},
  {path:"shopparent",component:ShopparentComponent},
  {path:"dashboard",component:DashboardComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
