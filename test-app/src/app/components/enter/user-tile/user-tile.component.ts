import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import {AngularFire, FirebaseObjectObservable, FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'app-user-tile',
  templateUrl: './user-tile.component.html',
  styleUrls: ['./user-tile.component.css']
})
export class UserTileComponent implements OnInit {
  user : FirebaseObjectObservable<any[]>; // User Object
  log : FirebaseListObservable<any[]>; // User Log 
  cards : FirebaseListObservable<any[]>; // User Cards
  db : AngularFire;

  @Input() username : string = "";
  @Output() clearView = new EventEmitter<number>();

  constructor(af : AngularFire) {
    this.db = af;
  }

  

  ngOnChanges(changes : any){
    if(this.username != "" || this.username != undefined){
      console.log("User-Tile Username Input: " + this.username);
      this.user = this.db.database.object(("/users/" + this.username),{preserveSnapshot: true});
      this.log = this.db.database.list(("/users/" + this.username + "/log"),{preserveSnapshot: true});
      this.cards = this.db.database.list(("/users/" + this.username + "/cards"),{preserveSnapshot: true});

      this.user.$ref.once('value').then(data=>{
        document.getElementById("welcome").textContent = "Welcome, " + data.val().name + "!";
      });
    }
  }


  logout(){
    this.username = "";
    this.clearView.emit(0);
  }

  settings(){}
  
  ngOnInit() {
  }

}
