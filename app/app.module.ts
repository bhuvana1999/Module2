import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstCompComponent } from './first-comp/first-comp.component';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { MyserviceService } from './myservice.service';
import { FormsModule } from '@angular/forms';
import { OrderBy } from './orderby';

@NgModule({
  declarations: [
    AppComponent,
    FirstCompComponent,
    OrderBy
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpClient, MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
