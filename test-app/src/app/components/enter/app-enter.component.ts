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
  log: FirebaseListObservable<any[]>;

  constructor(af: AngularFire) {
    this.dbRef = af;
    this.log = af.database.list('/log');
  }

  login(un: string, pw: string){    
    let userpath:string = '/items/' + un;
    let curTime = (new Date()).toString();

    if(un !== "" && pw !== ""){
      let user = this.dbRef.database.object(userpath,{preserveSnapshot:true});

      user.$ref.once('value').then(data => {
        if(data.val() != null){
          if(data.val().username == un){
            if(data.val().password == pw){
              console.log("Successful Login");
              
              this.clearView.emit(0);
              // Show User Logged In Component
            }else{
              console.log("Incorrect Password");
              let userLog = this.dbRef.database.list((userpath + "/log"),{preserveSnapshot: true}).push({
                event: "Unsuccessful Login",
                timestamp:  curTime,
                attemptedPassword: pw
              });
            }
          }else{console.log("Incorrect Username");}
        }
      });

    }else{console.log("Login Fields Empty");}
  }

  

  ngOnInit() {
  }

}
