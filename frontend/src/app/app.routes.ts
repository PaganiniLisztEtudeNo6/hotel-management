import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { Page1Component } from './page/page1/page1.component';
import { Page2Component } from './page/page2/page2.component';
import { Page3Component } from './page/page3/page3.component';
import { LoginComponent } from './page/login/login.component';
import { RegisterComponent } from './page/register/register.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'page1', component: Page1Component },
  { path: 'page2', component: Page2Component },
  { path: 'page3', component: Page3Component },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  declarations: [

  ],
  imports: [
    RouterModule.forRoot(routes),
    HomeComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    LoginComponent,
    RegisterComponent
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
