import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CookieService } from 'ngx-cookie-service';
import { HttpClientModule } from '@angular/common/http';
import { StudentComponent } from './students/student/student.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { StudentAddEditComponent } from './students/student-add-edit/student-add-edit.component';
import { StudentsComponent } from './students/students/students.component';
import { AlertModule } from 'ngx-bootstrap/alert';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { StandardsComponent } from './standards/standards/standards.component';
import { StandardComponent } from './standards/standard/standard.component';
import { StandardAddEditComponent } from './standards/standard-add-edit/standard-add-edit.component';
import { BatchsComponent } from './batchs/batchs/batchs.component';
import { BatchComponent } from './batchs/batch/batch.component';
import { BatchAddEditComponent } from './batchs/batch-add-edit/batch-add-edit.component';
import { HostelsComponent } from './hostels/hostels/hostels.component';
import { HostelComponent } from './hostels/hostel/hostel.component';
import { HostelAddEditComponent } from './hostels/hostel-add-edit/hostel-add-edit.component';
import { HostelRoomAddEditComponent } from './hostel-room/hostel-room-add-edit/hostel-room-add-edit.component';
import { HostelRoomComponent } from './hostel-room/hostel-room/hostel-room.component';
import { HostelRoomsComponent } from './hostel-room/hostel-rooms/hostel-rooms.component';
import { HostelStudentsComponent } from './hostel-room/hostel-students/hostel-students.component';
import { AssignHostelComponent } from './students/assign-hostel/assign-hostel.component';
import { SwapRoomComponent } from './students/swap-room/swap-room.component';
import { AssignStandardComponent } from './batchs/assign-standard/assign-standard.component';
import { BatchStandardsComponent } from './batchs/batch-standards/batch-standards.component';
import { BatchStandardAddEditComponent } from './batch-standards/batch-standard-add-edit/batch-standard-add-edit.component';
import { BatchStandardStudentsComponent } from './batch-standard-students/batch-standard-students/batch-standard-students.component';
import { BatchStandardStudentAddEditComponent } from './batch-standard-students/batch-standard-student-add-edit/batch-standard-student-add-edit.component';
import { TransactionsComponent } from './transactions/transactions/transactions.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StudentComponent,
    DashboardComponent,
    StudentAddEditComponent,
    StudentsComponent,
    StandardsComponent,
    StandardComponent,
    StandardAddEditComponent,
    BatchsComponent,
    BatchComponent,
    BatchAddEditComponent,
    HostelsComponent,
    HostelComponent,
    HostelAddEditComponent,
    HostelRoomAddEditComponent,
    HostelRoomComponent,
    HostelRoomsComponent,
    HostelStudentsComponent,
    AssignHostelComponent,
    SwapRoomComponent,
    AssignStandardComponent,
    BatchStandardsComponent,
    BatchStandardAddEditComponent,
    BatchStandardStudentsComponent,
    BatchStandardStudentAddEditComponent,
    TransactionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    TooltipModule.forRoot(),
    AlertModule.forRoot(),
    TabsModule.forRoot()
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
