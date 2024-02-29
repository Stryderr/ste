import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GenericForTestingService } from './services/generic-for-testing.service';

import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule}  from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactsComponent } from './family/contacts/contacts.component';
import { FoodComponent } from './family/food/food.component';
import { FarmComponent } from './family/farm/farm.component';
import { CalendarComponent } from './family/calendar/calendar.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    FoodComponent,
    FarmComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule, 
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,

    MatButtonModule,
    MatCheckboxModule,
    FormsModule,
    MatCardModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory })
  
  ],
  providers: [GenericForTestingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
