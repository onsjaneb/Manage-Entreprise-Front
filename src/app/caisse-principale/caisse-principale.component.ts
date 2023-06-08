import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CaisseModel, RecuModel, Validation } from '../model/Client.model';
import { ClientService } from '../services/client.service';
import { formatDate } from '@angular/common';
import Swal from 'sweetalert2';
import jwt_decode from 'jwt-decode';
@Component({
  selector: 'app-caisse-principale',
  templateUrl: './caisse-principale.component.html',
  styleUrls: ['./caisse-principale.component.scss'],
})
export class CaissePrincipaleComponent implements OnInit {
  Recu = new RecuModel();
  Caisse = new CaisseModel();
  livreur: any;
  response: any;
  Recus: any;
  nbrrecu: any;
  TotalRecuTod: any;
  TotalCommission: any;
  TotalRecuNet: any;
  TotalPartLivreur: any;
  TotalPartEntreprise: any;
  TotalRetour: any;
  TotalAvance: any;
  NbrLivreur: any;
  token: any;
  userData: any;
  Page: number = 1;
  TableSize: number = 5;
  Count: number = 0;
  Validation = new Validation();
  Validations: any;
  nbrValidation: any;
  constructor(
    private modalService: NgbModal,
    private clientservice: ClientService
  ) {}

  ngOnInit(): void {
    this.token = localStorage.getItem('isLoggedin');
    this.userData = jwt_decode(this.token);
    this.GetLivreur();
    this.GetRcus();
    this.GetStat();
    this.Recu.DateAjout = formatDate(new Date(), 'MMM d, y, h:mm:ss a', 'en');
    this.Caisse.DateAjout = formatDate(new Date(), 'MMM d, y, h:mm:ss a', 'en');
    this.Validation.DateAjout = formatDate(
      new Date(),
      'MMM d, y, h:mm:ss a',
      'en'
    );
    this.Recu.Avance = 0;
    this.Recu.Retour = 0;
    this.GetValidation();
  }
  GetRcus() {
    this.clientservice.GetRecu().subscribe((res) => {
      this.Recus = res;
      this.nbrrecu = this.Recus.length;
      this.GetStat();
    });
  }
  GetLivreur() {
    this.clientservice.GetLivreur().subscribe((res) => {
      this.livreur = res;
    });
  }
  GetPorcentage(l: any) {
    this.Recu.Livreur = l.NomComplet;
    this.Recu.PLivreur = l.Pourcentage;
    this.Recu.PEntreprise = 100 - Number(this.Recu.PLivreur);
  }
  Calul() {
    this.Recu.Partlivreur = (
      ((this.Recu.Totalrecu - this.Recu.Commission) * this.Recu.PLivreur) /
      100
    ).toFixed(2);
    this.Recu.PartEntreprise = (
      ((this.Recu.Totalrecu - this.Recu.Commission) * this.Recu.PEntreprise) /
      100
    ).toFixed(2);
    this.Recu.RecuNet = (
      Number(this.Recu.PartEntreprise) + Number(this.Recu.Commission)
    ).toFixed(2);
  }
  CaluclueAvance() {
    this.Recu.Partlivreur = (
      Number(this.Recu.Partlivreur) - Number(this.Recu.Avance)
    ).toFixed(2);
  }
  CreateRecu() {
    this.clientservice.AddRecu(this.Recu).subscribe((res) => {
      this.response = res;
      if (this.response.message == 'Recu added successfully') {
        Swal.fire({
          title: 'Recu ajouté',
          text: '',
          showConfirmButton: false,
          timer: 3000,
          icon: 'success',
        });
        this.GetRcus();
        this.Recu.Totalrecu = 0;
        this.Recu.Commission = 0;
        this.Recu.Livreur = '';
        this.Recu.PEntreprise = 0;
        this.Recu.PLivreur = 0;
        this.Recu.PartEntreprise = 0;
        this.Recu.Partlivreur = 0;
        this.Recu.RecuNet = 0;
        this.Recu.Avance = 0;
        this.Recu.Retour = 0;
      } else {
        Swal.fire({
          title: 'Quleque chose ne marche pas !',
          text: '',
          showConfirmButton: false,
          timer: 3000,
          icon: 'error',
        });
      }
    });
  }
  openXlModal(content: TemplateRef<any>) {
    this.modalService
      .open(content, { size: 'xl' })
      .result.then((result) => {})
      .catch((res) => {});
  }
  SupprimerRecu(id: any) {
    this.clientservice.DeleteRecu(id).subscribe((res) => {
      this.response = res;
      if (this.response == 'Recu deleted') {
        Swal.fire({
          title: 'Reçu supprimé',
          text: '',
          showConfirmButton: false,
          timer: 3000,
          icon: 'success',
        });
        this.GetRcus();
      } else {
        Swal.fire({
          title: 'Quleque chose ne marche pas !',
          text: '',
          showConfirmButton: false,
          timer: 3000,
          icon: 'error',
        });
      }
    });
  }
  GetStat() {
    this.clientservice.ToatlRecuTod().subscribe((res) => {
      this.TotalRecuTod = res;
      if (!this.TotalRecuTod[0].sum) {
        this.TotalRecuTod[0].sum = 0;
      }
      this.Caisse.Totalrecu = this.TotalRecuTod[0].sum;
    });
    this.clientservice.SumCommission().subscribe((res) => {
      this.TotalCommission = res;
      if (!this.TotalCommission[0].sum) {
        this.TotalCommission[0].sum = 0;
      }
      this.Caisse.Commission = this.TotalCommission[0].sum;
    });
    this.clientservice.SumPartEntreprise().subscribe((res) => {
      this.TotalPartEntreprise = res;
      if (!this.TotalPartEntreprise[0].sum) {
        this.TotalPartEntreprise[0].sum = 0;
      }
      this.Caisse.PartEntreprise = this.TotalPartEntreprise[0].sum;
    });
    this.clientservice.SumPartLivreur().subscribe((res) => {
      this.TotalPartLivreur = res;
      if (!this.TotalPartLivreur[0].sum) {
        this.TotalPartLivreur[0].sum = 0;
      }
      this.Caisse.Partlivreur = this.TotalPartLivreur[0].sum;
    });
    this.clientservice.SumRecuNet().subscribe((res) => {
      this.TotalRecuNet = res;
      if (!this.TotalRecuNet[0].sum) {
        this.TotalRecuNet[0].sum = 0;
      }
      this.Caisse.RecuNet = this.TotalRecuNet[0].sum;
    });
    this.clientservice.SumAvance().subscribe((res) => {
      this.TotalAvance = res;
      if (!this.TotalAvance[0].sum) {
        this.TotalAvance[0].sum = 0;
      }
      this.Caisse.Avance = this.TotalAvance[0].sum;
    });
    this.clientservice.SumRetour().subscribe((res) => {
      this.TotalRetour = res;
      if (!this.TotalRetour[0].sum) {
        this.TotalRetour[0].sum = 0;
      }
      this.Caisse.Retour = this.TotalRetour[0].sum;
    });
    this.clientservice.SumLivreur().subscribe((res) => {
      this.NbrLivreur = res;
      if (!this.NbrLivreur[0].count) {
        this.NbrLivreur[0].count = 0;
      }
      this.Caisse.NBRLivreur = this.NbrLivreur[0].count;
    });
  }
  OnTableDataChange(event: any) {
    this.Page = event;
    this.GetRcus();
  }
  ValidateCaisse() {
    this.clientservice.AddCaisse(this.Caisse).subscribe((res) => {
      this.response = res;
      if (this.response.message == 'Caisse added successfully') {
        Swal.fire({
          title: 'Caisse validée',
          text: '',
          showConfirmButton: false,
          timer: 3000,
          icon: 'success',
        });
        this.Validation.Validation = 'Caisse Validée';
        this.clientservice.AddValidation(this.Validation).subscribe((res) => {
          this.response = res;
          if (this.response.message == 'TempsV added successfully') {
            this.GetValidation();
          } else {
            Swal.fire({
              title: 'Quleque chose ne marche pas !',
              text: '',
              showConfirmButton: false,
              timer: 3000,
              icon: 'error',
            });
          }
        });
      } else {
        Swal.fire({
          title: 'Quleque chose ne marche pas !',
          text: '',
          showConfirmButton: false,
          timer: 3000,
          icon: 'error',
        });
      }
    });
  }
  GetValidation() {
    this.clientservice.GetValidation().subscribe((res) => {
      this.Validations = res;
      this.nbrValidation = this.Validations.length;
    });
  }
}
