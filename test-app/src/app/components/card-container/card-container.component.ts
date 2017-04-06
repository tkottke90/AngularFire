import { Component } from '@angular/core';
import { UserHandlerService } from '../../services/user-handler/user-handler.service';
import { TextCardComponent } from "../../components/cards/text-card/text-card.component"


@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.css']
})
export class CardContainerComponent {

  test = {}; // object that contains card references

  constructor(private _userHandler: UserHandlerService) { }

  login(){}

  logout(){}

  getUserCards(){
    let that = this;
    this._userHandler.userCards.$ref.once('value',(data) => {
      data.forEach(function(card) {
        
        
        return false;
      });
    });
  }

  addCard(){
    
  }

  removeCard(){
    
  }
}

class cardBase {
  protected type:string = "";
  protected key:string = "";
  protected _domRef;

  constructor(cardType:string, cardKey:string){
    this.type = cardType;
    this.key = cardKey;
  }

  get domRef(){
    return this._domRef;
  }

  set domRef(cardInput){
    this._domRef = cardInput;
  }
}

class cardText extends cardBase {
  header: string = "";
  text: string = "";
  description: string = "";

  constructor(type: string, key: string){
    super(name,key);
    //this.domRef = new TextCardComponent();
  }
}