import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderAdopcionComponent } from './header-adopcion/header-adopcion.component';
import { PasosAdopcionComponent } from './pasos-adopcion/pasos-adopcion.component';
import { GaleriaAdopcionComponent } from './galeria-adopcion/galeria-adopcion.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderAdopcionComponent,
    PasosAdopcionComponent,
    GaleriaAdopcionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
