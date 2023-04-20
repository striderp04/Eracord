import { Component } from '@angular/core';
import {Location} from '@angular/common';
import {StudentService} from './../service/student.service';
import {Student} from './../interface/student';
import { Router} from '@angular/router';


@Component({
  selector: 'app-student-add-edit',
  templateUrl: './student-add-edit.component.html',
  styleUrls: ['./student-add-edit.component.css']
})
export class StudentAddEditComponent {

  public student = {} as Student;
  
  constructor(private studentService: StudentService, private location: Location, private router: Router){}


  createStudent(student: Student): void {
    this.studentService.createStudent(student).subscribe (
      (response: any) => this.getSuccess(response),
      (error: any) => console.log(error),
      () => console.log('Done getting Student......')
    );
  }

  back(): void {
    this.router.navigate(['/students']);
  }

  getSuccess(response: any): void {
     window.location.href = `/students/${response['student']['id']}?success=true`;
  }

  getError(error: any): void {
    
  }
}