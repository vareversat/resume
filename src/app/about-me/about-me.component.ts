import {Component, OnInit} from '@angular/core';
import {JsonService} from '../json.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.less']
})
export class AboutMeComponent implements OnInit {
  public profile: any;

  constructor(private jsonService: JsonService) {
    this.jsonService
      .getJSON('../../assets/data/profile.json')
      .subscribe(data => {
        this.profile = data;
      });
  }

  public goToURL(url: string) {
    window.open(url, '_blank');
  }

  ngOnInit() {}
}
