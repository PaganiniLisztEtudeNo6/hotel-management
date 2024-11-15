import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, InputTextModule, ButtonModule],
  templateUrl: './register.component.html',  // เปลี่ยนไปที่ไฟล์ register.component.html
  styleUrls: ['./register.component.css'],   // เปลี่ยนไปที่ไฟล์ register.component.css
})
export class RegisterComponent {
  username: string = '';
  email: string = '';
  password: string = '';

  onSubmit() {
    console.log('Username:', this.username);
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    // Logic สำหรับการสมัครสมาชิก สามารถใส่ที่นี่
  }
}
