import { Component, OnInit } from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  view: CalendarView = CalendarView.Month;
  viewDate: Date = new Date();
  events: CalendarEvent[] = [];
  selectedEvent: CalendarEvent | null = null;
  isEditing: boolean = false;

  ngOnInit() {
    this.getAllEvents();
  }

  getAllEvents() {
    // Mock events
    this.events = [
      {
        start: new Date(),
        end: new Date(),
        title: 'An event',
        allDay: false,
      },
      {
        start: new Date(),
        end: new Date(),
        title: 'Another event',
        allDay: true,
      }
    ];
  }

  handleEventClick(event: CalendarEvent) {
    this.selectedEvent = {...event};
    this.isEditing = false;
  }

  closeDialog() {
    this.selectedEvent = null;
  }

  updateEvent() {
    const index = this.events.findIndex(event => event === this.selectedEvent);
    if (index !== -1 && this.selectedEvent !== null) {
      this.events[index] = this.selectedEvent;
    }
    this.closeDialog();
  }

  enableEditing() {
    this.isEditing = true;
  }
}
