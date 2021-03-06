import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeamComponent } from './beam/beam.component';
import { BrickWorkComponent } from './brick-work/brick-work.component';
import { ColumnWorkComponent } from './column-work/column-work.component';
import { DisplayCalculationsComponent } from './display-calculations/display-calculations.component';
import { FormFirstComponent } from './form-first/form-first.component';
import { HomeComponent } from './home/home.component';
import { PlasterWorkComponent } from './plaster-work/plaster-work.component';
import { PuttyPrimerWorkComponent } from './putty-primer-work/putty-primer-work.component';
import { RatesComponent } from './rates/rates.component';
import { SlabWorkComponent } from './slab-work/slab-work.component';
import { SplashComponent } from './splash/splash.component';
import { UnitConvertorComponent } from './unit-convertor/unit-convertor.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'brick', component:BrickWorkComponent},
  {path:'plaster',component:PlasterWorkComponent},
  {path:'column', component:ColumnWorkComponent},
  {path:'slab', component:SlabWorkComponent},
  {path:'beam', component:BeamComponent},
  {path:'puttyprimer', component:PuttyPrimerWorkComponent},
  {path:'unit', component:UnitConvertorComponent},
  {path:'rates', component:RatesComponent},
  {path:'results', component:DisplayCalculationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
