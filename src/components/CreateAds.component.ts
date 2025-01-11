import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-8">
      <div class="w-full max-w-md mx-auto">
        <div class="flex items-center justify-between mb-4">
          <button 
            class="p-2 hover:bg-gray-100 rounded-full"
            (click)="previousMonth()"
          >
            ←
          </button>
          <h2 class="text-xl font-semibold">
            {{ currentDate | date:'MMMM yyyy' }}
          </h2>
          <button 
            class="p-2 hover:bg-gray-100 rounded-full"
            (click)="nextMonth()"
          >
            →
          </button>
        </div>

        <div class="grid grid-cols-7 gap-1 text-center mb-2">
          <div *ngFor="let day of weekDays" class="font-semibold text-gray-600">
            {{ day }}
          </div>
        </div>

        <div class="grid grid-cols-7 gap-1">
          <div 
            *ngFor="let day of calendarDays"
            class="aspect-square flex items-center justify-center"
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