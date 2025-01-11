// import { Component } from '@angular/core';
// import { bootstrapApplication } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [FormsModule],
//   template: `
 
//   `,
// })
// export class App {
//   onSubmit() {}
// }

// bootstrapApplication(App);
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CalendarComponent } from './calander.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CalendarComponent],
  template: `
    <div class="min-h-screen bg-gray-50">
      <app-calendar></app-calendar>
    </div>
  `,
})
export class App {
}

bootstrapApplication(App);