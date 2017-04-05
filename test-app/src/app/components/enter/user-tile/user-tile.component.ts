import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';
import { UserHandlerService } from '../../../services/user-handler/user-handler.service';

@Component({
  selector: 'app-user-tile',
  templateUrl: './user-tile.component.html',
  styleUrls: ['./user-tile.component.css']
})
export class UserTileComponent implements OnInit {

  @Output() clearView = new EventEmitter<number>();

  constructor(private _af : AngularFire, private _userHandler: UserHandlerService) {}

  login(){
    this._userHandler.user.$ref.once('value').then(data => document.getElementById("welcome").textContent = ("Welcome, " + data.val().name + "!"));
  }

  logout(){
    this._userHandler.clearUser();
    this.clearView.emit(0);
  }

  settings(){}
  
  ngOnInit() {
  }

}
