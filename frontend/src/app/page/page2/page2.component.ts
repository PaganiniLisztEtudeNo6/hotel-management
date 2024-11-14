import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';  // เพิ่ม MenubarModule เพื่อใช้งาน p-menubar

@Component({
  selector: 'app-page2',
  standalone: true,

  imports: [
    ButtonModule,
    CardModule,
    MenubarModule  // เพิ่ม MenubarModule ใน imports
  ],
  templateUrl: './page2.component.html',
  styleUrl: './page2.component.css'
})
export class Page2Component {
  
}
