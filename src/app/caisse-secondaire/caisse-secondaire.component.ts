import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-caisse-secondaire',
  templateUrl: './caisse-secondaire.component.html',
  styleUrls: ['./caisse-secondaire.component.scss'],
})
export class CaisseSecondaireComponent implements OnInit {
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
  constructor(private clientservice: ClientService) {}
  ngOnInit(): void {
    this.GetCaisse();
    this.GetStats();
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
}
