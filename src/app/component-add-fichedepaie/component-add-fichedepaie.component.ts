import { Component, OnInit, TemplateRef } from '@angular/core';
import { ClientService } from '../services/client.service';
import Swal from 'sweetalert2';
import { FichePaie } from '../model/Client.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { formatDate } from '@angular/common';

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
  response:any;
  constructor(
    private clientservice: ClientService,
    private modalService: NgbModal
  ) {}
  ngOnInit(): void {
    this.GetLivreur();
    this.fichepaie.datefiche = formatDate(
      new Date(),
      'MMM d, y, h:mm:ss a',
      'en'
    );
    this.fichepaie.retour = 0;
    this.fichepaie.abonnementorange = 0;
    this.fichepaie.cautionsac = 0;
    this.fichepaie.livraisongratuite = 0;
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
        this.fichepaie.montantbrut = (this.parlivreurt[0].sum).toFixed(2);
        this.fichepaie.montantnet = (this.parlivreurt[0].sum).toFixed(2);
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
          this.fichepaie.livraison=this.Livraison;
          this.fichepaie.livreur = this.livreur;
        });
      this.GetStat();
    }
  }
  Retour() {
    this.fichepaie.montantnet = (
      this.fichepaie.montantnet - this.fichepaie.retour
    ).toFixed(2);
  }
  Abonnement() {
    this.fichepaie.montantnet = (
      this.fichepaie.montantnet - this.fichepaie.abonnementorange
    ).toFixed(2);
  }
  Caution() {
    this.fichepaie.montantnet = (
      this.fichepaie.montantnet - this.fichepaie.cautionsac
    ).toFixed(2);
  }
  LivraisonGratuit() {
    this.fichepaie.montantnet = (
      this.fichepaie.montantnet - this.fichepaie.livraisongratuite
    ).toFixed(2);
  }
  openXlModal(content: TemplateRef<any>) {
    this.modalService
      .open(content, { size: 'xl' })
      .result.then((result) => {})
      .catch((res) => {});
  }
  Ajouterfiche(){
    this.clientservice.Ajoutfiche(this.fichepaie).subscribe(res=>{
      this.response =res;
      if(this.response.message=="Fiche added successfully"){
        Swal.fire({
          title: 'Fiche paie ajouté :)',
          text: '',
          showConfirmButton: false,
          timer: 3000,
          icon: 'success',
        });
      }
      else{
        Swal.fire({
          title: 'Quelque chose ne marche pas',
          text: '',
          showConfirmButton: false,
          timer: 3000,
          icon: 'error',
        });
      }
    })
  }
}
