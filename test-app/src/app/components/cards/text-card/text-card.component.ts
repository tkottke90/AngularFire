import { Component, OnInit, OnChanges , Input, Output, EventEmitter } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { UserHandlerService } from '../../../services/user-handler/user-handler.service';


@Component({
  selector: 'app-text-card',
  templateUrl: './text-card.component.html',
  styleUrls: ['./text-card.component.css']
})
export class TextCardComponent {

  @Input() cardInfo: FirebaseObjectObservable<any[]>;
  @Output() removeCard = new EventEmitter<string>();

  cData: FirebaseObjectObservable<any[]>;

  header: string = "Header";
  shortText: string = "";

  isButtonVisible = false;
  isDeleteDisabled = false;

  constructor(private _angular: AngularFire, private _userHandler: UserHandlerService) {}

  TextCardConstructor(){
    let that = this;
    this.cData = this.cardInfo;
    new Promise(function(resolve,reject){
      that.cData.$ref.once('value').then((data) => {
        that.header = data.val().header;
        that.shortText = data.val().description;
      });
    });
  }

  ngOnChanges(){}

  updateCard(){}

  remCard(){

  }

}
