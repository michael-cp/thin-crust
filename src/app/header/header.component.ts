import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  checker: boolean;

  constructor() { }

  ngOnInit() {
    this.userChecker();
  }

  ngAfterViewInit(){
    console.log('header> userChecker AFTER');
  }
  private userChecker(){
    console.log('header> userChecker');
    
    if(localStorage.getItem('userCheck') == 'true'){
      this.checker = true;
    }
  }

}
