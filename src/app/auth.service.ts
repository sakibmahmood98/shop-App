import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<any> ; 
  constructor(private afAuth: AngularFireAuth, private route: ActivatedRoute) {
    this.user$ = afAuth.authState;
   }
  login() {
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);

    const provider = new GoogleAuthProvider();
    this.afAuth.signInWithRedirect(provider);
  }

  logout(){

    const auth = getAuth();
    this.afAuth.signOut().then(() => {
      console.log("logout successfull");
    }).catch((error) => {
      // An error happened.
    });
  }
}



