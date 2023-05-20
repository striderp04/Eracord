import { Component } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {LoginService} from './service/login.service';
import { Observable } from 'rxjs';
import { setTheme } from 'ngx-bootstrap/utils';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Eracord';
  
  constructor(private cookies: CookieService, private loginService: LoginService, private router: Router) {
    this.loginService.isLogin = this.cookies.get("isLogin") == "true";

    type HttpRespone = {code: number, data: string};

    const observable = new Observable<HttpRespone>(subscriber => {
      console.log('Inside subscriber ...');
      subscriber.next({code: 200, data:"This is data 1....."})
      subscriber.next({code: 200, data:"This is data 1....."})
      subscriber.next({code: 200, data:"This is data 1....."})
      subscriber.error({code: 500, data:"An Error occured"})
      setTimeout(() => {
        subscriber.next({code: 200, data:"This is more data ....."});
        subscriber.complete();
      }, 3 * 1000);
      console.log('subscriber is done emitting ...');
    });

    // observable.subscribe({
    //   next(response: HttpRespone) {
    //     console.log('Got Data', response);
    //   },
    //   error(error: any) {
    //     console.log('Error Occured   ', error);
    //   },
    //   complete() {
    //     console.log('Done .......');
    //   }
    // });
    setTheme('bs5');
  }

  public activeLink(str: string) {
    return this.router.url == str;
    
  }

  public get isLogin() {
    return this.loginService.isLogin;
  }

  logoutUser(): void {
    this.loginService.logoutUser().subscribe (
      (response: any) => this.loginService.toLogin(),
      (error: any) => console.log(error),
      () => console.log('Done getting Hostel......')
    );
  }


}
