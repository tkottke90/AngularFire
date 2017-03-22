import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css'],
})
export class EntryComponent implements OnInit {

  isClassVisible:boolean =  false;
  isLoginVisible:boolean = false;
  isLoggedIn:boolean = false;
 
  viewStatus: number;
  myname: string = "";

  constructor() {}

  ngOnInit() {
  }

  getUser(user: string){
    console.log(user);
    this.myname = user;
  }

  clearView(view: number){
    this.changeView(view);
    console.log("EntryComponent.clearView:" + view);
  }

  changeView(view:number){
    let loginButton = document.getElementById("login");
    let signupButton = document.getElementById("signup");
    
    if(this.viewStatus == view){this.viewStatus = 0;}else{this.viewStatus = view;}
    switch(this.viewStatus){
      case 0: // Default
        this.isClassVisible = false;
        this.isLoginVisible = false;
        this.isLoggedIn = false;
        loginButton.style.display = "block";
        signupButton.style.display = "block";
        break;
      case 1: // Sign Up User
        this.isClassVisible = true;
        this.isLoginVisible = false;
        this.isLoggedIn = false;
        loginButton.style.display = "block";
        signupButton.style.display = "block";
        break;
      case 2: // Sign In User
        this.isClassVisible = false;
        this.isLoginVisible = true;
        this.isLoggedIn = false;
        loginButton.style.display = "block";
        signupButton.style.display = "block";
        break;
      case 3: // User Signed In
        this.isClassVisible = false;
        this.isLoginVisible = false;
        this.isLoggedIn = true;
        loginButton.style.display = "none";
        signupButton.style.display = "none";
        break;
      default: // Issue with value, set to 0 and rerun
        this.viewStatus = 0;
        this.changeView(0);
    }
  }

}
