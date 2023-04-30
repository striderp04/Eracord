import { Component, OnInit, Input } from '@angular/core';
import { BatchStandardStudent } from './../../interface/batch-standard-student';
import { Student } from './../../interface/student';

@Component({
  selector: 'app-batch-standard-students',
  templateUrl: './batch-standard-students.component.html',
  styleUrls: ['./batch-standard-students.component.css']
})
export class BatchStandardStudentsComponent {

  @Input() batchStandardStudents: BatchStandardStudent[];
  @Input() student: Student;

  constructor(){}
}
