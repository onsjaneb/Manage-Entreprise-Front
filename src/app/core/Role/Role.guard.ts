import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import jwt_decode from 'jwt-decode';
import Swal from 'sweetalert2';
import { Location } from '@angular/common';
import { ClientService } from 'src/app/services/client.service';

@Injectable({
  providedIn: 'root',
})
export class HasRoleGuard implements CanActivate {
  constructor(private loginservice: ClientService,private location: Location) {}
  token:any;
  userData:any;
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    this.token = localStorage.getItem('isLoggedin');
    this.userData=jwt_decode(this.token);
    const isAuthorized = route.data.role.includes(this.userData.Role);

    if (!isAuthorized) {
      Swal.fire({
        title: 'Vous n avez pas l accès à cette interface !!',
        width: 600,
        padding: '3em',
        showCancelButton: true,
        showConfirmButton: false,
        cancelButtonText: 'Retour',
        color: '#fd7e14',
        background: '#fff url(/images/trees.png)',
        backdrop: `
          rgba(0,0,123,0.4)
          url("assets/images/warning.webp")
          left top
          no-repeat
        `}).then((result) => {
          if (
            result.dismiss === Swal.DismissReason.cancel
          ) {
            this.location.back();
          }
        })
    }

    return isAuthorized || false;
  }
}


