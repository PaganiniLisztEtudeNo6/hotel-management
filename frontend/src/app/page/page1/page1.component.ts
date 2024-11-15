import { Component } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page1',
  standalone: true,  // กำหนดเป็น standalone component
  imports: [
    CommonModule,    // นำเข้า CommonModule
    CalendarModule,  // นำเข้า CalendarModule
    FormsModule      // นำเข้า FormsModule สำหรับ ngModel
  ],
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component {
  date1: Date | undefined;  // ตัวแปรสำหรับเก็บวันที่ที่เลือก
  price: number | undefined;  // ตัวแปรสำหรับเก็บราคา
}
