import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import {HeaderModule} from "./core/layout/header/header.module";
import {CardModule} from "./core/components/card/card.module";
import {HomeComponent} from "./pages/home/home.component";

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HeaderModule,
        CardModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
