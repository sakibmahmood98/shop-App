import { state } from '@angular/animations';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{

  constructor(private auth: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):any {
    return this.auth.user$.pipe(map( (user: any)  => {
      if(user) return true;
        
      this.router.navigate(['/login'], {queryParams: {redirectUrl: state.url}});
      return false;
    }));
  }
}
