import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LivreurModel } from '../model/Client.model';
import { formatDate } from '@angular/common';
import { ClientService } from '../services/client.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-livreur',
  templateUrl: './livreur.component.html',
  styleUrls: ['./livreur.component.scss'],
})
export class LivreurComponent implements OnInit {
  Livreur = new LivreurModel();
  response: any;
  liv: any;
  nbrliv: any;
  constructor(
    private modalService: NgbModal,
    private clientservice: ClientService
  ) {}
  ngOnInit(): void {
    this.Livreur.DateAjout = formatDate( new Date(), 'MMM d, y, h:mm:ss a', 'en');
    this.GetLivreurs();
  }
  GetLivreurs() {
    this.clientservice.GetLivreur().subscribe((res) => {
      this.liv = res;
      this.nbrliv = this.liv.length;
    });
  }
  AddLivreur() {
    if (
      !this.Livreur.NomComplet ||
      !this.Livreur.Telephone ||
      !this.Livreur.AdressePostale ||
      !this.Livreur.Pourcentage ||
      !this.Livreur.DateAjout ||
      !this.Livreur.Type
    ) {
      Swal.fire({
        title: 'Les chapms signés par * sont obligatoires !',
        text: '',
        showConfirmButton: false,
        timer: 3000,
        icon: 'error',
      });
    } else {
      this.clientservice.AddLivreur(this.Livreur).subscribe((res) => {
        this.response = res;
        if (this.response.message == 'Livreur added successfully') {
          Swal.fire({
            title: 'Livreur ajouté',
            text: '',
            showConfirmButton: false,
            timer: 3000,
            icon: 'success',
          });
          this.GetLivreurs();
          this.Livreur.NomComplet = '';
          this.Livreur.Telephone = '';
          this.Livreur.AdressePostale = '';
          this.Livreur.Type = '';
          this.Livreur.Pourcentage = '';
          this.Livreur.DateAjout = '';
        } else {
          Swal.fire({
            title: 'Quleque chose ne marche pas !',
            text: 'Ressayer plus tard',
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
  DeleteLivreur(id:any){
    this.clientservice.DeleteLivreur(id).subscribe(res=>{
      this.GetLivreurs();
      Swal.fire({
        title: 'Livreur supprimé',
        text: '',
        showConfirmButton: false,
        timer: 3000,
        icon: 'success',
      });
    })
  }
  Updatelivreur(l: LivreurModel) {
    this.clientservice.UpdateLivreur(l.id, l).subscribe((res) => {
      this.response = res;
      if (this.response.message == 'Livreur updated succefully') {
        Swal.fire({
          title: 'Livreur modifié :)',
          text: '',
          showConfirmButton: false,
          timer: 3000,
          icon: 'success',
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
}
