import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth, signOut } from "firebase/auth";
import * as firebase from 'firebase/app'
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.scss']
})
export class BsNavbarComponent implements OnInit {
  user$: Observable<any>;

  constructor(private afAuth: AngularFireAuth) {
    this.user$ = afAuth.authState;
   // afAuth.authState.subscribe(user => this.user = user );
   }

  ngOnInit(): void {
  }

  logout(){
    const auth = getAuth();
    this.afAuth.signOut().then(() => {
      // Sign-out successful.
      console.log("1");
    }).catch((error) => {
      // An error happened.
    });

  }

}
