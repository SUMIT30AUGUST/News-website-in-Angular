import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechComponent } from './tech/tech.component';
import { TopheadlineComponent } from './topheadline/topheadline.component';

const routes: Routes = [
  {path:'',component:TopheadlineComponent},
  {path:'tech',component:TechComponent}  //top headlines and Home page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
