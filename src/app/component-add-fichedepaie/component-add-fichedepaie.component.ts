import { Component, OnInit, TemplateRef } from '@angular/core';
import { ClientService } from '../services/client.service';
import Swal from 'sweetalert2';
import { FichePaie } from '../model/Client.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
  Livraison: any = [];
  fichepaie = new FichePaie();
  constructor(
    private clientservice: ClientService,
    private modalService: NgbModal
  ) {}
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
        this.fichepaie.MontantBrut = this.parlivreurt[0].sum;
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
          for (var i = 0; i < this.recus.length; i++) {
            this.Livraison.push({
              Date: this.recus[i].DateCompta,
              PartLivreur: this.recus[i].Partlivreur,
              Avance: this.recus[i].Avance,
            });
          }
        });
      this.GetStat();
    }
  }
  openXlModal(content: TemplateRef<any>) {
    this.modalService
      .open(content, { size: 'xl' })
      .result.then((result) => {})
      .catch((res) => {});
  }
}
