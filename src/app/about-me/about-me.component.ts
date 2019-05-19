import {Component, OnInit} from '@angular/core';
import {JsonService} from '../json.service';
import {
  TransitionController,
  Transition,
  TransitionDirection
} from 'ng2-semantic-ui';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.less']
})
export class AboutMeComponent implements OnInit {
  public transitionController = new TransitionController();
  public profile: any = {};

  constructor(private jsonService: JsonService) {
    this.jsonService
      .getJSON('../../assets/data/profile.json')
      .subscribe(data => {
        this.profile = data;
      });
  }

  public animate(transitionName: string = 'fade down') {
    this.transitionController.animate(
      new Transition(transitionName, 900, TransitionDirection.In)
    );
  }

  public goToURL(url: string) {
    window.open(url, '_blank');
  }

  ngOnInit() {
    this.animate();
  }
}
