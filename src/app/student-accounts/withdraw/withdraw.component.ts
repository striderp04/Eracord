import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { StudentAccountsService } from './../../service/student-accounts.service';
import { StudentService } from './../../service/student.service';
import { LoginService } from './../../service/login.service';
import { Student } from './../../interface/student';
import { StudentAccount } from './../../interface/student-account';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit{
  public student = {} as Student;
  public studentAccount = {} as StudentAccount;
  public studentId: number;
  public isLoading= false;

  constructor(private studentAccountsService: StudentAccountsService, private studentService: StudentService, private location: Location, 
    private router: Router, private route: ActivatedRoute, private loginService: LoginService){}

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      this.studentId = Number(param.get('student_id'));
      this.loadStudent(this.studentId);
    });
  }

  errorHandle(error: any): void {
    if(error.status == 401) {
      this.loginService.toLogin();
    }
    this.isLoadingFalse()
  }

  submitWithdraw(): void {    
    this.isLoading = true;
    this.studentAccountsService.createWithdraw(this.studentId, this.studentAccount).subscribe (
      (response: any) => this.back(),
      (error: any) => this.errorHandle(error),
      () => this.isLoadingFalse()
    );
  }

  loadStudent(studentID: number): void {
    this.isLoading = true;
    this.studentService.getStudent(studentID).subscribe (
      (response: any) => this.assignStudent(response),
      (error: any) => this.errorHandle(error),
      () => this.isLoadingFalse()
    );
  }

  assignStudent(response: any) {
    this.student = response;
    this.studentAccount.student_id = this.studentId;
  }


  name(): string {
    return `${this.student.first_name} ${this.student.middle_name} ${this.student.last_name}`
  }

  back(): void {
    this.router.navigate(['/students', this.studentId]);
  }

  isLoadingFalse(): void {
    this.isLoading = false;    
  }
}
