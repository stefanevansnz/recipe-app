import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @Input() selectedHeading = 'recipes';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: //"",
      authDomain: "ng-recipe-book-3cb32.firebaseapp.com"
    });
  }

  onNavigate(heading: string) {
    //console.log('onNavigate = ' + heading);
    this.selectedHeading = heading;
  }

}
