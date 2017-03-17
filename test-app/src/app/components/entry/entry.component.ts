import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css'],
})
export class EntryComponent implements OnInit {

  isClassVisible:boolean =  true;
  isLoginVisible:boolean = true;
  userLoggedIn:boolean = false;
 
  viewStatus: number;
  public myname: string;

  constructor() {}

  ngOnInit() {
  }

  clearView(view: number){
    this.changeView(view);
    console.log("EntryComponent.clearView:" + view);
  }

  changeView(view:number){
    if(this.viewStatus == view){this.viewStatus = 0;}else{this.viewStatus = view;}
    switch(this.viewStatus){
      case 0: // Default
        this.isClassVisible = true;
        this.isLoginVisible = true;
        break;
      case 1: // Sign Up User
        this.isClassVisible = false;
        this.isLoginVisible = true;
        break;
      case 2: // Sign In User
        this.isClassVisible = true;
        this.isLoginVisible = false;
        break;
      default: // Issue with value, set to 0 and rerun

        this.viewStatus = 0;
    }
  }

}
