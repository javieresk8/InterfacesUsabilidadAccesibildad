import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RutaEntradaComponent } from './rutas/ruta-entrada/ruta-entrada.component';
import { RutaSalidaComponent } from './rutas/ruta-salida/ruta-salida.component';
import {FooterModule} from "./Componentes/footer/footer.module";
import {HeaderModule} from "./Componentes/header/header.module";
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox'; 
@NgModule({
  declarations: [
    AppComponent,
    RutaEntradaComponent,
    RutaSalidaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FooterModule,
    HeaderModule,
    NoopAnimationsModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatCheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
