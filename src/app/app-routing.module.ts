import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrickWorkComponent } from './brick-work/brick-work.component';
import { ColumnWorkComponent } from './column-work/column-work.component';
import { FormFirstComponent } from './form-first/form-first.component';
import { HomeComponent } from './home/home.component';
import { PlasterWorkComponent } from './plaster-work/plaster-work.component';
import { SlabWorkComponent } from './slab-work/slab-work.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'brick', component:BrickWorkComponent},
  {path:'plaster',component:PlasterWorkComponent},
  {path:'column', component:ColumnWorkComponent},
  {path:'slab', component:SlabWorkComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
