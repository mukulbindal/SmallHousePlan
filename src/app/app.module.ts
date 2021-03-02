import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FormFirstComponent } from './form-first/form-first.component';
import { BrickWorkComponent } from './brick-work/brick-work.component';
import { PlasterWorkComponent } from './plaster-work/plaster-work.component';
import { ColumnWorkComponent } from './column-work/column-work.component';
import { SlabWorkComponent } from './slab-work/slab-work.component';
import { DisplayCalculationsComponent } from './display-calculations/display-calculations.component';
import { SplashComponent } from './splash/splash.component';
import { BeamComponent } from './beam/beam.component';
import { PuttyPrimerWorkComponent } from './putty-primer-work/putty-primer-work.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HomeComponent,
    HeaderComponent,
    FormFirstComponent,
    BrickWorkComponent,
    PlasterWorkComponent,
    ColumnWorkComponent,
    SlabWorkComponent,
    DisplayCalculationsComponent,
    SplashComponent,
    BeamComponent,
    PuttyPrimerWorkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
