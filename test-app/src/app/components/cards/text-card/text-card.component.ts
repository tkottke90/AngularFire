import { Component, OnInit, OnChanges , Input, Output, EventEmitter } from '@angular/core';
import { UserHandlerService } from '../../../services/user-handler/user-handler.service';


@Component({
  selector: 'app-text-card',
  templateUrl: './text-card.component.html',
  styleUrls: ['./text-card.component.css']
})
export class TextCardComponent implements OnInit {

  @Input() cardInfo: string;
  @Output() removeCard = new EventEmitter<string>();

  header: string = "";
  shortText: string = "";
  
  cardPath: string = "";

  isButtonVisible = false;
  isDeleteDisabled = false;

  constructor(private _userHandler: UserHandlerService) {
  
  }

  ngOnInit() {}

  ngOnChanges(){
    
  }

  remCard(){}

}
