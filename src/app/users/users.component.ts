import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UsersModel } from '../model/Client.model';
import { ClientService } from '../services/client.service';
import { formatDate } from '@angular/common';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  user = new UsersModel();
  users: any;
  response: any;
  nbru: any;
  Page: number = 1;
  TableSize: number = 5;
  Count: number = 0;
  constructor(
    private modalService: NgbModal,
    private clientservice: ClientService
  ) {}
  ngOnInit(): void {
    this.GetUsers();
    this.user.DateAjout = formatDate(new Date(), 'MMM d, y, h:mm:ss a', 'en');
  }
  GetUsers() {
    this.clientservice.getUsersData().subscribe((res) => {
      this.users = res;
      this.nbru = this.users.length;
    });
  }
  AddUsre() {
    if (
      !this.user.NomUser ||
      !this.user.PrenomUser ||
      !this.user.Login ||
      !this.user.Utilisateur ||
      !this.user.Email ||
      !this.user.Telephone ||
      !this.user.Role ||
      !this.user.DateAjout
    ) {
      Swal.fire({
        title: 'Les chapms signés par * sont obligatoires !',
        text: '',
        showConfirmButton: false,
        timer: 3000,
        icon: 'error',
      });
    } else {
      this.clientservice.addUser(this.user).subscribe((res) => {
        this.response = res;
        if (this.response.message == 'Login already exist !') {
          Swal.fire({
            title: 'Mot de passe déja exist !',
            text: '',
            showConfirmButton: false,
            timer: 3000,
            icon: 'error',
          });
        } else if (this.response.message == 'User added successfully') {
          this.GetUsers();
          Swal.fire({
            title: 'Personnel ajouté',
            text: '',
            showConfirmButton: false,
            timer: 3000,
            icon: 'success',
          });
          this.user.NomUser = '';
          this.user.PrenomUser = '';
          this.user.Login = '';
          this.user.Utilisateur = '';
          this.user.Telephone = '';
          this.user.Email = '';
          this.user.Role = '';
          this.user.DateAjout = '';
        } else {
          Swal.fire({
            title: 'Quelque chose ne marche pas !',
            text: '',
            showConfirmButton: false,
            timer: 3000,
            icon: 'error',
          });
        }
      });
    }
  }
  openXlModal(content: TemplateRef<any>) {
    this.modalService
      .open(content, { size: 'xl' })
      .result.then((result) => {})
      .catch((res) => {});
  }
  deleteUser(id: any) {
    this.clientservice.deleteUser(id).subscribe((res) => {
      Swal.fire({
        title: 'Personnel supprimé !',
        text: '',
        showConfirmButton: false,
        timer: 3000,
        icon: 'success',
      });
      this.GetUsers();
    });
  }
  OnTableDataChange(event: any) {
    this.Page = event;
    this.GetUsers();
  }
}
