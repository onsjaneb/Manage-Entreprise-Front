import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-caisse-principale',
  templateUrl: './caisse-principale.component.html',
  styleUrls: ['./caisse-principale.component.scss'],
})
export class CaissePrincipaleComponent implements OnInit {
  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  openXlModal(content: TemplateRef<any>) {
    this.modalService
      .open(content, { size: 'xl' })
      .result.then((result) => {})
      .catch((res) => {});
  }
}
