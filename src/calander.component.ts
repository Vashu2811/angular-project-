import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-10">
  <div class="w-full max-w-5xl mx-auto">
    <!-- Navigation and Header -->
    <div class="flex justify-between items-center mb-6">
      <button class="p-3 hover:bg-gray-100 rounded-full border border-gray-300" (click)="previousMonth()">←</button>
      <h2 class="text-2xl font-semibold text-center flex-grow">
        {{ currentDate | date:'MMMM yyyy' }}
      </h2>
      <button class="p-3 hover:bg-gray-100 rounded-full border border-gray-300" (click)="nextMonth()">→</button>
    </div>

    <!-- Submit Button and Links -->
    <div class="flex justify-between items-center mb-8">
      <button class="w-1/4 px-8 py-3 text-white bg-blue-500 rounded-3xl shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
        Submit
      </button>
      <div class="flex space-x-8">
        <a href="#" class="text-blue-600 font-medium relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-blue-600">
          Licenses
        </a>
        <a href="#" class="text-gray-800 hover:text-blue-600 transition">Certificates</a>
        <a href="#" class="text-gray-800 hover:text-blue-600 transition">Contracts</a>
      </div>
    </div>

    <!-- Weekdays -->
    <div class="grid grid-cols-7 gap-6 text-center mb-4 border-t border-b border-gray-300 py-2">
      <div *ngFor="let day of weekDays" class="font-semibold text-gray-600 text-lg">
        {{ day }}
      </div>
    </div>

    <!-- Calendar Days -->
    <div class="grid grid-cols-7 gap-6">
      <div
        *ngFor="let day of calendarDays"
        class="aspect-square flex items-center font-medium text-blue-500 justify-center border border-gray-300 rounded-md text-lg"
        [class.text-gray-400]="!day.isCurrentMonth"
        [class.bg-blue-100]="isToday(day.date)"
        [class.rounded]="isToday(day.date)"
      >
        {{ day.date | date:'d' }}
      </div>
    </div>
  </div>
</div>


  `
})
export class CalendarComponent implements OnInit {
  currentDate = new Date();
  weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  calendarDays: Array<{ date: Date; isCurrentMonth: boolean }> = [];

  ngOnInit() {
    this.generateCalendarDays();
  }

  generateCalendarDays() {
    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();
    
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    
    const startDate = new Date(firstDayOfMonth);
    startDate.setDate(startDate.getDate() - startDate.getDay());

    this.calendarDays = [];
    
    for (let i = 0; i < 42; i++) {
      const date = new Date(startDate);
      this.calendarDays.push({
        date: date,
        isCurrentMonth: date.getMonth() === month
      });
      startDate.setDate(startDate.getDate() + 1);
    }
  }

  previousMonth() {
    this.currentDate.setMonth(this.currentDate.getMonth() - 1);
    this.generateCalendarDays();
  }

  nextMonth() {
    this.currentDate.setMonth(this.currentDate.getMonth() + 1);
    this.generateCalendarDays();
  }

  isToday(date: Date): boolean {
    const today = new Date();
    return date.getDate() === today.getDate() &&
           date.getMonth() === today.getMonth() &&
           date.getFullYear() === today.getFullYear();
  }
}