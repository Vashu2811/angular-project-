import { Component } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent {
  daysInMonth: number[] = [];

  constructor() {
    this.generateDays(31); // Set number of days for December
  }

  generateDays(totalDays: number): void {
    this.daysInMonth = Array.from({ length: totalDays }, (_, i) => i + 1);
  }
}
