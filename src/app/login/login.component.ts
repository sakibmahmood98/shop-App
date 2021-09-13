import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FirebaseError } from '@firebase/util';

import { getAuth, getRedirectResult, GoogleAuthProvider, signInWithPopup, signInWithRedirect, UserCredential  } from "firebase/auth";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private afAuth: AngularFireAuth) { }

  ngOnInit(): void {
  }

  // login() {
  //   const provider = new GoogleAuthProvider();
  //   const auth = getAuth();
  //   signInWithRedirect(auth, provider);
  //   getRedirectResult(auth)
  //   .then((result: any) => {
  //     // This gives you a Google Access Token. You can use it to access Google APIs.
  //     const credential = GoogleAuthProvider.credentialFromResult(result);
  //     const token = credential!.accessToken;
  
  //     // The signed-in user info.
  //     const user = result.user;
  //     console.log(user);
  //   });
  // }
  login() {
    const provider = new GoogleAuthProvider();
    //const auth = getAuth();
    this.afAuth.signInWithRedirect(provider);
    //signInWithRedirect(auth,provider);
  }
}


