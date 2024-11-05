import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { MenubarModule } from 'primeng/menubar';  // เพิ่ม MenubarModule เพื่อใช้งาน p-menubar



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ButtonModule,
    CardModule,
    CarouselModule,
    MenubarModule  // เพิ่ม MenubarModule ใน imports
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  images: string[] = [
    'https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg?t=st=1730657787~exp=1730661387~hmac=5bbb626823ed7218103b25e84a4e0cc9a5e0c2fae3e87dec827cc77795244065&w=996'
  ];
}
