import { MyPostComponent } from './my-post/my-post.component';
import { FilesComponent } from './files/files.component';
import { PostComponent } from './post/post.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'', component:LoginComponent, pathMatch : "full" },
  {path:'register', component:RegisterComponent},
  {path:'home' , component:HomeComponent,children:[
    {path:'post',outlet:'topPostBar',component:PostComponent},
    {path:'',outlet:'topPostBar',component:PostComponent},
    {path:'allFiles',outlet:'topPostBar',component:FilesComponent},
    {path:'myPost',outlet:'topPostBar',component:MyPostComponent},
  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
