import { Component, OnInit, OnChanges , Input, Output, EventEmitter } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { UserHandlerService } from '../../../services/user-handler/user-handler.service';


@Component({
  selector: 'app-text-card',
  templateUrl: './text-card.component.html',
  styleUrls: ['./text-card.component.css']
})
export class TextCardComponent {

  @Output() removeCard = new EventEmitter<string>();

  header: string = "Header";
  shortText: string = "";
  
  cardPath: string = "";

  isButtonVisible = false;
  isDeleteDisabled = false;

  constructor(private _angular: AngularFire, private _userHandler: UserHandlerService) {}

  TextCardConstructor(){
    let that = this;
    let cData = this._userHandler;
    
    new Promise(function(resolve,reject){
      
    });
  }

  ngOnChanges(){}

  remCard(){

  }

}
