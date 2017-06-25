import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { UserAccount } from './user-account.model';
import { AuthenticationService } from './authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '../guards/alert.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  errorMessage: string;
  returnUrl: string;

  constructor(private authenticationService: AuthenticationService,
              private _router: Router,
              private route: ActivatedRoute,
              private alertService: AlertService) { }

  ngOnInit() {

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.invalidateSession();
  }

  login() {

    let user: UserAccount = new UserAccount(this.model.email, this.model.password);
    this.authenticationService.login(user).subscribe(
      
      data => {

        console.log('returnUrl: ' + this.returnUrl);
        var obj = JSON.parse(JSON.stringify(data));

        if (obj[0].status == 'failed') {
          this.errorMessage = 'Email address or password is incorrect.'
        } else {
          localStorage.setItem('currentUser', JSON.stringify(user));
          localStorage.setItem('userCheck', 'true');
          
          // this._router.navigate([this.returnUrl]);
          this._router.navigate(["/home"]);
        }

      },
      error => {
        this.alertService.error(error);
      }
    );

  }

  private invalidateSession(){
    localStorage.removeItem('userCheck');
  }

}
