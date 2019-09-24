import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.less']
})
export class MenuBarComponent implements OnInit {

  constructor(private router: Router) { }

  get selectedPage() {
    return this.router.url.replace('/', '');
  }

  ngOnInit() {
  }

}