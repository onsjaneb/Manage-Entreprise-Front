import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'nobleui-angular';

  ngOnInit(): void {}
  // @HostListener("document:contextmenu", ["$event"])
  // onContextMenu(event: Event) {
  //     event.preventDefault();
  // }

  // @HostListener("document:keydown.ctrl+shift+i", ["$event"])
  // onDevTools(event: Event) {
  //     event.preventDefault();
  // }

}
