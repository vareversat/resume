import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'resume';
  selectedPage: string;

  setPage(page: string) {
    this.selectedPage = page;
  }

}
