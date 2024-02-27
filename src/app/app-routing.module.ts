import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './family/contacts/contacts.component';
import { FarmComponent } from './family/farm/farm.component';
import { CalendarComponent } from './family/calendar/calendar.component';
import { FoodComponent } from './family/food/food.component';
import { AppComponent } from './app.component'; // Make sure the import is correct

const routes: Routes = [
  { path: '', component: AppComponent }, // Updated here
  { path: 'farm', component: FarmComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'food', component: FoodComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
