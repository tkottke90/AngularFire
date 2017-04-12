import { Component, OnInit, ViewChild } from '@angular/core';
import { CardManagerService } from 'app/services/card-manager/card-manager.service';
import { CardContainerComponent } from './components/card-container/card-container.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app works!';

  @ViewChild(CardContainerComponent) private cardManager: CardContainerComponent;

  login(event: any){
    console.log("AppComponent: Event Login");
    this.cardManager.getUserCards()
    this.cardManager.login();
  }
}
