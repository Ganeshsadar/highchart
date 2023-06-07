import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordComponent } from './dashbord/dashbord.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UserComponent } from './user/user.component';
import { ProductComponent } from './product/product.component';


const routes: Routes = [
  {path:'dashbord',component:DashbordComponent},
  {path:'',component:SidebarComponent},
  {path:'user',component:UserComponent},
  {path:'pro',component:ProductComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
