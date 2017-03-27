import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { Add } from './components/add/add.component';
import { List } from './components/list/list.component';
import { HeaderComponent } from './components/header/header.component';
import { EntryComponent } from './components/entry/entry.component';
import { AppEnterComponent } from './components/enter/app-enter.component';
import { DebugtoolComponent } from './components/debugtool/debugtool.component';
import { UserTileComponent } from './components/enter/user-tile/user-tile.component';
import { CardContainerComponent } from './components/card-container/card-container.component';

@NgModule({
  declarations: [
    AppComponent,
    Add,
    List,
    HeaderComponent,
    EntryComponent,
    AppEnterComponent,
    DebugtoolComponent,
    UserTileComponent,
    CardContainerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAx57heQSfOPNg9FsQSemxYEAHPZylhNJs",
      authDomain: "my-test-project-5984d.firebaseapp.com",
      databaseURL: "https://my-test-project-5984d.firebaseio.com",
      storageBucket: "my-test-project-5984d.appspot.com",
      messagingSenderId: "764507748270"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
