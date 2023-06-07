import { Component, OnInit, ViewChild, ElementRef, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import jwt_decode from 'jwt-decode';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  token:any;
  userData:any;
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('isLoggedin');
    this.userData=jwt_decode(this.token);
  }
  toggleSidebar(e: Event) {
    e.preventDefault();
    this.document.body.classList.toggle('sidebar-open');
  }
  onLogout(e: Event) {
    e.preventDefault();
    localStorage.removeItem('isLoggedin');

    if (!localStorage.getItem('isLoggedin')) {
      this.router.navigate(['/auth/login']);
    }
    Swal.fire({
      position: 'top-end',
      title: 'Vous êtes Déconnecté',
      text: '',
      showConfirmButton: false,
      timer: 3000,
      icon: 'success',
    });
  }
}


