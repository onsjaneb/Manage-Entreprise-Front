import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ClientService } from '../services/client.service';
import { formatDate } from '@angular/common';
import { Depenses } from '../model/Client.model';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-caissefinale',
  templateUrl: './caissefinale.component.html',
  styleUrls: ['./caissefinale.component.scss'],
})
export class CaissefinaleComponent implements OnInit {
  caisse: any;
  stats: any;
  stats1: any;
  stats2: any;
  stats3: any;
  stats4: any;
  stats5: any;
  stats6: any;
  Page: number = 1;
  TableSize: number = 5;
  Count: number = 0;
  depense = new Depenses();
  repdep: any;
  constructor(
    private clientservice: ClientService,
    private modalService: NgbModal
  ) {}
  ngOnInit(): void {
    this.GetCaisse();
    this.GetStats();
    this.depense.Date = formatDate(new Date(), 'MMM d, y, h:mm:ss a', 'en');
  }
  GetStats() {
    this.clientservice.Getstats().subscribe((res) => {
      this.stats = res;
      if (!this.stats[0].sum) {
        this.stats[0].sum = 0;
      }
    });
    this.clientservice.Getstats1().subscribe((res) => {
      this.stats1 = res;
      if (!this.stats1[0].sum) {
        this.stats1[0].sum = 0;
      }
    });
    this.clientservice.Getstats2().subscribe((res) => {
      this.stats2 = res;
      if (!this.stats2[0].sum) {
        this.stats2[0].sum = 0;
      }
    });
    this.clientservice.Getstats3().subscribe((res) => {
      this.stats3 = res;
      if (!this.stats3[0].sum) {
        this.stats3[0].sum = 0;
      }
    });
    this.clientservice.Getstats4().subscribe((res) => {
      this.stats4 = res;
      if (!this.stats4[0].sum) {
        this.stats4[0].sum = 0;
      }
    });
    this.clientservice.Getstats5().subscribe((res) => {
      this.stats5 = res;
      if (!this.stats5[0].sum) {
        this.stats5[0].sum = 0;
      }
    });
    this.clientservice.Getstats6().subscribe((res) => {
      this.stats6 = res;
      if (!this.stats6[0].sum) {
        this.stats6[0].sum = 0;
      }
    });
  }
  GetCaisse() {
    this.clientservice.GetCaisse().subscribe((res) => {
      this.caisse = res;
    });
  }
  OnTableDataChange(event: any) {
    this.Page = event;
    this.GetCaisse();
  }
  openXlModal(content: TemplateRef<any>) {
    this.modalService
      .open(content, { size: 'xl' })
      .result.then((result) => {})
      .catch((res) => {});
  }
  AjouterDepense() {
    this.clientservice.AddCaisseFinaleDepense(this.depense).subscribe((res) => {
      this.repdep = res;
      if (this.repdep.message == 'Depense added successfully') {
        Swal.fire({
          title: 'Dépense ajouté :)',
          text: '',
          showConfirmButton: false,
          timer: 3000,
          icon: 'success',
        });
      } else {
        Swal.fire({
          title: 'Quelque chose ne marche pas',
          text: '',
          showConfirmButton: false,
          timer: 3000,
          icon: 'error',
        });
      }
    });
  }
}
