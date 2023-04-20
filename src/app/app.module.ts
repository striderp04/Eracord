import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {CookieService} from 'ngx-cookie-service';
import { HttpClientModule } from '@angular/common/http';
import { StudentComponent } from './student/student.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { StudentAddEditComponent } from './student-add-edit/student-add-edit.component';
import { StudentsComponent } from './students/students.component';
import { AlertModule } from 'ngx-bootstrap/alert';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StudentComponent,
    DashboardComponent,
    StudentAddEditComponent,
    StudentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    TooltipModule.forRoot(),
    AlertModule.forRoot()
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
