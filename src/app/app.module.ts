import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AnaSayfaComponent } from './ana-sayfa/ana-sayfa.component';
import {FormsModule} from "@angular/forms";
import { SatislarComponent } from './satislar/satislar.component';
import { MusterilerComponent } from './musteriler/musteriler.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AnaSayfaComponent,
    SatislarComponent,
    MusterilerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
