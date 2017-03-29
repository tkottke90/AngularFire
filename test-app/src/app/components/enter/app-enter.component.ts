import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { UserHandlerService } from '../../services/user-handler/user-handler.service';

@Component({
  selector: 'app-enter',
  templateUrl: './app-enter.component.html',
  styleUrls: ['./app-enter.component.css']
})


export class AppEnterComponent implements OnInit {
  @Output() clearView = new EventEmitter<number>();
  @Output() getUser = new EventEmitter<number>();

  dbRef: AngularFire;
  log: FirebaseListObservable<any[]>;

  isErrorVisible:boolean = false;

  constructor(af: AngularFire) {
    this.dbRef = af;
    this.log = af.database.list('/log');
  }

  login(un: string, pw: string){    
    let userpath:string = '/users/' + un;
    let curTime = (new Date()).toString();
    this.isErrorVisible = false;

    if(un !== "" && pw !== ""){
      let user = this.dbRef.database.object(userpath,{preserveSnapshot:true});

      user.$ref.once('value').then(data => {
        if(data.val() != null){
            if(data.val().password == pw){
              // console.log("Successful Login");
              let userLog = this.dbRef.database.list((userpath + "/log"),{preserveSnapshot: true}).push({
                event: "User Login",
                timestamp:  curTime,
              });
              this.getUser.emit(data.key);
              this.clearView.emit(3);
              this.clearInputs();
              
            }else{
              console.log("Incorrect Password");
              let userLog = this.dbRef.database.list((userpath + "/log"),{preserveSnapshot: true}).push({
                event: "Unsuccessful Login",
                timestamp:  curTime,
                attemptedPassword: pw
              });
              this.isErrorVisible = true;
              this.errorInputs();
            }
          }else{console.log("Incorrect Username"); this.isErrorVisible = true;}
      });

    }else{console.log("Login Fields Empty");this.isErrorVisible = true;}
  }

  resetInputs(){
    let inputs = document.getElementsByTagName('input');
    for(let i = 0; i < inputs.length; i++){
      inputs[i].style.border = "1px solid black"
    }
  }

  errorInputs(){
    let inputs = document.getElementsByTagName('input');
    for(let i = 0; i < inputs.length; i++){
      inputs[i].style.border = "1px solid red"
    }
  }

  clearInputs(){
    let inputs = document.getElementsByTagName('input');
    for(let i = 0; i < inputs.length; i++){
      inputs[i].value = "";
      inputs[i].style.border = "1px solid black"
    }
  }

  ngOnInit() {
  }

}
