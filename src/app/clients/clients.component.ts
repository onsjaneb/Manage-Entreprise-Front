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
  constructor(
    private clientservice: ClientService,
    private modalService: NgbModal
  ) {}
  ngOnInit(): void {
    this.GetClients();
  }
  GetClients() {
    this.clientservice.GetClients().subscribe((res) => {
      this.client = res;
      this.nbrclient = this.client.length;
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
