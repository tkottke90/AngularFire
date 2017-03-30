import { Injectable, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Injectable()
export class UserHandlerService {

  user: FirebaseObjectObservable<any[]> = null;
  userLog: FirebaseListObservable<any[]> = null;
  userCards: FirebaseListObservable<any[]> = null;

  userPath: string = "";

  constructor(private _angular : AngularFire) {
    console.log("UserHandlerService Constructed");
  }

  checkExists(path: string): any{
    let temp: boolean = null;
    let userQuery = this._angular.database.object(path,{preserveSnapshot: true});
    userQuery.$ref.once('value', function(data){
        console.log("User Exists:" + data.exists());
        temp = data.exists();
        return Promise.all([
          data.key,
          data.val()
        ]);
      }).then(function(userData){
        console.log("Temp Post Query: " + temp);
        return temp;
      });
  }

  getUser(username: string): FirebaseObjectObservable<any[]>{
    return this._angular.database.object(('/user/' + username),{preserveSnapshot: true});
  }

  setCurrentUser(username:string){
    this.userPath = '/users/' + username;
    console.log(this.checkExists(this.userPath));
  }

  clearUser(){
    this.user = null;
    this.userLog = null;
    this.userCards = null;
    this.userPath = "";
  }

  checkLogin(username: string, password: string): boolean{


    return false;
  }
}
