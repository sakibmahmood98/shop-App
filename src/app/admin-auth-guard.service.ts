import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Injectable, ɵisBoundToModule__POST_R3__ } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate {

  constructor(private auth: AuthService, private userService: UserService) { }

  canActivate() : Observable<boolean> {
    const boo = this.auth.user$
    .pipe(switchMap(user  => {
          return this.userService.get(user.uid).valueChanges();
       }));
       return boo.pipe(map((appUser:any) => appUser?.isAdmin));
  }
}


