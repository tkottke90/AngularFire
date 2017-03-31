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

  getUser(username: string){
    return this._angular.database.object(('/users/' + username),{preserveSnapshot: true});
  }

  getUserInfo(info: string){
    switch(info){
      case "log":
        return this._angular.database.list((this.userPath + "/log"));
      case "cards":
        return this._angular.database.list((this.userPath + "/cards"));
    }
  }
  
  setCurrentUser(username:string){
    this.userPath = '/users/' + username;
    this.user = this.getUser(username);
    this.userLog = this.getUserInfo("log");
    this.userCards = this.getUserInfo("cards");
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
