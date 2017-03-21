import {Component} from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'list-name',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class List {
  items: FirebaseListObservable<any[]>;
  constructor(af: AngularFire) {
    this.items = af.database.list('/users');
  }
  delete(item){
    this.items.remove(item);
  }
}