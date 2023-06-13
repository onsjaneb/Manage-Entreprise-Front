import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-component-add-fichedepaie',
  templateUrl: './component-add-fichedepaie.component.html',
  styleUrls: ['./component-add-fichedepaie.component.scss'],
})
export class ComponentAddFichedepaieComponent implements OnInit {
  livreurs: any;
  datedebut: any;
  datefin: any;
  livreur: any;
  recus: any;
  nbrrecu: any;
  avancet: any;
  parlivreurt: any;
  constructor(private clientservice: ClientService) {}

  ngOnInit(): void {
    this.GetLivreur();
  }

  GetStat() {
    this.clientservice
      .AvanceFiche(this.livreur, this.datedebut, this.datefin)
      .subscribe((res) => {
        this.avancet = res;
      });
    this.clientservice
      .PartLivreurFiche(this.livreur, this.datedebut, this.datefin)
      .subscribe((res) => {
        this.parlivreurt = res;
      });
  }

  GetLivreur() {
    this.clientservice.GetLivreur().subscribe((res) => {
      this.livreurs = res;
    });
  }

  SelectLivreur(l: any) {
    this.livreur = l;
  }

  Recherche() {
    if (this.datedebut > this.datefin) {
      Swal.fire({
        title: 'Vérifier les dates entrés !',
        text: '',
        showConfirmButton: false,
        timer: 3000,
        icon: 'error',
      });
    } else {
      this.clientservice
        .RecuFiche(this.livreur, this.datedebut, this.datefin)
        .subscribe((res) => {
          this.recus = res;
          this.nbrrecu = this.recus.length;
        });
      this.GetStat();
    }
  }
}
