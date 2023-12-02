import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignComponent } from './sign-screen/components/sign/sign.component';
import { HomeComponent } from './home/components/home/home.component';

const routes: Routes = [
  {path:"sign", component:SignComponent},
  {path:"home", component:HomeComponent},
  {path:"**",redirectTo:"home",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
