import { Injectable } from '@angular/core';
import { CardBase } from '../../components/cards/card-base.class';
import { UserHandlerService } from '../../services/user-handler/user-handler.service';

import { TextCardComponent } from "../../components/cards/text-card/text-card.component"

@Injectable()
export class CardManagerService {

  constructor(private _userHandler: UserHandlerService) { }

  getComp() {
    return [
      new CardBase(TextCardComponent,{value1: "a value to pass"},"text","0")
    ]
  }

}
