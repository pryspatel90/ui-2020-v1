import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WineComponent } from './wine/wine.component';

const routes: Routes =[
    {path:"wine",component:WineComponent}


   /*   {path:"**",component:Any Compontent Name } Path with ** you can get to any compo if not defined  */
];


@NgModule({
 
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
  
})
export class AppRoutingModule { }
