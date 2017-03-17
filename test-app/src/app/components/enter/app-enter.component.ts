import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-enter',
  templateUrl: './app-enter.component.html',
  styleUrls: ['./app-enter.component.css']
})


export class AppEnterComponent implements OnInit {
  @Output() clearView = new EventEmitter<number>();
  dbRef: AngularFire;

  constructor(af: AngularFire) {
    this.dbRef = af;
  }

  login(un: string, pw: string){
    console.log("Clicked Login");
    
    let userpath:string = '/items/' + un;

    if(un !== "" && pw !== ""){
      let user = this.dbRef.database.object(userpath,{preserveSnapshot:true});
    
      // If Successful:
      this.clearView.emit(0);
    }
  }

  

  ngOnInit() {
  }

}
