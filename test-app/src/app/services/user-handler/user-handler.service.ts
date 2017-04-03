import { Injectable, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Injectable()
export class UserHandlerService {

  dbLogger: FirebaseListObservable<any[]>;

  user: FirebaseObjectObservable<any[]> = null;
  userLog: FirebaseListObservable<any[]> = null;
  userCards: FirebaseListObservable<any[]> = null;

  userEvents = {};

  userExists: boolean;
  correctLogin: boolean;
  userPath: string = "";

  constructor(private _angular : AngularFire) {
    console.log("UserHandlerService Constructed");
    this.dbLogger = this._angular.database.list('/log');

  }

  /**
   * Method checks if the user exists and returns information
   * to userExist Property of Service.  Method uses a custom Promise
   * to allow the user to use the '.then()' promise to wait till the
   * async call has finished to check.
   * @param user - username that is attempting to login
   */
  checkExists(user: string){
    let that = this;
    let uD: FirebaseObjectObservable<any[]> = this.getUser(user);
    return new Promise(function(resolve,reject){
      uD.$ref.once('value',function(userData){
        that.userExists = userData.exists();
        resolve(userData.exists());
      });
    });
  }
  
  /**
   * Method checks to make sure that the user's password matches the password in their account
   * @param username - user's username
   * @param password - user's password
   * @return Boolean to this.correctLogin
   */
  checkLogin(username: string, password: string){
    let that = this;
    let uD: FirebaseObjectObservable<any[]> = this.getUser(username);
    return new Promise(function(resolve,reject){
      uD.$ref.once('value').then((userData) => {
        that.correctLogin = (userData.val().password == password) ? true : false;
        resolve(that.correctLogin);
      });
    });
  }

  /**
   * Method gets a snapshot of the user from the Firebase Datbase and returns it
   * to be used in other methods.
   * @param username - Name of the user account to look information
   * @returns FirebaseObjectObservable that can be used to call a specific user
   * location in the database
   */
  getUser(username: string){
    return this._angular.database.object(('/users/' + username),{preserveSnapshot: true});
  }

  /**
   * Method designed to pull a reference/snapshot of the log and card locations from
   * within the user in the database
   * @param info - string used in swich statement to collect specific user locations
   */
  getUserInfo(info: string){
    switch(info){
      case "log":
        return this._angular.database.list((this.userPath + "/log"));
      case "cards":
        return this._angular.database.list((this.userPath + "/cards"));
    }
  }
  
  /**
   * Method designed to set the Service variables so that other components can access this
   * service and pull user data from the database without separate db calls in each component.
   * @param username - username/key of the user that will be the current active user.
   */
  setCurrentUser(username:string){
    let curTime = (new Date()).toString();
    
    this.userPath = '/users/' + username;
    this.user = this.getUser(username);
    this.userLog = this.getUserInfo("log");
    this.userCards = this.getUserInfo("cards");
    this.userEvents['login'] = curTime; 
  }

  /**
   * Method that pushes user events to users log in the database and
   * clears the user information from the service so that another user can login
   */
  clearUser(){
    this.userLog.push(this.userEvents).then(this.userLog = null);
    this.user = null;
    this.userCards = null;
    this.userPath = "";
  }

}
