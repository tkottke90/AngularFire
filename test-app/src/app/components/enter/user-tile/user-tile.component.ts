import { Component, OnInit, OnChanges, Output, EventEmitter } from '@angular/core';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';
import { UserHandlerService } from '../../../services/user-handler/user-handler.service';

@Component({
  selector: 'app-user-tile',
  templateUrl: './user-tile.component.html',
  styleUrls: ['./user-tile.component.css']
})
export class UserTileComponent implements OnInit {
  user : FirebaseObjectObservable<any[]>; // User Object
  log : FirebaseListObservable<any[]>; // User Log 
  cards : FirebaseListObservable<any[]>; // User Cards

  username : string = "";
  @Output() clearView = new EventEmitter<number>();

  constructor(private _af : AngularFire, private _userHandler: UserHandlerService) {
  }

  ngOnChanges(changes : any){
    console.log(changes);
/*    this._userHandler.user.$ref.once('value').then((data) => this.username = data.val().name)
    console.log("User-Tile Username Input: " + this.username);
    this._userHandler.user.$ref.once('value').then((data) => document.getElementById("welcome").textContent = ("Welcome, " + data.val().name + "!"));*/
  }


  logout(){
    this._userHandler.clearUser();
    this.clearView.emit(0);
  }

  settings(){}
  
  ngOnInit() {
  }

}
