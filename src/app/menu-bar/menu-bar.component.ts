import { Component, OnInit } from '@angular/core';
import { IPopup } from 'ng2-semantic-ui';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.less']
})
export class MenuBarComponent implements OnInit {

  selectedPage: string;
  constructor() { }

  setPage(page: string) {
    this.selectedPage = page;
  }

  ngOnInit() {
  }

}
