import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstCompComponent } from './first-comp/first-comp.component';


const routes: Routes = [
  {
    path:'app-first-comp',
    component :FirstCompComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
