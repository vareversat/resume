import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.less']
})
export class MenuBarComponent implements OnInit {

  selectedPage = 'about-me';
  constructor() { }

  setPage(page: string) {
    this.selectedPage = page;
  }

  ngOnInit() {
  }

}
