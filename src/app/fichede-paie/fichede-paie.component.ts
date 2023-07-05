import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-fichede-paie',
  templateUrl: './fichede-paie.component.html',
  styleUrls: ['./fichede-paie.component.scss'],
})
export class FichedePaieComponent implements OnInit {
  livreurs: any;
  datedebut: any;
  datefin: any;
  livreur: any;
  result: any;
  nbrfiche:any;
  constructor(
    private clientservice: ClientService,
    private modalService: NgbModal
  ) {}
  ngOnInit(): void {
    this.GetLivreur();
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
    this.clientservice
      .Fichepaie(this.livreur, this.datedebut, this.datefin)
      .subscribe((res) => {
        this.result = res;
        this.nbrfiche=this.result.length;
      });
  }
}
