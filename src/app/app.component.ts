import { AngularFirestoreModule } from '@angular/fire/firestore';
import { Component } from '@angular/core';

import { Observable } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appNew1';



  items: Observable<any[]>;
  constructor(db: AngularFirestoreModule) {

  }
}
