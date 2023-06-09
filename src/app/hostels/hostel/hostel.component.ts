import { Component, OnInit } from '@angular/core';
import {HostelService} from './../../service/hostel.service';
import { LoginService } from './../../service/login.service';
import {Hostel} from './../../interface/hostel';
import { Alert } from './../../interface/alert';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hostel',
  templateUrl: './hostel.component.html',
  styleUrls: ['./hostel.component.css']
})

export class HostelComponent implements OnInit {
  public hostel = {} as Hostel;
  public id: any;
  dismissible = true;

  defaultAlerts: any[] = [
    {
      type: 'success',
      msg: `Hostel Created successfully. `
    }
  ];

  public alerts: Alert[] = [];
  public isLoading = true;
  public hostelId: number;
  
  constructor(private hostelService: HostelService, private route: ActivatedRoute, private location: Location, private router: Router, 
    private loginService: LoginService){}


  ngOnInit(): void {
    
    this.route.queryParams.subscribe((param) => {
      if (param['success'] == 'true') {
        this.alerts = this.defaultAlerts;
      }
    });

    this.route.paramMap.subscribe((param) => {
      this.hostelId = Number(param.get('id'));
      this.loadHostel(this.hostelId);
    });
  }

  errorHandle(error: any): void {
    if(error.status == 401) {
      this.loginService.toLogin();
    }
  }

  onClosed(dismissedAlert: any): void {
    this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
  }

  loadHostel(hostelID: number): void {
    this.hostelService.getHostel(hostelID).subscribe (
      (response: any) => this.assignHostel(response),
      (error: any) => this.errorHandle(error),
      () => console.log('Done getting Hostel......')
    );
  }

  
  assignHostel(response: any) {
    this.hostel = response;
    this.isLoading = false;
  }

  back(): void {
    this.router.navigate(['/hostels']);
  }

  name(): string {
    return `${this.hostel.name}`
  }
}
