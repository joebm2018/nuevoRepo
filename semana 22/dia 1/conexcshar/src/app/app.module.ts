import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { LibroComponent } from './component/libro/libro.component';
import { RUTAS } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LibroComponent
  ],
  imports: [
    BrowserModule,
    RUTAS
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
