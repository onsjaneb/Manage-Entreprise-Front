import { Component, OnInit, TemplateRef } from '@angular/core';
import { ClientService } from '../services/client.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ClientModel } from '../model/Client.model';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
})
export class ClientsComponent implements OnInit {
  client: any;
  response: any;
  nbrclient: any;
  Page: number = 1;
  TableSize: number = 5;
  Count: number = 0;
  filter: any;
  nbrfidele: any;
  nbrmoyen: any;
  nbrnouveau: any;
  nbrgentil: any;
  nbrmechant: any;
  nbrnormal: any;
  Nomclient: any;
  TelClient: any;
  constructor(
    private clientservice: ClientService,
    private modalService: NgbModal
  ) {}
  ngOnInit(): void {
    this.GetClients();
  }
  CheckTelex() {
    if (!this.TelClient) {
    } else {
      this.clientservice.CheckTelExistance(this.TelClient).subscribe((res) => {
        this.client = res;
      });
    }
  }
  CheckNameex() {
    this.clientservice.CheckNameExistance(this.Nomclient).subscribe((res) => {
      this.client = res;
    });
  }
  GetClients() {
    this.clientservice.GetClients().subscribe((res) => {
      this.client = res;
      this.nbrclient = this.client.length;
    });
  }
  Getfidele() {
    this.clientservice.GetClientFidele().subscribe((res) => {
      this.client = res;
      this.nbrfidele = this.client.length;
    });
  }
  GetMoyen() {
    this.clientservice.GetClientMoyen().subscribe((res) => {
      this.client = res;
      this.nbrmoyen = this.client.length;
    });
  }
  GetNouveau() {
    this.clientservice.GetClientNouveau().subscribe((res) => {
      this.client = res;
      this.nbrnouveau = this.client.length;
    });
  }
  GetGentil() {
    this.clientservice.GetClientGentil().subscribe((res) => {
      this.client = res;
      this.nbrgentil = this.client.length;
    });
  }
  GetMechant() {
    this.clientservice.ClientMechant().subscribe((res) => {
      this.client = res;
      this.nbrmechant = this.client.length;
    });
  }
  GetNormal() {
    this.clientservice.ClientNormal().subscribe((res) => {
      this.client = res;
      this.nbrnormal = this.client.length;
    });
  }
  SetDateAppel(event: any, c: ClientModel) {
    c.Appele = event.target.value;
  }
  openXlModal(content: TemplateRef<any>) {
    this.modalService
      .open(content, { size: 'xl' })
      .result.then((result) => {})
      .catch((res) => {});
  }
  UpdateClien(c: ClientModel) {
    this.clientservice.UpdateClient(c.id, c).subscribe((res) => {
      this.response = res;
      if (this.response.message == 'Client updated succefully') {
        Swal.fire({
          title: 'Client modifié :)',
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
  DeleteClient(id: any) {
    this.clientservice.DeleteClient(id).subscribe((res) => {
      this.GetClients();
      Swal.fire({
        title: 'Client supprimé :)',
        text: '',
        showConfirmButton: false,
        timer: 3000,
        icon: 'success',
      });
    });
  }
  OnTableDataChange(event: any) {
    this.Page = event;
    this.GetClients();
  }
}
