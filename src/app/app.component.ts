import { Component, LOCALE_ID, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'resume';
  languageList = [
    { code: 'en', label: 'English' },
    { code: 'fr', label: 'Français' }];

  constructor(@Inject(LOCALE_ID) protected localeId: string) { }

}
