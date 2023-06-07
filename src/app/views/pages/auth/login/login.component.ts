import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import jwt_decode from 'jwt-decode';
import { ClientService } from 'src/app/services/client.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup | any;
  submitted: false | any;
  data: any;
  token: any;
  returnUrl: any;
  response: any;
  userData: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private loginservice: ClientService
  ) {}
  ngOnInit(): void {
    this.loginForm();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  loginForm() {
    this.form = this.formBuilder.group({
      Utilisateur: ['', [Validators.required]],
      Login: ['', [Validators.required]],
    });
  }
  get f() {
    return this.form.controls;
  }
  Login() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.loginservice.LoginAuth(this.form.value).subscribe((res) => {
      this.response = res;
      if (this.response.message == 'Vous êtes connecté') {
        Swal.fire({
          position: 'top-end',
          title: 'Vous êtes connecté',
          text: '',
          showConfirmButton: false,
          timer: 3000,
          icon: 'success',
        });
        this.token = this.response.Token;
        localStorage.setItem('isLoggedin', this.token);
        if (localStorage.getItem('isLoggedin')) {
          this.userData=jwt_decode(this.token);
          if (this.userData.Role=='Administrateur'){
            this.router.navigate(['/']);
          }
          else if (this.userData.Role=='Gérant'){
            this.router.navigate(['/Caisse_Secondaire']);
          }
          else if (this.userData.Role=='Assistant'){
            this.router.navigate(['/Clients']);
          }
          else{}
        }
      } else if (
        this.response.message == 'Vérifier Login !'
      ) {
        Swal.fire({
          position: 'top-end',
          title: 'Vérifier Login !',
          text: '',
          showConfirmButton: false,
          timer: 3000,
          icon: 'error',
        });
      } else if (this.response.message == 'Vérifier Mot de Passe !') {
        Swal.fire({
          position: 'top-end',
          title: 'Vérifier Mot de Passe !',
          text: '',
          showConfirmButton: false,
          timer: 3000,
          icon: 'error',
        });
      } else {
        Swal.fire({
          position: 'top-end',
          title: 'Quelque chose ne va pas !',
          text: '',
          showConfirmButton: false,
          timer: 3000,
          icon: 'error',
        });
        window.location.reload();
      }
    });
  }
}
