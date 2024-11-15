import { Component } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-page1',
  standalone: true,
  imports: [
    CalendarModule,
    FormsModule
  ],
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.css'
})
export class Page1Component {
  date1: Date | undefined;
}
