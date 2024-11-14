import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { MenubarModule } from 'primeng/menubar';  // เพิ่ม MenubarModule เพื่อใช้งาน p-menubar

@Component({
  selector: 'app-page3',
  standalone: true,
  imports: [
    ButtonModule,
    CardModule,
    MenubarModule  // เพิ่ม MenubarModule ใน imports
  ],
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component {
  // กำหนดตัวแปร imageUrl เพื่อเก็บ URL ของรูปภาพ
  imageUrl: string = 'https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg?t=st=1730657787~exp=1730661387~hmac=5bbb626823ed7218103b25e84a4e0cc9a5e0c2fae3e87dec827cc77795244065&w=996';
}
