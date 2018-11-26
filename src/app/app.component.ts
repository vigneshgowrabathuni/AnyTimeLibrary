import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyA4iJl7GQCWAYbwFMH-50MTimR8gcR70ro',
      authDomain: 'anytimelibrary-73775.firebaseapp.com',
    });
  }
}
