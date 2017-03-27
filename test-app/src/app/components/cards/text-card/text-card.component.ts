import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


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

  constructor() {

  }

  ngOnInit() {
  }

  remCard(){
    
  }

}
