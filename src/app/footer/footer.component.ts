import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {

  constructor(private router: Router) { }

  get selectedPage() {
    return this.router.url.replace('/', '');
  }

  ngOnInit() {
  }

}
