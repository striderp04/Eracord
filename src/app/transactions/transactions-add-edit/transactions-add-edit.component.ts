import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { StudentService } from './../../service/student.service';
import { LoginService } from './../../service/login.service';
import { Student } from './../../interface/student';
import { Transaction } from './../../interface/transaction';
import { Cheque } from './../../interface/cheque';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-transactions-add-edit',
  templateUrl: './transactions-add-edit.component.html',
  styleUrls: ['./transactions-add-edit.component.css']
})
export class TransactionsAddEditComponent implements OnInit {

  public student = {} as Student;
  public transaction = {} as Transaction;
  public cheque = {} as Cheque;
  public isNew = true;
  public studentId: number;
  public isLoading: boolean = false;

  constructor(private studentService: StudentService, private location: Location, private router: Router, private route: ActivatedRoute, 
    private loginService: LoginService){}

  ngOnInit(): void {
    this.transaction.payment_mode = "Cash";
    if(this.router.url.includes('/edit')) {
      this.isNew = false;
    }

    this.route.paramMap.subscribe((param) => {
      this.studentId = Number(param.get('student_id'));
      this.loadStudent(this.studentId);
    });
  }

  errorHandle(error: any): void {
    if(error.status == 401) {
      this.loginService.toLogin();
    }
  }

  submitPayment(): void {
    if(this.transaction.payment_mode == "Cheque") {
      this.transaction.Cheque = this.cheque;
    }
    this.studentService.createStudentTransactions(this.studentId, this.transaction).subscribe (
      (response: any) => this.back(),
      (error: any) => this.errorHandle(error),
      () => console.log('Done getting Transaction......')
    );
  }

  loadStudent(studentID: number): void {
    this.studentService.getStudent(studentID).subscribe (
      (response: any) => this.assignStudent(response),
      (error: any) => this.errorHandle(error),
      () => console.log('Done getting Student......')
    );
  }

  assignStudent(response: any) {
    this.student = response;
    this.transaction.student_id = this.studentId;
  }


  name(): string {
    return `${this.student.first_name} ${this.student.middle_name} ${this.student.last_name}`
  }

  onChangePaymentMode(newObj: number): void {
    this.transaction.payment_mode = newObj.toString();

  }

  back(): void {
    this.router.navigate(['/students', this.studentId]);
  }
}