import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css'],
})
export class EntryComponent implements OnInit {

  isClassVisible:boolean =  true;
  isLoginVisible:boolean = true;
  userLoggedIn:boolean = false;

  public myname: string;
  @Input() viewStatus: number;
  @Output() viewChange = new EventEmitter();

  constructor() {}

  ngOnInit() {
  }

  ngOnChanges(changes){if(changes.value!=null){this.changeView}}

  changeView(view:number){
    if(this.viewStatus = view){this.viewStatus = 0;}else{this.viewStatus = view;}
    console.log(view);
    console.log(this.viewStatus);
    switch(this.viewStatus){
      case 0: // Default
        this.isClassVisible = true;
        this.isLoginVisible = true;
      case 1: // Sign Up User
        this.isClassVisible = false;
        this.isLoginVisible = true;
      case 2: // Sign In User
        this.isClassVisible = true;
        this.isLoginVisible = false;
      default: // Issue with value, set to 0 and rerun
        this.viewStatus = 0;
    }
  }

}
