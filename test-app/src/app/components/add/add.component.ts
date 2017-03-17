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
  items: FirebaseListObservable<any[]>;
  temp: AngularFire;


  constructor(af: AngularFire) {
    this.items = af.database.list('/items'); 
    this.temp = af;
  }
  add(item: string, un: string, pw: string){
      let taken:boolean = false;
      let curTime = (new Date()).toString();
      let userPath:string = "/items/"+un;

/*      var testQuery = this.temp.database.object("items",{preserveSnapshot: true});
      testQuery.$ref.once("value").then(snapshot => {console.log("User Exists: " + snapshot.child(un).exists())});*/
      
      if(item !== "" && un !== "" && pw !== ""){
        var userQuery = this.temp.database.object(userPath,{preserveSnapshot: true});
        
        
        userQuery.subscribe(data => {
          console.log(data.key);
          console.log(data.val());
          if(data.val() == null){
            console.log("User does not exsist");
            let user = this.temp.database.object('/items/' + un);
            user.set({  
              dateCreate: curTime,
              dateLastMod: curTime,
              name: item,
              username: un,
              password: pw
            }).then(_ => {
              console.log("New User:" + un);
              window.location.reload();
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
}