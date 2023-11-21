import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { FooterComponent } from './shared/footer/footer.component';
import { HeadComponent } from './shared/head/head.component';
import { NavComponent } from './shared/nav/nav.component';



@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    FooterComponent,
    NavComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
