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

  checkExists(path: string): boolean{
    let temp: boolean = false;
    console.log("User-Handler.checkExists(" + path + ")");
    let userQuery = this._angular.database.list(path,{preserveSnapshot: true});
    userQuery.subscribe(snapshot => {if(snapshot.length > 0){temp = !temp}});
    userQuery = null;
    return temp;
  }

  getUser(username: string){

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
