import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WineComponent } from './wine/wine.component';

const routes: Routes =[
    {path:"wine",component:WineComponent}
];


@NgModule({
 
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
  
})
export class AppRoutingModule { }
