import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import {HeaderModule} from "./core/layout/header/header.module";

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HeaderModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
