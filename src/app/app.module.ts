import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FwModule } from '../fw/fw.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';






@NgModule({
  declarations: [
    AppComponent,
    



  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FwModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
