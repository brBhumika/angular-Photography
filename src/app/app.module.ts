import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './register/login.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { LogComponent } from './log/log.component';
import { PhpipePipe } from './phpipe.pipe';
import { AlbumComponent } from './album/album.component';
import { CartlistComponent } from './cartlist/cartlist.component';
import { ShopcartlistComponent } from './shopcartlist/shopcartlist.component';
import { ShopparentComponent } from './shopparent/shopparent.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    LogComponent,
    PhpipePipe,
    AlbumComponent,
    CartlistComponent,
    ShopcartlistComponent,
    ShopparentComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
