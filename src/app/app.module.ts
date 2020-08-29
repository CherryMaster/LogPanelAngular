import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {LogPanel} from './LogPanel/logpanel'
import {RegPanel} from './RegPanel/regpanel'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent, LogPanel, RegPanel
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
