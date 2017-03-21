import {
    Component,
    Input,
    trigger,
    state,
    style,
    transition,
    animate,
    Output,
    EventEmitter } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
 
@Component({
  selector: 'list-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

export class Add {
  progLog: FirebaseListObservable<any[]>;
  items: FirebaseListObservable<any[]>;
  temp: AngularFire;

  @Output() clearView = new EventEmitter<number>();
  
  constructor(af: AngularFire) {
    this.items = af.database.list('/users'); 
    this.progLog = af.database.list('/log');
    this.temp = af;
  }
  add(item: string, un: string, pw: string){
      let taken:boolean = false;
      let curTime = (new Date()).toString();
      let userPath:string = "/users/"+un;

      var testQuery = this.temp.database.list("/users",{
        preserveSnapshot: true,
        query: {
          orderByChild: "name",
          equalTo: item.toLocaleUpperCase()
        }  
      });
      testQuery.$ref.once("value").then(snapshots => {
        snapshots.forEach(element => {
          let itemUpper:string = item.toUpperCase();
          let elemUpper = element.val().name.toUpperCase();
          if(itemUpper == elemUpper){console.log("Match Found")}
          console.log(item.toUpperCase());          
          console.log(element.key);
          console.log(element.val().name);
        });

      });
      
      if(item !== "" && un !== "" && pw !== ""){
        var userQuery = this.temp.database.object(userPath,{preserveSnapshot: true});
        userQuery.$ref.once('value').then(data => {
          console.log(data.key);
          if(data.val() == null){
            console.log("User does not exsist");
            let user = this.temp.database.object('/users/' + un);
            user.set({  
              dateLastMod: curTime,
              name: item.toUpperCase(),
              username: un,
              password: pw,
              accountStatus: 'enabled',
              cards: {
                0: {
                  type: 'text_card'
                }
              },
              log: {}
            }).then(_ => {
              let log = this.temp.database.list('/users/' + un + '/log');
              log.push({
                event: "User Created",
                timestamp: curTime
              }).then(_ => {
                console.log("New User:" + un);
                this.clearView.emit(0);
              });
              this.progLog.push({
                event: "User Created",
                timestamp: curTime,
                username: un
              });
            });  
          } else {
            console.log("User exsist");
            let txtUN = document.getElementById("username");
            txtUN.style.border = "1px solid red";
            let msgUN = document.getElementById("usertaken");
            msgUN.className = "notification show";
          }
        });
    }else{
      let txtName = document.getElementById("name");
      let txtUser = document.getElementById("username");
      let txtPass = document.getElementById("password");
      
      if(item == ""){txtName.style.border = "1px solid red";}else{txtName.style.border = "1px solid black";}
      if(un == ""){txtUser.style.border = "1px solid red";}else{txtUser.style.border = "1px solid black";}
      if(pw == ""){txtPass.style.border = "1px solid red";}else{txtPass.style.border = "1px solid black";}
  
    }
  }

  /*
    Method to check db if user already exists prior to allowing
    them to create a new account.  This will also check to see if the 
    users name already exists in the database

    ** Future **
    Recover UN/PW?

  */
  checkUser(username: string, name: string):number{
    let log = {
      event: "checkUser",
      name: name,
      username: username
    };
    let status = {};
    let result:number;
    let userPath = '/users/' + username;
    
    // Check Username Taken
    let txtUN = document.getElementById("username");
    var userQuery = this.temp.database.object('/users',{preserveSnapshot: true});
    userQuery.$ref.once("value").then(snapshot => {
      if(snapshot.child(username).exists()){
        result = 1;
        txtUN.style.border = "1px solid red";
      }else{
        result = 0;
        txtUN.style.border = "1px solid black";
      }
      status['usernameTaken'] = snapshot.child(username).exists();
    });

    // Check Name for Existing User
    
    var testQuery = this.temp.database.list("/users",{
        preserveSnapshot: true,
        query: {
          orderByChild: "name",
          equalTo: name.toLocaleUpperCase()
        }  
      });
      testQuery.$ref.once("value").then(snapshots => {
        snapshots.forEach(element => {
          let itemUpper:string = name.toUpperCase();
          let elemUpper = element.val().name.toUpperCase();
          if(itemUpper == elemUpper){
            // Name found in DB
          }else{
            // Name not found in DB
          }
        });
      });        


    this.progLog.push(log);
    return 0;
  }
}