import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RefreshComponent } from './refresh/refresh.component';
import {CepPipe} from './cep.pipe';
// import { CounterComponent } from './counter/counter.component';
import localePT from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localePT);

@NgModule({
  declarations: [
    AppComponent,
    RefreshComponent,
    CepPipe
    // CounterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
