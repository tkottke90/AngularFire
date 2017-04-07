import { Component, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { UserHandlerService } from '../../services/user-handler/user-handler.service';
import { CardManagerService } from '../../services/card-manager/card-manager.service';
import { CardBase } from '../../components/cards/card-base.class';
import { CardDirective } from "./card-container.directive"

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.css']
})
export class CardContainerComponent {

  @ViewChild(CardDirective) cardHost: CardDirective;

  cards: CardBase[];
  currentAddIndex: number = -1;
  interval: any;

  constructor(private _cardManager: CardManagerService, private _componentFactory: ComponentFactoryResolver) { }

  login(){
    this.loadCards();
    this.getCards();
  }

  logout(){}

  getUserCards(){
    this.cards = this._cardManager.getComp();
  }

  loadCards(){
    this.currentAddIndex = (this.currentAddIndex + 1) % this.cards.length;
    let cardItem = this.cards[this.currentAddIndex];

    let compFactory = this._componentFactory.resolveComponentFactory(cardItem.component);

    let ViewContainerRef = this.cardHost.ViewContainerRef;
    ViewContainerRef.clear();

    let componentRef = ViewContainerRef.createComponent(compFactory);
    (<CardBase>componentRef.instance).data = cardItem.data;

  }

  getCards(){
    this.interval = setInterval(() => {
      this.loadCards();
    },3000)
  }


  addCard(){
    
  }

  removeCard(){
    
  }
}