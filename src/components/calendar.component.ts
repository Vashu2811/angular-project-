import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";

interface CalendarDay {
  date: number;
  isCurrentMonth: boolean;
  hasEvent?: boolean;
  eventName?: string;
}

@Component({
  selector: "app-calendar-grid",
  template: `
    <div class="flex flex-col">
      <div class="flex flex-wrap gap-5 justify-between self-center mt-6 w-full font-medium max-w-[1048px] max-md:max-w-full">
        <div class="flex gap-5 my-auto text-base leading-tight text-gray-900">
          <button (click)="previousMonth()" aria-label="Previous month" class="focus:outline-none focus:ring-2 focus:ring-blue-500">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1c3aa0e794e1d8620df919d0dcd995d878c0059d01a42bea0e85493867bda135?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749"
              alt=""
              class="object-contain shrink-0 rounded-none aspect-square w-[37px]"
            />
          </button>
          <div class="my-auto basis-auto">{{ currentMonthYear }}</div>
          <button (click)="nextMonth()" aria-label="Next month" class="focus:outline-none focus:ring-2 focus:ring-blue-500">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b41cd6cfcde5a248edf3aaeb695fa7b448501aa1fa53ed938ce6b47895d3fa88?placeholderIfAbsent=true&apiKey=5f61ef1379d444ecbaf0fd96d5078749"
              alt=""
              class="object-contain shrink-0 rounded-none aspect-square w-[37px]"
            />
          </button>
        </div>
        <div class="flex gap-10 text-center max-md:max-w-full">
          <button 
            class="self-start px-11 py-3 text-sm text-white bg-blue-600 rounded-3xl max-md:px-5 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            (click)="createEvent()"
          >
            Create
          </button>
          <nav class="flex items-start text-base text-gray-500 whitespace-nowrap" role="tablist">
            <button 
              role="tab" 
              [attr.aria-selected]="viewMode === 'month'"
              (click)="setViewMode('month')"
              class="gap-2 self-stretch py-3 border-b-2 transition-colors"
              [class.text-blue-600]="viewMode === 'month'"
              [class.border-blue-600]="viewMode === 'month'"
              [class.border-white]="viewMode !== 'month'"
            >
              Month
            </button>
            <button 
              role="tab"
              [attr.aria-selected]="viewMode === 'week'"
              (click)="setViewMode('week')"
              class="gap-2 self-stretch py-3 border-b-2 transition-colors"
              [class.text-blue-600]="viewMode === 'week'"
              [class.border-blue-600]="viewMode === 'week'"
              [class.border-white]="viewMode !== 'week'"
            >
              Week
            </button>
            <button 
              role="tab"
              [attr.aria-selected]="viewMode === 'day'"
              (click)="setViewMode('day')"
              class="gap-2 self-stretch py-3 border-b-2 transition-colors"
              [class.text-blue-600]="viewMode === 'day'"
              [class.border-blue-600]="viewMode === 'day'"
              [class.border-white]="viewMode !== 'day'"
            >
              Day
            </button>
          </nav>
        </div>
      </div>

      <div class="calendar-grid mt-4">
        <div class="grid grid-cols-7 text-sm font-medium">
          <div *ngFor="let day of weekDays" class="p-2.5 bg-white border border-gray-200 text-neutral-400">
            {{ day }}
          </div>
        </div>

        <div class="grid grid-cols-7">
          <div *ngFor="let week of calendarDays" class="grid grid-cols-7">
            <div *ngFor="let day of week" 
              class="min-h-[153px] p-2.5 border border-gray-200 relative"
              [class.bg-gray-100]="!day.isCurrentMonth"
              [class.bg-white]="day.isCurrentMonth"
            >
              <span [class.text-neutral-400]="!day.isCurrentMonth">{{ day.date }}</span>
              <div *ngIf="day.hasEvent" class="absolute bottom-2 left-2 right-2">
                <div class="p-1.5 text-xs text-white bg-orange-400 rounded-md">
                  {{ day.eventName }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  standalone: true,
  imports: [CommonModule]
})
export class CalendarGridComponent implements OnInit {
  weekDays: string[] = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  currentDate: Date = new Date();
  calendarDays: CalendarDay[][] = [];
  viewMode: 'month' | 'week' | 'day' = 'month';

  get currentMonthYear(): string {
    return this.currentDate.toLocaleString('default', { month: 'long', year: 'numeric' });
  }

  ngOnInit() {
    this.generateCalendarDays();
  }

  generateCalendarDays() {
    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();
    
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - startDate.getDay());
    
    const endDate = new Date(lastDay);
    if (endDate.getDay() !== 6) {
      endDate.setDate(endDate.getDate() + (6 - endDate.getDay()));
    }

    const calendar: CalendarDay[][] = [];
    let week: CalendarDay[] = [];
    
    for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
      if (week.length === 7) {
        calendar.push(week);
        week = [];
      }
      
      week.push({
        date: d.getDate(),
        isCurrentMonth: d.getMonth() === month,
        hasEvent: d.getDate() === 14 && d.getMonth() === month,
        eventName: d.getDate() === 14 && d.getMonth() === month ? 'Ad name' : undefined
      });
    }
    
    if (week.length > 0) {
      calendar.push(week);
    }

    this.calendarDays = calendar;
  }

  previousMonth() {
    this.currentDate.setMonth(this.currentDate.getMonth() - 1);
    this.generateCalendarDays();
  }

  nextMonth() {
    this.currentDate.setMonth(this.currentDate.getMonth() + 1);
    this.generateCalendarDays();
  }

  setViewMode(mode: 'month' | 'week' | 'day') {
    this.viewMode = mode;
  }

  createEvent() {
    // Implement event creation logic
  }
}