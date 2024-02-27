import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenericForTestingService } from './services/generic-for-testing.service';

import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule}  from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,

    MatButtonModule,
    MatCheckboxModule,
    MatCardModule
  ],
  providers: [GenericForTestingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
