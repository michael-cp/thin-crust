import { Component, OnInit } from '@angular/core';
import { UserAccountService } from './user-account.service';
import { IUserAccount } from './user-account';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account-list.component.html',
  styleUrls: ['./user-account-list.component.css']
})
export class UserAccountListComponent implements OnInit {
  userAccounts: IUserAccount[];
  pageTitle: string = 'User Account Management';

  constructor(private _userAccountService: UserAccountService) {

  }

  ngOnInit() {
    this.getAllUserAccount();
  }

  getAllUserAccount() {
    this._userAccountService.getAllUserAccounts()
      .subscribe(
      data => this.userAccounts = data);

  }

}
