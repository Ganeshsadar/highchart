import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import{ Router, RouterModule} from '@angular/router';
import {MatDialogModule} from '@angular/material/dialog';
import { DashbordComponent } from './dashbord/dashbord.component';
import { ChartModule } from 'angular-highcharts';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UserComponent } from './user/user.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { ProductComponent } from './product/product.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    DashbordComponent,
    SidebarComponent,
    UserComponent,
    ProductComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    RouterModule,
    ChartModule,
   ReactiveFormsModule,
   MatInputModule,
   HttpClientModule,
   



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
