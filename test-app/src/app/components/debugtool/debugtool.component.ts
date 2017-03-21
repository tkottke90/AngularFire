import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-debugtool',
  templateUrl: './debugtool.component.html',
  styleUrls: ['./debugtool.component.css']
})
export class DebugtoolComponent implements OnInit {
  
  logList: FirebaseListObservable<any[]>;
  userList: FirebaseListObservable<any[]>;

  constructor(af: AngularFire) {
    this.logList = af.database.list('/log');
    this.userList = af.database.list('/items');
  }

  ngOnInit() {
  }

  deleteDBLog(){
    this.logList.remove();
  }

  deleteDBUsers(){
    this.userList.remove();
  }
}
