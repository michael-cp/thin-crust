import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.loadAllUsers();
  }

  private loadAllUsers() {
    console.log('loadAllUsers' + localStorage.getItem('userCheck'));
    var obj = JSON.parse(localStorage.getItem('currentUser'));
    if(obj.emailAddress != ''){
      console.log('user not null');
    }


    // if(localStorage.getItem('currentUser') != ''){
    //   console.log('current user data: ' + localStorage.getItem('currentUser'));
    // }
  }

}
