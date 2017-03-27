import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-card',
  templateUrl: './text-card.component.html',
  styleUrls: ['./text-card.component.css']
})
export class TextCardComponent implements OnInit {

  header: string = "";
  shortText: string = "";
  
  cardPath: string = "";

  isButtonVisible = false;

  constructor() { }

  ngOnInit() {
  }

}
