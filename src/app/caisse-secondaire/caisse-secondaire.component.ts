import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-caisse-secondaire',
  templateUrl: './caisse-secondaire.component.html',
  styleUrls: ['./caisse-secondaire.component.scss'],
})
export class CaisseSecondaireComponent implements OnInit {
  caisse: any;
  Page: number = 1;
  TableSize: number = 5;
  Count: number = 0;
  constructor(private clientservice: ClientService) {}
  ngOnInit(): void {
    this.GetCaisse();
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
