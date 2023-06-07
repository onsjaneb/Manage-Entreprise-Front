import { Component, OnInit } from '@angular/core';
import { ClientModel } from '../model/Client.model';
import Swal from 'sweetalert2';
import { ClientService } from '../services/client.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addclient',
  templateUrl: './addclient.component.html',
  styleUrls: ['./addclient.component.scss'],
})
export class AddclientComponent implements OnInit {
  appel: any;
  response: any;
  client = new ClientModel();
  constructor(private clientservice: ClientService, private router: Router) {}
  ngOnInit() {
    this.client.Appele = 'Non';
    this.client.NombreCommande = 0;
    this.client.NombreRetour = 0;
  }
  SetDateAppel(event: any) {
    this.client.Appele = event.target.value;
  }
  AddClient() {
    if (
      !this.client.NomComplet ||
      !this.client.NomAgentTel ||
      !this.client.AdressePostale ||
      !this.client.Sexe ||
      !this.client.TypeClient ||
      !this.client.caractere ||
      !this.client.Appele
    ) {
      Swal.fire({
        title: 'Les chapms signés par * sont obligatoires !',
        text: '',
        showConfirmButton: false,
        timer: 3000,
        icon: 'error',
      });
    } else if (
      !this.client.Telephone ||
      !(this.client.NombreCommande >= 0) ||
      !(this.client.NombreRetour >= 0)
    ) {
      Swal.fire({
        title: 'Les chapms signés par * sont obligatoires !',
        text: '',
        showConfirmButton: false,
        timer: 3000,
        icon: 'error',
      });
    } else {
      this.clientservice.AddClient(this.client).subscribe((res) => {
        this.response = res;
        if (this.response.message == 'Client already exist !') {
          Swal.fire({
            title: 'Client dejà exist !',
            text: '',
            showConfirmButton: false,
            timer: 3000,
            icon: 'error',
          });
        } else if (this.response.message == 'Client added successfully') {
          Swal.fire({
            title: 'Client ajouté :)',
            text: '',
            showConfirmButton: false,
            timer: 3000,
            icon: 'success',
          });
          this.router.navigate(['/Clients']);
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
  Annuler() {
    Swal.fire({
      title: 'Annulation !',
      text: '',
      showConfirmButton: false,
      timer: 3000,
      icon: 'error',
    });
    this.router.navigate(['/Clients']);
  }
}
